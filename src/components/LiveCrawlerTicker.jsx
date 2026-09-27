import React, { useState } from 'react';
import { Terminal, Activity, Globe, ShieldCheck, ChevronDown, ChevronUp } from 'lucide-react';

export default function LiveCrawlerTicker({ logs, capitalStats, activeCapital, setActiveCapital }) {
  const [showConsole, setShowConsole] = useState(false);

  return (
    <div className="mx-2 md:mx-4 mb-4 md:mb-6 space-y-2">
      {/* City Capital Filter Bar - Scrollable on mobile */}
      <div className="glass-panel p-3 md:p-4 flex flex-col md:flex-row md:items-center justify-between gap-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-cyan-400 flex-shrink-0" />
            <span className="text-[11px] md:text-xs font-semibold text-slate-300 uppercase tracking-widest whitespace-nowrap">
              Fashion Hubs:
            </span>
          </div>

          <button
            onClick={() => setShowConsole(!showConsole)}
            className="md:hidden text-[11px] font-mono text-cyan-400 flex items-center gap-1 hover:underline"
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>Logs</span>
            {showConsole ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
          </button>
        </div>

        {/* Scrollable Horizontal City Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0 scrollbar-none max-w-full">
          {capitalStats.map((cap) => (
            <button
              key={cap.id}
              onClick={() => setActiveCapital(cap.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 whitespace-nowrap flex-shrink-0 ${
                activeCapital === cap.id
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/50 shadow-lg shadow-amber-500/10'
                  : 'bg-slate-900/50 text-slate-400 border border-white/5 hover:border-white/20'
              }`}
            >
              <span>{cap.flag}</span>
              <span>{cap.name.split(',')[0]}</span>
            </button>
          ))}
        </div>

        <button
          onClick={() => setShowConsole(!showConsole)}
          className="hidden md:flex text-xs font-mono text-cyan-400 items-center gap-1.5 hover:underline whitespace-nowrap"
        >
          <Terminal className="w-3.5 h-3.5" />
          <span>AI Crawler Logs</span>
          {showConsole ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
        </button>
      </div>

      {/* Live Stream Banner */}
      <div className="bg-slate-950/80 border border-amber-500/30 rounded-xl p-2.5 md:p-3 flex items-center gap-3 overflow-hidden relative shadow-inner">
        <div className="flex items-center gap-1.5 bg-amber-500/10 px-2.5 py-1 rounded-md text-amber-400 font-mono text-[10px] md:text-[11px] font-bold border border-amber-500/30 whitespace-nowrap flex-shrink-0">
          <Activity className="w-3.5 h-3.5 animate-pulse text-amber-400" />
          LIVE FEED
        </div>

        <div className="overflow-hidden relative w-full">
          <div className="flex gap-8 animate-marquee whitespace-nowrap text-xs text-slate-300 font-mono">
            {logs.slice(0, 5).map((log, index) => (
              <span key={index} className="inline-flex items-center gap-2">
                <span className="text-amber-400/80">[{log.time}]</span>
                <span className="text-cyan-400 font-bold">[{log.city}]</span>
                <span className="text-slate-300">{log.message}</span>
                <span className="text-slate-600">|</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Expandable Terminal Console */}
      {showConsole && (
        <div className="mt-2 bg-slate-950 border border-cyan-500/30 rounded-xl p-3 md:p-4 font-mono text-xs text-cyan-300/90 shadow-2xl animate-fadeIn">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-cyan-500/20 text-slate-400 text-[10px] md:text-[11px]">
            <span className="flex items-center gap-1.5 text-cyan-400 font-bold truncate">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
              ATELIER-VOGUE VISION ENGINE v4.2
            </span>
            <span>240 RPS</span>
          </div>

          <div className="space-y-1.5 max-h-40 overflow-y-auto pr-1 text-[11px]">
            {logs.map((log, idx) => (
              <div key={idx} className="flex gap-2 hover:bg-slate-900/50 p-1 rounded">
                <span className="text-slate-500">{log.time}</span>
                <span className="text-amber-400 font-semibold">{log.city}</span>
                <span className="text-slate-300 truncate">{log.message}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
