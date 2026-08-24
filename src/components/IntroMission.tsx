import React from 'react';
import { Zap, Globe, Sparkles, Weight, Cloud, Clock, ShieldCheck, Compass } from 'lucide-react';
import { soundManager } from './AudioEngine';

export const IntroMission: React.FC = () => {
  const pillars = [
    {
      icon: Zap,
      title: 'Experimental Propulsion',
      desc: 'Pulsed continuous magneto-fusion drives capable of 380 km/s cruise velocities.',
      metric: '380 km/s v_eff'
    },
    {
      icon: Globe,
      title: 'Planetary Engineering',
      desc: 'Atmospheric conversion arrays transforming unbreathable gas giants into living habitats.',
      metric: '88% Conversion η'
    },
    {
      icon: Sparkles,
      title: 'Luxury Extraterrestrial Transport',
      desc: 'Turning treacherous 9-month transfers into 7-day luxury interstellar getaways.',
      metric: '0.38g Spin Habitats'
    },
    {
      icon: Weight,
      title: 'Artificial Gravity',
      desc: 'Dual-toroid counter-rotating centrifuges preserving passenger bone density.',
      metric: '1.0g Adjustable'
    },
    {
      icon: Cloud,
      title: 'Atmospheric Architecture',
      desc: 'Superheated buoyant aerostat citadels suspended high inside Jovian storm belts.',
      metric: '1.0 bar Haven Zone'
    },
    {
      icon: Clock,
      title: 'Time-Adjacent Physics',
      desc: 'Relativistic quantum dilation monitoring for prototypes that arrive slightly too early.',
      metric: 'γ = 1.45x Dilation'
    }
  ];

  return (
    <section id="intro" className="py-24 md:py-32 px-6 bg-neutral-950/60 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Narrative */}
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono text-orange-500 tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-orange-500"></span>
              <span>COALITION ARCHITECTURE</span>
            </div>
            
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.05]">
              What is <span className="text-orange-500">KSEDC</span>?
            </h2>

            <p className="text-gray-300 text-base md:text-lg leading-relaxed font-light">
              The Kangaroo Space Exploration and Development Coalition (KSEDC) is a
              fictional-forward aerospace research coalition dedicated to making tomorrow’s
              impossible physics slightly less impossible.
            </p>

            <div className="border-l-2 border-orange-500/80 pl-6 py-2 bg-white/[0.02] rounded-r">
              <p className="italic text-gray-200 text-base md:text-lg font-light leading-relaxed">
                "Make space feel less like a lethal vacuum and more like a vibrant frontier where humans can comfortably explore, live, and build."
              </p>
            </div>

            <div className="pt-2">
              <div className="flex items-center gap-4 text-xs font-mono text-gray-400">
                <span className="flex items-center gap-1 text-white">
                  <ShieldCheck className="w-4 h-4 text-orange-500" />
                  ISO-9001 CELESTIAL
                </span>
                <span>•</span>
                <span>GLOBAL CONSORTIUM</span>
                <span>•</span>
                <span>UN-OUTER-SPACE COMPLIANT</span>
              </div>
            </div>
          </div>

          {/* Right 6 Engineering Competencies Grid */}
          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  onMouseEnter={() => soundManager.playChime(400 + idx * 40)}
                  className="p-6 bg-black/40 border border-white/10 rounded-xl hover:border-orange-500/70 hover:bg-white/[0.03] transition-all duration-300 group flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-orange-400 mb-4 group-hover:bg-orange-500 group-hover:text-black transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-gray-400 leading-relaxed font-sans">
                      {pillar.desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-gray-500">
                    <span>SPECIFICATION:</span>
                    <span className="text-orange-400 font-bold">{pillar.metric}</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
