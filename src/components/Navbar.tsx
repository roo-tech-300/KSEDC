import React, { useState, useEffect } from 'react';
import { Rocket, Volume2, VolumeX, Menu, X, Sparkles, Compass } from 'lucide-react';
import { soundManager } from './AudioEngine';

interface NavbarProps {
  onOpenJoin: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenJoin }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSound = () => {
    const active = soundManager.toggleMute();
    setIsMuted(!active);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-neutral-950/85 backdrop-blur-xl border-b border-white/10 py-3 shadow-2xl shadow-black/50'
          : 'bg-gradient-to-b from-black/80 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a
          href="#hero"
          className="flex items-center gap-3 group focus:outline-none"
          onClick={() => soundManager.playChime(523.25)}
        >
          <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-orange-600 to-amber-500 flex items-center justify-center text-white shadow-lg shadow-orange-500/20 group-hover:scale-105 transition-transform">
            <Rocket className="w-5 h-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-extrabold text-xl tracking-wider text-white flex items-center gap-1.5">
              KSEDC
              <span className="text-[10px] font-mono px-1.5 py-0.2 bg-orange-500/20 border border-orange-500/40 text-orange-400 rounded">
                v2.6
              </span>
            </span>
            <span className="text-[10px] font-mono text-gray-400 tracking-widest hidden sm:inline">
              BOUNCE BEYOND THE POSSIBLE
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-7 text-xs font-mono tracking-wider text-gray-300">
          <a
            href="#intro"
            className="hover:text-orange-400 transition"
            onClick={() => soundManager.playChime(659.25)}
          >
            MISSION
          </a>
          <a
            href="#projects"
            className="hover:text-orange-400 transition text-white font-semibold flex items-center gap-1"
            onClick={() => soundManager.playChime(783.99)}
          >
            <Compass className="w-3.5 h-3.5 text-orange-500 animate-spin" style={{ animationDuration: '10s' }} />
            <span>3D WORLDS</span>
          </a>
          <a
            href="#dashboard"
            className="hover:text-orange-400 transition"
            onClick={() => soundManager.playChime(659.25)}
          >
            PROGRESS
          </a>
          <a
            href="#principles"
            className="hover:text-orange-400 transition"
            onClick={() => soundManager.playChime(659.25)}
          >
            PRINCIPLES
          </a>
          <a
            href="#careers"
            className="hover:text-orange-400 transition"
            onClick={() => soundManager.playChime(659.25)}
          >
            CAREERS
          </a>
          <a
            href="#team"
            className="hover:text-orange-400 transition"
            onClick={() => soundManager.playChime(659.25)}
          >
            LEADERSHIP
          </a>
        </div>

        {/* Right Action Icons & CTA */}
        <div className="flex items-center gap-3">
          {/* Ambient Sound Effect Toggle */}
          <button
            onClick={toggleSound}
            className={`p-2 rounded-full border transition ${
              !isMuted
                ? 'border-orange-500/60 bg-orange-500/10 text-orange-400'
                : 'border-white/10 bg-white/5 text-gray-400 hover:text-white'
            }`}
            title={isMuted ? 'Enable Ambient Deep Space Drone' : 'Mute Sound'}
          >
            {!isMuted ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>

          {/* Join Coalition Button */}
          <button
            onClick={() => {
              soundManager.playChime(880);
              onOpenJoin();
            }}
            className="relative px-4 sm:px-5 py-2 border border-white text-white uppercase text-xs font-mono tracking-widest font-medium hover:bg-white hover:text-black transition-all duration-300 rounded-sm"
          >
            <span>JOIN COALITION</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-white"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-neutral-950 border-b border-white/10 px-6 py-6 space-y-4">
          <div className="flex flex-col space-y-3 font-mono text-sm">
            <a
              href="#intro"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-gray-300 hover:text-orange-400 py-1"
            >
              01. MISSION
            </a>
            <a
              href="#projects"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-orange-400 font-bold py-1"
            >
              02. 3D WORLDS & PROJECTS
            </a>
            <a
              href="#dashboard"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-gray-300 hover:text-orange-400 py-1"
            >
              03. PROGRESS TRACKER
            </a>
            <a
              href="#principles"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-gray-300 hover:text-orange-400 py-1"
            >
              04. PRINCIPLES
            </a>
            <a
              href="#careers"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-gray-300 hover:text-orange-400 py-1"
            >
              05. CAREERS
            </a>
            <a
              href="#team"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-gray-300 hover:text-orange-400 py-1"
            >
              06. LEADERSHIP
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
