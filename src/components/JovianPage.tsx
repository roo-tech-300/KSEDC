import React, { useState, useEffect } from 'react';
import jupiterImg from '../assets/images/jupiter_haven_1787608038384.jpg';

interface JovianPageProps {
  onBackToHome: () => void;
  onJoinCoalition: () => void;
}

export const JovianPage: React.FC<JovianPageProps> = ({ onBackToHome, onJoinCoalition }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [contactEmail, setContactEmail] = useState('');
  const [contactSent, setContactSent] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactEmail.trim()) return;
    setContactSent(true);
  };

  const faqs = [
    {
      q: 'Is the Jovian Haven Engine real?',
      a: 'It is a fictional and speculative KSEDC concept created to explore future space habitation and planetary engineering.',
    },
    {
      q: 'Does Jupiter have land?',
      a: 'No. Jupiter does not have a conventional solid surface where humans could build cities.',
    },
    {
      q: 'Why floating cities?',
      a: 'A floating architecture allows habitats to remain at a selected altitude instead of descending into increasingly hot and high-pressure layers.',
    },
    {
      q: 'Can the Engine make all of Jupiter habitable?',
      a: 'No. The concept focuses on controlled, localised Haven Zones rather than transforming the entire planet.',
    },
    {
      q: 'Why call it Jupyter?',
      a: 'Because “Jupiter” is already taken, and because we have decided that spelling is a problem for future civilisations.',
    },
    {
      q: 'Can I live there?',
      a: 'Not yet. Please continue living somewhere with a stable floor.',
    },
  ];

  return (
    <div className="antialiased bg-black text-white selection:bg-white selection:text-black min-h-screen overflow-x-hidden">
      {/* Sticky Sub-Navbar */}
      <nav className="fixed top-0 w-full z-50 text-white bg-black/80 backdrop-blur-xl border-b border-white/10 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <button
              onClick={onBackToHome}
              className="flex items-center gap-2 font-mono text-xs text-gray-400 hover:text-white uppercase tracking-widest transition"
            >
              <i className="fas fa-arrow-left text-[10px]"></i>
              <span className="hidden sm:inline">OVERVIEW</span>
            </button>
            <span className="text-white/20">/</span>
            <span className="font-display font-bold text-xs sm:text-sm tracking-widest uppercase text-white flex items-center gap-2">
              <span className="w-2 h-2 bg-orange-500 rounded-full inline-block animate-pulse"></span>
              JOVIAN HAVEN ENGINE
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onJoinCoalition}
              className="btn-spacex text-[0.65rem] sm:text-[0.7rem] py-1.5 px-3 sm:px-4"
            >
              JOIN COALITION
            </button>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative min-h-[92svh] min-h-[92dvh] flex items-center bg-black overflow-hidden pt-28 pb-16 sm:py-32 px-5 sm:px-10 md:px-16 lg:px-24 border-b border-white/5">
        {/* Giant Jupiter Visual With Seamless Void Edge Fade */}
        <div className="absolute right-[-20%] sm:right-[-12%] md:right-[-6%] lg:right-[0%] top-1/2 -translate-y-1/2 w-[90vw] sm:w-[72vw] md:w-[60vw] lg:w-[54vw] max-w-[950px] aspect-square pointer-events-none z-0 flex items-center justify-center opacity-40 sm:opacity-75 md:opacity-95">
          <div className="planet-faded-wrapper-right">
            <img
              src={jupiterImg}
              alt="Jovian Haven Engine Jupiter"
              referrerPolicy="no-referrer"
              className="planet-faded-image"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent w-2/5 left-0"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black h-full"></div>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-2xl w-full">
          {/* Fictional Product Disclaimer Banner */}
          <div className="mb-5 p-3.5 sm:p-4 bg-orange-950/40 border border-orange-500/40 text-orange-200 font-mono text-xs leading-relaxed flex items-start gap-3">
            <span className="text-orange-400 font-bold text-sm shrink-0">⚠</span>
            <div>
              <span className="text-white font-bold uppercase tracking-wider block mb-0.5">FICTIONAL CONCEPT NOTICE</span>
              Fictional product, as much as we will want to work on something like this, it is fictional and absolutely doesn't exist.
            </div>
          </div>

          <div className="text-[11px] sm:text-xs font-mono text-orange-400 tracking-widest uppercase mb-3">
            KSEDC SPECIAL ARCHITECTURE // 01
          </div>

          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-white leading-[0.93] mb-5">
            JOVIAN HAVEN<br />
            <span className="text-gray-400">ENGINE</span>
          </h1>

          <div className="p-4 sm:p-5 bg-neutral-950/80 border border-white/10 mb-6 backdrop-blur">
            <p className="font-mono text-xs sm:text-sm text-orange-300 font-bold uppercase tracking-wider mb-1">
              THE FUTURE IS JUPYTER.
            </p>
            <p className="text-xs sm:text-sm text-gray-300 italic">
              Yes, we know it is spelt Jupiter. But we are building floating cities above its clouds, so we have decided that spelling is no longer the most interesting problem.
            </p>
          </div>

          <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed mb-6 font-normal">
            The Jovian Haven Engine is KSEDC’s planetary-scale concept for transforming Jupiter’s upper atmosphere into a controlled network of habitable floating environments.
          </p>

          <div className="flex flex-wrap gap-2 text-xs font-mono text-gray-400 mb-8">
            <span className="bg-neutral-900 border border-white/10 px-2.5 py-1">NO SOLID SURFACE</span>
            <span className="bg-neutral-900 border border-white/10 px-2.5 py-1">NO BREATHABLE AIR</span>
            <span className="bg-neutral-900 border border-white/10 px-2.5 py-1">NO REASONABLE CONDITIONS</span>
            <span className="text-orange-500 font-bold px-2 py-1">WE'RE WORKING ON IT.</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <a href="#how-it-works" className="btn-spacex text-center">
              EXPLORE THE ENGINE <i className="fas fa-arrow-down text-xs ml-1"></i>
            </a>
            <button onClick={onJoinCoalition} className="btn-spacex btn-spacex-accent text-center">
              JOIN THE COALITION
            </button>
          </div>

          <div className="mt-8 text-[11px] sm:text-xs font-mono text-gray-500 border-l border-white/20 pl-3">
            A speculative KSEDC project for planetary engineering, atmospheric habitation, and making impossible ideas sound suspiciously organised.
          </div>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section className="py-20 sm:py-28 px-5 sm:px-10 md:px-16 lg:px-24 bg-black border-b border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10 sm:mb-14">
            <div className="text-xs font-mono text-gray-500 tracking-widest uppercase mb-2">
              HOSTILE ENVIRONMENT REPORT
            </div>
            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-black uppercase text-white tracking-tight">
              JUPITER WAS NOT DESIGNED FOR GUESTS
            </h2>
          </div>

          <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-8 max-w-3xl leading-relaxed">
            Jupiter is a massive gas giant presenting a daunting catalog of planetary challenges:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12 font-mono text-xs">
            <div className="bg-neutral-950 border border-white/10 p-4">
              <div className="text-orange-500 mb-1">01 // TOPOGRAPHY</div>
              <div className="text-white text-sm font-bold uppercase mb-1">NO SOLID SURFACE</div>
              <div className="text-gray-400">No conventional solid ground exists anywhere beneath the outer cloud decks.</div>
            </div>
            <div className="bg-neutral-950 border border-white/10 p-4">
              <div className="text-orange-500 mb-1">02 // CHEMISTRY</div>
              <div className="text-white text-sm font-bold uppercase mb-1">H₂ &amp; He ATMOSPHERE</div>
              <div className="text-gray-400">Atmosphere dominated by raw hydrogen and helium with zero free oxygen.</div>
            </div>
            <div className="bg-neutral-950 border border-white/10 p-4">
              <div className="text-orange-500 mb-1">03 // BAROMETRICS</div>
              <div className="text-white text-sm font-bold uppercase mb-1">EXTREME PRESSURE</div>
              <div className="text-gray-400">Crushing depth pressure capable of flattening reinforced titanium hulls.</div>
            </div>
            <div className="bg-neutral-950 border border-white/10 p-4">
              <div className="text-orange-500 mb-1">04 // METEOROLOGY</div>
              <div className="text-white text-sm font-bold uppercase mb-1">SUPER-STORMS</div>
              <div className="text-gray-400">High-velocity jet streams and centuries-long vortexes like the Great Red Spot.</div>
            </div>
            <div className="bg-neutral-950 border border-white/10 p-4">
              <div className="text-orange-500 mb-1">05 // MAGNETICS</div>
              <div className="text-white text-sm font-bold uppercase mb-1">DEADLY RADIATION</div>
              <div className="text-gray-400">Violent radiation belts sustained by Jupiter’s colossal magnetic field.</div>
            </div>
            <div className="bg-neutral-950 border border-white/10 p-4">
              <div className="text-orange-500 mb-1">06 // BIOMECHANICS</div>
              <div className="text-white text-sm font-bold uppercase mb-1">COMPLAINING KNEES</div>
              <div className="text-gray-400">Enough gravity to make your knees file a formal complaint with HR.</div>
            </div>
          </div>

          {/* Duality Callout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-neutral-950 border border-white/10 p-6 sm:p-8">
            <div className="border-l-2 border-red-500/80 pl-4 sm:pl-6">
              <div className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-1">
                MOST PEOPLE LOOKED AND SAID:
              </div>
              <div className="font-display text-xl sm:text-2xl font-bold uppercase text-gray-300 italic">
                “Human habitation is impossible.”
              </div>
            </div>

            <div className="border-l-2 border-orange-500 pl-4 sm:pl-6">
              <div className="text-xs font-mono text-orange-500 uppercase tracking-widest mb-1">
                KSEDC LOOKED AND SAID:
              </div>
              <div className="font-display text-xl sm:text-2xl font-bold uppercase text-white">
                “What if the cities floated?”
              </div>
            </div>
          </div>
          <div className="mt-4 text-right font-mono text-xs text-gray-500">
            That question became the Jovian Haven Engine.
          </div>
        </div>
      </section>

      {/* THE VISION */}
      <section className="py-20 sm:py-28 px-5 sm:px-10 md:px-16 lg:px-24 bg-black border-b border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8 sm:mb-12">
            <div className="text-xs font-mono text-gray-500 tracking-widest uppercase mb-2">
              ARCHITECTURAL SCOPE
            </div>
            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-black uppercase text-white tracking-tight">
              A CIVILISATION ABOVE THE CLOUDS
            </h2>
          </div>

          <div className="space-y-4 text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl mb-10">
            <p>
              The Jovian Haven Engine does not attempt to turn all of Jupiter into Earth.
            </p>
            <p className="text-orange-400 font-mono text-sm">
              That would be unnecessarily ambitious.
            </p>
            <p>
              Instead, it creates carefully controlled <span className="text-white font-bold">Haven Zones</span> within Jupiter’s upper atmosphere. These zones contain floating cities, research stations, agriculture platforms, transport corridors, and emergency shelters.
            </p>
            <p className="text-gray-400 text-sm">
              Each Haven Zone operates as a protected atmospheric island—surrounded by Jupiter’s chaos but maintained by advanced engineering, artificial fields, autonomous systems, and unreasonable confidence.
            </p>
          </div>

          {/* Equation Box */}
          <div className="bg-neutral-950 border border-white/20 p-6 sm:p-8 font-mono">
            <div className="text-xs text-gray-500 uppercase tracking-widest mb-4">
              THE BASIC FORMULATION
            </div>
            <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-base sm:text-2xl md:text-3xl font-black text-white uppercase">
              <span>JUPITER</span>
              <span className="text-orange-500">+</span>
              <span>ENGINEERING</span>
              <span className="text-orange-500">+</span>
              <span className="text-orange-400">AUDACITY</span>
              <span className="text-orange-500">→</span>
              <span className="text-white underline decoration-orange-500 underline-offset-4">
                FLOATING CIVILISATION
              </span>
            </div>
            <div className="mt-4 text-xs text-gray-500 italic">
              *The equation is still being reviewed by our more serious scientists.
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS (6 PILLARS) */}
      <section id="how-it-works" className="py-20 sm:py-28 px-5 sm:px-10 md:px-16 lg:px-24 bg-black border-b border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 sm:mb-16">
            <div className="text-xs font-mono text-gray-500 tracking-widest uppercase mb-2">
              ENGINEERING MATRIX
            </div>
            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-black uppercase text-white tracking-tight">
              HOW IT WORKS
            </h2>
          </div>

          <div className="space-y-12 sm:space-y-16">
            {/* 1. Atmospheric Conversion */}
            <div className="border-t border-white/10 pt-6 sm:pt-8">
              <div className="text-xs font-mono text-orange-500 uppercase tracking-widest mb-2">
                01 // CHEMICAL SYNTHESIS
              </div>
              <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold uppercase text-white mb-4">
                ATMOSPHERIC CONVERSION
              </h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
                Jupiter contains enormous quantities of hydrogen and helium, but humans need oxygen, nitrogen, water, and a carefully balanced atmosphere. The Engine uses magnetic plasma filters and atmospheric processors to separate useful compounds, manufacture breathable gases, and recycle the atmosphere inside each Haven Zone.
              </p>
              <div className="bg-neutral-950 p-4 border border-white/5 font-mono text-xs text-gray-400">
                <span className="text-orange-400 font-bold uppercase">OBJECTIVE:</span> Create a breathable, pressurised environment without asking Jupiter politely to become Earth.
              </div>
            </div>

            {/* 2. Gravity-Balancing Fields */}
            <div className="border-t border-white/10 pt-6 sm:pt-8">
              <div className="text-xs font-mono text-orange-500 uppercase tracking-widest mb-2">
                02 // RELATIVISTIC BIOMECHANICS
              </div>
              <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold uppercase text-white mb-4">
                GRAVITY-BALANCING FIELDS
              </h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
                Jupiter’s gravity is considerably stronger than Earth’s (~2.4g). Long-term habitation uses gravitic fields to generate Earth-like conditions inside selected zones. Outside, Jupiter continues being Jupiter. Inside, people can walk normally, lift objects, and avoid becoming exhausted by carrying a small suitcase.
              </p>
              <div className="bg-neutral-950 p-4 sm:p-5 border border-white/10 font-mono mb-2">
                <div className="text-lg sm:text-2xl text-orange-400 font-bold">
                  g<sub>Haven</sub> ≈ g<sub>Earth</sub>
                </div>
              </div>
              <div className="text-xs text-gray-500 italic font-mono">
                *Subject to successful development of gravitic technology, which is currently the part of the project involving the most dramatic hand gestures.
              </div>
            </div>

            {/* 3. Planetary Radiation Shield */}
            <div className="border-t border-white/10 pt-6 sm:pt-8">
              <div className="text-xs font-mono text-orange-500 uppercase tracking-widest mb-2">
                03 // MAGNETOSPHERE DYNAMICS
              </div>
              <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold uppercase text-white mb-4">
                PLANETARY RADIATION SHIELD
              </h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
                The Engine generates a large-scale superconducting magnetic shield around the operational region while smaller local shields protect cities, aircraft, maintenance drones, and transport corridors.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-gray-300 mb-4">
                <div className="flex items-center gap-2 bg-neutral-950 p-2 border border-white/5">
                  <span className="text-orange-500">▪</span> Deflects high-energy charged particles
                </div>
                <div className="flex items-center gap-2 bg-neutral-950 p-2 border border-white/5">
                  <span className="text-orange-500">▪</span> Reduces biological radiation exposure
                </div>
                <div className="flex items-center gap-2 bg-neutral-950 p-2 border border-white/5">
                  <span className="text-orange-500">▪</span> Protects avionics and quantum electronics
                </div>
                <div className="flex items-center gap-2 bg-neutral-950 p-2 border border-white/5">
                  <span className="text-orange-500">▪</span> Creates safe aerial corridors
                </div>
              </div>
              <div className="bg-neutral-950 p-4 sm:p-5 border border-white/10 font-mono">
                <div className="text-lg sm:text-2xl text-orange-400 font-bold mb-2">
                  R<sub>human</sub> = R<sub>Jupiter</sub> × (1 − η<sub>shield</sub>)
                </div>
                <div className="text-xs text-gray-400">
                  Our target is to make η<sub>shield</sub> extremely close to 1. Our current test result is closer to “please remain inside the vehicle.”
                </div>
              </div>
            </div>

            {/* 4. Storm-Control Network */}
            <div className="border-t border-white/10 pt-6 sm:pt-8">
              <div className="text-xs font-mono text-orange-500 uppercase tracking-widest mb-2">
                04 // AUTONOMOUS SWARM METEOROLOGY
              </div>
              <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold uppercase text-white mb-4">
                STORM-CONTROL NETWORK
              </h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
                Jupiter’s storms are planetary-scale vortexes. Thousands of autonomous drones measure wind vectors, absorb lightning electrical discharges, transfer heat between layers, and establish temporary calm belts.
              </p>
              <div className="bg-neutral-950 p-4 border border-white/5 font-mono text-xs text-gray-400">
                <span className="text-orange-400 font-bold uppercase">OBJECTIVE:</span> We do not eliminate every storm (that would be rude to the planet). We establish stable calm belts where floating habitats operate safely.
              </div>
            </div>

            {/* 5. Floating Habitat Anchors */}
            <div className="border-t border-white/10 pt-6 sm:pt-8">
              <div className="text-xs font-mono text-orange-500 uppercase tracking-widest mb-2">
                05 // BUOYANCY &amp; TETHER TELEMETRY
              </div>
              <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold uppercase text-white mb-4">
                FLOATING HABITAT ANCHORS
              </h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
                Enormous buoyant platforms heated with controlled-temperature hydrogen utilize magnetic tethers and thrusters to stay strictly inside the 1.2-bar Haven Layer corridor.
              </p>
              <div className="bg-neutral-950 p-4 sm:p-5 border border-white/10 font-mono mb-2">
                <div className="text-sm sm:text-lg text-orange-400 font-bold">
                  Habitat stability = buoyancy + magnetic control + continuous monitoring
                </div>
              </div>
              <div className="text-xs text-gray-500 italic font-mono">
                In other words: floating, tethering, correcting, and hoping nothing important starts making a strange noise.
              </div>
            </div>

            {/* 6. Cloud-to-Water Processing */}
            <div className="border-t border-white/10 pt-6 sm:pt-8">
              <div className="text-xs font-mono text-orange-500 uppercase tracking-widest mb-2">
                06 // HYDROLOGICAL HARVESTING
              </div>
              <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold uppercase text-white mb-4">
                CLOUD-TO-WATER PROCESSING
              </h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
                Atmospheric moisture scrubbers harvest, purify, and distribute water for hydroponics, cooling systems, drinking reserves, and very expensive space fountains. 100% of wastewater is continuously recycled.
              </p>
              <div className="p-4 border-l-2 border-orange-500 bg-neutral-950 text-xs sm:text-sm text-gray-300 font-mono">
                Because on Jupyter, you do not waste water. You admire it, purify it, and use it again.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE HAVEN ZONES & CITY LAYERS */}
      <section className="py-20 sm:py-28 px-5 sm:px-10 md:px-16 lg:px-24 bg-black border-b border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10 sm:mb-14">
            <div className="text-xs font-mono text-gray-500 tracking-widest uppercase mb-2">
              COLONY BLUEPRINTS
            </div>
            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-black uppercase text-white tracking-tight">
              FLOATING CITIES WITH NO GROUND FLOOR
            </h2>
          </div>

          <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-8 max-w-3xl leading-relaxed">
            Each Haven Zone is designed as a modular, self-contained floating metropolis featuring residential districts, hydroponic biomes, energy reactors, drone ports, storm shelters, and at least one restaurant claiming the best view in the Solar System.
          </p>

          {/* City Layers Table */}
          <div className="border border-white/20 bg-neutral-950 overflow-hidden mb-12">
            <div className="p-4 border-b border-white/10 text-xs font-mono uppercase text-gray-400 tracking-widest">
              PROPOSED STRATOSPHERIC CITY LAYERS
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left font-mono text-xs">
                <thead>
                  <tr className="border-b border-white/10 text-gray-500 uppercase bg-black">
                    <th className="py-3.5 px-4 sm:px-6">LAYER</th>
                    <th className="py-3.5 px-4 sm:px-6">PURPOSE</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-gray-300">
                  <tr className="hover:bg-white/5 transition">
                    <td className="py-4 px-4 sm:px-6 font-bold text-white uppercase text-xs sm:text-sm">Crown Layer</td>
                    <td className="py-4 px-4 sm:px-6">Communications array, orbital solar collectors, and sub-orbital shuttle ports</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition bg-orange-950/20">
                    <td className="py-4 px-4 sm:px-6 font-bold text-orange-400 uppercase text-xs sm:text-sm">Haven Layer</td>
                    <td className="py-4 px-4 sm:px-6 text-white font-medium">Homes, research laboratories, aeroponic food domes, and public civic parks</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition">
                    <td className="py-4 px-4 sm:px-6 font-bold text-white uppercase text-xs sm:text-sm">Utility Layer</td>
                    <td className="py-4 px-4 sm:px-6">Atmospheric water processors, plasma fusion units, and drone manufacturing</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition">
                    <td className="py-4 px-4 sm:px-6 font-bold text-yellow-500 uppercase text-xs sm:text-sm">Warning Layer</td>
                    <td className="py-4 px-4 sm:px-6">Autonomous turbulence sensors, lightning arrestors, and emergency thrusters</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition bg-red-950/20">
                    <td className="py-4 px-4 sm:px-6 font-bold text-red-400 uppercase text-xs sm:text-sm">Absolutely Do Not Visit Layer</td>
                    <td className="py-4 px-4 sm:px-6 text-gray-400 italic">Deeper super-compressed supercritical hydrogen atmosphere</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ENERGY ARCHITECTURE */}
      <section className="py-20 sm:py-28 px-5 sm:px-10 md:px-16 lg:px-24 bg-black border-b border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10 sm:mb-14">
            <div className="text-xs font-mono text-gray-500 tracking-widest uppercase mb-2">
              POWER GENERATION
            </div>
            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-black uppercase text-white tracking-tight">
              POWERING A PLANET-SIZED IDEA
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div className="space-y-3 font-mono text-xs text-gray-300">
              <div className="p-3 bg-neutral-950 border border-white/5 flex items-center gap-3">
                <span className="w-2 h-2 bg-orange-500 rounded-full"></span> Orbital solar collector arrays
              </div>
              <div className="p-3 bg-neutral-950 border border-white/5 flex items-center gap-3">
                <span className="w-2 h-2 bg-orange-500 rounded-full"></span> Atmospheric hydrogen fusion plants
              </div>
              <div className="p-3 bg-neutral-950 border border-white/5 flex items-center gap-3">
                <span className="w-2 h-2 bg-orange-500 rounded-full"></span> Thermoelectric altitude gradient taps
              </div>
              <div className="p-3 bg-neutral-950 border border-white/5 flex items-center gap-3">
                <span className="w-2 h-2 bg-orange-500 rounded-full"></span> Magnetic induction dynamos
              </div>
              <div className="p-3 bg-neutral-950 border border-white/5 flex items-center gap-3 text-red-400">
                <span className="w-2 h-2 bg-red-500 rounded-full"></span> Backup generator labelled “Please Do Not Activate”
              </div>
            </div>

            <div className="bg-neutral-950 border border-white/20 p-6 sm:p-8 font-mono flex flex-col justify-center">
              <div className="text-xs text-gray-500 uppercase tracking-widest mb-2">PRIMARY ENERGY LAW</div>
              <div className="text-3xl sm:text-5xl font-black text-orange-400 mb-3">E = mc²</div>
              <div className="text-xs text-gray-400 leading-relaxed">
                We included this equation because it is both relevant and excellent for making a presentation look expensive.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT PHASES */}
      <section className="py-20 sm:py-28 px-5 sm:px-10 md:px-16 lg:px-24 bg-black border-b border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 sm:mb-16">
            <div className="text-xs font-mono text-gray-500 tracking-widest uppercase mb-2">
              ROADMAP
            </div>
            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-black uppercase text-white tracking-tight">
              PROJECT PHASES
            </h2>
          </div>

          <div className="space-y-6 font-mono">
            <div className="border border-white/10 bg-neutral-950 p-6">
              <div className="text-orange-500 text-xs tracking-widest uppercase mb-1">PHASE 01</div>
              <h3 className="font-display text-xl font-bold uppercase text-white mb-2">THE AUDACIOUS SPREADSHEET</h3>
              <p className="text-xs sm:text-sm text-gray-400 mb-2">
                Atmospheric simulations, radiation models, buoyant platform CAD, and impressive diagrams.
              </p>
              <div className="text-[10px] text-gray-500 uppercase">STATUS: COMPLETE</div>
            </div>

            <div className="border border-white/10 bg-neutral-950 p-6">
              <div className="text-orange-500 text-xs tracking-widest uppercase mb-1">PHASE 02</div>
              <h3 className="font-display text-xl font-bold uppercase text-white mb-2">THE VERY EXPENSIVE BALLOON</h3>
              <p className="text-xs sm:text-sm text-gray-400 mb-2">
                Launch unmanned atmospheric buoyancy test probes to confirm balloons do not immediately become weather events.
              </p>
              <div className="text-[10px] text-orange-400 uppercase">STATUS: ACTIVE TESTING</div>
            </div>

            <div className="border border-white/10 bg-neutral-950 p-6">
              <div className="text-orange-500 text-xs tracking-widest uppercase mb-1">PHASE 03</div>
              <h3 className="font-display text-xl font-bold uppercase text-white mb-2">THE FIRST HAVEN PLATFORM</h3>
              <p className="text-xs sm:text-sm text-gray-400 mb-2">
                Deploy unmanned platform with radiation shields, water scrubbers, and invite zero humans yet.
              </p>
              <div className="text-[10px] text-gray-500 uppercase">STATUS: SCHEDULED</div>
            </div>

            <div className="border border-white/10 bg-neutral-950 p-6">
              <div className="text-orange-500 text-xs tracking-widest uppercase mb-1">PHASE 04</div>
              <h3 className="font-display text-xl font-bold uppercase text-white mb-2">THE FIRST HUMAN-READY ZONE</h3>
              <p className="text-xs sm:text-sm text-gray-400 mb-2">
                Install full life-support systems, emergency corridors, and supervised research crews.
              </p>
              <div className="text-[10px] text-gray-500 uppercase">STATUS: DESIGN ARCHITECTURE</div>
            </div>

            <div className="border border-white/10 bg-neutral-950 p-6">
              <div className="text-orange-500 text-xs tracking-widest uppercase mb-1">PHASE 05</div>
              <h3 className="font-display text-xl font-bold uppercase text-white mb-2">JUPYTER BECOMES A PLACE</h3>
              <p className="text-xs sm:text-sm text-gray-400 mb-2">
                Expand the Haven city network, inter-habitat aerial transit, and rename the tourism department.
              </p>
              <div className="text-[10px] text-gray-500 uppercase">STATUS: FUTURE HORIZON</div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT COULD GO WRONG */}
      <section className="py-20 sm:py-28 px-5 sm:px-10 md:px-16 lg:px-24 bg-black border-b border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10 sm:mb-14">
            <div className="text-xs font-mono text-gray-500 tracking-widest uppercase mb-2">
              RISK ASSESSMENT
            </div>
            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-black uppercase text-white tracking-tight">
              WE PREFER HONEST AMBITION
            </h2>
          </div>

          <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-8 max-w-3xl leading-relaxed">
            The Jovian Haven Engine is a speculative concept with monumental engineering hurdles. Major risks include radiation leakage, storm shear, loss of buoyancy, communication lag, and engineers saying “It should be fine” immediately before it is not fine.
          </p>

          <div className="p-5 sm:p-6 border-l-2 border-orange-500 bg-neutral-950 text-xs sm:text-sm font-mono text-gray-300 leading-relaxed">
            KSEDC develops this concept through rigorous simulation, robotic validation, and progressively larger tests. No one is being sent to Jupiter tomorrow. Probably.
          </div>
        </div>
      </section>

      {/* FAQS */}
      <section className="py-20 sm:py-28 px-5 sm:px-10 md:px-16 lg:px-24 bg-black border-b border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 sm:mb-16 text-center">
            <div className="text-xs font-mono text-gray-500 tracking-widest uppercase mb-2">
              INQUIRIES &amp; CLARIFICATIONS
            </div>
            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-black uppercase text-white tracking-tight">
              FREQUENTLY ASKED QUESTIONS
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="border border-white/10 bg-neutral-950 overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-4 sm:p-6 flex justify-between items-center text-left font-display font-bold uppercase text-sm sm:text-base text-white hover:text-orange-400 transition"
                  >
                    <span>{faq.q}</span>
                    <i className={`fas fa-chevron-${isOpen ? 'up' : 'down'} text-xs text-orange-500 ml-4`}></i>
                  </button>
                  {isOpen && (
                    <div className="px-4 sm:px-6 pb-6 text-xs sm:text-sm text-gray-300 font-mono leading-relaxed border-t border-white/5 pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL SECTION */}
      <section className="py-20 sm:py-28 md:py-32 px-5 sm:px-10 md:px-16 lg:px-24 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-xs font-mono text-gray-500 mb-3 tracking-widest uppercase">
            THE NEW FRONTIER
          </div>
          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 uppercase tracking-tight text-white leading-[0.95] break-words">
            MARS HAS THE GROUND.<br />
            <span className="text-orange-500">JUPYTER HAS THE ATMOSPHERE.</span>
          </h2>
          <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            The future of civilisation may not be built on another planet’s surface. It may float above the clouds. Suspended between atmosphere and space, protected by technology, cooperation, and a truly unreasonable number of backup systems.
          </p>

          <p className="font-mono text-sm uppercase text-gray-400 mb-10 tracking-widest">
            THE FUTURE IS NOT WAITING ON THE GROUND. <span className="text-white font-bold">IT IS FLOATING.</span>
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 max-w-xl mx-auto mb-16">
            <button onClick={onBackToHome} className="btn-spacex">
              <i className="fas fa-arrow-left text-xs mr-1"></i> OTHER KSEDC MISSIONS
            </button>
            <button onClick={onJoinCoalition} className="btn-spacex btn-spacex-accent">
              JOIN THE COALITION
            </button>
            <button
              onClick={() => setContactModalOpen(true)}
              className="btn-spacex"
            >
              CONTACT RESEARCH TEAM
            </button>
          </div>

          <div className="pt-10 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center text-xs font-mono text-gray-500 gap-4">
            <div>KANGAROO SPACE EXPLORATION AND DEVELOPMENT COALITION</div>
            <div className="text-gray-400">KSEDC — BOUNCE BEYOND THE POSSIBLE</div>
          </div>
        </div>
      </section>

      {/* Contact Research Team Modal */}
      {contactModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-fadeIn">
          <div className="relative w-full max-w-md bg-black border border-white/20 p-6 sm:p-8">
            <button
              onClick={() => {
                setContactModalOpen(false);
                setContactSent(false);
              }}
              className="absolute top-4 right-4 text-gray-400 hover:text-white font-mono text-xs"
            >
              [ CLOSE ✕ ]
            </button>

            <div className="text-xs font-mono text-orange-500 uppercase tracking-widest mb-2">
              ATMOSPHERIC TRANSMISSION
            </div>
            <h3 className="font-display text-2xl font-bold uppercase text-white mb-4">
              CONTACT JOVIAN RESEARCH
            </h3>

            {!contactSent ? (
              <form onSubmit={handleContactSubmit} className="space-y-4 font-mono text-xs">
                <div>
                  <label className="block text-gray-400 uppercase mb-1">CALLSIGN / EMAIL</label>
                  <input
                    type="email"
                    required
                    placeholder="researcher@domain.org"
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    className="w-full bg-neutral-950 border border-white/20 p-3 text-white focus:outline-none focus:border-white uppercase"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 uppercase mb-1">MEMORANDUM / INQUIRY</label>
                  <textarea
                    rows={3}
                    placeholder="Atmospheric buoyancy questions or fusion telemetry inquiry..."
                    className="w-full bg-neutral-950 border border-white/20 p-3 text-white focus:outline-none focus:border-white"
                  ></textarea>
                </div>
                <button type="submit" className="btn-spacex w-full text-center py-3">
                  TRANSMIT TO JUPYTER
                </button>
              </form>
            ) : (
              <div className="p-4 bg-neutral-950 border border-white/20 font-mono text-xs text-orange-400">
                TRANSMISSION ACKNOWLEDGED. Our atmospheric engineering division will respond once storm telemetry stabilizes.
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
