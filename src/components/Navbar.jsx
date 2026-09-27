import React, { useState } from 'react';
import { Sparkles, RefreshCw, BarChart3, Compass, LayoutGrid, Cpu, Bookmark, Search, Menu, X } from 'lucide-react';

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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="glass-panel sticky top-2 z-50 mx-2 md:mx-4 my-2 px-4 md:px-6 py-3 border-amber-500/20">
      <div className="flex items-center justify-between gap-3">
        {/* Brand & Logo */}
        <div className="flex items-center gap-2.5">
          <div className="relative flex-shrink-0">
            <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-gradient-to-tr from-amber-500 via-rose-500 to-cyan-400 p-[2px] animate-pulse-glow">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-amber-400" />
              </div>
            </div>
          </div>
          <div>
            <h1 className="font-editorial text-base md:text-xl font-bold tracking-wider gradient-text-gold leading-tight">
              VOGUE PULSE <span className="text-[10px] md:text-xs font-mono px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">AI v4.2</span>
            </h1>
            <p className="text-[10px] md:text-[11px] text-slate-400 flex items-center gap-1.5">
              <span className="live-dot"></span>
              <span className="hidden sm:inline">Global Runway & Social AI Crawler • Real-Time</span>
              <span className="sm:hidden">Live Fashion AI Radar</span>
            </p>
          </div>
        </div>

        {/* Mobile Hamburger Menu Toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={onManualRefresh}
            disabled={isRefreshing}
            className="p-2 rounded-lg bg-amber-500/20 text-amber-300 border border-amber-500/40 text-xs font-bold flex items-center gap-1"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isRefreshing ? 'animate-spin' : ''}`} />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-slate-900/80 text-slate-200 border border-white/10"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-amber-400" /> : <Menu className="w-5 h-5 text-slate-200" />}
          </button>
        </div>

        {/* Desktop Navigation Tabs */}
        <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-xl border border-white/5">
          <button
            onClick={() => handleTabClick('dashboard')}
            className={`btn-glass text-xs font-medium ${activeTab === 'dashboard' ? 'active font-semibold' : ''}`}
          >
            <Compass className="w-4 h-4" />
            Live Radar
          </button>
          <button
            onClick={() => handleTabClick('analytics')}
            className={`btn-glass text-xs font-medium ${activeTab === 'analytics' ? 'active font-semibold' : ''}`}
          >
            <BarChart3 className="w-4 h-4" />
            Graphs & Trajectory
          </button>
          <button
            onClick={() => handleTabClick('lookbooks')}
            className={`btn-glass text-xs font-medium ${activeTab === 'lookbooks' ? 'active font-semibold' : ''}`}
          >
            <LayoutGrid className="w-4 h-4" />
            Visual Lookbooks
          </button>
          <button
            onClick={() => handleTabClick('simulator')}
            className={`btn-glass text-xs font-medium ${activeTab === 'simulator' ? 'active font-semibold' : ''}`}
          >
            <Cpu className="w-4 h-4 text-cyan-400" />
            AI Style Simulator
          </button>
          <button
            onClick={() => handleTabClick('moodboard')}
            className={`btn-glass text-xs font-medium ${activeTab === 'moodboard' ? 'active font-semibold' : ''}`}
          >
            <Bookmark className="w-4 h-4 text-rose-400" />
            Saved ({savedCount})
          </button>
        </nav>

        {/* Desktop Search & Actions */}
        <div className="hidden lg:flex items-center gap-3">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search trend, hashtag..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="input-glass text-xs pl-9 pr-4 py-2 w-44 focus:w-56 transition-all duration-300"
            />
          </div>

          <button
            onClick={() => setIsAutoFetching(!isAutoFetching)}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium border transition-all flex items-center gap-2 ${
              isAutoFetching 
                ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-400' 
                : 'bg-slate-800/50 border-white/10 text-slate-400'
            }`}
          >
            <span className={`w-2 h-2 rounded-full ${isAutoFetching ? 'bg-emerald-400 animate-ping' : 'bg-slate-500'}`}></span>
            {isAutoFetching ? 'Auto: ON' : 'Auto: OFF'}
          </button>

          <button
            onClick={onManualRefresh}
            disabled={isRefreshing}
            className="btn-gold text-xs"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isRefreshing ? 'animate-spin' : ''}`} />
            {isRefreshing ? 'Scanning...' : 'Scan Now'}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden pt-4 mt-3 border-t border-white/10 space-y-3 animate-fadeIn">
          {/* Mobile Search Bar */}
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search trend, hashtag, color..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="input-glass text-xs pl-9 pr-4 py-2.5 w-full"
            />
          </div>

          {/* Navigation Links Grid */}
          <div className="grid grid-cols-2 gap-2 pt-1">
            <button
              onClick={() => handleTabClick('dashboard')}
              className={`btn-glass text-xs justify-center ${activeTab === 'dashboard' ? 'active font-bold' : ''}`}
            >
              <Compass className="w-4 h-4" />
              Live Radar
            </button>
            <button
              onClick={() => handleTabClick('analytics')}
              className={`btn-glass text-xs justify-center ${activeTab === 'analytics' ? 'active font-bold' : ''}`}
            >
              <BarChart3 className="w-4 h-4" />
              Graphs
            </button>
            <button
              onClick={() => handleTabClick('lookbooks')}
              className={`btn-glass text-xs justify-center ${activeTab === 'lookbooks' ? 'active font-bold' : ''}`}
            >
              <LayoutGrid className="w-4 h-4" />
              Lookbooks
            </button>
            <button
              onClick={() => handleTabClick('simulator')}
              className={`btn-glass text-xs justify-center ${activeTab === 'simulator' ? 'active font-bold' : ''}`}
            >
              <Cpu className="w-4 h-4 text-cyan-400" />
              AI Simulator
            </button>
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-white/5 text-xs">
            <button
              onClick={() => handleTabClick('moodboard')}
              className={`btn-glass text-xs flex-1 justify-center ${activeTab === 'moodboard' ? 'active font-bold' : ''}`}
            >
              <Bookmark className="w-4 h-4 text-rose-400" />
              Saved Moodboard ({savedCount})
            </button>

            <button
              onClick={() => setIsAutoFetching(!isAutoFetching)}
              className={`ml-2 px-3 py-2 rounded-lg text-xs font-mono font-medium border flex items-center gap-1.5 ${
                isAutoFetching 
                  ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-400' 
                  : 'bg-slate-800/50 border-white/10 text-slate-400'
              }`}
            >
              <span className={`w-2 h-2 rounded-full ${isAutoFetching ? 'bg-emerald-400 animate-ping' : 'bg-slate-500'}`}></span>
              {isAutoFetching ? 'Auto ON' : 'Auto OFF'}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
