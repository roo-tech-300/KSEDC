import React from 'react';
import { motion } from 'motion/react';
import { PlanetData } from '../types';
import { Planet3D } from './Planet3D';
import { X, CheckCircle2, Clock, AlertTriangle, ShieldCheck, Zap, Sliders, Layers } from 'lucide-react';
import { soundManager } from './AudioEngine';

interface BlueprintModalProps {
  mission: PlanetData;
  onClose: () => void;
  onOpenEquationLab: (mission: PlanetData) => void;
}

export const BlueprintModal: React.FC<BlueprintModalProps> = ({
  mission,
  onClose,
  onOpenEquationLab
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-2xl">
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 20 }}
        className="bg-neutral-950 border border-white/15 rounded-2xl w-full max-w-5xl max-h-[90vh] overflow-y-auto shadow-2xl relative flex flex-col text-white"
      >
        {/* Sticky Header */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between sticky top-0 bg-neutral-950/95 backdrop-blur-xl z-30">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-orange-400 uppercase tracking-widest mb-1">
              <span>{mission.blueprint.codename}</span>
              <span>•</span>
              <span>{mission.tagline}</span>
            </div>
            <h2 className="text-2xl font-display font-bold text-white uppercase">
              {mission.name} Mission Architecture Dossier
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-2.5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 text-gray-400 hover:text-white transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Layout */}
        <div className="p-6 md:p-8 space-y-8">
          
          {/* Top 3D Sphere & High-Level Specs Banner */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-black/50 border border-white/10 rounded-xl p-6">
            <div className="md:col-span-5 h-[280px] relative flex items-center justify-center">
              <Planet3D planetId={mission.id} autoRotate={true} showControls={false} />
            </div>

            <div className="md:col-span-7 space-y-4">
              <div className="text-xs font-mono text-orange-400 uppercase">
                EXECUTIVE SUMMARY
              </div>
              <h3 className="text-xl font-bold font-display text-white">
                {mission.headline}
              </h3>
              <p className="text-sm text-gray-300 font-sans leading-relaxed font-light">
                {mission.extendedDescription}
              </p>

              {mission.quote && (
                <div className="p-3 bg-white/5 border-l-2 border-orange-500 rounded-r text-xs text-gray-300 italic font-mono">
                  "{mission.quote}"
                  {mission.quoteAuthor && (
                    <span className="block not-italic text-gray-500 mt-1">— {mission.quoteAuthor}</span>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Technical Specifications Grid */}
          <div>
            <div className="text-xs font-mono text-gray-400 uppercase tracking-wider mb-4">
              CRITICAL SYSTEM SPECIFICATIONS
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="bg-white/5 border border-white/10 p-4 rounded-xl">
                <div className="text-[11px] font-mono text-gray-400">PROPULSION ARCHITECTURE</div>
                <div className="text-sm font-bold text-white mt-1">{mission.blueprint.architectureType}</div>
              </div>
              <div className="bg-white/5 border border-white/10 p-4 rounded-xl">
                <div className="text-[11px] font-mono text-gray-400">PAYLOAD DISPLACEMENT</div>
                <div className="text-sm font-bold text-white mt-1">{mission.blueprint.payloadCapacity}</div>
              </div>
              <div className="bg-white/5 border border-white/10 p-4 rounded-xl">
                <div className="text-[11px] font-mono text-gray-400">PRIMARY POWER CORE</div>
                <div className="text-sm font-bold text-orange-400 mt-1">{mission.blueprint.powerSource}</div>
              </div>
              <div className="bg-white/5 border border-white/10 p-4 rounded-xl">
                <div className="text-[11px] font-mono text-gray-400">HABITABILITY STATUS</div>
                <div className="text-sm font-bold text-emerald-400 mt-1">{mission.specs.habitabilityStatus}</div>
              </div>
            </div>
          </div>

          {/* Core Features & Onboard Modules */}
          <div>
            <div className="text-xs font-mono text-gray-400 uppercase tracking-wider mb-4">
              ONBOARD MODULES & HABITATION SYSTEMS
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {mission.features.map((feat, i) => (
                <div key={i} className="flex items-center gap-3 p-3 bg-black/40 border border-white/10 rounded-lg">
                  <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" />
                  <span className="text-xs text-gray-200 font-sans">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Development Roadmap Milestones */}
          <div>
            <div className="text-xs font-mono text-gray-400 uppercase tracking-wider mb-4">
              STRATEGIC ROADMAP MILESTONES
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {mission.blueprint.milestones.map((m, idx) => (
                <div key={idx} className="p-4 bg-white/5 border border-white/10 rounded-xl space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-mono font-bold text-orange-400">{m.year}</span>
                    <span
                      className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded ${
                        m.status === 'completed'
                          ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                          : m.status === 'in-progress'
                          ? 'bg-amber-500/20 text-amber-400 border border-amber-500/40'
                          : 'bg-white/10 text-gray-400'
                      }`}
                    >
                      {m.status}
                    </span>
                  </div>
                  <div className="text-xs font-medium text-white">{m.title}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Modal Action Bar */}
          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs font-mono text-gray-400">
              PHYSICS EQUATION: <span className="text-white font-bold">{mission.equation.formula}</span>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={() => {
                  soundManager.playChime(650);
                  onOpenEquationLab(mission);
                }}
                className="flex-1 sm:flex-none px-5 py-2.5 bg-orange-500 text-black font-bold text-xs font-mono uppercase tracking-wider hover:bg-orange-400 transition rounded"
              >
                OPEN EQUATION SIMULATOR
              </button>
              <button
                onClick={onClose}
                className="px-5 py-2.5 border border-white/20 text-white text-xs font-mono uppercase hover:bg-white/10 transition rounded"
              >
                CLOSE
              </button>
            </div>
          </div>

        </div>

      </motion.div>
    </div>
  );
};
