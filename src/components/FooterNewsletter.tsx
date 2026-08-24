import React, { useState } from 'react';
import { Rocket, Send, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';
import { soundManager } from './AudioEngine';

interface FooterNewsletterProps {
  onOpenJoin: () => void;
}

export const FooterNewsletter: React.FC<FooterNewsletterProps> = ({ onOpenJoin }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    soundManager.playChime(700);
  };

  return (
    <footer id="join" className="relative bg-black border-t border-white/10 text-white pt-24 pb-16 overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-orange-600/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        
        {/* Newsletter Box */}
        <div className="mb-24 space-y-6">
          <div className="inline-block text-xs font-mono text-orange-500 tracking-widest uppercase px-3 py-1 bg-orange-500/10 border border-orange-500/30 rounded-full">
            INTERPLANETARY DISPATCHES
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white tracking-tight">
            Get Updates From the Edge of Reasonable
          </h2>
          <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto font-light leading-relaxed">
            Receive periodic dispatches about new spacecraft designs, atmospheric conversion
            readings, strange radio signals, and the latest status of our time machine, assuming
            this newsletter arrives in the correct chronological order.
          </p>

          {!subscribed ? (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto pt-4">
              <input
                type="email"
                required
                placeholder="Enter your quantum email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-grow bg-white/5 border border-white/15 px-4 py-3.5 text-sm text-white focus:outline-none focus:border-orange-500 transition rounded-lg font-sans placeholder:text-gray-500"
              />
              <button
                type="submit"
                className="px-6 py-3.5 bg-orange-500 text-black font-bold uppercase text-xs font-mono tracking-widest hover:bg-orange-400 transition-all rounded-lg flex items-center justify-center gap-2"
              >
                <span>SUBSCRIBE</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          ) : (
            <div className="p-4 bg-emerald-950/40 border border-emerald-500/40 rounded-lg max-w-md mx-auto text-emerald-400 text-xs font-mono flex items-center justify-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              <span>TRANSMISSION VECTOR CONFIRMED. WATCH YOUR INBOX.</span>
            </div>
          )}
        </div>

        <div className="w-full h-px bg-white/10 my-16" />

        {/* Final Outrageous Headline & CTA */}
        <div className="space-y-6">
          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.05]">
            The Universe is Enormous.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-amber-400 to-orange-500">
              Our Plans Are Worse.
            </span>
          </h2>

          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            KSEDC is architecting the tools, orbital vehicles, cloud cities, and questionable diagrams
            that will define humanity’s next epoch of exploration. Either way, the cosmos will not
            explore itself.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a
              href="#hero"
              className="px-6 py-3.5 bg-white text-black font-bold uppercase text-xs font-mono tracking-widest hover:bg-gray-200 transition rounded-sm"
            >
              RETURN TO TOP
            </a>
            <button
              onClick={() => {
                soundManager.playChime(800);
                onOpenJoin();
              }}
              className="px-6 py-3.5 border border-orange-500 text-orange-400 font-bold uppercase text-xs font-mono tracking-widest hover:bg-orange-500/10 transition rounded-sm"
            >
              ENLIST IN COALITION
            </button>
          </div>
        </div>

        {/* Footer Fine Print & Legal Disclaimers */}
        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-500">
          <div className="flex items-center gap-2">
            <Rocket className="w-4 h-4 text-orange-500" />
            <span className="text-white font-bold">KSEDC</span>
            <span>— KANGAROO SPACE EXPLORATION & DEVELOPMENT COALITION</span>
          </div>

          <div>
            <span>© 2026 KSEDC AERO-SCIENCES. BOUNCE BEYOND THE POSSIBLE.</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
