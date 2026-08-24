import React from 'react';
import { TEAM_MEMBERS } from '../data/missions';
import { Shield, Sparkles, ArrowRight, Award } from 'lucide-react';
import { soundManager } from './AudioEngine';

interface TeamSectionProps {
  onOpenJoin: () => void;
}

export const TeamSection: React.FC<TeamSectionProps> = ({ onOpenJoin }) => {
  return (
    <section id="team" className="py-24 md:py-32 px-6 bg-[#030304] border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: 3 Leadership Executive Cards */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {TEAM_MEMBERS.map((member, idx) => (
              <div
                key={idx}
                onMouseEnter={() => soundManager.playChime(550 + idx * 60)}
                className="bg-black/60 border border-white/10 rounded-xl overflow-hidden group flex flex-col hover:border-orange-500/80 transition-all duration-500 shadow-xl"
              >
                {/* Photo with grayscale to color hover transition */}
                <div className="relative aspect-[4/5] overflow-hidden bg-neutral-900">
                  <img
                    src={member.image}
                    alt={member.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />
                  
                  {/* Clearance Badge Tag */}
                  <div className="absolute top-3 left-3 text-[10px] font-mono tracking-widest px-2 py-0.5 bg-black/80 backdrop-blur border border-white/15 text-orange-400 rounded">
                    {member.clearanceLevel}
                  </div>
                </div>

                {/* Member Info */}
                <div className="p-5 text-center flex-grow flex flex-col justify-between bg-black/40">
                  <div>
                    <h3 className="font-display text-xl font-bold text-white group-hover:text-orange-400 transition-colors tracking-wide">
                      {member.name}
                    </h3>
                    <p className="text-orange-400 font-mono text-xs uppercase tracking-widest mt-1 font-semibold">
                      {member.role}
                    </p>
                    <p className="text-[11px] text-gray-400 font-sans mt-2">
                      {member.title}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/5 text-[11px] font-mono text-gray-500 italic">
                    "{member.quote}"
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Leadership Quote & Manifesto Card */}
          <div className="lg:col-span-4 bg-black/80 border border-white/15 p-8 md:p-10 flex flex-col justify-between rounded-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-orange-600/10 blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-orange-500 tracking-widest uppercase mb-4">
                <Award className="w-4 h-4 text-orange-500" />
                <span>EXECUTIVE COMMAND</span>
              </div>

              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-white leading-snug mb-6">
                "We are not merely imagining life beyond Earth. We are filing the blueprints to build a shopping mall on the Moon."
              </h2>

              <p className="text-sm text-gray-400 font-sans leading-relaxed font-light mb-6">
                Founded by an unconventional alliance of aerospace propulsion theorists,
                extreme-environment architects, and quantum observers, KSEDC operates on the
                premise that humanity’s destiny is interplanetary.
              </p>
            </div>

            <div className="pt-6 border-t border-white/10 space-y-4">
              <div className="flex items-center justify-between text-xs font-mono text-gray-400">
                <span>COALITION HEADQUARTERS:</span>
                <span className="text-white">ORBITAL LATTICE ALPHA</span>
              </div>

              <button
                onClick={() => {
                  soundManager.playChime(800);
                  onOpenJoin();
                }}
                className="w-full py-3 border border-orange-500 text-orange-400 font-mono text-xs uppercase tracking-widest hover:bg-orange-500 hover:text-black transition-all flex items-center justify-center gap-2 rounded"
              >
                <span>REQUEST COMMAND CLEARANCE</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
