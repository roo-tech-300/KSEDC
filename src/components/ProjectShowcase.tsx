import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PlanetId, PlanetData } from '../types';
import { MISSIONS_DATA } from '../data/missions';
import { Planet3D } from './Planet3D';
import { ArrowRight, Sparkles, Layers, Sliders, Globe, Camera, Info, Maximize2, Shield, Flame, Activity } from 'lucide-react';

interface ProjectShowcaseProps {
  onOpenBlueprint: (mission: PlanetData) => void;
  onOpenEquationLab: (mission: PlanetData) => void;
}

export const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({
  onOpenBlueprint,
  onOpenEquationLab
}) => {
  const [selectedPlanetId, setSelectedPlanetId] = useState<PlanetId>('mars');
  const [viewMode, setViewMode] = useState<'3d' | 'real-photo'>('3d');
  const [activePhotoIdx, setActivePhotoIdx] = useState<number>(0);
  const [showQuickEquation, setShowQuickEquation] = useState<boolean>(false);

  const currentMission = MISSIONS_DATA[selectedPlanetId] || MISSIONS_DATA.mars;

  // Local state for interactive equation simulation sliders inside the showcase
  const [eqVars, setEqVars] = useState<Record<string, number>>(() => {
    const init: Record<string, number> = {};
    currentMission.equation.variables.forEach(v => {
      init[v.symbol] = v.defaultVal;
    });
    return init;
  });

  const handlePlanetChange = (id: PlanetId) => {
    setSelectedPlanetId(id);
    setActivePhotoIdx(0);
    const newMission = MISSIONS_DATA[id];
    if (newMission) {
      const init: Record<string, number> = {};
      newMission.equation.variables.forEach(v => {
        init[v.symbol] = v.defaultVal;
      });
      setEqVars(init);
    }
  };

  const calculatedResult = currentMission.equation.calculate(eqVars);

  return (
    <section id="projects" className="relative min-h-screen bg-[#030304] text-white overflow-hidden py-16 md:py-24 border-t border-white/10">
      {/* Deep Space Atmosphere Background Gradients */}
      <div 
        className="absolute top-1/4 right-0 w-[700px] h-[700px] rounded-full blur-[140px] pointer-events-none opacity-20 transition-colors duration-1000"
        style={{ background: currentMission.color }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-900/30 via-[#030304] to-[#030304] pointer-events-none" />

      {/* Top Section Header & Planet Switcher Pill Tabs */}
      <div className="max-w-7xl mx-auto px-6 mb-8 md:mb-12 relative z-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-orange-500 tracking-widest uppercase mb-2">
              <span className="inline-block w-2 h-2 rounded-full bg-orange-500 animate-ping"></span>
              <span>KSEDC INTERPLANETARY ARCHITECTURES</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold tracking-tight text-white uppercase">
              Flagship Missions & Worlds
            </h2>
          </div>

          {/* Planet Switcher Horizontal Selector */}
          <div className="flex items-center gap-1.5 p-1.5 bg-neutral-950/80 border border-white/10 rounded-full overflow-x-auto max-w-full backdrop-blur-xl">
            {(Object.keys(MISSIONS_DATA) as PlanetId[]).map((pid) => {
              const p = MISSIONS_DATA[pid];
              const isSelected = selectedPlanetId === pid;
              return (
                <button
                  key={pid}
                  onClick={() => handlePlanetChange(pid)}
                  className={`px-4 py-2 rounded-full text-xs font-mono tracking-wider transition-all whitespace-nowrap flex items-center gap-2 ${
                    isSelected
                      ? 'bg-white text-black font-bold shadow-lg shadow-white/10 scale-105'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: p.color }}
                  />
                  <span>{p.name.toUpperCase()}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Cinematic Showcase Canvas matching Screenshot Layout */}
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[580px]">
          
          {/* Left Column: Bold Imposing Typography & Mission Narrative */}
          <div className="lg:col-span-5 flex flex-col justify-center order-2 lg:order-1 pt-4 lg:pt-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedPlanetId}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="space-y-6"
              >
                {/* Outrageous Project Eyebrow */}
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono uppercase tracking-widest px-2.5 py-1 bg-white/5 border border-white/10 rounded text-gray-300">
                    {currentMission.projectNumber}
                  </span>
                  <span className="text-xs font-mono text-orange-400 tracking-wider">
                    {currentMission.tagline}
                  </span>
                </div>

                {/* Massive Bold Headline (Exact SpaceX Screenshot Look) */}
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[0.95] text-white uppercase font-display">
                  {currentMission.headline.split(' ').map((word, i) => (
                    <span key={i} className="block">
                      {word}
                    </span>
                  ))}
                </h1>

                {/* Subtitle / Punchline */}
                <p className="text-lg text-orange-400 font-medium font-sans">
                  {currentMission.subtitle}
                </p>

                {/* Narrative description */}
                <p className="text-gray-300 text-base md:text-lg leading-relaxed font-sans font-light">
                  {currentMission.description}
                </p>

                {/* Quick Specs Strip */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 py-2">
                  <div className="bg-white/5 border border-white/10 p-3 rounded">
                    <div className="text-[11px] font-mono text-gray-400 uppercase">Distance</div>
                    <div className="text-sm font-mono font-bold text-white mt-0.5">
                      {currentMission.specs.distanceFromEarth}
                    </div>
                  </div>
                  <div className="bg-white/5 border border-white/10 p-3 rounded">
                    <div className="text-[11px] font-mono text-gray-400 uppercase">Surface Gravity</div>
                    <div className="text-sm font-mono font-bold text-white mt-0.5">
                      {currentMission.specs.surfaceGravity}
                    </div>
                  </div>
                  <div className="bg-white/5 border border-white/10 p-3 rounded col-span-2 sm:col-span-1">
                    <div className="text-[11px] font-mono text-gray-400 uppercase">Transit Time</div>
                    <div className="text-sm font-mono font-bold text-orange-400 mt-0.5">
                      {currentMission.specs.travelDuration}
                    </div>
                  </div>
                </div>

                {/* Action Buttons: EXPLORE -> (Screenshot Style) + Equation Lab */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <button
                    onClick={() => onOpenBlueprint(currentMission)}
                    className="group relative inline-flex items-center gap-3 px-7 py-3.5 border border-white text-white uppercase text-xs font-mono tracking-widest font-semibold hover:bg-white hover:text-black transition-all duration-300 rounded-sm"
                  >
                    <span>EXPLORE MISSION</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
                  </button>

                  <button
                    onClick={() => onOpenEquationLab(currentMission)}
                    className="inline-flex items-center gap-2 px-5 py-3.5 border border-orange-500/50 text-orange-400 hover:bg-orange-500/10 hover:border-orange-500 uppercase text-xs font-mono tracking-widest transition-all rounded-sm"
                  >
                    <Sliders className="w-4 h-4" />
                    <span>EQUATION SIMULATOR</span>
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column: 3D Photorealistic Rotating Celestial Sphere / Real Photo Canvas */}
          <div className="lg:col-span-7 relative flex items-center justify-center order-1 lg:order-2 h-[420px] sm:h-[500px] md:h-[620px] w-full">
            
            {/* View Mode Pill Toggle (3D Interactive vs Real NASA Imagery) */}
            <div className="absolute top-2 right-2 z-30 flex items-center gap-1 bg-black/70 backdrop-blur-md p-1 rounded-full border border-white/15">
              <button
                onClick={() => setViewMode('3d')}
                className={`px-3 py-1.5 rounded-full text-xs font-mono flex items-center gap-1.5 transition ${
                  viewMode === '3d' ? 'bg-white text-black font-bold' : 'text-gray-400 hover:text-white'
                }`}
              >
                <Globe className="w-3.5 h-3.5" />
                <span>3D ROTATING</span>
              </button>
              <button
                onClick={() => setViewMode('real-photo')}
                className={`px-3 py-1.5 rounded-full text-xs font-mono flex items-center gap-1.5 transition ${
                  viewMode === 'real-photo' ? 'bg-white text-black font-bold' : 'text-gray-400 hover:text-white'
                }`}
              >
                <Camera className="w-3.5 h-3.5" />
                <span>REAL IMAGES</span>
              </button>
            </div>

            {/* 3D WebGL Orbit Canvas or Real NASA Photo Display */}
            <div className="w-full h-full relative flex items-center justify-center">
              {viewMode === '3d' ? (
                <div className="w-full h-full relative">
                  <Planet3D planetId={selectedPlanetId} autoRotate={true} />
                </div>
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center relative p-4">
                  <motion.div
                    key={activePhotoIdx}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className="relative w-full max-w-xl aspect-square md:aspect-[4/3] rounded-xl overflow-hidden border border-white/15 shadow-2xl shadow-black/80"
                  >
                    <img
                      src={currentMission.realImageUrls[activePhotoIdx]}
                      alt={currentMission.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                      <div>
                        <div className="text-xs font-mono text-orange-400">HIGH-RESOLUTION DEEP SPACE ARCHIVE</div>
                        <div className="text-lg font-bold text-white font-display">{currentMission.name} Exploration Spectrum</div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Photo Thumbnails */}
                  <div className="flex items-center gap-3 mt-4 z-20">
                    {currentMission.realImageUrls.map((url, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActivePhotoIdx(idx)}
                        className={`w-16 h-12 rounded overflow-hidden border-2 transition ${
                          activePhotoIdx === idx ? 'border-orange-500 scale-105' : 'border-white/20 opacity-60 hover:opacity-100'
                        }`}
                      >
                        <img src={url} alt={`Thumbnail ${idx}`} referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Quick Live Telemetry Float Tag */}
            <div className="absolute bottom-2 left-2 hidden sm:flex items-center gap-2 px-3 py-1.5 bg-black/60 backdrop-blur-md rounded border border-white/10 text-[11px] font-mono text-gray-400 pointer-events-none">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>TELEMETRY LINK: STABLE (0.01ms JITTER)</span>
            </div>
          </div>

        </div>

        {/* Inline Live Equation Formula & Interactive Sliders Card */}
        <div className="mt-12 p-6 md:p-8 bg-neutral-950/90 border border-white/10 rounded-xl relative overflow-hidden backdrop-blur-md">
          <div className="scanline-effect"></div>
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-white/10">
            <div>
              <div className="text-xs font-mono text-orange-400 tracking-wider uppercase mb-1">
                KSEDC PHYSICS & TRAJECTORY MATRIX
              </div>
              <h3 className="text-xl md:text-2xl font-bold font-display text-white">
                {currentMission.equation.name}
              </h3>
            </div>

            <div className="px-5 py-2.5 bg-white/5 border border-white/15 rounded font-mono text-lg md:text-xl text-orange-400 font-bold tracking-wider">
              {currentMission.equation.formula}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
            {currentMission.equation.variables.map((v) => (
              <div key={v.symbol} className="space-y-2">
                <div className="flex justify-between text-xs font-mono text-gray-300">
                  <span>{v.label}</span>
                  <span className="text-orange-400 font-bold">
                    {eqVars[v.symbol] !== undefined ? eqVars[v.symbol] : v.defaultVal} {v.unit || ''}
                  </span>
                </div>
                <input
                  type="range"
                  min={v.min}
                  max={v.max}
                  step={v.step}
                  value={eqVars[v.symbol] !== undefined ? eqVars[v.symbol] : v.defaultVal}
                  onChange={(e) => {
                    setEqVars(prev => ({ ...prev, [v.symbol]: parseFloat(e.target.value) }));
                  }}
                  className="w-full h-1.5 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-orange-500"
                />
              </div>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono text-gray-400 uppercase mr-3">CALCULATED RESULT:</span>
              <span className="text-2xl font-bold font-display text-white tracking-wide">
                {calculatedResult.value}
              </span>
              <span className="block sm:inline sm:ml-4 text-xs font-mono text-orange-400/90 italic">
                {calculatedResult.commentary}
              </span>
            </div>

            {currentMission.equation.footnote && (
              <div className="text-xs text-gray-400 italic max-w-md font-sans">
                {currentMission.equation.footnote}
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};
