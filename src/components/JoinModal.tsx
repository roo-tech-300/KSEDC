import React, { useState } from 'react';
import { motion } from 'motion/react';
import confetti from 'canvas-confetti';
import { CareerRole } from '../types';
import { X, Rocket, ShieldCheck, QrCode, Sparkles, CheckCircle2, User, Mail, Compass } from 'lucide-react';
import { soundManager } from './AudioEngine';

interface JoinModalProps {
  initialRole?: CareerRole | null;
  onClose: () => void;
}

export const JoinModal: React.FC<JoinModalProps> = ({ initialRole, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [roleTitle, setRoleTitle] = useState(initialRole ? initialRole.title : 'Deep Space Explorer');
  const [destination, setDestination] = useState('Mars — Haven Habitation');
  const [isGenerated, setIsGenerated] = useState(false);
  const [clearanceCode, setClearanceCode] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;

    const randomId = 'KSEDC-' + Math.random().toString(36).substring(2, 7).toUpperCase() + '-2026';
    setClearanceCode(randomId);
    setIsGenerated(true);
    soundManager.playChime(880, 'triangle', 0.3);

    // Fire confetti celebration
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ff5e00', '#00e5ff', '#ffffff', '#ffd700']
      });
    } catch {
      // Ignored
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-2xl">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="bg-neutral-950 border border-white/15 rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl relative text-white"
      >
        {/* Modal Header */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between bg-neutral-950">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-400">
              <Rocket className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-display font-bold text-white">
                Coalition Clearance & Enlistment
              </h2>
              <p className="text-xs text-gray-400 font-mono">
                Official Interplanetary Registry & Launch Credential
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

        {/* Body Content */}
        <div className="p-6 md:p-8">
          {!isGenerated ? (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-mono text-gray-300 uppercase mb-2">
                  Full Legal or Pioneer Identity
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-gray-500 absolute left-3.5 top-3.5" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Commander Sarah Vance"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-black/60 border border-white/15 rounded-lg py-3 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-orange-500 transition font-sans"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-gray-300 uppercase mb-2">
                  Sub-space Communications Email
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-gray-500 absolute left-3.5 top-3.5" />
                  <input
                    type="email"
                    required
                    placeholder="name@interplanetary.org"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-black/60 border border-white/15 rounded-lg py-3 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-orange-500 transition font-sans"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-gray-300 uppercase mb-2">
                    Designated Coalition Role
                  </label>
                  <select
                    value={roleTitle}
                    onChange={(e) => setRoleTitle(e.target.value)}
                    className="w-full bg-black/60 border border-white/15 rounded-lg py-3 px-3 text-sm text-white focus:outline-none focus:border-orange-500 transition font-sans"
                  >
                    <option value="Propulsion Specialist">Propulsion Specialist</option>
                    <option value="Jovian Cloud Architect">Jovian Cloud Architect</option>
                    <option value="Lunar Commercial Director">Lunar Commercial Director</option>
                    <option value="Deep Ocean Cryo-Diver">Deep Ocean Cryo-Diver</option>
                    <option value="Relativity & Time Anomaly Explainer">Relativity Explainer</option>
                    <option value="Suspiciously Comfortable Zero-G Passenger">Comfortable Zero-G Passenger</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono text-gray-300 uppercase mb-2">
                    Primary Planetary Vector
                  </label>
                  <select
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="w-full bg-black/60 border border-white/15 rounded-lg py-3 px-3 text-sm text-white focus:outline-none focus:border-orange-500 transition font-sans"
                  >
                    <option value="Mars — Project Red Carpet">Mars — Project Red Carpet</option>
                    <option value="Jupiter — Haven Engine Aerostat">Jupiter — Haven Engine Aerostat</option>
                    <option value="The Moon — Moonwalk Mall">The Moon — Moonwalk Mall</option>
                    <option value="Europa — Abyss Station Ark">Europa — Abyss Station Ark</option>
                    <option value="Saturn — Ringway Loop">Saturn — Ringway Loop</option>
                    <option value="Earth — Relativistic Accelerator">Earth — Relativistic Accelerator</option>
                  </select>
                </div>
              </div>

              <div className="p-3 bg-white/5 border border-white/10 rounded-lg text-xs text-gray-400 font-mono">
                Notice: By clicking Generate, you agree not to meddle with the space-time continuum or press unlabeled red buttons.
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-orange-500 text-black font-bold uppercase text-xs font-mono tracking-widest hover:bg-orange-400 transition-all rounded-lg shadow-lg shadow-orange-500/20"
              >
                GENERATE INTERPLANETARY CLEARANCE BADGE
              </button>
            </form>
          ) : (
            /* Digital Clearance Pass Card */
            <div className="space-y-6">
              <div className="p-6 bg-gradient-to-br from-neutral-900 via-black to-neutral-900 border-2 border-orange-500/80 rounded-xl relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 blur-2xl pointer-events-none" />

                <div className="flex items-start justify-between border-b border-white/10 pb-4 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded bg-orange-500 flex items-center justify-center text-black font-bold">
                      K
                    </div>
                    <div>
                      <div className="font-mono text-[10px] text-orange-400 tracking-widest">KSEDC OFFICIAL ID</div>
                      <div className="font-display font-bold text-white tracking-wide">INTERPLANETARY FLIGHT PASS</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] font-mono text-gray-400">STATUS</div>
                    <div className="text-xs font-mono font-bold text-emerald-400">CERTIFIED COSMIC</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 py-2 font-mono">
                  <div>
                    <div className="text-[10px] text-gray-400 uppercase">Pioneer Name</div>
                    <div className="text-base font-bold text-white">{name}</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-gray-400 uppercase">Clearance ID</div>
                    <div className="text-sm font-bold text-orange-400">{clearanceCode}</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-gray-400 uppercase">Assigned Role</div>
                    <div className="text-xs text-gray-200">{roleTitle}</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-gray-400 uppercase">Destination Vector</div>
                    <div className="text-xs text-cyan-400">{destination}</div>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-gray-500">
                  <span>VALIDATED BY QUANTUM TELEMETRY</span>
                  <span>SECURITY ENCRYPTION: SHA-512 CELESTIAL</span>
                </div>
              </div>

              <div className="flex items-center justify-between gap-3">
                <button
                  onClick={() => setIsGenerated(false)}
                  className="px-4 py-2.5 border border-white/20 rounded text-xs font-mono text-gray-300 hover:text-white hover:bg-white/5 transition"
                >
                  EDIT CREDENTIALS
                </button>
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 bg-white text-black font-bold rounded text-xs font-mono uppercase tracking-wider hover:bg-gray-200 transition"
                >
                  ENTER COALITION TERMINAL
                </button>
              </div>
            </div>
          )}
        </div>

      </motion.div>
    </div>
  );
};
