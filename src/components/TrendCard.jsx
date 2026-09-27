import React from 'react';
import { TrendingUp, Eye, Bookmark, Sparkles, MapPin, CheckCircle2 } from 'lucide-react';

export default function TrendCard({ trend, onInspect, onToggleSave, isSaved }) {
  const getBadgeClass = (status) => {
    switch (status) {
      case 'emerging': return 'badge-emerging';
      case 'peak': return 'badge-peak';
      case 'evergreen': return 'badge-evergreen';
      default: return 'badge-fading';
    }
  };

  return (
    <div className="glass-card-interactive group flex flex-col h-full">
      {/* Image Container with Visual Hover Overlay */}
      <div className="relative h-64 overflow-hidden bg-slate-950">
        <img
          src={trend.image}
          alt={trend.name}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          onError={(e) => {
            e.target.src = 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>

        {/* Top Floating Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
          <span className={`badge-status ${getBadgeClass(trend.status)}`}>
            {trend.statusLabel}
          </span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleSave(trend.id);
            }}
            className={`w-9 h-9 rounded-full glass-panel flex items-center justify-center transition-all ${
              isSaved 
                ? 'bg-rose-500/30 text-rose-400 border-rose-500/50 shadow-lg shadow-rose-500/20' 
                : 'text-slate-300 hover:text-white hover:bg-slate-800/80'
            }`}
          >
            <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-rose-400' : ''}`} />
          </button>
        </div>

        {/* Bottom Floating Stats */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs">
          <div className="flex items-center gap-1.5 text-amber-300 font-mono bg-slate-900/80 px-2.5 py-1 rounded-md border border-amber-500/30">
            <TrendingUp className="w-3.5 h-3.5 text-amber-400" />
            <span>Score {trend.score}/100</span>
          </div>
          <div className="text-emerald-400 font-mono bg-emerald-500/10 px-2 py-1 rounded-md border border-emerald-500/30">
            {trend.growthRate}
          </div>
        </div>
      </div>

      {/* Card Content Body */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Category & Region */}
          <div className="flex items-center justify-between gap-2 text-xs text-slate-400 mb-2 font-mono">
            <span className="uppercase tracking-widest text-cyan-400 font-semibold">{trend.category}</span>
            <span className="flex items-center gap-1 text-slate-300">
              <MapPin className="w-3 h-3 text-rose-400" />
              {trend.regionName}
            </span>
          </div>

          {/* Title */}
          <h3 className="font-editorial text-lg font-bold text-white group-hover:text-amber-300 transition-colors mb-2 leading-snug">
            {trend.name}
          </h3>

          {/* Description */}
          <p className="text-xs text-slate-300/90 line-clamp-2 leading-relaxed mb-4">
            {trend.description}
          </p>

          {/* Color Palette Chips */}
          <div className="mb-4">
            <div className="text-[11px] font-mono text-slate-400 mb-1.5 flex items-center justify-between">
              <span>Dominant Runway Palette:</span>
              <span className="text-slate-500">{trend.colorNames.slice(0, 2).join(', ')}</span>
            </div>
            <div className="flex items-center gap-2">
              {trend.dominantColors.map((hex, i) => (
                <div key={i} className="flex items-center gap-1.5 bg-slate-900/60 px-2 py-1 rounded-lg border border-white/5">
                  <span className="color-swatch-chip" style={{ backgroundColor: hex }}></span>
                  <span className="text-[10px] font-mono text-slate-300">{hex}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="pt-3 border-t border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-[11px] text-slate-400 font-mono">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>AI Verified</span>
          </div>

          <button
            onClick={() => onInspect(trend)}
            className="btn-glass text-xs py-1.5 px-3 group-hover:border-amber-500/50 group-hover:text-amber-300"
          >
            <Eye className="w-3.5 h-3.5" />
            Inspect Analysis
          </button>
        </div>
      </div>
    </div>
  );
}
