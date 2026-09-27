import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import LiveCrawlerTicker from './components/LiveCrawlerTicker';
import TrendCard from './components/TrendCard';
import TrendDetailModal from './components/TrendDetailModal';
import TrendGraphs from './components/TrendGraphs';
import AIForecasterSimulator from './components/AIForecasterSimulator';
import MoodboardStudio from './components/MoodboardStudio';
import { INITIAL_TRENDS, GLOBAL_CAPITALS, LIVE_SIMULATED_LOGS, LIVE_WEB_FASHION_IMAGES } from './data/fashionTrends';
import { Sparkles, SlidersHorizontal, Globe } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [trends, setTrends] = useState(INITIAL_TRENDS);
  const [logs, setLogs] = useState(LIVE_SIMULATED_LOGS);
  const [activeCapital, setActiveCapital] = useState('all');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isAutoFetching, setIsAutoFetching] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [inspectingTrend, setInspectingTrend] = useState(null);
  const [savedTrendIds, setSavedTrendIds] = useState(['trend-1', 'trend-2', 'trend-3']);

  // Auto Crawl Simulator Hook - Auto-fetches live trending web images
  useEffect(() => {
    if (!isAutoFetching) return;

    const interval = setInterval(() => {
      const cities = ['PARIS', 'TOKYO', 'MILAN', 'SEOUL', 'NEW YORK', 'COPENHAGEN'];
      const randomCity = cities[Math.floor(Math.random() * cities.length)];
      const now = new Date();
      const timeStr = now.toTimeString().split(' ')[0];

      const messages = [
        `Auto-fetched live trending web photos for ${randomCity} fashion week.`,
        `Crawled Gen-Z, 90s Revival & Old Money social media channels. Score +${(Math.random() * 2.5).toFixed(1)}%.`,
        `Live fashion image feed synced from global web sources.`,
        `Extracted live runway color swatches from new web lookbooks.`
      ];
      const randomMsg = messages[Math.floor(Math.random() * messages.length)];

      setLogs((prev) => [{ time: timeStr, city: randomCity, message: randomMsg }, ...prev.slice(0, 14)]);

      // Dynamically update scores and randomly fetch fresh web image URLs for a trend
      setTrends((prevTrends) =>
        prevTrends.map((t) => {
          const delta = Math.random() > 0.5 ? 1 : -1;
          const newScore = Math.min(100, Math.max(70, t.score + delta));
          
          // 20% chance to fetch a fresh web photo URL from web pool
          if (Math.random() > 0.8 && LIVE_WEB_FASHION_IMAGES[t.category]) {
            const webPool = LIVE_WEB_FASHION_IMAGES[t.category];
            const freshWebImage = webPool[Math.floor(Math.random() * webPool.length)];
            return { ...t, score: newScore, image: freshWebImage };
          }
          return { ...t, score: newScore };
        })
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoFetching]);

  // Manual Web Scan Trigger
  const handleManualRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
      confetti({
        particleCount: 45,
        spread: 60,
        origin: { y: 0.6 }
      });
      const now = new Date();
      const timeStr = now.toTimeString().split(' ')[0];
      
      // Auto fetch fresh web images for all trends
      setTrends((prevTrends) =>
        prevTrends.map((t) => {
          if (LIVE_WEB_FASHION_IMAGES[t.category]) {
            const webPool = LIVE_WEB_FASHION_IMAGES[t.category];
            const freshWebImage = webPool[Math.floor(Math.random() * webPool.length)];
            return { ...t, image: freshWebImage, score: Math.min(99, t.score + 1) };
          }
          return t;
        })
      );

      setLogs((prev) => [
        { time: timeStr, city: 'WEB-CRAWLER', message: 'WEB AUTO-FETCH COMPLETE: Live trending web images & metrics updated across all hubs.' },
        ...prev
      ]);
    }, 1200);
  };

  // Saved toggle
  const handleToggleSave = (trendId) => {
    setSavedTrendIds((prev) =>
      prev.includes(trendId) ? prev.filter((id) => id !== trendId) : [...prev, trendId]
    );
  };

  // Filter trends logic
  const filteredTrends = trends.filter((trend) => {
    if (activeCapital !== 'all' && !trend.region.includes(activeCapital)) return false;
    if (categoryFilter !== 'all' && trend.category !== categoryFilter) return false;
    if (statusFilter !== 'all' && trend.status !== statusFilter) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchName = trend.name.toLowerCase().includes(q);
      const matchDesc = trend.description.toLowerCase().includes(q);
      const matchCat = trend.category.toLowerCase().includes(q);
      const matchTags = trend.keyHashtags.some((t) => t.toLowerCase().includes(q));
      if (!matchName && !matchDesc && !matchCat && !matchTags) return false;
    }
    return true;
  });

  const savedTrends = trends.filter((t) => savedTrendIds.includes(t.id));

  return (
    <div className="min-h-screen pb-12 overflow-x-hidden">
      {/* Top Luxury Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isAutoFetching={isAutoFetching}
        setIsAutoFetching={setIsAutoFetching}
        onManualRefresh={handleManualRefresh}
        isRefreshing={isRefreshing}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        savedCount={savedTrendIds.length}
      />

      {/* Live Feed Ticker & City Selector */}
      <LiveCrawlerTicker
        logs={logs}
        capitalStats={GLOBAL_CAPITALS}
        activeCapital={activeCapital}
        setActiveCapital={setActiveCapital}
      />

      {/* Main View Area */}
      <main className="max-w-7xl mx-auto px-2 sm:px-4">
        {activeTab === 'dashboard' && (
          <div className="space-y-6 sm:space-y-8 animate-fadeIn">
            {/* Hero Banner */}
            <div className="glass-panel p-4 sm:p-6 md:p-8 relative overflow-hidden border-amber-500/30">
              <div className="absolute right-0 top-0 w-72 h-72 bg-gradient-to-br from-amber-500/10 via-rose-500/10 to-transparent rounded-full blur-3xl pointer-events-none"></div>

              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 relative z-10">
                <div className="max-w-2xl space-y-2">
                  <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-mono text-amber-400">
                    <Globe className="w-3.5 h-3.5 animate-spin text-amber-400" />
                    LIVE WEB TREND AUTO-FETCHER • REAL TRENDING PHOTOS
                  </div>
                  <h2 className="font-editorial text-2xl sm:text-3xl md:text-4xl font-extrabold gradient-text-gold leading-tight">
                    Global Fashion Trend Radar
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Auto-fetching live trending fashion lookbook images, Gen-Z viral styles, 90s nostalgia revivals, and Old Money tailoring directly from global fashion web sources.
                  </p>
                </div>

                {/* Stat Cards Grid */}
                <div className="grid grid-cols-3 gap-2 sm:gap-3 font-mono">
                  <div className="bg-slate-900/80 p-2 sm:p-3 rounded-xl border border-white/10 text-center">
                    <span className="text-[9px] sm:text-[10px] text-slate-400 block truncate">LIVE WEB FEEDS</span>
                    <span className="text-base sm:text-xl font-bold text-amber-300">14 Hubs</span>
                  </div>
                  <div className="bg-slate-900/80 p-2 sm:p-3 rounded-xl border border-white/10 text-center">
                    <span className="text-[9px] sm:text-[10px] text-slate-400 block truncate font-bold text-emerald-400">AUTO-FETCH</span>
                    <span className="text-base sm:text-xl font-bold text-emerald-400">ACTIVE</span>
                  </div>
                  <div className="bg-slate-900/80 p-2 sm:p-3 rounded-xl border border-white/10 text-center">
                    <span className="text-[9px] sm:text-[10px] text-slate-400 block truncate">WEB PHOTOS</span>
                    <span className="text-base sm:text-xl font-bold text-cyan-400">48,290</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Filter Bar */}
            <div className="glass-panel p-3.5 sm:p-4 flex flex-col md:flex-row md:items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
                <SlidersHorizontal className="w-3.5 h-3.5 text-amber-400" />
                <span>FILTER BY ERA / VIBE:</span>
              </div>

              {/* Category Filter Pills */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none max-w-full">
                {['all', 'Gen-Z', '90s Revival', 'Old Money', 'Streetwear'].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setCategoryFilter(cat)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono transition whitespace-nowrap flex-shrink-0 ${
                      categoryFilter === cat
                        ? 'bg-amber-500/20 text-amber-300 border border-amber-500/50 shadow-md shadow-amber-500/10 font-bold'
                        : 'bg-slate-900/50 text-slate-400 border border-white/5 hover:border-white/20'
                    }`}
                  >
                    {cat === 'Gen-Z' ? '🔥 GEN-Z' : cat === '90s Revival' ? '📼 90S REVIVAL' : cat === 'Old Money' ? '👑 OLD MONEY' : cat.toUpperCase()}
                  </button>
                ))}
              </div>

              {/* Status Filter */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none max-w-full">
                <span className="text-[11px] text-slate-500 font-mono hidden sm:inline">Status:</span>
                {['all', 'emerging', 'peak', 'evergreen'].map((st) => (
                  <button
                    key={st}
                    onClick={() => setStatusFilter(st)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-mono transition whitespace-nowrap flex-shrink-0 ${
                      statusFilter === st
                        ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/50'
                        : 'bg-slate-900/50 text-slate-400 border border-white/5'
                    }`}
                  >
                    {st.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {filteredTrends.map((trend) => (
                <TrendCard
                  key={trend.id}
                  trend={trend}
                  onInspect={setInspectingTrend}
                  onToggleSave={handleToggleSave}
                  isSaved={savedTrendIds.includes(trend.id)}
                />
              ))}
            </div>
          </div>
        )}

        {/* Analytics Tab */}
        {activeTab === 'analytics' && <TrendGraphs trends={trends} />}

        {/* Lookbooks Tab */}
        {activeTab === 'lookbooks' && (
          <div className="space-y-6 sm:space-y-8 animate-fadeIn">
            <div className="glass-panel p-4 sm:p-6 border-amber-500/30">
              <h2 className="font-editorial text-xl sm:text-2xl font-bold gradient-text-gold">
                Auto-Fetched Live Web Lookbooks
              </h2>
              <p className="text-xs text-slate-300">
                Live trending fashion photo feeds auto-fetched directly from web runway archives.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {trends.map((trend) => (
                <TrendCard
                  key={trend.id}
                  trend={trend}
                  onInspect={setInspectingTrend}
                  onToggleSave={handleToggleSave}
                  isSaved={savedTrendIds.includes(trend.id)}
                />
              ))}
            </div>
          </div>
        )}

        {/* AI Style Simulator Tab */}
        {activeTab === 'simulator' && <AIForecasterSimulator />}

        {/* Saved Moodboard Studio Tab */}
        {activeTab === 'moodboard' && (
          <MoodboardStudio
            savedTrends={savedTrends}
            onInspect={setInspectingTrend}
            onToggleSave={handleToggleSave}
          />
        )}
      </main>

      {/* Trend Detail Modal */}
      {inspectingTrend && (
        <TrendDetailModal
          trend={inspectingTrend}
          onClose={() => setInspectingTrend(null)}
          onToggleSave={handleToggleSave}
          isSaved={savedTrendIds.includes(inspectingTrend.id)}
        />
      )}
    </div>
  );
}
