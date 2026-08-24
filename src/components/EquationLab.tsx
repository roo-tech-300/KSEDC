import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PlanetData } from '../types';
import { MISSIONS_DATA } from '../data/missions';
import { X, Sliders, Calculator, Sparkles, RefreshCw } from 'lucide-react';
import { soundManager } from './AudioEngine';

interface EquationLabProps {
  initialMission?: PlanetData | null;
  onClose: () => void;
}

export const EquationLab: React.FC<EquationLabProps> = ({ initialMission, onClose }) => {
  const [selectedPlanet, setSelectedPlanet] = useState<string>(initialMission ? initialMission.id : 'mars');
  const mission = MISSIONS_DATA[selectedPlanet] || MISSIONS_DATA.mars;

  const [vars, setVars] = useState<Record<string, number>>(() => {
    const init: Record<string, number> = {};
    mission.equation.variables.forEach((v) => {
      init[v.symbol] = v.defaultVal;
    });
    return init;
  });

  const handleSelectPlanet = (id: string) => {
    setSelectedPlanet(id);
    const m = MISSIONS_DATA[id];
    if (m) {
      const init: Record<string, number> = {};
      m.equation.variables.forEach((v) => {
        init[v.symbol] = v.defaultVal;
      });
      setVars(init);
    }
  };

  const handleReset = () => {
    const init: Record<string, number> = {};
    mission.equation.variables.forEach((v) => {
      init[v.symbol] = v.defaultVal;
    });
    setVars(init);
  };

  const result = mission.equation.calculate(vars);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xl">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="bg-neutral-950 border border-white/15 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl relative flex flex-col text-white"
      >
        {/* Modal Header */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between sticky top-0 bg-neutral-950/95 backdrop-blur z-20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-400">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-display font-bold text-white flex items-center gap-2">
                <span>KSEDC Physics & Trajectory Lab</span>
                <span className="text-xs font-mono px-2 py-0.5 bg-orange-500/20 text-orange-400 rounded">
                  SIM-ENGINE
                </span>
              </h2>
              <p className="text-xs text-gray-400 font-mono">
                Interactive real-time parameter validation and celestial kinematics
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 text-gray-400 hover:text-white transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Planet Equation Switcher */}
        <div className="p-6 border-b border-white/10 bg-neutral-900/30">
          <div className="text-xs font-mono text-gray-400 uppercase mb-3">SELECT ARCHITECTURE EQUATION:</div>
          <div className="flex flex-wrap gap-2">
            {Object.keys(MISSIONS_DATA).map((pid) => {
              const m = MISSIONS_DATA[pid];
              const isSel = selectedPlanet === pid;
              return (
                <button
                  key={pid}
                  onClick={() => {
                    soundManager.playChime(600);
                    handleSelectPlanet(pid);
                  }}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wider transition flex items-center gap-2 ${
                    isSel
                      ? 'bg-orange-500 text-black font-bold shadow-lg shadow-orange-500/20'
                      : 'bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: m.color }} />
                  <span>{m.name.toUpperCase()}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Equation Display */}
        <div className="p-6 md:p-8 space-y-8">
          <div className="p-6 bg-black/60 border border-white/10 rounded-xl relative overflow-hidden text-center">
            <div className="text-xs font-mono text-orange-400 tracking-widest uppercase mb-2">
              {mission.equation.name}
            </div>
            <div className="text-2xl md:text-3xl font-mono font-bold text-white tracking-widest my-2">
              {mission.equation.formula}
            </div>
            {mission.equation.footnote && (
              <div className="text-xs text-gray-400 italic max-w-xl mx-auto mt-3 font-sans">
                {mission.equation.footnote}
              </div>
            )}
          </div>

          {/* Sliders Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mission.equation.variables.map((v) => (
              <div key={v.symbol} className="bg-white/5 border border-white/10 p-4 rounded-xl space-y-3">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-gray-300 font-semibold">{v.label}</span>
                  <span className="text-orange-400 font-bold text-sm">
                    {vars[v.symbol] !== undefined ? vars[v.symbol] : v.defaultVal} {v.unit || ''}
                  </span>
                </div>
                <input
                  type="range"
                  min={v.min}
                  max={v.max}
                  step={v.step}
                  value={vars[v.symbol] !== undefined ? vars[v.symbol] : v.defaultVal}
                  onChange={(e) => {
                    setVars((prev) => ({ ...prev, [v.symbol]: parseFloat(e.target.value) }));
                  }}
                  className="w-full h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-orange-500"
                />
                <div className="flex justify-between text-[10px] font-mono text-gray-500">
                  <span>Min: {v.min} {v.unit || ''}</span>
                  <span>Max: {v.max} {v.unit || ''}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Result Banner */}
          <div className="p-6 bg-gradient-to-r from-orange-950/40 via-neutral-900 to-neutral-900 border border-orange-500/40 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="text-xs font-mono text-gray-400 uppercase">CALCULATED VALUE</div>
              <div className="text-3xl font-display font-extrabold text-white mt-1">
                {result.value}
              </div>
              <div className="text-xs font-mono text-orange-400 mt-1">
                {result.commentary}
              </div>
            </div>

            <button
              onClick={handleReset}
              className="flex items-center gap-2 px-4 py-2 border border-white/15 rounded-lg text-xs font-mono text-gray-300 hover:text-white hover:bg-white/5 transition"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>RESET DEFAULTS</span>
            </button>
          </div>
        </div>

      </motion.div>
    </div>
  );
};
