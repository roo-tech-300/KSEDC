import { PlanetData, TeamMember, CareerRole } from '../types';

export const MISSIONS_DATA: Record<string, PlanetData> = {
  mars: {
    id: 'mars',
    name: 'Mars',
    tagline: 'PROJECT RED CARPET',
    headline: 'MAKING LIFE INTERPLANETARY',
    subtitle: 'Earth to Mars in Seven Days with Suspiciously Excellent Wi-Fi',
    projectNumber: 'OUTRAGEOUS PROJECT ONE',
    description: 'Since space agencies make Mars transfer look like a perilous 9-month metal tube ordeal, KSEDC is re-engineering interplanetary transit into a high-speed luxury cruise with rotating artificial gravity, Mars-themed dining, and panoramic observation domes.',
    extendedDescription: 'Project Red Carpet employs hybrid pulsed magnetic-fusion drives combined with an electromagnetic sling network. The luxury cruiser maintains a constant 0.38g spin section so passengers arrive on the Martian surface with their bone density intact, ready for a stroll across the Valles Marineris canyon edge.',
    quote: 'The journey to Mars should feel less like a survival trial and more like an unforgettable long weekend.',
    quoteAuthor: 'Dr. Gabriel Godwin, KSEDC Flight Director',
    color: '#ff4d00',
    accentColor: '#ff7733',
    glowColor: 'rgba(255, 94, 0, 0.45)',
    specs: {
      distanceFromEarth: '225 Million km (avg)',
      surfaceGravity: '3.72 m/s² (0.38g)',
      orbitalPeriod: '687 Earth Days',
      atmosphere: '95.3% CO₂, 2.6% N₂ (0.6 kPa)',
      temperatureRange: '-140°C to +20°C',
      travelDuration: '7 Earth Days (Red Carpet Spec)',
      habitabilityStatus: 'Habitation Pods in Construction'
    },
    features: [
      'Rotational Artificial Gravity (0.38g - 1.0g adjustable)',
      'Zero-Gravity Hydro-Acoustic Pool',
      'Panoramic 360° Tempered Quartz Balconies',
      'Mars-Themed Molecular Gastronomy Lounge',
      'Indoor Aeroponic Flora Parks & Running Track',
      'Synthetic Sunset Simulator with Earth Nostalgia filters',
      'High-bandwidth Deep Space Laser Wi-Fi (3.2 Gbps)'
    ],
    equation: {
      name: 'Transit Duration Function',
      formula: 'T_Mars = (D / v_eff) - Δt_assist + Δt_comfort',
      variables: [
        { symbol: 'D', label: 'Orbital Distance (M km)', defaultVal: 225, min: 55, max: 400, step: 5, unit: 'M km' },
        { symbol: 'v_eff', label: 'Effective Engine Velocity (km/s)', defaultVal: 380, min: 100, max: 800, step: 10, unit: 'km/s' },
        { symbol: 'assist', label: 'Gravitational Sling Assist (Days)', defaultVal: 2.4, min: 0, max: 5, step: 0.1, unit: 'Days' },
        { symbol: 'comfort', label: 'Passenger Buffet & Stargazing Margin (Days)', defaultVal: 1.8, min: 0.5, max: 4, step: 0.1, unit: 'Days' }
      ],
      calculate: (vars) => {
        const rawHours = (vars.D * 1000000) / (vars.v_eff * 3600);
        const rawDays = rawHours / 24;
        const total = Math.max(2.5, rawDays - vars.assist + vars.comfort);
        return {
          value: `${total.toFixed(1)} Days`,
          commentary: total < 8 ? 'Cruising on optimal luxury corridor!' : 'Comfort margin dominates trajectory velocity.'
        };
      },
      footnote: 'The final term represents time passengers spend enjoying the onboard cruise experience and pretending they are not hurtling through the void at extraordinary speed.'
    },
    blueprint: {
      codename: 'ARES-LUX-07',
      architectureType: 'Dual-Toroid Continuous Magnetic Pulsed Liner',
      primaryChallenge: 'Martian dust electrostatic repulsion during descent',
      payloadCapacity: '450 Metric Tons / 120 Passengers',
      powerSource: 'Triple Helion-4 Aneutronic Fusion Core',
      milestones: [
        { year: '2027', title: 'Orbital Ion Tether Construction', status: 'completed' },
        { year: '2028', title: 'Cruiser Hull Pressure Validation', status: 'in-progress' },
        { year: '2030', title: 'Inaugural Seven-Day Passenger Transit', status: 'planned' }
      ]
    },
    realImageUrls: [
      'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop'
    ]
  },
  jupiter: {
    id: 'jupiter',
    name: 'Jupiter',
    tagline: 'THE JOVIAN HAVEN ENGINE',
    headline: 'FLOATING OVER THE GAS GIANT',
    subtitle: 'Making Jupiter Inconveniently Habitable with Aerostat Citadels',
    projectNumber: 'FEATURED MASTER PROJECT',
    description: 'Jupiter is a tempestuous gas giant with no solid ground, colossal atmospheric pressure, violent thousand-mile storms, and deadly radiation. Naturally, KSEDC is deploying a floating atmospheric city anchored in the temperate cloud layer.',
    extendedDescription: 'The Jovian Haven Engine is an armada of geostationary fusion-levitated mega-structures positioned in the "Haven Layer" (1.0 bar pressure and 0°C to 20°C). By projecting superconducting electromagnetic deflection envelopes, the cities shield against intense radiation belts while processing atmospheric hydrogen into oxygen and rocket propellant.',
    quote: 'If physics gives you 2.5 times Earth gravity and no floor, you simply engineer a lighter-than-air titanium city and float on the storm.',
    quoteAuthor: 'Emmanel John, KSEDC Operations Architect',
    color: '#e69a4d',
    accentColor: '#f7c588',
    glowColor: 'rgba(230, 154, 77, 0.4)',
    specs: {
      distanceFromEarth: '778 Million km (avg)',
      surfaceGravity: '24.79 m/s² (2.53g at cloud tops)',
      orbitalPeriod: '11.86 Earth Years',
      atmosphere: '89.8% H₂, 10.2% He with trace ammonia',
      temperatureRange: '-110°C to +25°C (Haven Zone)',
      travelDuration: '48 Earth Days (Magneto-drive)',
      habitabilityStatus: 'Haven Aerostat Prototype #3 in testing'
    },
    features: [
      'Mega-Aerostat Citadels floating in the temperate 1-bar cloud band',
      'High-Temperature Superconducting Radiation Umbrellas',
      'Cryogenic Hydrogen-to-Oxygen Thermal Catalyzers',
      'Sub-Harmonic Anti-Turbulence Deflection Drones',
      'Atmospheric Lightning Harvester & Capacitance Banks',
      'Great Red Spot Scenic Observation Gondolas',
      'Emergency Kinetic Boost Escape Pods'
    ],
    equation: {
      name: 'Habitability Index Formula',
      formula: 'H = (B² · A · η) / (P + R + S)',
      variables: [
        { symbol: 'B', label: 'Magnetic Shielding Flux (Tesla)', defaultVal: 18.5, min: 5, max: 40, step: 0.5, unit: 'T' },
        { symbol: 'A', label: 'Atmospheric Conversion Rate', defaultVal: 0.88, min: 0.1, max: 1.0, step: 0.02 },
        { symbol: 'eta', label: 'Human Optimism Coefficient (η)', defaultVal: 1.45, min: 0.5, max: 3.0, step: 0.05 },
        { symbol: 'P', label: 'Pressure Instability Metric', defaultVal: 140, min: 20, max: 300, step: 5 },
        { symbol: 'R', label: 'Radiation Flux Exposure (mSv/h)', defaultVal: 220, min: 10, max: 500, step: 10, unit: 'mSv/h' },
        { symbol: 'S', label: 'Storm Turbulence Chaos Index', defaultVal: 85, min: 10, max: 200, step: 5 }
      ],
      calculate: (vars) => {
        const numerator = Math.pow(vars.B, 2) * vars.A * vars.eta;
        const denominator = vars.P + vars.R + vars.S;
        const index = numerator / denominator;
        return {
          value: `H = ${index.toFixed(4)}`,
          commentary: index > 0.8 ? 'Haven Layer safely stabilized.' : 'Shield boost required for high radiation zones.'
        };
      },
      footnote: 'That may sound low, but it is approximately 700 times higher than standing on Jupiter in an ordinary T-shirt.'
    },
    blueprint: {
      codename: 'JOVIAN-HEAVEN-I',
      architectureType: 'Superheated Hydrogen Buoyant Aerostat Geodesic',
      primaryChallenge: 'Super-ammonia corrosive windshear resistance',
      payloadCapacity: '25,000 Metric Tons Structural Biomass',
      powerSource: 'Atmospheric Electro-dynamic Tether & Fusion Core',
      milestones: [
        { year: '2026', title: 'Robotic Cloud Probe Atmospheric Mapping', status: 'completed' },
        { year: '2029', title: 'Sub-scale Shield Deflector Launch', status: 'in-progress' },
        { year: '2033', title: 'Haven City Core Assembly in Jovian Orbit', status: 'planned' }
      ]
    },
    realImageUrls: [
      'https://images.unsplash.com/photo-1614732414444-096e5f1122d5?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?q=80&w=1200&auto=format&fit=crop'
    ]
  },
  moon: {
    id: 'moon',
    name: 'The Moon',
    tagline: 'OPERATION MOONWALK MALL',
    headline: 'COMMERCE WITH NO SKY',
    subtitle: 'The First Multi-Level Shopping & Entertainment Center on the Lunar Regolith',
    projectNumber: 'OUTRAGEOUS PROJECT TWO',
    description: 'KSEDC is constructing a climate-controlled, pressurized subterranean lunar metropolis where travelers can shop, dine at Michelin-star zero-g restaurants, attend concerts, and forget that the nearest breath of fresh air is 384,400 kilometers away.',
    extendedDescription: 'Located within the ancient basalt lava tubes of Marius Hills, Moonwalk Mall takes advantage of natural 40-meter thick basalt roofs to ensure total cosmic ray insulation. It features an indoor low-gravity trampoline park, regolith glass boutiques, and an open-roof illuminated atrium gazing straight up at planet Earth.',
    quote: 'Why merely leave footprints on the Moon when you can build a flagship boutique and drink iced lattes under Earthshine?',
    quoteAuthor: 'Eluzia Ameh-Ako, KSEDC Lead Technology Officer',
    color: '#cbd5e1',
    accentColor: '#94a3b8',
    glowColor: 'rgba(203, 213, 225, 0.4)',
    specs: {
      distanceFromEarth: '384,400 km',
      surfaceGravity: '1.62 m/s² (0.166g)',
      orbitalPeriod: '27.3 Earth Days (Tidally Locked)',
      atmosphere: 'Near-total vacuum (<10⁻¹² bar)',
      temperatureRange: '-173°C to +127°C (Regolith Surface)',
      travelDuration: '3.5 Hours (KSEDC Express Rail)',
      habitabilityStatus: 'Subterranean Marius Tube Sealed'
    },
    features: [
      'Natural Basalt Lava-Tube Shielding (Zero Radiation Hazard)',
      '1/6th Gravity Acrobatic Athletics Arena & Trampoline Plaza',
      'Direct Earth-Gazing Tempered Diamond Observation Dome',
      'Lunar Regolith 3D-Printed Luxury Boutiques',
      'Autonomous Vacuum Mag-Lev Transit Ring',
      'Subsurface Hydroponic Ice-Mining Water Oasis',
      'Duty-Free Interplanetary Commodity Exchange'
    ],
    equation: {
      name: 'Lunar Commerce Revenue Function',
      formula: 'R_Moon = V · S · G - L',
      variables: [
        { symbol: 'V', label: 'Annual Visitor Volume (thousands)', defaultVal: 120, min: 10, max: 500, step: 10, unit: 'k visitors' },
        { symbol: 'S', label: 'Average Spend per Visitor ($)', defaultVal: 4800, min: 1000, max: 20000, step: 200, unit: '$' },
        { symbol: 'G', label: 'Low-Gravity Euphoria Multiplier', defaultVal: 1.65, min: 1.0, max: 3.0, step: 0.05 },
        { symbol: 'L', label: 'Logistics & Explosion Prevention Cost ($M)', defaultVal: 320, min: 50, max: 1000, step: 25, unit: '$M' }
      ],
      calculate: (vars) => {
        const gross = (vars.V * 1000 * vars.S * vars.G) / 1000000;
        const net = gross - vars.L;
        return {
          value: `$${net.toFixed(1)} Million Net`,
          commentary: net > 0 ? 'Lunar retail operation highly profitable!' : 'Increase retail markup on moon merchandise.'
        };
      },
      footnote: 'Variables: V = Visitor volume | S = Spending | G = Gravity-adjusted shopping duration | L = Logistics and preventable explosions.'
    },
    blueprint: {
      codename: 'LUNA-MALL-ALPHA',
      architectureType: 'In-Situ Basalt Sintered Tube Complex',
      primaryChallenge: 'Abrasive lunar dust airlock vacuum sealing',
      payloadCapacity: '80,000 m² Commercial Leasable Floor Area',
      powerSource: 'Dual Stirling Fission Surface Reactors',
      milestones: [
        { year: '2026', title: 'Lava Tube Geotechnical Core Drilling', status: 'completed' },
        { year: '2028', title: 'Pressurization Dome Structural Inflation', status: 'in-progress' },
        { year: '2031', title: 'Grand Opening Ribbon Cutting Event', status: 'planned' }
      ]
    },
    realImageUrls: [
      'https://images.unsplash.com/photo-1522030299830-16b8d3d049fe?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1532693322450-2cb5c511067d?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=1200&auto=format&fit=crop'
    ]
  },
  europa: {
    id: 'europa',
    name: 'Europa',
    tagline: 'THE SUBSURFACE OCEAN ARK',
    headline: 'A WARM CITY UNDER ALIEN ICE',
    subtitle: 'Thermal Habitat Anchored in the 100km Deep Sub-Crustal Ocean',
    projectNumber: 'OUTRAGEOUS PROJECT THREE',
    description: 'Europa harbors a warm, mineral-rich liquid ocean beneath its 20-kilometer ice crust, containing more water than all of Earth’s oceans combined. KSEDC is deploying a heated geothermal city tethered right beneath the ice ceiling.',
    extendedDescription: 'Using modular thermal melt-drills, our engineers descend through the exterior ice crust and anchor buoyant titanium research bubbles directly against the under-ice mantle. Hydrothermal vent power harnesses natural thermal energy while robotic submersibles chart the deep abyssal trenches.',
    quote: 'The ocean is dark, silent, and endless. We brought espresso machines and underwater halogen stadium lights.',
    quoteAuthor: 'Dr. Sarah Vance, Astrobiology Division',
    color: '#38bdf8',
    accentColor: '#7dd3fc',
    glowColor: 'rgba(56, 189, 248, 0.4)',
    specs: {
      distanceFromEarth: '628 Million km',
      surfaceGravity: '1.315 m/s² (0.134g)',
      orbitalPeriod: '3.55 Earth Days',
      atmosphere: 'Trace oxygen exosphere',
      temperatureRange: '-220°C (Surface) to +4°C (Deep Ocean)',
      travelDuration: '40 Earth Days (KSEDC Hybrid)',
      habitabilityStatus: 'Sub-Ice Thermal Drill Unit Active'
    },
    features: [
      'Subsurface Ice-Tethered Inverted Hydro-Citadel',
      'Direct Hydrothermal Energy Tap & Geo-Turbines',
      'Autonomous Bioluminescent Abyssal Drone Fleet',
      'Titanium-Aerogel High-Pressure Sealed Hull (1,200 bar rating)',
      'Strict “No Opening the Outer Door” Triple Interlock Policy',
      'Emergency “Absolutely Not The Kraken” Rapid-Surface Protocol',
      'Oceanographic Glass Floors with 5,000m Depth Floodlights'
    ],
    equation: {
      name: 'Hydrothermal Equilibrium Balance',
      formula: 'Q_net = k_ice · (T_core - T_crust) / Δz - W_loss',
      variables: [
        { symbol: 'k_ice', label: 'Thermal Conductivity of Cryo-Ice', defaultVal: 2.8, min: 1.0, max: 5.0, step: 0.1 },
        { symbol: 'T_core', label: 'Reactor Core Heat Output (°C)', defaultVal: 480, min: 200, max: 1000, step: 20, unit: '°C' },
        { symbol: 'T_crust', label: 'Ambient Ice Crust Temperature (°C)', defaultVal: -160, min: -220, max: -80, step: 10, unit: '°C' },
        { symbol: 'dz', label: 'Drill Wall Barrier Thickness (m)', defaultVal: 18, min: 5, max: 50, step: 1, unit: 'm' },
        { symbol: 'W_loss', label: 'Ocean Convective Dissipation (MW)', defaultVal: 42, min: 10, max: 100, step: 2, unit: 'MW' }
      ],
      calculate: (vars) => {
        const deltaT = vars.T_core - vars.T_crust;
        const heatTransfer = (vars.k_ice * deltaT) / vars.dz;
        const netMW = heatTransfer * 4.5 - vars.W_loss;
        return {
          value: `${netMW.toFixed(1)} MW Net`,
          commentary: netMW > 0 ? 'Habitat thermal pocket fully self-sustaining!' : 'Increase core output to avoid re-freezing.'
        };
      },
      footnote: 'Equation balances reactor thermal melt rate with conductive heat dissipation into Europa’s sub-zero ice shell.'
    },
    blueprint: {
      codename: 'EUROPA-NAUTILUS-IX',
      architectureType: 'Buoyant Titanium-Matrix Cryogenic Sub-Ice Anchor',
      primaryChallenge: 'Tidal flex cracking and cryo-volcanic plume avoidance',
      payloadCapacity: '12,000 Metric Tons Submerged Volume',
      powerSource: 'Dual Molten-Salt Thorium Thermal Generators',
      milestones: [
        { year: '2027', title: 'Cryo-Sonic Acoustic Ice Mapping', status: 'completed' },
        { year: '2029', title: 'Sub-Crust Autonomous Melt-Probe Penetration', status: 'in-progress' },
        { year: '2034', title: 'First Crewed Descent to Abyss Station', status: 'planned' }
      ]
    },
    realImageUrls: [
      'https://images.unsplash.com/photo-1507499739999-097706ad8914?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200&auto=format&fit=crop'
    ]
  },
  saturn: {
    id: 'saturn',
    name: 'Saturn',
    tagline: 'THE SATURN RINGWAY',
    headline: 'TRANSIT MAP FOR THE RINGS',
    subtitle: 'Public Transport Orbital Network where the Next Bus Stop is Saturn',
    projectNumber: 'OUTRAGEOUS PROJECT FOUR',
    description: 'Why should public transit be limited to buses and subways when Saturn has a 280,000 km wide particle ring perfect for magnetic launch rails, orbital sky-bridges, and interplanetary weddings with ring-side dining?',
    extendedDescription: 'The Saturn Ringway links 14 orbital stations suspended above the A and B rings. Commuters travel via low-energy orbital Hohmann transfers, magnetic catapult tracks, and passenger vessels that make a polite electronic chime before entering a new parabolic trajectory.',
    quote: 'Mind the gap between the magnetic transfer vehicle and the Cassinian division.',
    quoteAuthor: 'KSEDC Transit Authority',
    color: '#eab308',
    accentColor: '#fde047',
    glowColor: 'rgba(234, 179, 8, 0.4)',
    specs: {
      distanceFromEarth: '1.4 Billion km',
      surfaceGravity: '10.44 m/s² (1.06g at cloud deck)',
      orbitalPeriod: '29.4 Earth Years',
      atmosphere: '96.3% H₂, 3.25% He, 0.45% Methane',
      temperatureRange: '-185°C to -122°C',
      travelDuration: '72 Earth Days (High-Isp Drive)',
      habitabilityStatus: 'Ring Station Alpha Orbital Tethered'
    },
    features: [
      '14 Magnetic Ringway Transit Terminals in Stable Lagrange Orbits',
      'Ice-Particle Mining & Ultra-Pure Water Harvesters',
      'Ring Sightseeing Panoramic 360° Zero-G Observation Decks',
      'Orbital Cargo Dispatch with Autonomous Tug Drones',
      '“One Small Step” Orbital Wedding Chapels',
      'High-Speed Ring Particle Avoidance Radar Lattice',
      'Cassini Division Grand Resort & Luxury Spa'
    ],
    equation: {
      name: 'Orbital Velocity Equilibrium',
      formula: 'v_orbit = √(μ / r) + Δv_chime',
      variables: [
        { symbol: 'mu', label: 'Saturn Gravitational Parameter (μ × 10¹⁵)', defaultVal: 37.93, min: 20, max: 60, step: 0.5 },
        { symbol: 'r', label: 'Orbital Ring Radius (thousand km)', defaultVal: 122, min: 70, max: 200, step: 2, unit: 'k km' },
        { symbol: 'chime', label: 'Polite Transit Trajectory Boost (km/s)', defaultVal: 1.15, min: 0.1, max: 5.0, step: 0.05, unit: 'km/s' }
      ],
      calculate: (vars) => {
        const rMeters = vars.r * 1000000;
        const muSI = vars.mu * 1e15;
        const vRaw = Math.sqrt(muSI / rMeters) / 1000;
        const vTotal = vRaw + vars.chime;
        return {
          value: `${vTotal.toFixed(2)} km/s`,
          commentary: 'Smooth insertion velocity into Ring Station Ringway slot.'
        };
      },
      footnote: 'Formula determines circular orbital speed along Saturn’s main ring plane with passenger comfort deceleration curves.'
    },
    blueprint: {
      codename: 'CHRONOS-RING-XIV',
      architectureType: 'Electro-Dynamic Tethered Orbital Hub Lattice',
      primaryChallenge: 'Micro-meteorite ice particle ablation mitigation',
      payloadCapacity: '350,000 Metric Tons Orbital Displacement',
      powerSource: 'Ring Particle Electro-Static Induction & Micro-Fusion',
      milestones: [
        { year: '2028', title: 'Ring Particle Density Mapping Satellite', status: 'completed' },
        { year: '2031', title: 'Central Spoke Terminal Deployment', status: 'in-progress' },
        { year: '2036', title: 'Full 14-Station Ringway Loop Operations', status: 'planned' }
      ]
    },
    realImageUrls: [
      'https://images.unsplash.com/photo-1545156521-77bd85671d30?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?q=80&w=1200&auto=format&fit=crop'
    ]
  },
  earth: {
    id: 'earth',
    name: 'Relativity / Earth',
    tagline: 'PROJECT YESTERDAY, PROBABLY',
    headline: 'TEMPORAL RESEARCH DIVISION',
    subtitle: 'We Have Not Invented Time Travel. Clocks Just Behave Suspiciously.',
    projectNumber: 'TEMPORAL RESEARCH DIVISION',
    description: 'To be completely clear: KSEDC has not built a time machine. We have only verified that Einsteinian relativity is inconveniently accurate, and several experimental high-velocity orbital prototypes arrive consistently five minutes early.',
    extendedDescription: 'By accelerating micro-payloads through our orbital relativistic ring accelerator at 0.9995c, we examine time dilation gradients, quantum retro-causality limits, and the mathematical impossibility of meeting your alternate self without filling out Triplicate Clearance Form 8B.',
    quote: 'Changing history is strongly discouraged. Bringing dinosaurs back is strictly outside our current fiscal year budget.',
    quoteAuthor: 'KSEDC Ethics & Paradox Committee',
    color: '#10b981',
    accentColor: '#34d399',
    glowColor: 'rgba(16, 185, 129, 0.4)',
    specs: {
      distanceFromEarth: '0 km (Home Base & Orbital Lattice)',
      surfaceGravity: '9.81 m/s² (1.00g)',
      orbitalPeriod: '365.25 Earth Days',
      atmosphere: '78% N₂, 21% O₂, 1% Ar',
      temperatureRange: '-89°C to +56°C',
      travelDuration: 'Instantaneous (in standard frame)',
      habitabilityStatus: 'Optimal (unless meetings run long)'
    },
    features: [
      'Relativistic Orbital Particle Acceleration Loop (0.9999c)',
      'Precision Atomic Clocks with Five-Minute Early Calibration',
      'Quantum Paradox Suppression Dampeners',
      'Strict Chrono-Safety Protocol & Alternate Timeline Insurance',
      'Grandfather Paradox Automatic Override Interlocks',
      'Time-Dilated Zero-Aging Preservation Chambers',
      'Formal Clearance Required to View Next Week’s Stock Market'
    ],
    equation: {
      name: 'Relativistic Time Dilation Formula',
      formula: "Δt' = Δt / √(1 - v² / c²)",
      variables: [
        { symbol: 'dt', label: 'Proper Time in Transit (Hours)', defaultVal: 24, min: 1, max: 100, step: 1, unit: 'Hours' },
        { symbol: 'v_ratio', label: 'Velocity as Fraction of Light (v/c)', defaultVal: 0.94, min: 0.1, max: 0.999, step: 0.01, unit: 'c' }
      ],
      calculate: (vars) => {
        const gamma = 1 / Math.sqrt(1 - Math.pow(vars.v_ratio, 2));
        const dilatedHours = vars.dt * gamma;
        return {
          value: `${dilatedHours.toFixed(2)} Earth Hours`,
          commentary: `Lorentz factor γ = ${gamma.toFixed(2)}x time dilation experienced.`
        };
      },
      footnote: 'While passengers experience 24 hours onboard, observers on Earth will witness significantly more time elapsed.'
    },
    blueprint: {
      codename: 'CHRONOS-TACHYON-0',
      architectureType: 'Circum-Orbital Relativistic Magneto-Chamber',
      primaryChallenge: 'Temporal causality containment and thermal dissipation',
      payloadCapacity: '250 kg Quantum Telemetry Probe',
      powerSource: 'Super-Conducting Magneto-Inductive Grid',
      milestones: [
        { year: '2026', title: 'Atomic Clock Synchronization Discrepancy Verified', status: 'completed' },
        { year: '2029', title: 'High-Gamma Sub-Atomic Dilation Loop', status: 'in-progress' },
        { year: '2035', title: 'Macro-Payload Micro-Second Time Shift Trial', status: 'planned' }
      ]
    },
    realImageUrls: [
      'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?q=80&w=1200&auto=format&fit=crop'
    ]
  }
};

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Dr. Gabriel Godwin',
    role: 'Chief Executive Officer',
    title: 'Founder & Visionary Flight Director',
    department: 'Executive Command & Deep Space Logistics',
    quote: 'We do not merely reach for the stars. We negotiate with them.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop',
    clearanceLevel: 'LEVEL 5 — COSMIC'
  },
  {
    name: 'Emmanel John',
    role: 'Chief Operating Officer',
    title: 'Planetary Engineering & Operations Lead',
    department: 'Interplanetary Habitation & Safety Architectures',
    quote: 'If the budget committee is not frightened by the initial draft, the dream is far too small.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop',
    clearanceLevel: 'LEVEL 5 — FLIGHT'
  },
  {
    name: 'Eluzia Ameh-Ako',
    role: 'Chief Technology Officer',
    title: 'Pulsed Magneto-Fusion & AI Systems Chief',
    department: 'Advanced Propulsion & Quantum Telemetry',
    quote: "We're not merely imagining life beyond Earth. We're filing the paperwork to build a shopping mall on the Moon.",
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f84?q=80&w=800&auto=format&fit=crop',
    clearanceLevel: 'LEVEL 5 — QUANTUM'
  }
];

export const CAREER_ROLES: CareerRole[] = [
  {
    id: 'propulsion-eng',
    title: 'Senior Magneto-Fusion Propulsion Engineer',
    department: 'Propulsion Systems Division',
    location: 'Orbital Assembly Yard 03 / Remote',
    type: 'Full-Time Interplanetary',
    description: 'Lead the simulation and validation of multi-gigawatt continuous magnetic fusion liners for Project Red Carpet fast transit corridors.',
    requirements: [
      'Mastery of magnetohydrodynamic equations and plasma containment',
      'Comfortable with rapid prototyping under zero-g telemetry constraints',
      'Demonstrated experience not detonating the testing facility'
    ]
  },
  {
    id: 'atm-architect',
    title: 'Jovian Cloud Aerostat Architect',
    department: 'Planetary Engineering',
    location: 'Haven Outpost One / Jupiter High Orbit',
    type: 'Full-Time Extreme Environment',
    description: 'Design structural titanium-graphene buoyant enclosures capable of withstanding supersonic ammonia windshears in Jupiter’s upper Haven Layer.',
    requirements: [
      'Deep expertise in buoyant thermodynamics and aerostat stress analysis',
      'Willingness to review extreme storm weather reports before coffee',
      'Unfazed by 2.5g gravitational simulations'
    ]
  },
  {
    id: 'lunar-retail',
    title: 'Lunar Commercial Logistics Director',
    department: 'Operation Moonwalk Mall',
    location: 'Marius Hills Base / Moon',
    type: 'Full-Time Low Gravity',
    description: 'Oversee supply chain, retail tenant operations, and duty-free customs clearance for the first shopping complex with zero sky.',
    requirements: [
      'Proven track record in extreme luxury retail management or space station operations',
      'Ability to prevent customer shopping bags from floating into ventilation ducts',
      'Negotiation skills across Earth and Lunar jurisdictions'
    ]
  },
  {
    id: 'chrono-physicist',
    title: 'Relativity & Temporal Anomaly Explainer',
    department: 'Temporal Research Division',
    location: 'Earth Orbit Accelerator Alpha',
    type: 'Permanent Paradox Buffer',
    description: 'Monitor high-gamma orbital dilation trials and explain why certain atomic clocks insist on arriving five minutes ahead of schedule.',
    requirements: [
      'Ph.D. in General Relativity or theoretical chronodynamics',
      'Extreme ethical discipline regarding lottery numbers and future sports scores',
      'Strict adherence to Triplicate Clearance Protocol 8B'
    ]
  }
];
