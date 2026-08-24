import React from 'react';
import { motion } from 'motion/react';
import { ChevronDown, ArrowRight, ShieldCheck, Zap, Radio, Orbit } from 'lucide-react';
import { soundManager } from './AudioEngine';

interface HeroSectionProps {
  onOpenJoin: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenJoin }) => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 pt-24 pb-16 overflow-hidden bg-[#030304]"
    >
      {/* Background Starfield and Radial Plasma Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,94,0,0.18)_0%,rgba(0,0,0,0)_55%)] pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-orange-600/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Grid Pattern Layer */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.3) 1px, transparent 1px)', backgroundSize: '32px 32px' }}
      />

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
        
        {/* Recruitment / Mission Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 px-4 py-2 border border-white/15 rounded-full text-xs text-gray-300 font-mono tracking-wider bg-black/60 backdrop-blur-xl shadow-lg shadow-black flex items-center gap-2"
        >
          <span className="w-2 h-2 rounded-full bg-orange-500 animate-ping"></span>
          <span>NOW ACCEPTING PIONEERS, THEORISTS & ZERO-G ENTHUSIASTS</span>
        </motion.div>

        {/* Main Display Headline */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black mb-6 tracking-tighter leading-[0.92] text-white uppercase"
        >
          Bounce Beyond
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-amber-400 to-orange-500">
            the Possible
          </span>
        </motion.h1>

        {/* Subtitle / Vision */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mb-10 leading-relaxed font-sans font-light"
        >
          KSEDC is building the future of space travel—one wildly audacious architecture at a time.
          From floating cities above Jupiter’s stormy clouds to luxury spacecraft that make Mars feel
          like a seven-day cruise, we transform impossible science fiction into engineering reality.
          <br />
          <span className="text-white font-medium block mt-3 text-sm md:text-base font-mono tracking-wide">
            "WE DO NOT MERELY REACH FOR THE STARS. WE NEGOTIATE WITH THEM."
          </span>
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full max-w-md"
        >
          <a
            href="#projects"
            onClick={() => soundManager.playChime(659.25)}
            className="w-full sm:w-auto px-8 py-4 bg-white text-black font-bold uppercase text-xs font-mono tracking-widest hover:bg-neutral-200 transition-all rounded-sm flex items-center justify-center gap-2 shadow-xl shadow-white/10"
          >
            <Orbit className="w-4 h-4 text-orange-600" />
            <span>EXPLORE 3D WORLDS</span>
          </a>

          <button
            onClick={() => {
              soundManager.playChime(783.99);
              onOpenJoin();
            }}
            className="w-full sm:w-auto px-8 py-4 border border-orange-500 text-orange-400 font-semibold uppercase text-xs font-mono tracking-widest hover:bg-orange-500/15 transition-all rounded-sm flex items-center justify-center gap-2"
          >
            <span>JOIN COALITION</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>

        {/* Live Telemetry Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-4xl pt-8 border-t border-white/10 text-left"
        >
          <div className="bg-white/5 border border-white/10 p-3 rounded">
            <div className="flex items-center gap-1.5 text-[10px] font-mono text-gray-400 uppercase">
              <Radio className="w-3 h-3 text-orange-400" />
              <span>Deep Space Link</span>
            </div>
            <div className="text-sm font-mono font-bold text-white mt-1">
              Active (225M km)
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 p-3 rounded">
            <div className="flex items-center gap-1.5 text-[10px] font-mono text-gray-400 uppercase">
              <Zap className="w-3 h-3 text-amber-400" />
              <span>Fusion Output</span>
            </div>
            <div className="text-sm font-mono font-bold text-white mt-1">
              18.4 GW Nominal
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 p-3 rounded">
            <div className="flex items-center gap-1.5 text-[10px] font-mono text-gray-400 uppercase">
              <ShieldCheck className="w-3 h-3 text-emerald-400" />
              <span>Radiation Umbrella</span>
            </div>
            <div className="text-sm font-mono font-bold text-white mt-1">
              99.8% Deflection
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 p-3 rounded">
            <div className="flex items-center gap-1.5 text-[10px] font-mono text-gray-400 uppercase">
              <Orbit className="w-3 h-3 text-cyan-400" />
              <span>Active Fleets</span>
            </div>
            <div className="text-sm font-mono font-bold text-orange-400 mt-1">
              6 Planetary Vectors
            </div>
          </div>
        </motion.div>

      </div>

      {/* Scroll Down Indicator */}
      <a
        href="#intro"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center text-gray-500 hover:text-white transition text-xs font-mono animate-bounce cursor-pointer"
      >
        <span>SCROLL TO DISCOVER</span>
        <ChevronDown className="w-4 h-4 mt-1 text-orange-500" />
      </a>
    </section>
  );
};
