import React from 'react';
import { X, MapPin, Sparkles, Bookmark, Lightbulb, Users, MessageSquareQuote, Camera, ExternalLink, ShieldCheck } from 'lucide-react';
import { Line, Radar } from 'react-chartjs-2';
import { Chart as ChartJS, registerables } from 'chart.js';

ChartJS.register(...registerables);

export default function TrendDetailModal({ trend, onClose, onToggleSave, isSaved }) {
  if (!trend) return null;

  // History Chart Config
  const historyData = {
    labels: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep 2026'],
    datasets: [
      {
        label: 'Trend Velocity Score',
        data: trend.historyData || [40, 55, 70, 82, 90, 95],
        borderColor: '#d4af37',
        backgroundColor: 'rgba(212, 175, 55, 0.15)',
        fill: true,
        tension: 0.4,
        pointBackgroundColor: '#fff',
        pointBorderColor: '#d4af37',
        pointRadius: 4
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false }
    },
    scales: {
      x: { grid: { color: 'rgba(255, 255, 255, 0.05)' }, ticks: { color: '#94a3b8', font: { family: 'Space Grotesk', size: 10 } } },
      y: { grid: { color: 'rgba(255, 255, 255, 0.05)' }, ticks: { color: '#94a3b8', font: { family: 'Space Grotesk', size: 10 } }, min: 0, max: 100 }
    }
  };

  // Radar Data Config
  const radarData = {
    labels: ['Elegance', 'Avant-Garde', 'Utility', 'Vintage', 'Color Pop', 'Eco-Value'],
    datasets: [
      {
        label: 'Sentiment Profile',
        data: [
          trend.sentimentScore.elegance,
          trend.sentimentScore.avantGarde,
          trend.sentimentScore.utility,
          trend.sentimentScore.vintageRevival,
          trend.sentimentScore.colorVibrancy,
          trend.sentimentScore.sustainability
        ],
        backgroundColor: 'rgba(0, 242, 254, 0.25)',
        borderColor: '#00f2fe',
        pointBackgroundColor: '#00f2fe'
      }
    ]
  };

  const radarOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      r: {
        angleLines: { color: 'rgba(255, 255, 255, 0.1)' },
        grid: { color: 'rgba(255, 255, 255, 0.1)' },
        pointLabels: { color: '#cbd5e1', font: { size: 9, family: 'Space Grotesk' } },
        ticks: { display: false, min: 0, max: 100 }
      }
    }
  };

  return (
    <div className="modal-overlay p-2 sm:p-4 animate-fadeIn">
      <div className="glass-panel w-full max-w-5xl max-h-[92vh] overflow-y-auto p-4 sm:p-6 md:p-8 relative border-amber-500/30 shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-5 sm:right-5 w-8 h-8 sm:w-10 sm:h-10 rounded-full glass-panel flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 transition z-20"
        >
          <X className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        {/* Top Header */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4 sm:mb-6 pr-10">
          <div>
            <div className="flex items-center gap-2 mb-1.5 flex-wrap">
              <span className="badge-status badge-peak text-[10px]">{trend.statusLabel}</span>
              <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-widest flex items-center gap-1">
                <MapPin className="w-3 h-3 text-rose-400" />
                {trend.regionName}
              </span>
              <span className="text-[10px] font-mono bg-amber-500/10 text-amber-300 px-2 py-0.5 rounded border border-amber-500/30">
                Category: {trend.category}
              </span>
            </div>
            <h2 className="font-editorial text-xl sm:text-2xl md:text-3xl font-bold gradient-text-gold leading-tight">
              {trend.name}
            </h2>
          </div>

          <button
            onClick={() => onToggleSave(trend.id)}
            className={`btn-glass text-xs py-1.5 px-3 self-start ${isSaved ? 'text-rose-400 border-rose-500/40 bg-rose-500/10' : ''}`}
          >
            <Bookmark className={`w-3.5 h-3.5 ${isSaved ? 'fill-rose-400' : ''}`} />
            {isSaved ? 'Saved' : 'Save Trend'}
          </button>
        </div>

        {/* Grid Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          {/* Left Column: Image Lookbook & Photo Source Attributions */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-6">
            <div className="rounded-xl sm:rounded-2xl overflow-hidden border border-white/10 relative h-64 sm:h-80 bg-slate-950">
              <img
                src={trend.image}
                alt={trend.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono">
                <span className="bg-slate-900/90 text-amber-300 px-2.5 py-1 rounded-lg border border-amber-500/40">
                  Index: {trend.score}/100
                </span>
                <span className="bg-emerald-500/20 text-emerald-400 px-2.5 py-1 rounded-lg border border-emerald-500/40 font-bold">
                  {trend.growthRate}
                </span>
              </div>
            </div>

            {/* Explicit Photo Source & Attribution Box */}
            <div className="glass-panel p-4 space-y-2 font-mono text-xs border-cyan-500/30">
              <div className="flex items-center gap-1.5 text-cyan-400 font-bold uppercase tracking-widest text-[11px] pb-1.5 border-b border-cyan-500/20">
                <Camera className="w-4 h-4 text-cyan-400" />
                <span>Runway Photo Source & Attributions</span>
              </div>
              <div className="text-[11px] text-slate-300 space-y-1 pt-1">
                <p><span className="text-slate-500">Source Archive:</span> {trend.photoSource || 'Unsplash High Fashion Editorial'}</p>
                <p><span className="text-slate-500">Photographer:</span> {trend.photographer || 'Editorial Runway Photographer'}</p>
                {trend.editorialCredit && (
                  <p><span className="text-slate-500">Press Citation:</span> {trend.editorialCredit}</p>
                )}
                {trend.photoSourceUrl && (
                  <div className="pt-1.5">
                    <a
                      href={trend.photoSourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-glass text-[10px] py-1 px-2.5 text-cyan-300 border-cyan-500/40 hover:bg-cyan-500/20 inline-flex items-center gap-1"
                    >
                      <span>View Direct Source Web Photo</span>
                      <ExternalLink className="w-3 h-3 text-cyan-400" />
                    </a>
                  </div>
                )}
              </div>
            </div>

            {/* Key Data Box */}
            <div className="glass-panel p-4 space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between pb-2 border-b border-white/5">
                <span className="text-slate-400 text-[11px]">YoY Growth Velocity:</span>
                <span className="text-cyan-300 font-bold">{trend.yoyGrowth || '+112% YoY'}</span>
              </div>
              <div className="flex items-center justify-between pb-2 border-b border-white/5">
                <span className="text-slate-400 text-[11px]">Social Media Reach:</span>
                <span className="text-amber-300 font-bold">{trend.socialVolume || '8.4M posts'}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400 text-[11px]">Resale Liquidity Score:</span>
                <span className="text-emerald-400 font-bold">{trend.resaleIndex || '95/100'}</span>
              </div>
            </div>

            {/* Detailed Color Palette Breakdown */}
            <div className="glass-panel p-3.5 sm:p-4">
              <h4 className="text-[11px] font-mono uppercase tracking-widest text-slate-400 mb-2.5 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                Runway Color Palette
              </h4>
              <div className="grid grid-cols-2 gap-2">
                {trend.dominantColors.map((hex, i) => (
                  <div key={i} className="flex items-center gap-2 bg-slate-900/80 p-1.5 sm:p-2 rounded-lg border border-white/5">
                    <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-md border border-white/20 shadow-md flex-shrink-0" style={{ backgroundColor: hex }}></span>
                    <div className="overflow-hidden">
                      <p className="text-[11px] font-bold text-white truncate">{trend.colorNames[i] || 'Color'}</p>
                      <p className="text-[9px] font-mono text-slate-400">{hex}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Deep Analysis, Trajectory & Radar */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6">
            {/* Description & Runway Quote */}
            <div className="glass-panel p-4 sm:p-5 space-y-4">
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                {trend.description}
              </p>

              {/* Editorial Quote */}
              {trend.runwayQuote && (
                <div className="bg-slate-950/80 border-l-2 border-amber-400 p-3 rounded-r-xl italic text-xs text-amber-200/90 flex items-start gap-2">
                  <MessageSquareQuote className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span>{trend.runwayQuote}</span>
                </div>
              )}

              {/* Lead Designers */}
              {trend.leadDesigners && (
                <div className="space-y-1">
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-widest block">Leading Fashion Houses & Designers:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {trend.leadDesigners.map((designer, i) => (
                      <span key={i} className="text-xs font-mono bg-amber-500/10 text-amber-300 px-2.5 py-1 rounded-md border border-amber-500/30">
                        {designer}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Key Fabrics */}
              {trend.keyFabrics && (
                <div className="space-y-1">
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-widest block">Core Textile & Material Composition:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {trend.keyFabrics.map((fabric, i) => (
                      <span key={i} className="text-xs font-mono bg-cyan-500/10 text-cyan-300 px-2.5 py-1 rounded-md border border-cyan-500/30">
                        {fabric}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Target Demographic */}
              {trend.targetDemographic && (
                <div className="text-xs font-mono text-slate-300 bg-slate-900/80 p-2.5 rounded-lg border border-white/5 flex items-center gap-2">
                  <Users className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Target Demographic: {trend.targetDemographic}</span>
                </div>
              )}

              <div className="bg-amber-500/10 border border-amber-500/30 p-3 rounded-xl flex items-start gap-2.5">
                <Lightbulb className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h5 className="text-[11px] font-bold text-amber-300 uppercase tracking-wide mb-0.5">AI Retail Advisory</h5>
                  <p className="text-xs text-slate-300">{trend.buyingAdvice}</p>
                </div>
              </div>

              {/* Hashtags */}
              <div className="flex flex-wrap gap-1 pt-1">
                {trend.keyHashtags.map((tag, i) => (
                  <span key={i} className="text-[10px] sm:text-xs font-mono bg-slate-900/80 text-cyan-400 px-2 py-0.5 rounded border border-cyan-500/20">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Graphs Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {/* Line Chart */}
              <div className="glass-panel p-3 sm:p-4 h-56 flex flex-col justify-between">
                <h4 className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-slate-400 mb-1">
                  Velocity Trajectory (6M)
                </h4>
                <div className="h-40">
                  <Line data={historyData} options={chartOptions} />
                </div>
              </div>

              {/* Radar Chart */}
              <div className="glass-panel p-3 sm:p-4 h-56 flex flex-col justify-between">
                <h4 className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-slate-400 mb-1">
                  Attribute Profile
                </h4>
                <div className="h-40">
                  <Radar data={radarData} options={radarOptions} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
