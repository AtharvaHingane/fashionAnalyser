import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import LiveCrawlerTicker from './components/LiveCrawlerTicker';
import TrendCard from './components/TrendCard';
import TrendDetailModal from './components/TrendDetailModal';
import TrendGraphs from './components/TrendGraphs';
import AIForecasterSimulator from './components/AIForecasterSimulator';
import MoodboardStudio from './components/MoodboardStudio';
import { INITIAL_TRENDS, GLOBAL_CAPITALS, LIVE_SIMULATED_LOGS } from './data/fashionTrends';
import { Sparkles, SlidersHorizontal, ArrowUpRight, Flame, ShieldAlert, Award } from 'lucide-react';
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
  const [savedTrendIds, setSavedTrendIds] = useState(['trend-1', 'trend-2']);

  // Auto Crawl Simulator Hook (every 5 seconds when active)
  useEffect(() => {
    if (!isAutoFetching) return;

    const interval = setInterval(() => {
      // Simulate real-time data tick
      const cities = ['PARIS', 'TOKYO', 'MILAN', 'SEOUL', 'NEW YORK', 'COPENHAGEN'];
      const randomCity = cities[Math.floor(Math.random() * cities.length)];
      const now = new Date();
      const timeStr = now.toTimeString().split(' ')[0];

      const messages = [
        `Scanned ${Math.floor(5000 + Math.random() * 15000)} Instagram lookbooks. Palette color frequency updated.`,
        `Runway image similarity matching complete. Trend velocity index +${(Math.random() * 2.5).toFixed(1)}%.`,
        `E-commerce search volume spike detected for ${randomCity} urban streetwear.`,
        `AI sentiment model parsed 8,200 fashion blog reviews. High positive sentiment.`
      ];
      const randomMsg = messages[Math.floor(Math.random() * messages.length)];

      setLogs((prev) => [{ time: timeStr, city: randomCity, message: randomMsg }, ...prev.slice(0, 14)]);

      // Slightly alter scores to simulate real-time live pulse
      setTrends((prevTrends) =>
        prevTrends.map((t) => {
          if (Math.random() > 0.6) {
            const delta = Math.random() > 0.5 ? 1 : -1;
            const newScore = Math.min(100, Math.max(70, t.score + delta));
            return { ...t, score: newScore };
          }
          return t;
        })
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoFetching]);

  // Manual Scan Trigger
  const handleManualRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
      confetti({
        particleCount: 50,
        spread: 70,
        origin: { y: 0.6 }
      });
      const now = new Date();
      const timeStr = now.toTimeString().split(' ')[0];
      setLogs((prev) => [
        { time: timeStr, city: 'GLOBAL', message: 'FULL SCAN COMPLETE: 140,000 Global Runway & Social posts parsed.' },
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
    // Capital filter
    if (activeCapital !== 'all' && !trend.region.includes(activeCapital)) return false;
    // Category filter
    if (categoryFilter !== 'all' && trend.category !== categoryFilter) return false;
    // Status filter
    if (statusFilter !== 'all' && trend.status !== statusFilter) return false;
    // Search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchName = trend.name.toLowerCase().includes(q);
      const matchDesc = trend.description.toLowerCase().includes(q);
      const matchTags = trend.keyHashtags.some((t) => t.toLowerCase().includes(q));
      if (!matchName && !matchDesc && !matchTags) return false;
    }
    return true;
  });

  const savedTrends = trends.filter((t) => savedTrendIds.includes(t.id));

  return (
    <div className="min-h-screen pb-16">
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
      <main className="max-w-7xl mx-auto px-4">
        {activeTab === 'dashboard' && (
          <div className="space-y-8 animate-fadeIn">
            {/* Hero Banner */}
            <div className="glass-panel p-6 md:p-8 relative overflow-hidden border-amber-500/30">
              <div className="absolute right-0 top-0 w-96 h-96 bg-gradient-to-br from-amber-500/10 via-rose-500/10 to-transparent rounded-full blur-3xl pointer-events-none"></div>

              <div className="flex flex-wrap items-center justify-between gap-6 relative z-10">
                <div className="max-w-2xl space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono text-amber-400">
                    <Sparkles className="w-4 h-4 animate-spin text-amber-400" />
                    AUTOMATED FASHION INTELLIGENCE & FORECASTING
                  </div>
                  <h2 className="font-editorial text-3xl md:text-4xl font-extrabold gradient-text-gold">
                    Global Fashion Trend Radar
                  </h2>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Continuously analyzing global runway lookbooks, social media sentiment, search velocity, and retail purchase data across Paris, Tokyo, Milan, Seoul, and New York.
                  </p>
                </div>

                {/* Stat Cards */}
                <div className="grid grid-cols-3 gap-3 font-mono">
                  <div className="bg-slate-900/80 p-3 rounded-xl border border-white/10 text-center">
                    <span className="text-[10px] text-slate-400 block">ACTIVE CRAWLERS</span>
                    <span className="text-xl font-bold text-amber-300">14 Hubs</span>
                  </div>
                  <div className="bg-slate-900/80 p-3 rounded-xl border border-white/10 text-center">
                    <span className="text-[10px] text-slate-400 block">ACCURACY SCORE</span>
                    <span className="text-xl font-bold text-emerald-400">97.8%</span>
                  </div>
                  <div className="bg-slate-900/80 p-3 rounded-xl border border-white/10 text-center">
                    <span className="text-[10px] text-slate-400 block">TREND CLUSTERS</span>
                    <span className="text-xl font-bold text-cyan-400">1,420</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Filter Bar */}
            <div className="glass-panel p-4 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
                <SlidersHorizontal className="w-4 h-4 text-amber-400" />
                <span>FILTER TRENDS BY:</span>
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs text-slate-500 font-mono">Category:</span>
                {['all', 'Haute Couture', 'Streetwear', 'Aesthetic', 'Sustainable', 'Colorways'].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setCategoryFilter(cat)}
                    className={`px-3 py-1 rounded-lg text-xs font-mono transition ${
                      categoryFilter === cat
                        ? 'bg-amber-500/20 text-amber-300 border border-amber-500/50'
                        : 'bg-slate-900/50 text-slate-400 border border-white/5 hover:border-white/20'
                    }`}
                  >
                    {cat.toUpperCase()}
                  </button>
                ))}
              </div>

              {/* Status Filter */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs text-slate-500 font-mono">Status:</span>
                {['all', 'emerging', 'peak', 'evergreen'].map((st) => (
                  <button
                    key={st}
                    onClick={() => setStatusFilter(st)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-mono transition ${
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
          <div className="space-y-8 animate-fadeIn">
            <div className="glass-panel p-6 border-amber-500/30">
              <h2 className="font-editorial text-2xl font-bold gradient-text-gold">
                High Fashion Visual Runway Lookbooks
              </h2>
              <p className="text-xs text-slate-300">
                Visual moodboard lookbooks auto-curated from Paris, Tokyo, and Milan editorial showcases.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
