import React from 'react';
import { TrendingUp, Eye, Bookmark, MapPin, CheckCircle2, Sparkles, Layers, Camera, ExternalLink } from 'lucide-react';

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
      <div className="relative h-60 sm:h-64 overflow-hidden bg-slate-950">
        <img
          src={trend.image}
          alt={trend.name}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          onError={(e) => {
            e.target.src = 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent"></div>

        {/* Top Floating Badges */}
        <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className={`badge-status ${getBadgeClass(trend.status)} text-[10px] sm:text-[11px]`}>
              {trend.statusLabel}
            </span>
            <span className="text-[10px] font-mono bg-slate-900/90 text-amber-300 px-2 py-0.5 rounded border border-amber-500/40">
              {trend.category}
            </span>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleSave(trend.id);
            }}
            className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full glass-panel flex items-center justify-center transition-all ${
              isSaved 
                ? 'bg-rose-500/30 text-rose-400 border-rose-500/50 shadow-lg shadow-rose-500/20' 
                : 'text-slate-300 hover:text-white hover:bg-slate-800/80'
            }`}
          >
            <Bookmark className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${isSaved ? 'fill-rose-400' : ''}`} />
          </button>
        </div>

        {/* Bottom Floating Stats */}
        <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between text-[11px]">
          <div className="flex items-center gap-1 text-amber-300 font-mono bg-slate-900/90 px-2.5 py-1 rounded-md border border-amber-500/30">
            <TrendingUp className="w-3.5 h-3.5 text-amber-400" />
            <span className="font-bold">Score {trend.score}/100</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-emerald-400 font-mono bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30 font-bold">
              {trend.growthRate}
            </span>
          </div>
        </div>
      </div>

      {/* Card Content Body */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
        <div>
          {/* Category & Region */}
          <div className="flex items-center justify-between gap-2 text-[11px] text-slate-400 mb-1.5 font-mono">
            <span className="uppercase tracking-widest text-cyan-400 font-semibold">{trend.category}</span>
            <span className="flex items-center gap-1 text-slate-300 truncate">
              <MapPin className="w-3 h-3 text-rose-400 flex-shrink-0" />
              {trend.regionName}
            </span>
          </div>

          {/* Title */}
          <h3 className="font-editorial text-base sm:text-lg font-bold text-white group-hover:text-amber-300 transition-colors mb-1.5 leading-snug">
            {trend.name}
          </h3>

          {/* Photo Source Attribution */}
          {trend.photoSource && (
            <div className="text-[10px] font-mono text-slate-400 bg-slate-900/80 px-2 py-1 rounded border border-white/5 flex items-center justify-between mb-2">
              <span className="flex items-center gap-1 truncate text-slate-300">
                <Camera className="w-3 h-3 text-cyan-400 flex-shrink-0" />
                <span>Source: {trend.photoSource}</span>
              </span>
              {trend.photoSourceUrl && (
                <a
                  href={trend.photoSourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="text-cyan-400 hover:underline flex items-center gap-0.5 flex-shrink-0 ml-1"
                >
                  <span>Link</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              )}
            </div>
          )}

          {/* Lead Designers & Houses */}
          {trend.leadDesigners && (
            <div className="text-[11px] font-mono text-amber-400/90 mb-2 flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-amber-400 flex-shrink-0" />
              <span className="truncate">{trend.leadDesigners.join(' • ')}</span>
            </div>
          )}

          {/* Description */}
          <p className="text-xs text-slate-300/90 line-clamp-2 leading-relaxed mb-3">
            {trend.description}
          </p>

          {/* Color Palette Chips */}
          <div className="mb-2">
            <div className="text-[10px] font-mono text-slate-400 mb-1 flex items-center justify-between">
              <span>Runway Palette:</span>
              <span className="text-slate-500 truncate max-w-[150px]">{trend.colorNames.slice(0, 2).join(', ')}</span>
            </div>
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
              {trend.dominantColors.map((hex, i) => (
                <div key={i} className="flex items-center gap-1 bg-slate-900/60 px-1.5 py-0.5 rounded-md border border-white/5 flex-shrink-0">
                  <span className="w-3.5 h-3.5 rounded-full border border-white/30" style={{ backgroundColor: hex }}></span>
                  <span className="text-[10px] font-mono text-slate-300">{hex}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="pt-2.5 border-t border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-1 text-[10px] text-slate-400 font-mono">
            <CheckCircle2 className="w-3 h-3 text-emerald-400" />
            <span className="truncate">{trend.photographer || 'Verified Photo'}</span>
          </div>

          <button
            onClick={() => onInspect(trend)}
            className="btn-glass text-[11px] sm:text-xs py-1 px-2.5 sm:py-1.5 sm:px-3 group-hover:border-amber-500/50 group-hover:text-amber-300 flex-shrink-0"
          >
            <Eye className="w-3.5 h-3.5" />
            Full Analysis
          </button>
        </div>
      </div>
    </div>
  );
}
