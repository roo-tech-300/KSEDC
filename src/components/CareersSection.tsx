import React, { useState } from 'react';
import { CAREER_ROLES } from '../data/missions';
import { CareerRole } from '../types';
import { Briefcase, MapPin, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';
import { soundManager } from './AudioEngine';

interface CareersSectionProps {
  onSelectRole: (role: CareerRole) => void;
}

export const CareersSection: React.FC<CareersSectionProps> = ({ onSelectRole }) => {
  const [selectedDept, setSelectedDept] = useState<string>('All');

  const careerBadges = [
    'Propulsion Engineers',
    'Robotics Developers',
    'Aerospace Designers',
    'Atmospheric Scientists',
    'Software Architects',
    'Biometric Specialists',
    'Artificial-Gravity Theorists',
    'Deep Space Chefs',
    'Quantum Physics Explainers',
    'Interns Who Know Where The Button Is'
  ];

  return (
    <section id="careers" className="py-24 md:py-32 px-6 bg-neutral-950/80 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-block text-xs font-mono text-orange-500 tracking-widest uppercase px-3 py-1 bg-orange-500/10 border border-orange-500/30 rounded-full">
            CAREERS AT KSEDC
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            Build the Future Before It Becomes Obvious
          </h2>
          <p className="text-gray-400 text-base md:text-lg font-light">
            KSEDC is actively recruiting thinkers, engineers, and visionaries capable of turning
            the laws of physics into negotiable guidelines.
          </p>
        </div>

        {/* Roles Pill Cloud */}
        <div className="flex flex-wrap justify-center gap-2.5 max-w-4xl mx-auto mb-16">
          {careerBadges.map((badge, idx) => (
            <span
              key={idx}
              className="px-4 py-2 bg-black/60 border border-white/10 hover:border-orange-500/50 rounded-full text-xs font-mono text-gray-300 hover:text-white transition-all cursor-default"
            >
              {badge}
            </span>
          ))}
        </div>

        {/* Featured Open Roles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CAREER_ROLES.map((role) => (
            <div
              key={role.id}
              className="p-6 md:p-8 bg-black/50 border border-white/10 rounded-xl hover:border-orange-500/60 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[10px] font-mono uppercase px-2.5 py-1 bg-orange-500/10 border border-orange-500/30 text-orange-400 rounded">
                    {role.department}
                  </span>
                  <span className="text-xs font-mono text-gray-500 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-orange-400" />
                    {role.location}
                  </span>
                </div>

                <h3 className="font-display text-2xl font-bold text-white group-hover:text-orange-400 transition-colors mb-3">
                  {role.title}
                </h3>

                <p className="text-sm text-gray-300 font-sans leading-relaxed mb-6 font-light">
                  {role.description}
                </p>

                <div className="space-y-2 mb-6">
                  <div className="text-[11px] font-mono text-gray-400 uppercase">Core Qualifications:</div>
                  {role.requirements.map((req, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-gray-300 font-sans">
                      <CheckCircle2 className="w-3.5 h-3.5 text-orange-500 mt-0.5 shrink-0" />
                      <span>{req}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs font-mono text-gray-500">{role.type}</span>
                <button
                  onClick={() => {
                    soundManager.playChime(700);
                    onSelectRole(role);
                  }}
                  className="inline-flex items-center gap-2 px-4 py-2 border border-white/20 text-white text-xs font-mono uppercase tracking-wider hover:bg-white hover:text-black transition rounded"
                >
                  <span>APPLY FOR ROLE</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
