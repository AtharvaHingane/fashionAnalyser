import React, { useState } from 'react';
import { Line, Bar, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, registerables } from 'chart.js';
import { Palette, Activity, Map } from 'lucide-react';
import { MONTH_LABELS } from '../data/fashionTrends';

ChartJS.register(...registerables);

export default function TrendGraphs({ trends }) {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredTrends = selectedCategory === 'all' 
    ? trends 
    : trends.filter(t => t.category.toLowerCase().includes(selectedCategory.toLowerCase()));

  // 1. Line Chart: Multi-Trend Trajectory
  const lineColors = ['#d4af37', '#00f2fe', '#ff4d8d', '#00dfa2', '#ff9f43', '#7928ca'];
  const lineChartData = {
    labels: MONTH_LABELS,
    datasets: filteredTrends.map((trend, idx) => ({
      label: trend.name,
      data: trend.historyData || [40, 50, 60, 70, 80, trend.score],
      borderColor: lineColors[idx % lineColors.length],
      backgroundColor: lineColors[idx % lineColors.length] + '20',
      tension: 0.35,
      pointRadius: 4,
      pointHoverRadius: 7
    }))
  };

  const lineOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: { color: '#cbd5e1', font: { family: 'Outfit', size: 12 } }
      },
      tooltip: {
        backgroundColor: '#0e1118',
        borderColor: 'rgba(212, 175, 55, 0.4)',
        borderWidth: 1,
        titleFont: { family: 'Cinzel', size: 14 },
        bodyFont: { family: 'Space Grotesk', size: 12 }
      }
    },
    scales: {
      x: { grid: { color: 'rgba(255, 255, 255, 0.05)' }, ticks: { color: '#94a3b8', font: { family: 'Space Grotesk' } } },
      y: { grid: { color: 'rgba(255, 255, 255, 0.05)' }, ticks: { color: '#94a3b8', font: { family: 'Space Grotesk' } }, min: 0, max: 100 }
    }
  };

  // 2. Bar Chart: Regional Adoption
  const cities = ['Paris', 'Tokyo', 'NYC', 'Milan', 'London'];
  const barDatasets = filteredTrends.slice(0, 4).map((trend, idx) => ({
    label: trend.name.split('&')[0],
    data: cities.map(city => trend.regionalPopularity[city] || 70),
    backgroundColor: lineColors[idx % lineColors.length] + 'cc',
    borderRadius: 6
  }));

  const barChartData = {
    labels: cities,
    datasets: barDatasets
  };

  const barOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { labels: { color: '#cbd5e1', font: { family: 'Outfit' } } }
    },
    scales: {
      x: { grid: { display: false }, ticks: { color: '#94a3b8', font: { family: 'Space Grotesk' } } },
      y: { grid: { color: 'rgba(255, 255, 255, 0.05)' }, ticks: { color: '#94a3b8', font: { family: 'Space Grotesk' } }, max: 100 }
    }
  };

  // 3. Doughnut: Color Palette Dominance
  const colorDistributionData = {
    labels: ['Warm Sand & Cashmere', 'Electric Cyan Tech', 'Blush Satin Pink', 'Forest Moss Green', 'Cobalt Storm Blue', 'Emerald Chrome'],
    datasets: [
      {
        data: [28, 22, 18, 14, 10, 8],
        backgroundColor: ['#D4A373', '#00F2FE', '#F3C6D3', '#556B2F', '#0A2540', '#0D5C3A'],
        borderColor: '#090b10',
        borderWidth: 2
      }
    ]
  };

  const doughnutOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: 'right', labels: { color: '#cbd5e1', font: { family: 'Space Grotesk', size: 11 } } }
    }
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Top Filter Bar */}
      <div className="glass-panel p-4 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="font-editorial text-2xl font-bold gradient-text-gold">
            Predictive Fashion Analytics & Trajectory
          </h2>
          <p className="text-xs text-slate-400">
            Real-time comparative cross-regional velocity models & color frequency metrics.
          </p>
        </div>

        <div className="flex items-center gap-2">
          {['all', 'Haute Couture', 'Streetwear', 'Aesthetic', 'Sustainable'].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                selectedCategory === cat 
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/50' 
                  : 'bg-slate-900/50 text-slate-400 border border-white/5 hover:border-white/20'
              }`}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* Main Graphs Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Line Chart: Trajectory over time */}
        <div className="lg:col-span-8 glass-panel p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-editorial text-lg font-bold text-white flex items-center gap-2">
              <Activity className="w-5 h-5 text-amber-400" />
              6-Month Trend Growth Trajectory Index
            </h3>
            <span className="text-xs font-mono text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded-md border border-cyan-500/30">
              Velocity Algorithm v4
            </span>
          </div>
          <div className="h-80">
            <Line data={lineChartData} options={lineOptions} />
          </div>
        </div>

        {/* Doughnut: Dominant Runway Palette */}
        <div className="lg:col-span-4 glass-panel p-6 flex flex-col justify-between">
          <div>
            <h3 className="font-editorial text-lg font-bold text-white flex items-center gap-2 mb-2">
              <Palette className="w-5 h-5 text-rose-400" />
              Runway Color Palette Share
            </h3>
            <p className="text-xs text-slate-400 mb-4">Global hex code breakdown across fashion capitals.</p>
          </div>
          <div className="h-64">
            <Doughnut data={colorDistributionData} options={doughnutOptions} />
          </div>
        </div>
      </div>

      {/* Secondary Graphs */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Bar Chart: Regional Hub Popularity */}
        <div className="lg:col-span-12 glass-panel p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-editorial text-lg font-bold text-white flex items-center gap-2">
              <Map className="w-5 h-5 text-emerald-400" />
              Regional Adoption Index across Fashion Hubs
            </h3>
            <span className="text-xs font-mono text-slate-400">Comparing Paris, Tokyo, NYC, Milan & London</span>
          </div>
          <div className="h-72">
            <Bar data={barChartData} options={barOptions} />
          </div>
        </div>
      </div>
    </div>
  );
}
