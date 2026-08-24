import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { PlanetId } from '../types';

interface Planet3DProps {
  planetId: PlanetId;
  autoRotate?: boolean;
  className?: string;
  showControls?: boolean;
  onTextureLoaded?: () => void;
}

// Procedurally generates rich, high-resolution procedural textures for planets
function generatePlanetTexture(planetId: PlanetId): { map: THREE.CanvasTexture; bump?: THREE.CanvasTexture; ringMap?: THREE.CanvasTexture } {
  const width = 2048;
  const height = 1024;
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d')!;

  const bumpCanvas = document.createElement('canvas');
  bumpCanvas.width = width;
  bumpCanvas.height = height;
  const bumpCtx = bumpCanvas.getContext('2d')!;

  // Noise generator helper
  function noise(x: number, y: number) {
    const s = Math.sin(x * 12.9898 + y * 78.233) * 43758.5453;
    return s - Math.floor(s);
  }

  function smoothNoise(x: number, y: number, scale: number) {
    const nx = x * scale;
    const ny = y * scale;
    const i = Math.floor(nx);
    const j = Math.floor(ny);
    const fx = nx - i;
    const fy = ny - j;
    // Bilinear interpolation
    const a = noise(i, j);
    const b = noise(i + 1, j);
    const c = noise(i, j + 1);
    const d = noise(i + 1, j + 1);
    const ux = fx * fx * (3.0 - 2.0 * fx);
    const uy = fy * fy * (3.0 - 2.0 * fy);
    return a * (1 - ux) * (1 - uy) + b * ux * (1 - uy) + c * (1 - ux) * uy + d * ux * uy;
  }

  function fbm(x: number, y: number, octaves = 5) {
    let val = 0;
    let amp = 0.5;
    let freq = 1.0;
    for (let o = 0; o < octaves; o++) {
      val += smoothNoise(x, y, freq) * amp;
      amp *= 0.5;
      freq *= 2.0;
    }
    return val;
  }

  if (planetId === 'mars') {
    // Mars: Ochre, rust, dark basalt plains, polar ice caps, canyon fissures
    const imgData = ctx.createImageData(width, height);
    const bumpData = bumpCtx.createImageData(width, height);
    
    for (let y = 0; y < height; y++) {
      const lat = (y / height) * Math.PI - Math.PI / 2;
      const isPolar = Math.abs(lat) > 1.35;
      
      for (let x = 0; x < width; x++) {
        const u = x / width;
        const v = y / height;
        const n1 = fbm(u * 12, v * 12, 6);
        const n2 = fbm(u * 28, v * 28, 4);
        const combined = n1 * 0.7 + n2 * 0.3;

        let r = 180 + combined * 60;
        let g = 65 + combined * 45;
        let b = 30 + combined * 25;

        // Dark volcanic plains (Acidalia Planitia, Syrtis Major)
        if (combined < 0.42) {
          r *= 0.65;
          g *= 0.6;
          b *= 0.55;
        }

        // Canyons & crater rims
        if (combined > 0.68) {
          r = Math.min(240, r * 1.25);
          g = Math.min(140, g * 1.3);
        }

        // Polar ice caps
        if (isPolar) {
          const capStrength = (Math.abs(lat) - 1.35) / 0.22;
          const iceNoise = fbm(u * 30, v * 30, 3);
          if (iceNoise + capStrength > 0.5) {
            r = 230 + iceNoise * 25;
            g = 235 + iceNoise * 20;
            b = 245 + iceNoise * 10;
          }
        }

        const idx = (y * width + x) * 4;
        imgData.data[idx] = r;
        imgData.data[idx + 1] = g;
        imgData.data[idx + 2] = b;
        imgData.data[idx + 3] = 255;

        const bumpVal = Math.floor(combined * 255);
        bumpData.data[idx] = bumpVal;
        bumpData.data[idx + 1] = bumpVal;
        bumpData.data[idx + 2] = bumpVal;
        bumpData.data[idx + 3] = 255;
      }
    }
    ctx.putImageData(imgData, 0, 0);
    bumpCtx.putImageData(bumpData, 0, 0);

  } else if (planetId === 'jupiter') {
    // Jupiter: Gaseous swirling bands, Great Red Spot, turbulent eddy streaks
    const imgData = ctx.createImageData(width, height);
    for (let y = 0; y < height; y++) {
      const v = y / height;
      const bandFreq = 24.0;
      const baseBand = Math.sin(v * Math.PI * bandFreq);

      for (let x = 0; x < width; x++) {
        const u = x / width;
        const turbulence = fbm(u * 18 + v * 3, v * 12, 5);
        const swirl = Math.sin(v * 28 + turbulence * 4.5);

        // Palette blending (caramel, cream, ochre, brick-red)
        const t = (baseBand + swirl * 0.6 + turbulence * 0.8 + 2.0) / 4.0;
        let r = 210 * (1 - t) + 245 * t;
        let g = 140 * (1 - t) + 215 * t;
        let b = 80 * (1 - t) + 160 * t;

        // Great Red Spot around (u=0.55, v=0.68)
        const dx = (u - 0.58) * 4.5;
        const dy = (v - 0.68) * 9.0;
        const distSq = dx * dx + dy * dy;
        if (distSq < 0.16) {
          const spotStrength = 1.0 - Math.sqrt(distSq) / 0.4;
          r = r * (1 - spotStrength) + 225 * spotStrength;
          g = g * (1 - spotStrength) + 75 * spotStrength;
          b = b * (1 - spotStrength) + 40 * spotStrength;
        }

        const idx = (y * width + x) * 4;
        imgData.data[idx] = r;
        imgData.data[idx + 1] = g;
        imgData.data[idx + 2] = b;
        imgData.data[idx + 3] = 255;
      }
    }
    ctx.putImageData(imgData, 0, 0);

  } else if (planetId === 'moon') {
    // Moon: Monochrome basalt Maria and cratered highlands
    const imgData = ctx.createImageData(width, height);
    const bumpData = bumpCtx.createImageData(width, height);
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const u = x / width;
        const v = y / height;
        const n1 = fbm(u * 8, v * 8, 6);
        const n2 = fbm(u * 32, v * 32, 4);
        let shade = n1 * 0.65 + n2 * 0.35;

        // Maria (dark smooth plains)
        if (shade < 0.45) {
          shade *= 0.65;
        } else {
          shade = Math.min(1.0, shade * 1.2);
        }

        const c = Math.floor(shade * 230 + 20);
        const idx = (y * width + x) * 4;
        imgData.data[idx] = c;
        imgData.data[idx + 1] = c;
        imgData.data[idx + 2] = Math.min(255, c + 8);
        imgData.data[idx + 3] = 255;

        bumpData.data[idx] = c;
        bumpData.data[idx + 1] = c;
        bumpData.data[idx + 2] = c;
        bumpData.data[idx + 3] = 255;
      }
    }
    ctx.putImageData(imgData, 0, 0);
    bumpCtx.putImageData(bumpData, 0, 0);

  } else if (planetId === 'europa') {
    // Europa: Smooth icy cyan/white with reddish-brown fractures (lineae)
    const imgData = ctx.createImageData(width, height);
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const u = x / width;
        const v = y / height;
        const base = fbm(u * 14, v * 14, 5);
        const lines = Math.abs(Math.sin(u * 40 + fbm(u * 20, v * 20, 3) * 6)) * 
                      Math.abs(Math.cos(v * 30 + fbm(u * 10, v * 30, 3) * 5));

        let r = 210 + base * 35;
        let g = 230 + base * 25;
        let b = 250 + base * 5;

        if (lines < 0.15) {
          // Reddish brown lineae crack
          const factor = (0.15 - lines) / 0.15;
          r = r * (1 - factor) + 160 * factor;
          g = g * (1 - factor) + 90 * factor;
          b = b * (1 - factor) + 60 * factor;
        }

        const idx = (y * width + x) * 4;
        imgData.data[idx] = r;
        imgData.data[idx + 1] = g;
        imgData.data[idx + 2] = b;
        imgData.data[idx + 3] = 255;
      }
    }
    ctx.putImageData(imgData, 0, 0);

  } else if (planetId === 'saturn') {
    // Saturn: Butterscotch creamy subtle bands
    const imgData = ctx.createImageData(width, height);
    for (let y = 0; y < height; y++) {
      const v = y / height;
      const band = Math.sin(v * Math.PI * 18);
      for (let x = 0; x < width; x++) {
        const u = x / width;
        const turb = fbm(u * 10, v * 10, 4) * 0.2;
        const val = (band + turb + 1.0) / 2.0;

        const r = 225 + val * 25;
        const g = 195 + val * 35;
        const b = 145 + val * 40;

        const idx = (y * width + x) * 4;
        imgData.data[idx] = r;
        imgData.data[idx + 1] = g;
        imgData.data[idx + 2] = b;
        imgData.data[idx + 3] = 255;
      }
    }
    ctx.putImageData(imgData, 0, 0);

    // Ring texture for Saturn
    const ringCanvas = document.createElement('canvas');
    ringCanvas.width = 1024;
    ringCanvas.height = 64;
    const ringCtx = ringCanvas.getContext('2d')!;
    const ringImg = ringCtx.createImageData(1024, 64);
    for (let x = 0; x < 1024; x++) {
      const p = x / 1024;
      // Cassini division around 0.65 - 0.72
      let alpha = Math.sin(p * Math.PI) * 0.85;
      if (p > 0.62 && p < 0.70) {
        alpha *= 0.05; // Gap
      } else if (p < 0.2) {
        alpha *= p / 0.2;
      }
      for (let y = 0; y < 64; y++) {
        const idx = (y * 1024 + x) * 4;
        ringImg.data[idx] = 220;
        ringImg.data[idx + 1] = 195;
        ringImg.data[idx + 2] = 155;
        ringImg.data[idx + 3] = Math.floor(alpha * 255);
      }
    }
    ringCtx.putImageData(ringImg, 0, 0);

    const map = new THREE.CanvasTexture(canvas);
    const ringMap = new THREE.CanvasTexture(ringCanvas);
    return { map, ringMap };

  } else {
    // Earth / Default: Blue oceans, green/brown continents, cloud swirl
    const imgData = ctx.createImageData(width, height);
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const u = x / width;
        const v = y / height;
        const continent = fbm(u * 6, v * 6, 6);
        let r = 15, g = 50, b = 130; // Deep ocean
        if (continent > 0.52) {
          // Land
          r = 55 + (continent - 0.52) * 140;
          g = 95 + (continent - 0.52) * 120;
          b = 45 + (continent - 0.52) * 40;
        }
        const idx = (y * width + x) * 4;
        imgData.data[idx] = r;
        imgData.data[idx + 1] = g;
        imgData.data[idx + 2] = b;
        imgData.data[idx + 3] = 255;
      }
    }
    ctx.putImageData(imgData, 0, 0);
  }

  const map = new THREE.CanvasTexture(canvas);
  map.wrapS = THREE.RepeatWrapping;
  map.wrapT = THREE.ClampToEdgeWrapping;
  
  let bump: THREE.CanvasTexture | undefined;
  if (planetId === 'mars' || planetId === 'moon') {
    bump = new THREE.CanvasTexture(bumpCanvas);
    bump.wrapS = THREE.RepeatWrapping;
  }

  return { map, bump };
}

export const Planet3D: React.FC<Planet3DProps> = ({
  planetId,
  autoRotate = true,
  className = '',
  showControls = true,
  onTextureLoaded
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const planetMeshRef = useRef<THREE.Mesh | null>(null);
  const cloudsMeshRef = useRef<THREE.Mesh | null>(null);
  const ringMeshRef = useRef<THREE.Mesh | null>(null);
  const atmosphereRef = useRef<THREE.Mesh | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const isDraggingRef = useRef<boolean>(false);
  const previousMousePositionRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const rotationVelocityRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  const [isRotating, setIsRotating] = useState<boolean>(autoRotate);
  const [wireframe, setWireframe] = useState<boolean>(false);
  const [thermalMode, setThermalMode] = useState<boolean>(false);
  const [speedMultiplier, setSpeedMultiplier] = useState<number>(1);

  // Initialize Three.js Scene
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth || 600;
    const height = container.clientHeight || 600;

    // Scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera
    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 1000);
    camera.position.set(0, 0, 4.8);
    cameraRef.current = camera;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    rendererRef.current = renderer;

    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // Deep Space Distant Stars
    const starCount = 300;
    const starGeo = new THREE.BufferGeometry();
    const starPositions = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount * 3; i += 3) {
      starPositions[i] = (Math.random() - 0.5) * 80;
      starPositions[i + 1] = (Math.random() - 0.5) * 80;
      starPositions[i + 2] = -20 - Math.random() * 40;
    }
    starGeo.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    const starMat = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.15,
      transparent: true,
      opacity: 0.5,
      blending: THREE.AdditiveBlending
    });
    const starField = new THREE.Points(starGeo, starMat);
    scene.add(starField);

    // Cinematic Directional Light (matching screenshot: strong key light illuminating the crescent side)
    const keyLight = new THREE.DirectionalLight(0xffffff, 2.8);
    keyLight.position.set(-6, 2.5, 4);
    scene.add(keyLight);

    // Subtle rim backlight for atmospheric edge depth
    const rimLight = new THREE.DirectionalLight(0x406080, 0.35);
    rimLight.position.set(5, -2, -3);
    scene.add(rimLight);

    // Very soft ambient light so shadow side retains subtle deep space texture
    const ambientLight = new THREE.AmbientLight(0x0c0d14, 0.25);
    scene.add(ambientLight);

    // Build Planet Mesh
    buildPlanet(planetId, scene);

    if (onTextureLoaded) onTextureLoaded();

    // Animation Loop
    const animate = () => {
      animationFrameRef.current = requestAnimationFrame(animate);

      if (planetMeshRef.current) {
        if (!isDraggingRef.current && isRotating) {
          planetMeshRef.current.rotation.y += 0.003 * speedMultiplier;
        }

        // Apply inertial drag velocity
        if (!isDraggingRef.current) {
          planetMeshRef.current.rotation.y += rotationVelocityRef.current.x;
          planetMeshRef.current.rotation.x += rotationVelocityRef.current.y;
          rotationVelocityRef.current.x *= 0.95;
          rotationVelocityRef.current.y *= 0.95;
        }

        // Rotate clouds slightly faster if present
        if (cloudsMeshRef.current) {
          cloudsMeshRef.current.rotation.y += 0.0045 * speedMultiplier;
        }

        // Rotate rings along with saturn
        if (ringMeshRef.current) {
          ringMeshRef.current.rotation.z += 0.001 * speedMultiplier;
        }
      }

      renderer.render(scene, camera);
    };

    animate();

    // Resize Observer for fluid responsiveness
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width: newWidth, height: newHeight } = entry.contentRect;
        if (newWidth > 0 && newHeight > 0 && cameraRef.current && rendererRef.current) {
          cameraRef.current.aspect = newWidth / newHeight;
          cameraRef.current.updateProjectionMatrix();
          rendererRef.current.setSize(newWidth, newHeight);
        }
      }
    });
    resizeObserver.observe(container);

    return () => {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
      resizeObserver.disconnect();
      if (rendererRef.current && rendererRef.current.domElement) {
        rendererRef.current.dispose();
      }
    };
  }, [planetId]);

  // Update Wireframe & Thermal Mode dynamically
  useEffect(() => {
    if (planetMeshRef.current) {
      const mat = planetMeshRef.current.material as THREE.MeshStandardMaterial;
      mat.wireframe = wireframe;
      if (thermalMode) {
        mat.color.setHex(0x00ffff);
        mat.emissive.setHex(0xff0055);
        mat.emissiveIntensity = 0.35;
      } else {
        mat.color.setHex(0xffffff);
        mat.emissive.setHex(0x000000);
        mat.emissiveIntensity = 0.0;
      }
      mat.needsUpdate = true;
    }
  }, [wireframe, thermalMode]);

  // Helper to build planet geometry, textures, atmospheres, and rings
  function buildPlanet(id: PlanetId, scene: THREE.Scene) {
    // Remove existing meshes
    if (planetMeshRef.current) scene.remove(planetMeshRef.current);
    if (cloudsMeshRef.current) scene.remove(cloudsMeshRef.current);
    if (ringMeshRef.current) scene.remove(ringMeshRef.current);
    if (atmosphereRef.current) scene.remove(atmosphereRef.current);

    const { map, bump, ringMap } = generatePlanetTexture(id);
    const radius = 1.75;
    const geometry = new THREE.SphereGeometry(radius, 64, 64);

    const material = new THREE.MeshStandardMaterial({
      map: map,
      bumpMap: bump,
      bumpScale: bump ? 0.045 : 0,
      roughness: id === 'europa' ? 0.25 : 0.85,
      metalness: id === 'europa' ? 0.15 : 0.05,
    });

    const planetMesh = new THREE.Mesh(geometry, material);
    
    // Realistic axial tilts
    if (id === 'mars') {
      planetMesh.rotation.z = 0.44; // 25.2 degrees
      planetMesh.rotation.y = 0.8;
    } else if (id === 'saturn') {
      planetMesh.rotation.z = 0.47; // 26.7 degrees
    } else if (id === 'jupiter') {
      planetMesh.rotation.z = 0.05; // 3 degrees
    } else {
      planetMesh.rotation.z = 0.35;
    }

    scene.add(planetMesh);
    planetMeshRef.current = planetMesh;

    // Atmospheric Fresnel Glow
    const glowColors: Record<PlanetId, number> = {
      mars: 0xff6622,
      jupiter: 0xf59e0b,
      moon: 0x94a3b8,
      europa: 0x38bdf8,
      saturn: 0xeab308,
      earth: 0x38bdf8
    };

    const atmoGeo = new THREE.SphereGeometry(radius * 1.025, 64, 64);
    const atmoMat = new THREE.ShaderMaterial({
      vertexShader: `
        varying vec3 vNormal;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec3 vNormal;
        uniform vec3 glowColor;
        void main() {
          float intensity = pow(0.68 - dot(vNormal, vec3(0, 0, 1.0)), 2.6);
          gl_FragColor = vec4(glowColor, 1.0) * intensity * 0.8;
        }
      `,
      uniforms: {
        glowColor: { value: new THREE.Color(glowColors[id]) }
      },
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide,
      transparent: true
    });
    const atmoMesh = new THREE.Mesh(atmoGeo, atmoMat);
    scene.add(atmoMesh);
    atmosphereRef.current = atmoMesh;

    // Saturn Ring System
    if (id === 'saturn' && ringMap) {
      const ringGeo = new THREE.RingGeometry(2.3, 4.4, 80);
      // Align ring horizontally
      const pos = ringGeo.attributes.position;
      const v3 = new THREE.Vector3();
      for (let i = 0; i < pos.count; i++) {
        v3.fromBufferAttribute(pos, i);
        ringGeo.attributes.uv.setXY(i, (v3.length() - 2.3) / (4.4 - 2.3), 0.5);
      }
      
      const ringMat = new THREE.MeshStandardMaterial({
        map: ringMap,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.9,
        roughness: 0.6
      });
      const ringMesh = new THREE.Mesh(ringGeo, ringMat);
      ringMesh.rotation.x = Math.PI / 2;
      planetMesh.add(ringMesh);
      ringMeshRef.current = ringMesh;
    }
  }

  // Mouse / Touch Interaction Handlers
  const handleMouseDown = (e: React.MouseEvent | React.TouchEvent) => {
    isDraggingRef.current = true;
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    previousMousePositionRef.current = { x: clientX, y: clientY };
  };

  const handleMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDraggingRef.current || !planetMeshRef.current) return;
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

    const deltaX = clientX - previousMousePositionRef.current.x;
    const deltaY = clientY - previousMousePositionRef.current.y;

    const rotSpeed = 0.005;
    planetMeshRef.current.rotation.y += deltaX * rotSpeed;
    planetMeshRef.current.rotation.x += deltaY * rotSpeed;

    rotationVelocityRef.current = {
      x: deltaX * rotSpeed * 0.3,
      y: deltaY * rotSpeed * 0.3
    };

    previousMousePositionRef.current = { x: clientX, y: clientY };
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
  };

  return (
    <div className={`relative w-full h-full select-none ${className}`}>
      {/* 3D Canvas Viewport */}
      <div
        ref={containerRef}
        className="w-full h-full cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleMouseDown}
        onTouchMove={handleMouseMove}
        onTouchEnd={handleMouseUp}
        title="Click and drag to rotate 3D planetary sphere"
      />

      {/* Floating 3D HUD Controls */}
      {showControls && (
        <div className="absolute bottom-4 right-4 flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 text-xs text-gray-300 z-20">
          <button
            onClick={() => setIsRotating(!isRotating)}
            className={`px-2 py-1 rounded transition flex items-center gap-1 ${
              isRotating ? 'text-orange-400 bg-orange-500/10' : 'text-gray-400 hover:text-white'
            }`}
            title="Toggle Continuous Planetary Spin"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse"></span>
            {isRotating ? 'SPIN ON' : 'SPIN OFF'}
          </button>

          <span className="text-gray-600">|</span>

          <button
            onClick={() => setWireframe(!wireframe)}
            className={`px-2 py-1 rounded transition ${
              wireframe ? 'text-cyan-400 bg-cyan-500/10 font-bold' : 'text-gray-400 hover:text-white'
            }`}
            title="Toggle Structural Wireframe Overlay"
          >
            GRID
          </button>

          <span className="text-gray-600">|</span>

          <button
            onClick={() => setThermalMode(!thermalMode)}
            className={`px-2 py-1 rounded transition ${
              thermalMode ? 'text-pink-400 bg-pink-500/10 font-bold' : 'text-gray-400 hover:text-white'
            }`}
            title="Toggle Infrared Thermal Gradient"
          >
            IR SPECTRA
          </button>

          <span className="text-gray-600">|</span>

          <button
            onClick={() => {
              if (planetMeshRef.current) {
                planetMeshRef.current.rotation.set(0, 0.8, planetId === 'mars' ? 0.44 : 0.35);
              }
            }}
            className="px-2 py-1 text-gray-400 hover:text-white transition"
            title="Reset View Alignment"
          >
            RESET
          </button>
        </div>
      )}

      {/* Subtle Drag Hint */}
      <div className="absolute top-4 right-4 hidden md:flex items-center gap-1.5 text-[11px] font-mono text-gray-500 bg-black/40 px-2.5 py-1 rounded-full border border-white/5 pointer-events-none">
        <svg className="w-3.5 h-3.5 text-orange-400 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
        </svg>
        <span>3D INTERACTIVE GLOBE</span>
      </div>
    </div>
  );
};
