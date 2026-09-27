import React from 'react';
import { X, MapPin, Sparkles, Bookmark, Lightbulb } from 'lucide-react';
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
          {/* Left Column: Image Lookbook & Color Palette */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-6">
            <div className="rounded-xl sm:rounded-2xl overflow-hidden border border-white/10 relative h-60 sm:h-80 bg-slate-950">
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
            {/* Description & Buying Advice */}
            <div className="glass-panel p-4 sm:p-5 space-y-3">
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                {trend.description}
              </p>

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
