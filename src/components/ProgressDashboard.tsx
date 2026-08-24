import React, { useState } from 'react';
import { Activity, CheckCircle2, Clock, AlertTriangle, ArrowUpRight, Gauge, Radio } from 'lucide-react';
import { soundManager } from './AudioEngine';

export const ProgressDashboard: React.FC = () => {
  const [activeLogFilter, setActiveLogFilter] = useState<'all' | 'critical' | 'telemetry'>('all');

  const progressItems = [
    {
      title: 'Jovian Haven Engine',
      category: 'Planetary Engineering',
      status: 'Atmospheric simulations underway in simulated 1-bar cloud layer',
      percentage: 0.003,
      displayPct: '0.003%',
      phase: 'Phase I: Super-ammonia Shield Modeling',
      barColor: 'bg-orange-500'
    },
    {
      title: 'Project Red Carpet (Mars)',
      category: 'Interplanetary Transport',
      status: 'Seven-day cruise cabin & artificial gravity toroid mockups completed',
      percentage: 87,
      displayPct: '87.0%',
      phase: 'Phase III: Vacuum Pressure Hull Stress Testing',
      barColor: 'bg-orange-500'
    },
    {
      title: 'Operation Moonwalk Mall',
      category: 'Lunar Settlement',
      status: 'Basalt lava tube core samples surveyed; business model wearing spacesuit',
      percentage: 42,
      displayPct: '42.0%',
      phase: 'Phase II: Marius Hills Subsurface Pressurization',
      barColor: 'bg-amber-400'
    },
    {
      title: 'Europa Subsurface Ark',
      category: 'Deep Ocean Astrobiology',
      status: 'Cryo-sonic ice drill prototype tested; Abyss Station anchor designed',
      percentage: 11,
      displayPct: '11.0%',
      phase: 'Phase I: 20km Crust Acoustic Sonar Mapping',
      barColor: 'bg-cyan-400'
    },
    {
      title: 'The Saturn Ringway',
      category: 'Orbital Infrastructure',
      status: 'Transit map sketched; ring particle electrostatic harvester in trials',
      percentage: 64,
      displayPct: '64.0%',
      phase: 'Phase II: Station Alpha Lagrange Anchoring',
      barColor: 'bg-yellow-400'
    },
    {
      title: 'Project Yesterday, Probably',
      category: 'Temporal Relativity',
      status: 'Relativistic particle ring active; atomic clocks consistently 5 mins early',
      percentage: 99.9,
      displayPct: 'Unclear',
      phase: 'Phase ∞: Triplicate Clearance Review Pending',
      barColor: 'bg-emerald-400'
    }
  ];

  const telemetryLogs = [
    { time: '14:28:02 UTC', source: 'ARES-LUX-07', type: 'telemetry', text: 'Magneto-fusion pulse core sync nominal (0.012% harmonic variance).' },
    { time: '14:25:19 UTC', source: 'JOVIAN-HEAVEN-I', type: 'critical', text: 'Haven layer lightning harvester absorbed 4.2 Terawatts; capacitors green.' },
    { time: '14:21:40 UTC', source: 'LUNA-MALL-ALPHA', type: 'telemetry', text: 'Lava-tube airlock #4 depressurization cycle passed zero-dust check.' },
    { time: '14:18:55 UTC', source: 'CHRONOS-ACCEL', type: 'critical', text: 'Quantum dilation telemetry packet received 4 minutes before transmission.' }
  ];

  const filteredLogs = telemetryLogs.filter(log => activeLogFilter === 'all' || log.type === activeLogFilter);

  return (
    <section id="dashboard" className="py-24 md:py-32 px-6 bg-neutral-950/80 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-orange-500 tracking-widest uppercase mb-2">
              <Activity className="w-4 h-4 animate-pulse" />
              <span>COALITION MILESTONE TELEMETRY</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight">
              Totally Real Progress Indicators
            </h2>
          </div>
          <div className="text-xs font-mono text-gray-400 max-w-sm">
            Audacious aerospace milestones tracked live from Deep Space Transceiver Array 09.
          </div>
        </div>

        {/* 2-Column Layout: Progress Bars on Left, Live Telemetry Log on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Progress Indicators Column */}
          <div className="lg:col-span-8 space-y-6">
            {progressItems.map((item, idx) => (
              <div
                key={idx}
                onMouseEnter={() => soundManager.playChime(500 + idx * 30)}
                className="p-6 bg-black/40 border border-white/10 rounded-xl hover:border-orange-500/50 transition-all duration-300 group"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono uppercase px-2 py-0.5 bg-white/5 border border-white/10 rounded text-gray-400">
                        {item.category}
                      </span>
                      <h3 className="font-display text-lg font-bold text-white group-hover:text-orange-400 transition-colors">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                  <div className="font-mono text-lg font-extrabold text-orange-400">
                    {item.displayPct}
                  </div>
                </div>

                <p className="text-xs text-gray-300 mb-4 font-sans font-light">
                  {item.status}
                </p>

                {/* Progress Bar with glowing fill */}
                <div className="w-full h-2 bg-neutral-900 rounded-full overflow-hidden border border-white/5 p-[1px]">
                  <div
                    className={`h-full rounded-full transition-all duration-1000 ${item.barColor} shadow-lg shadow-orange-500/30`}
                    style={{ width: `${Math.min(100, Math.max(item.percentage, 2))}%` }}
                  />
                </div>

                <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-gray-500">
                  <span>{item.phase}</span>
                  <span className="flex items-center gap-1 text-gray-400 group-hover:text-white transition">
                    <span>LIVE LINK</span>
                    <ArrowUpRight className="w-3 h-3 text-orange-500" />
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Deep Space Telemetry Stream Column */}
          <div className="lg:col-span-4 flex flex-col space-y-6">
            <div className="p-6 bg-black/60 border border-white/10 rounded-xl flex-grow flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
                  <div className="flex items-center gap-2 text-xs font-mono text-white font-bold">
                    <Radio className="w-4 h-4 text-emerald-400 animate-pulse" />
                    <span>DEEP SPACE LOG STREAM</span>
                  </div>
                  <div className="flex gap-1 text-[10px] font-mono">
                    <button
                      onClick={() => setActiveLogFilter('all')}
                      className={`px-2 py-0.5 rounded ${activeLogFilter === 'all' ? 'bg-orange-500 text-black' : 'text-gray-400'}`}
                    >
                      ALL
                    </button>
                    <button
                      onClick={() => setActiveLogFilter('critical')}
                      className={`px-2 py-0.5 rounded ${activeLogFilter === 'critical' ? 'bg-orange-500 text-black' : 'text-gray-400'}`}
                    >
                      CRIT
                    </button>
                  </div>
                </div>

                <div className="space-y-4">
                  {filteredLogs.map((log, i) => (
                    <div key={i} className="p-3 bg-white/[0.02] border-l-2 border-orange-500/70 rounded-r text-xs space-y-1 font-mono">
                      <div className="flex justify-between text-gray-500 text-[10px]">
                        <span className="text-orange-400">{log.source}</span>
                        <span>{log.time}</span>
                      </div>
                      <p className="text-gray-300 leading-relaxed font-sans">{log.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10">
                <div className="flex items-center justify-between text-[11px] font-mono text-gray-400">
                  <span>TRANSCEIVER ARRAY STATUS:</span>
                  <span className="text-emerald-400 font-bold">LOCKED & SYNCED</span>
                </div>
              </div>
            </div>

            {/* Fictional Disclaimer Card */}
            <div className="p-4 bg-orange-950/20 border border-orange-500/30 rounded-xl text-center">
              <p className="text-xs text-orange-300/80 italic font-mono">
                * All metrics, percentages, and timelines are conceptual research objectives. No passenger or timeline was harmed in the production of this telemetry.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
