import React from 'react';
import { Microscope, Mountain, Eye, ShieldAlert, Sparkles } from 'lucide-react';
import { soundManager } from './AudioEngine';

export const PrinciplesSection: React.FC = () => {
  const principles = [
    {
      icon: Microscope,
      title: 'Be Curious',
      subtitle: 'Uncomfortable Inquiry',
      desc: 'Ask questions that make conventional terrestrial laboratories distinctly uncomfortable.'
    },
    {
      icon: Mountain,
      title: 'Be Ambitious',
      subtitle: 'Audacious Scale',
      desc: 'If the first blueprint draft does not frighten the budget committee, it is far too modest.'
    },
    {
      icon: Eye,
      title: 'Be Transparent',
      subtitle: 'Honest Science',
      desc: 'A conceptual diagram is not the same as a flight-certified vehicle. We label our madness clearly.'
    },
    {
      icon: ShieldAlert,
      title: 'Be Safe',
      subtitle: 'Timeline Integrity',
      desc: 'No passenger, planet, moon, or causal timeline should be damaged unnecessarily.'
    },
    {
      icon: Sparkles,
      title: 'Be Weird',
      subtitle: 'Creative Genius',
      desc: 'The universe needs engineers, storytellers, dreamers, and people who know where the red button is.'
    }
  ];

  return (
    <section id="principles" className="py-24 md:py-32 px-6 bg-neutral-950/40 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-block text-xs font-mono text-orange-500 tracking-widest uppercase px-3 py-1 bg-orange-500/10 border border-orange-500/30 rounded-full">
            KSEDC CORE CREED
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            Big Ideas. <span className="text-orange-500">Small Disclaimers.</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg font-light">
            Every audacious mission and propulsion engine follows our five non-negotiable principles.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {principles.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                onMouseEnter={() => soundManager.playChime(600 + idx * 50)}
                className="p-6 bg-black/60 border border-white/10 rounded-xl hover:border-orange-500 hover:-translate-y-1.5 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-orange-400 mb-6 group-hover:bg-orange-500 group-hover:text-black transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="text-[10px] font-mono text-orange-400 uppercase tracking-widest mb-1">
                    {p.subtitle}
                  </div>
                  <h3 className="font-display text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed font-sans font-light">
                    {p.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 text-[10px] font-mono text-gray-600 group-hover:text-gray-400 transition">
                  TENET #{idx + 1}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
