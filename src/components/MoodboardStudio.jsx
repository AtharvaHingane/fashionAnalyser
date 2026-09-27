import React from 'react';
import { Bookmark, Download, Sparkles, Trash2, Printer, Palette, Eye, ArrowUpRight } from 'lucide-react';
import TrendCard from './TrendCard';

export default function MoodboardStudio({ savedTrends, onInspect, onToggleSave }) {
  const handleExportPrint = () => {
    window.print();
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Top Header */}
      <div className="glass-panel p-6 flex flex-wrap items-center justify-between gap-4 border-rose-500/30">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Bookmark className="w-5 h-5 text-rose-400 fill-rose-400" />
            <h2 className="font-editorial text-2xl font-bold gradient-text-rose">
              Curated Fashion Moodboard & Brief Studio
            </h2>
          </div>
          <p className="text-xs text-slate-300">
            {savedTrends.length} bookmarked trends saved to your seasonal buyer brief.
          </p>
        </div>

        {savedTrends.length > 0 && (
          <div className="flex items-center gap-3">
            <button
              onClick={handleExportPrint}
              className="btn-glass text-xs hover:border-amber-500/50"
            >
              <Printer className="w-4 h-4 text-amber-400" />
              Export Brief (PDF / Print)
            </button>
          </div>
        )}
      </div>

      {/* Content */}
      {savedTrends.length === 0 ? (
        <div className="glass-panel p-16 text-center space-y-4">
          <Bookmark className="w-12 h-12 text-slate-600 mx-auto" />
          <h3 className="font-editorial text-xl font-bold text-slate-300">Your Moodboard is Empty</h3>
          <p className="text-xs text-slate-400 max-w-md mx-auto">
            Browse the Live Radar or Visual Lookbooks and click the bookmark icon on any trend card to curate your custom fashion brief.
          </p>
        </div>
      ) : (
        <div className="space-y-8">
          {/* Swatch Matrix Summary */}
          <div className="glass-panel p-6">
            <h3 className="font-editorial text-lg font-bold text-white mb-3 flex items-center gap-2">
              <Palette className="w-5 h-5 text-amber-400" />
              Aggregated Seasonal Color Matrix
            </h3>
            <div className="flex flex-wrap items-center gap-3">
              {savedTrends.flatMap(t => t.dominantColors).map((hex, i) => (
                <div key={i} className="flex items-center gap-2 bg-slate-900/90 px-3 py-1.5 rounded-lg border border-white/10">
                  <span className="w-6 h-6 rounded-full border border-white/30" style={{ backgroundColor: hex }}></span>
                  <span className="text-xs font-mono text-slate-200">{hex}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {savedTrends.map((trend) => (
              <TrendCard
                key={trend.id}
                trend={trend}
                onInspect={onInspect}
                onToggleSave={onToggleSave}
                isSaved={true}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
