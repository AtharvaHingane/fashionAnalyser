import React from 'react';
import { Sparkles, RefreshCw, BarChart3, Compass, LayoutGrid, Cpu, Bookmark, Globe2, Search } from 'lucide-react';

export default function Navbar({ 
  activeTab, 
  setActiveTab, 
  isAutoFetching, 
  setIsAutoFetching, 
  onManualRefresh, 
  isRefreshing, 
  searchQuery, 
  setSearchQuery,
  savedCount
}) {
  return (
    <header className="glass-panel sticky top-4 z-50 mx-4 my-3 px-6 py-4 flex flex-wrap items-center justify-between gap-4 border-amber-500/20">
      {/* Brand & Logo */}
      <div className="flex items-center gap-3">
        <div className="relative">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 via-rose-500 to-cyan-400 p-[2px] animate-pulse-glow">
            <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-amber-400" />
            </div>
          </div>
        </div>
        <div>
          <h1 className="font-editorial text-xl font-bold tracking-wider gradient-text-gold">
            VOGUE PULSE <span className="text-xs font-mono px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">AI v4.2</span>
          </h1>
          <p className="text-[11px] text-slate-400 flex items-center gap-1.5">
            <span className="live-dot"></span>
            Global Runway & Social AI Crawler • Real-Time
          </p>
        </div>
      </div>

      {/* Navigation Tabs */}
      <nav className="flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-xl border border-white/5">
        <button
          onClick={() => setActiveTab('dashboard')}
          className={`btn-glass text-xs font-medium ${activeTab === 'dashboard' ? 'active font-semibold' : ''}`}
        >
          <Compass className="w-4 h-4" />
          Live Radar
        </button>
        <button
          onClick={() => setActiveTab('analytics')}
          className={`btn-glass text-xs font-medium ${activeTab === 'analytics' ? 'active font-semibold' : ''}`}
        >
          <BarChart3 className="w-4 h-4" />
          Graphs & Trajectory
        </button>
        <button
          onClick={() => setActiveTab('lookbooks')}
          className={`btn-glass text-xs font-medium ${activeTab === 'lookbooks' ? 'active font-semibold' : ''}`}
        >
          <LayoutGrid className="w-4 h-4" />
          Visual Lookbooks
        </button>
        <button
          onClick={() => setActiveTab('simulator')}
          className={`btn-glass text-xs font-medium ${activeTab === 'simulator' ? 'active font-semibold' : ''}`}
        >
          <Cpu className="w-4 h-4 text-cyan-400" />
          AI Style Simulator
        </button>
        <button
          onClick={() => setActiveTab('moodboard')}
          className={`btn-glass text-xs font-medium ${activeTab === 'moodboard' ? 'active font-semibold' : ''}`}
        >
          <Bookmark className="w-4 h-4 text-rose-400" />
          Saved ({savedCount})
        </button>
      </nav>

      {/* Search & Actions */}
      <div className="flex items-center gap-3">
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search trend, hashtag, color..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="input-glass text-xs pl-9 pr-4 py-2 w-48 focus:w-60 transition-all duration-300"
          />
        </div>

        {/* Auto Fetch Toggle */}
        <button
          onClick={() => setIsAutoFetching(!isAutoFetching)}
          className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium border transition-all flex items-center gap-2 ${
            isAutoFetching 
              ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-400' 
              : 'bg-slate-800/50 border-white/10 text-slate-400'
          }`}
          title="Toggle automated real-time crawler updates every 5 seconds"
        >
          <span className={`w-2 h-2 rounded-full ${isAutoFetching ? 'bg-emerald-400 animate-ping' : 'bg-slate-500'}`}></span>
          {isAutoFetching ? 'Auto Crawl: ON' : 'Auto Crawl: OFF'}
        </button>

        {/* Refresh Pulse Button */}
        <button
          onClick={onManualRefresh}
          disabled={isRefreshing}
          className="btn-gold text-xs"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${isRefreshing ? 'animate-spin' : ''}`} />
          {isRefreshing ? 'Scanning...' : 'Scan Now'}
        </button>
      </div>
    </header>
  );
}
