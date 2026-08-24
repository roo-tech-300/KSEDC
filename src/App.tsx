import React, { useEffect, useState } from 'react';
import jupiterImg from './assets/images/jupiter_haven_1787608038384.jpg';
import marsImg from './assets/images/mars_planet_1787608050777.jpg';
import moonImg from './assets/images/moon_lunar_1787608063566.jpg';
import europaImg from './assets/images/europa_ice_1787608075865.jpg';
import saturnImg from './assets/images/saturn_ringway_1787608089550.jpg';

interface MissionData {
  id: string;
  tag: string;
  lines: string[];
  description: string;
  image: string;
  imageAlt: string;
  buttonText: string;
  specs: { label: string; value: string }[];
  equation?: { formula: string; explanation: string };
  features: string[];
  disclaimer: string;
}

const MISSIONS: MissionData[] = [
  {
    id: 'jovian',
    tag: 'MISSION 01 // JOVIAN ATMOSPHERICS',
    lines: ['MAKING', 'JUPITER', 'HABITABLE'],
    description:
      'The Jovian Haven Engine is a planetary-scale atmospheric transformation system designed to create stable, pressurized, Earth-like floating habitation zones within Jupiter’s upper atmosphere.',
    image: jupiterImg,
    imageAlt: 'The Jovian Haven Engine - Jupiter',
    buttonText: 'EXPLORE',
    specs: [
      { label: 'HABITABILITY INDEX', value: 'H = 0.0007' },
      { label: 'TARGET ALTITUDE', value: '1.2 BAR HAVEN LAYER' },
      { label: 'MAGNETIC SHIELDING', value: '98.4 Tesla Superconducting' },
      { label: 'ATMOSPHERIC PROCESSOR', value: 'H₂ → O₂ Catalytic Matrix' },
    ],
    equation: {
      formula: 'H = (B² · A · η) / (P + R + S)',
      explanation:
        'Where B = Magnetic shielding, A = Conversion efficiency, η = Human optimism coefficient, P = Pressure instability, R = Radiation, S = Storm chaos.',
    },
    features: [
      'Floating cities anchored in the “Haven Layer”',
      'Artificial magnetic fields for high-energy radiation deflection',
      'Hydrogen-to-oxygen atmospheric synthesis scrubbers',
      'Storm-deflection drone perimeter & Earth-comfort gravity bubbles',
      'Emergency orbital escape pods for sudden Jovian weather advisories',
    ],
    disclaimer:
      'H = 0.0007 is approximately 700 times higher than standing outside Jupiter in a T-shirt.',
  },
  {
    id: 'mars',
    tag: 'MISSION 02 // INTERPLANETARY CRUISE',
    lines: ['MAKING', 'LIFE', 'MULTIPLANETARY'],
    description:
      'Since humanity has an obsession with Mars, Project Red Carpet reimagines the six-month perilous interplanetary transfer as a seven-day luxury cruise with artificial gravity, panoramic balconies, and suspiciously excellent Wi-Fi.',
    image: marsImg,
    imageAlt: 'Project Red Carpet - Mars',
    buttonText: 'EXPLORE',
    specs: [
      { label: 'TRANSIT DURATION', value: '7 EARTH DAYS' },
      { label: 'ARTIFICIAL GRAVITY', value: '0.38G CONTINUOUS' },
      { label: 'PASSENGER CAPACITY', value: '2,400 PASSENGERS' },
      { label: 'ONBOARD AMENITIES', value: 'ZERO-G POOL & MARS DINING' },
    ],
    equation: {
      formula: 'T_Mars = (D / v_effective) - Δt_assist + Δt_comfort',
      explanation:
        'The final term represents time passengers spend enjoying the cruise experience and pretending they are not flying through a cosmic radiation vacuum at hypervelocity.',
    },
    features: [
      'Continuous 0.38G artificial gravity centrifuge quarters',
      'Zero-gravity heated aquatic recreational spheres',
      'Observation decks with customizable Martian sunsets',
      'Mars-themed Michelin-standard dining & hydro-parks',
      'Strict “Do Not Disturb” trajectory insulation',
    ],
    disclaimer: 'Cabin reservations are speculative and non-refundable across light-years.',
  },
  {
    id: 'moon',
    tag: 'MISSION 03 // LUNAR INFRASTRUCTURE',
    lines: ['COMMERCE', 'WITH NO', 'ATMOSPHERE'],
    description:
      'Operation Moonwalk Mall is a modular lunar settlement where visitors can shop, dine, exercise, attend concerts, and forget that the nearest breathable atmosphere is 384,400 kilometers away.',
    image: moonImg,
    imageAlt: 'Operation Moonwalk Mall - Lunar Surface',
    buttonText: 'EXPLORE',
    specs: [
      { label: 'DISTANCE FROM EARTH', value: '384,400 KM' },
      { label: 'RETAIL SURFACE AREA', value: '450,000 M²' },
      { label: 'GRAVITY CORRECTION', value: 'LOW-G ESCALATORS' },
      { label: 'AIRLOCK EFFICIENCY', value: '99.999% RETENTION' },
    ],
    equation: {
      formula: 'R_Moon = V × S × G - L',
      explanation:
        'Where V = Visitor volume, S = Spending, G = Gravity-adjusted shopping duration, L = Logistics costs and preventable decompression incidents.',
    },
    features: [
      'Multi-level subterranean shopping arcades under regolith shielding',
      'Low-gravity sports arenas & 1/6th gravity concert stages',
      'Lunar dust-scrubbing airlock entries & luxury food court',
      'Panoramic Earth-view observation terraces',
    ],
    disclaimer: 'No outside open containers permitted beyond Airlock 4.',
  },
  {
    id: 'europa',
    tag: 'MISSION 04 // CRYO RESEARCH',
    lines: ['WARM CITIES', 'UNDER ALIEN', 'OCEANS'],
    description:
      'Europa harbors a deep liquid ocean beneath its frozen crust. KSEDC is engineering a heated research habitat nested inside the ice, allowing scientists to explore alien oceans without immediately becoming part of them.',
    image: europaImg,
    imageAlt: 'The Europa Subsurface Ark',
    buttonText: 'EXPLORE',
    specs: [
      { label: 'ICE CRUST DEPTH', value: '15.4 KM' },
      { label: 'HABITAT TEMPERATURE', value: '21.5°C INTERNAL' },
      { label: 'POWER SYSTEM', value: 'COMPACT THERMAL REACTOR' },
      { label: 'CONTAINMENT STATUS', value: 'KRAKEN PROTOCOL: DORMANT' },
    ],
    equation: {
      formula: 'Q_melt = m · L_f + m · c_ice · ΔT',
      explanation:
        'Thermal energy required for nuclear thermal ice boring into the Jovian oceanic abyss.',
    },
    features: [
      'Heated structural tunnel grid & Sub-ice observation dome',
      'Nuclear-powered thermal ice penetrators',
      'Autonomous deep-ocean submersible probes',
      'Strict “no opening the outer pressure hatch” guidelines',
      'Automated contingency: “Absolutely Not the Kraken Protocol”',
    ],
    disclaimer: 'If anything taps on the outside glass, ignore it.',
  },
  {
    id: 'saturn',
    tag: 'MISSION 05 // ORBITAL TRANSIT',
    lines: ['PUBLIC TRANSIT', 'AROUND', 'SATURN'],
    description:
      'The Saturn Ringway is a planetary orbital transit superstructure connecting stations across the rings via magnetic launch rails, ring sightseeing platforms, and zero-energy orbital transfers.',
    image: saturnImg,
    imageAlt: 'The Saturn Ringway',
    buttonText: 'EXPLORE',
    specs: [
      { label: 'RING CIRCUMFERENCE', value: '920,000 KM' },
      { label: 'ORBITAL SPEED', value: '17.8 KM/S' },
      { label: 'TRANSIT STATIONS', value: '12 ORBITAL TERMINALS' },
      { label: 'TRANSFER METHOD', value: 'MAGNETIC RAILCATAPULT' },
    ],
    equation: {
      formula: 'C_orbit ≈ √(μ / r)',
      explanation: 'Orbital velocity equilibrium along the F-Ring transit corridor.',
    },
    features: [
      'Continuous orbital transit capsules with polite automated chime announcements',
      'Ring ice-particle harvesting and research observation lounges',
      '360-degree panoramic outer-ring observation suites',
      'Zero-gravity wedding venues & orbital shuttle docks',
    ],
    disclaimer:
      'Please keep hands and antennae inside the transit capsule during orbital burns.',
  },
];

export default function App() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [activeModalMission, setActiveModalMission] = useState<MissionData | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Navbar Scroll Effect
    const handleScroll = () => {
      const nav = document.querySelector('nav');
      if (nav) {
        if (window.scrollY > 30) {
          nav.classList.add('scrolled');
        } else {
          nav.classList.remove('scrolled');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Reveal on Scroll
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.08 }
    );

    revealElements.forEach((el) => revealObserver.observe(el));

    // Progress Bars Animation
    const progressBars = document.querySelectorAll('.progress-bar-fill');
    const progressObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const width = entry.target.getAttribute('data-width');
            if (width) {
              (entry.target as HTMLElement).style.width = width;
            }
          }
        });
      },
      { threshold: 0.15 }
    );

    progressBars.forEach((bar) => progressObserver.observe(bar));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      revealObserver.disconnect();
      progressObserver.disconnect();
    };
  }, []);

  // Close mobile menu on hash click or escape
  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    setSubscribed(true);
  };

  return (
    <div className="antialiased bg-black text-white selection:bg-white selection:text-black min-h-screen overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 text-white bg-black/60 backdrop-blur-lg border-b border-white/10 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-4 sm:py-5 flex justify-between items-center">
          <a
            href="#hero"
            className="flex items-center gap-2.5 font-display font-bold text-base sm:text-lg tracking-widest uppercase hover:opacity-90 transition"
          >
            <span className="w-2.5 h-2.5 bg-orange-500 rounded-full inline-block animate-pulse"></span>
            KSEDC
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-7 text-xs font-mono tracking-widest text-gray-400 uppercase">
            <a href="#jovian" className="hover:text-white transition py-1">Jupiter</a>
            <a href="#mars" className="hover:text-white transition py-1">Mars</a>
            <a href="#moon" className="hover:text-white transition py-1">Moon</a>
            <a href="#europa" className="hover:text-white transition py-1">Europa</a>
            <a href="#saturn" className="hover:text-white transition py-1">Saturn</a>
            <a href="#dashboard" className="hover:text-white transition py-1">Progress</a>
            <a href="#team" className="hover:text-white transition py-1">Team</a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#join"
              className="btn-spacex text-[0.65rem] sm:text-[0.7rem] py-2 px-3 sm:px-4"
            >
              JOIN COALITION
            </a>

            {/* Mobile Menu Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-gray-300 hover:text-white focus:outline-none transition"
              aria-label="Toggle navigation menu"
            >
              <i className={`fas ${mobileMenuOpen ? 'fa-xmark' : 'fa-bars'} text-lg`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer Overlay */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-[61px] sm:top-[69px] bg-black/95 backdrop-blur-2xl border-b border-white/10 px-6 py-8 flex flex-col gap-5 font-mono text-sm tracking-widest uppercase animate-fadeIn shadow-2xl">
            <a
              href="#jovian"
              onClick={handleNavClick}
              className="text-gray-300 hover:text-white hover:pl-2 transition-all flex items-center justify-between py-2 border-b border-white/5"
            >
              <span>01 // JOVIAN HAVEN</span>
              <i className="fas fa-chevron-right text-xs text-gray-600"></i>
            </a>
            <a
              href="#mars"
              onClick={handleNavClick}
              className="text-gray-300 hover:text-white hover:pl-2 transition-all flex items-center justify-between py-2 border-b border-white/5"
            >
              <span>02 // MARS RED CARPET</span>
              <i className="fas fa-chevron-right text-xs text-gray-600"></i>
            </a>
            <a
              href="#moon"
              onClick={handleNavClick}
              className="text-gray-300 hover:text-white hover:pl-2 transition-all flex items-center justify-between py-2 border-b border-white/5"
            >
              <span>03 // MOONWALK MALL</span>
              <i className="fas fa-chevron-right text-xs text-gray-600"></i>
            </a>
            <a
              href="#europa"
              onClick={handleNavClick}
              className="text-gray-300 hover:text-white hover:pl-2 transition-all flex items-center justify-between py-2 border-b border-white/5"
            >
              <span>04 // EUROPA ARK</span>
              <i className="fas fa-chevron-right text-xs text-gray-600"></i>
            </a>
            <a
              href="#saturn"
              onClick={handleNavClick}
              className="text-gray-300 hover:text-white hover:pl-2 transition-all flex items-center justify-between py-2 border-b border-white/5"
            >
              <span>05 // SATURN RINGWAY</span>
              <i className="fas fa-chevron-right text-xs text-gray-600"></i>
            </a>
            <a
              href="#dashboard"
              onClick={handleNavClick}
              className="text-gray-300 hover:text-white hover:pl-2 transition-all flex items-center justify-between py-2 border-b border-white/5"
            >
              <span>TELEMETRY PROGRESS</span>
              <i className="fas fa-chevron-right text-xs text-gray-600"></i>
            </a>
            <a
              href="#team"
              onClick={handleNavClick}
              className="text-gray-300 hover:text-white hover:pl-2 transition-all flex items-center justify-between py-2"
            >
              <span>LEADERSHIP</span>
              <i className="fas fa-chevron-right text-xs text-gray-600"></i>
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="relative min-h-[82vh] lg:min-h-[88vh] flex flex-col justify-center items-center text-center px-4 sm:px-8 pt-28 pb-16 sm:pt-32 sm:pb-20 overflow-hidden bg-black"
      >
        {/* Deep space radial background glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-900/40 via-black to-black pointer-events-none"></div>

        <div className="z-10 max-w-5xl mx-auto flex flex-col items-center w-full my-auto">
          <div className="mb-4 sm:mb-5 px-3.5 sm:px-4 py-1.5 border border-white/20 rounded-full text-[10px] sm:text-xs text-gray-300 font-mono tracking-widest uppercase bg-black/60 backdrop-blur">
            Kangaroo Space Exploration &amp; Development Coalition
          </div>

          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black mb-4 sm:mb-5 tracking-tight uppercase leading-[0.95] sm:leading-[0.92] text-white break-words w-full">
            BOUNCE BEYOND<br />
            <span className="text-gray-400">THE POSSIBLE</span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-2xl mb-6 sm:mb-8 leading-relaxed font-normal px-2">
            Building humanity's next interplanetary habitats and transportation architectures. We do not merely reach for the stars — we negotiate with them.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center w-full sm:w-auto px-4 sm:px-0">
            <a href="#jovian" className="btn-spacex w-full sm:w-auto">
              EXPLORE MISSIONS <i className="fas fa-arrow-down text-xs ml-1"></i>
            </a>
            <a href="#join" className="btn-spacex btn-spacex-accent w-full sm:w-auto">
              JOIN COALITION
            </a>
          </div>
        </div>

        <div className="mt-8 sm:mt-10 pt-2 flex flex-col items-center text-gray-500 text-[10px] sm:text-xs font-mono tracking-widest uppercase animate-bounce">
          <span>SCROLL</span>
          <i className="fas fa-chevron-down mt-1.5 text-[9px]"></i>
        </div>
      </section>

      {/* 5 Alternating SpaceX Style Planet Sections */}
      {MISSIONS.map((mission, index) => {
        const isEven = index % 2 === 0; // Even: Image Right, Text Left. Odd: Image Left, Text Right.

        return (
          <section
            key={mission.id}
            id={mission.id}
            className="relative flex items-center bg-black overflow-hidden py-16 sm:py-20 md:py-24 lg:py-28 px-5 sm:px-10 md:px-16 lg:px-24 border-b border-white/5 min-h-[520px] sm:min-h-[580px] lg:min-h-[700px]"
          >
            {/* Giant Planet Image with Fully Responsive Scaling & Alternating Left/Right Position */}
            <div
              className={`absolute ${
                isEven
                  ? 'right-[-18%] sm:right-[-12%] md:right-[-6%] lg:right-[0%]'
                  : 'left-[-18%] sm:left-[-12%] md:left-[-6%] lg:left-[0%]'
              } top-1/2 -translate-y-1/2 w-[88vw] sm:w-[70vw] md:w-[58vw] lg:w-[52vw] max-w-[900px] aspect-square pointer-events-none z-0 flex items-center justify-center opacity-40 sm:opacity-75 md:opacity-95 transition-opacity`}
            >
              <div className={isEven ? 'planet-faded-wrapper-right' : 'planet-faded-wrapper-left'}>
                <img
                  src={mission.image}
                  alt={mission.imageAlt}
                  referrerPolicy="no-referrer"
                  className="planet-faded-image"
                />
                {/* Seamless feathering gradient */}
                {isEven ? (
                  <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent w-2/5 left-0"></div>
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-l from-black via-black/40 to-transparent w-2/5 right-0"></div>
                )}
                <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black h-full"></div>
              </div>
            </div>

            {/* Alternating Clean SpaceX Content (Left on even, Right on odd) */}
            <div
              className={`relative z-10 max-w-xl lg:max-w-2xl reveal w-full ${
                isEven ? 'mr-auto' : 'ml-auto'
              }`}
            >
              {/* Tag / Category */}
              <div className="text-[11px] sm:text-xs font-mono text-orange-400 sm:text-gray-400 tracking-widest uppercase mb-2 sm:mb-3">
                {mission.tag}
              </div>

              {/* Massive Bold Stacked Title */}
              <h2 className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black uppercase tracking-tight text-white leading-[0.95] sm:leading-[0.92] mb-3 sm:mb-5 break-words">
                {mission.lines.map((line, idx) => (
                  <React.Fragment key={idx}>
                    {line}
                    {idx < mission.lines.length - 1 && <br />}
                  </React.Fragment>
                ))}
              </h2>

              {/* Subtext Paragraph */}
              <p className="text-gray-200 sm:text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6 max-w-lg font-normal">
                {mission.description}
              </p>

              {/* Quick Specs / Monospace Tag */}
              <div className="flex flex-wrap gap-x-4 sm:gap-x-6 gap-y-2 mb-6 sm:mb-8 font-mono text-[11px] sm:text-xs text-gray-300 sm:text-gray-400">
                {mission.specs.slice(0, 2).map((s, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 bg-black/50 sm:bg-transparent px-2 sm:px-0 py-1 sm:py-0 border sm:border-0 border-white/10 rounded-sm"
                  >
                    <span className="w-1.5 h-1.5 bg-orange-500 rounded-full shrink-0"></span>
                    <span className="text-gray-400">{s.label}:</span>
                    <span className="text-white font-medium">{s.value}</span>
                  </div>
                ))}
              </div>

              {/* Minimalist SpaceX Button */}
              <button
                onClick={() => setActiveModalMission(mission)}
                className="btn-spacex w-full sm:w-auto text-center"
              >
                {mission.buttonText} <i className="fas fa-arrow-right text-xs ml-1"></i>
              </button>
            </div>
          </section>
        );
      })}

      {/* Mission Detail Modal (Fully Responsive for Phones & Tablets) */}
      {activeModalMission && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-xl animate-fadeIn">
          <div
            className="relative w-full max-w-2xl lg:max-w-3xl bg-black border border-white/20 p-5 sm:p-8 md:p-12 overflow-y-auto max-h-[88vh] sm:max-h-[90vh] shadow-2xl rounded-sm"
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveModalMission(null)}
              className="absolute top-4 sm:top-6 right-4 sm:right-6 text-gray-400 hover:text-white font-mono text-xs tracking-widest uppercase flex items-center gap-1.5 transition p-2"
              aria-label="Close modal"
            >
              <span>[ CLOSE ✕ ]</span>
            </button>

            <div className="text-[11px] sm:text-xs font-mono text-orange-500 tracking-widest uppercase mb-2 sm:mb-3 pr-20">
              {activeModalMission.tag}
            </div>

            <h3 className="font-display text-2xl sm:text-4xl md:text-5xl font-black uppercase text-white tracking-tight leading-tight mb-4 sm:mb-6">
              {activeModalMission.lines.join(' ')}
            </h3>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
              {activeModalMission.description}
            </p>

            {/* Specifications Matrix */}
            <div className="border-t border-b border-white/10 py-5 sm:py-6 mb-6 sm:mb-8">
              <h4 className="text-[11px] sm:text-xs font-mono uppercase text-gray-500 tracking-widest mb-3 sm:mb-4">
                TECHNICAL SPECIFICATIONS
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 font-mono text-xs">
                {activeModalMission.specs.map((s, idx) => (
                  <div key={idx} className="bg-neutral-950 p-3 border border-white/5">
                    <div className="text-gray-500 text-[10px] uppercase">{s.label}</div>
                    <div className="text-white text-xs sm:text-sm mt-1">{s.value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Equation / Physics */}
            {activeModalMission.equation && (
              <div className="bg-neutral-950 border border-white/10 p-4 sm:p-6 mb-6 sm:mb-8 font-mono overflow-x-auto">
                <div className="text-[10px] text-gray-500 uppercase tracking-widest mb-2">
                  GOVERNING EQUATION
                </div>
                <div className="text-base sm:text-lg md:text-xl text-orange-400 font-bold mb-2 break-all sm:break-normal">
                  {activeModalMission.equation.formula}
                </div>
                <div className="text-xs text-gray-400 leading-relaxed">
                  {activeModalMission.equation.explanation}
                </div>
              </div>
            )}

            {/* Features */}
            <div className="mb-6 sm:mb-8">
              <h4 className="text-[11px] sm:text-xs font-mono uppercase text-gray-500 tracking-widest mb-3">
                MISSION CAPABILITIES
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-300">
                {activeModalMission.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="text-orange-500 font-mono text-xs mt-0.5">•</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Disclaimer */}
            <div className="p-3.5 sm:p-4 border-l-2 border-orange-500 bg-neutral-950 text-[11px] sm:text-xs text-gray-400 font-mono italic leading-relaxed">
              {activeModalMission.disclaimer}
            </div>

            <div className="mt-6 sm:mt-8 flex justify-end">
              <button
                onClick={() => setActiveModalMission(null)}
                className="btn-spacex py-2.5 px-6 text-xs w-full sm:w-auto text-center"
              >
                RETURN TO OVERVIEW
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Progress Dashboard */}
      <section id="dashboard" className="py-14 sm:py-18 md:py-22 px-5 sm:px-10 md:px-16 lg:px-24 bg-black border-b border-white/5">
        <div className="max-w-5xl mx-auto reveal">
          <div className="mb-8 sm:mb-12">
            <h2 className="text-xs font-mono text-gray-500 mb-2 sm:mb-3 tracking-widest uppercase">
              STATUS TELEMETRY
            </h2>
            <h3 className="font-display text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white">
              PROGRESS INDICATORS
            </h3>
          </div>

          <div className="space-y-5 sm:space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 md:gap-4 pb-4 sm:pb-5 border-b border-white/10">
              <div className="md:w-1/3">
                <h4 className="font-display text-base sm:text-lg font-bold uppercase text-white">Jovian Haven Engine</h4>
              </div>
              <div className="md:w-1/3 text-gray-400 text-xs sm:text-sm font-mono">
                Atmospheric simulations underway
              </div>
              <div className="md:w-1/3 flex items-center gap-3 sm:gap-4 mt-1 md:mt-0">
                <div className="progress-bar-bg flex-grow"><div className="progress-bar-fill" data-width="0.3%"></div></div>
                <span className="text-orange-500 font-mono text-xs w-14 text-right">0.003%</span>
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 md:gap-4 pb-4 sm:pb-5 border-b border-white/10">
              <div className="md:w-1/3">
                <h4 className="font-display text-base sm:text-lg font-bold uppercase text-white">Project Red Carpet</h4>
              </div>
              <div className="md:w-1/3 text-gray-400 text-xs sm:text-sm font-mono">
                Cruise cabin mockups ready
              </div>
              <div className="md:w-1/3 flex items-center gap-3 sm:gap-4 mt-1 md:mt-0">
                <div className="progress-bar-bg flex-grow"><div className="progress-bar-fill" data-width="87%"></div></div>
                <span className="text-orange-500 font-mono text-xs w-14 text-right">87%</span>
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 md:gap-4 pb-4 sm:pb-5 border-b border-white/10">
              <div className="md:w-1/3">
                <h4 className="font-display text-base sm:text-lg font-bold uppercase text-white">Moonwalk Mall</h4>
              </div>
              <div className="md:w-1/3 text-gray-400 text-xs sm:text-sm font-mono">
                Regolith retail zoning approved
              </div>
              <div className="md:w-1/3 flex items-center gap-3 sm:gap-4 mt-1 md:mt-0">
                <div className="progress-bar-bg flex-grow"><div className="progress-bar-fill" data-width="42%"></div></div>
                <span className="text-orange-500 font-mono text-xs w-14 text-right">42%</span>
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 md:gap-4 pb-4 sm:pb-5 border-b border-white/10">
              <div className="md:w-1/3">
                <h4 className="font-display text-base sm:text-lg font-bold uppercase text-white">Europa Subsurface Ark</h4>
              </div>
              <div className="md:w-1/3 text-gray-400 text-xs sm:text-sm font-mono">
                Thermal drill containment validated
              </div>
              <div className="md:w-1/3 flex items-center gap-3 sm:gap-4 mt-1 md:mt-0">
                <div className="progress-bar-bg flex-grow"><div className="progress-bar-fill" data-width="11%"></div></div>
                <span className="text-orange-500 font-mono text-xs w-14 text-right">11%</span>
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 md:gap-4 pb-4 sm:pb-5 border-b border-white/10">
              <div className="md:w-1/3">
                <h4 className="font-display text-base sm:text-lg font-bold uppercase text-white">Saturn Ringway</h4>
              </div>
              <div className="md:w-1/3 text-gray-400 text-xs sm:text-sm font-mono">
                Orbital transit route charted
              </div>
              <div className="md:w-1/3 flex items-center gap-3 sm:gap-4 mt-1 md:mt-0">
                <div className="progress-bar-bg flex-grow"><div className="progress-bar-fill" data-width="64%"></div></div>
                <span className="text-orange-500 font-mono text-xs w-14 text-right">64%</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership / Team Section */}
      <section id="team" className="py-14 sm:py-18 md:py-22 px-5 sm:px-10 md:px-16 lg:px-24 bg-black border-b border-white/5">
        <div className="max-w-7xl mx-auto reveal">
          <div className="mb-8 sm:mb-12">
            <h2 className="text-xs font-mono text-gray-500 mb-2 sm:mb-3 tracking-widest uppercase">
              COALITION LEADERSHIP
            </h2>
            <h3 className="font-display text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white">
              EXECUTIVE BOARD
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="team-card bg-neutral-950 border border-white/10 rounded-none overflow-hidden group">
              <div className="team-img-wrapper aspect-[4/5] sm:aspect-[3/4]">
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop"
                  alt="Gabriel Godwin"
                  referrerPolicy="no-referrer"
                  className="team-img"
                />
              </div>
              <div className="p-5 sm:p-6">
                <h4 className="font-display text-base sm:text-lg font-bold text-white uppercase tracking-wider">Gabriel Godwin</h4>
                <p className="text-orange-500 font-mono text-[11px] sm:text-xs uppercase tracking-widest mt-1">CHIEF EXECUTIVE OFFICER</p>
              </div>
            </div>

            <div className="team-card bg-neutral-950 border border-white/10 rounded-none overflow-hidden group">
              <div className="team-img-wrapper aspect-[4/5] sm:aspect-[3/4]">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop"
                  alt="Emmanel John"
                  referrerPolicy="no-referrer"
                  className="team-img"
                />
              </div>
              <div className="p-5 sm:p-6">
                <h4 className="font-display text-base sm:text-lg font-bold text-white uppercase tracking-wider">Emmanel John</h4>
                <p className="text-orange-500 font-mono text-[11px] sm:text-xs uppercase tracking-widest mt-1">CHIEF OPERATING OFFICER</p>
              </div>
            </div>

            <div className="team-card bg-neutral-950 border border-white/10 rounded-none overflow-hidden group sm:col-span-2 lg:col-span-1 max-w-md sm:max-w-none mx-auto w-full">
              <div className="team-img-wrapper aspect-[4/5] sm:aspect-[3/4]">
                <img
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f84?q=80&w=1000&auto=format&fit=crop"
                  alt="Eluzia Ameh-Ako"
                  referrerPolicy="no-referrer"
                  className="team-img"
                />
              </div>
              <div className="p-5 sm:p-6">
                <h4 className="font-display text-base sm:text-lg font-bold text-white uppercase tracking-wider">Eluzia Ameh-Ako</h4>
                <p className="text-orange-500 font-mono text-[11px] sm:text-xs uppercase tracking-widest mt-1">CHIEF TECHNOLOGY OFFICER</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter & Join Section */}
      <section id="join" className="py-14 sm:py-18 md:py-22 px-5 sm:px-10 md:px-16 lg:px-24 bg-black">
        <div className="max-w-4xl mx-auto reveal text-center">
          <div className="text-xs font-mono text-gray-500 mb-3 sm:mb-4 tracking-widest uppercase">
            COMMUNICATION LINK
          </div>
          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-5 sm:mb-6 uppercase tracking-tight text-white leading-[0.95] break-words">
            SUBSCRIBE FOR<br />MISSION UPDATES
          </h2>
          <p className="text-gray-300 sm:text-gray-400 mb-8 sm:mb-10 max-w-xl mx-auto text-xs sm:text-sm md:text-base font-normal px-2 leading-relaxed">
            Receive mission telemetry, prototype blueprints, and interplanetary voyage advisories directly from KSEDC engineering.
          </p>

          {!subscribed ? (
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row max-w-md mx-auto gap-3 px-2 sm:px-0">
              <input
                type="email"
                required
                placeholder="ENTER EMAIL ADDRESS"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                className="flex-grow bg-neutral-950 border border-white/20 px-4 py-3.5 text-white text-xs font-mono uppercase tracking-wider focus:outline-none focus:border-white transition min-h-[44px]"
              />
              <button type="submit" className="btn-spacex py-3.5 px-6 text-xs min-h-[44px] justify-center">
                JOIN
              </button>
            </form>
          ) : (
            <div className="p-4 border border-white/20 bg-neutral-950 text-white font-mono text-xs tracking-widest uppercase max-w-md mx-auto">
              TELEMETRY SUBSCRIPTION CONFIRMED
            </div>
          )}

          <div className="mt-20 sm:mt-28 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center text-xs font-mono text-gray-500 gap-4">
            <div>© KSEDC. BOUNCE BEYOND THE POSSIBLE.</div>
            <div className="flex flex-wrap justify-center gap-5 sm:gap-6 uppercase">
              <a href="#hero" className="hover:text-white transition py-1">TOP</a>
              <a href="#jovian" className="hover:text-white transition py-1">MISSIONS</a>
              <a href="#dashboard" className="hover:text-white transition py-1">TELEMETRY</a>
              <a href="#team" className="hover:text-white transition py-1">LEADERSHIP</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
