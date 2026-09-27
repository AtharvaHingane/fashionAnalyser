import React, { useState } from 'react';
import { Cpu, Sparkles, Wand2, TrendingUp, Palette, Layers, CheckCircle2, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function AIForecasterSimulator() {
  const [baseStyle, setBaseStyle] = useState('Quiet Luxury');
  const [fusionStyle, setFusionStyle] = useState('Cyberpunk Techwear');
  const [season, setSeason] = useState('Fall/Winter 2026');
  const [isSimulating, setIsSimulating] = useState(false);
  const [simulationResult, setSimulationResult] = useState(null);

  const styleOptions = [
    'Quiet Luxury',
    'Cyberpunk Techwear',
    'Balletcore Ribbon',
    'Eclectic Grandpa',
    'Futuristic Gorpcore',
    '90s Grunge Revival',
    'Dopamine Chrome',
    'Minimalist Scandinavian',
    'Dark Academia',
    'Barbiecore Pink'
  ];

  const handleSimulate = () => {
    setIsSimulating(true);
    setSimulationResult(null);

    setTimeout(() => {
      setIsSimulating(false);
      // Trigger subtle celebration sparkle
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#d4af37', '#00f2fe', '#ff4d8d']
      });

      // Calculate mock futuristic hybrid trend metrics
      setSimulationResult({
        title: `Hybrid: ${baseStyle} × ${fusionStyle}`,
        viabilityScore: Math.floor(82 + Math.random() * 16),
        projectedGrowth: `+${Math.floor(55 + Math.random() * 35)}% MoM`,
        targetDemographic: 'Gen-Z & Luxury Avant-Garde Buyers (Ages 18-34)',
        leadCapital: baseStyle.includes('Luxury') ? 'Paris & Milan' : 'Tokyo & New York',
        vibeSummary: `Synthesizing the structured elegance of ${baseStyle} with the raw futuristic accents of ${fusionStyle}. Expect sleek waterproof tailoring, iridescent metallic trims, and modular silhouette layering.`,
        suggestedColors: ['#1A1A24', '#D4AF37', '#00F2FE', '#E0E0E0'],
        suggestedNames: ['Obsidian Silk', 'Imperial Gold', 'Neon Cyber Cyan', 'Liquid Silver'],
        keyPieces: [
          'Modular Cashmere Trench with Magnetic Cyber Locks',
          'Iridescent Metallic Silk Slip Dress with Utility Harness',
          'Structured Leather Tailored Trousers with Glow Welded Seams',
          'Ballet-Trail Hybrid Waterproof Footwear'
        ]
      });
    }, 1200);
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Banner */}
      <div className="glass-panel p-6 border-cyan-500/30">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
            <Cpu className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <h2 className="font-editorial text-2xl font-bold gradient-text-neon">
              AI Style Fusion & Trend Forecasting Simulator
            </h2>
            <p className="text-xs text-slate-300">
              Combine two global aesthetic vectors to simulate commercial viability, projected growth, and runway palette forecasting.
            </p>
          </div>
        </div>
      </div>

      {/* Simulator Inputs Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Controls */}
        <div className="lg:col-span-5 glass-panel p-6 space-y-6">
          <h3 className="font-editorial text-lg font-bold text-white flex items-center gap-2">
            <Wand2 className="w-5 h-5 text-amber-400" />
            Synthesis Controls
          </h3>

          {/* Primary Style */}
          <div>
            <label className="block text-xs font-mono uppercase text-slate-400 mb-2">
              Primary Aesthetic Vector:
            </label>
            <select
              value={baseStyle}
              onChange={(e) => setBaseStyle(e.target.value)}
              className="input-glass w-full text-xs font-medium cursor-pointer"
            >
              {styleOptions.map((opt) => (
                <option key={opt} value={opt} className="bg-slate-900 text-white">
                  {opt}
                </option>
              ))}
            </select>
          </div>

          {/* Secondary Style */}
          <div>
            <label className="block text-xs font-mono uppercase text-slate-400 mb-2">
              Fusion Vector:
            </label>
            <select
              value={fusionStyle}
              onChange={(e) => setFusionStyle(e.target.value)}
              className="input-glass w-full text-xs font-medium cursor-pointer"
            >
              {styleOptions.map((opt) => (
                <option key={opt} value={opt} className="bg-slate-900 text-white">
                  {opt}
                </option>
              ))}
            </select>
          </div>

          {/* Target Season */}
          <div>
            <label className="block text-xs font-mono uppercase text-slate-400 mb-2">
              Forecast Target Season:
            </label>
            <select
              value={season}
              onChange={(e) => setSeason(e.target.value)}
              className="input-glass w-full text-xs font-medium cursor-pointer"
            >
              <option value="Fall/Winter 2026" className="bg-slate-900">Fall / Winter 2026</option>
              <option value="Spring/Summer 2027" className="bg-slate-900">Spring / Summer 2027</option>
              <option value="Resort 2027" className="bg-slate-900">Resort 2027</option>
            </select>
          </div>

          {/* Simulate Button */}
          <button
            onClick={handleSimulate}
            disabled={isSimulating}
            className="btn-gold w-full justify-center text-sm py-3 shadow-lg shadow-amber-500/20"
          >
            <Sparkles className={`w-4 h-4 ${isSimulating ? 'animate-spin' : ''}`} />
            {isSimulating ? 'Running Neural Simulator...' : 'Generate AI Trend Forecast'}
          </button>
        </div>

        {/* Output Panel */}
        <div className="lg:col-span-7 glass-panel p-6 flex flex-col justify-between relative overflow-hidden">
          {isSimulating ? (
            <div className="h-full flex flex-col items-center justify-center space-y-4 py-16">
              <div className="w-16 h-16 rounded-full border-4 border-cyan-500/20 border-t-cyan-400 animate-spin"></div>
              <p className="font-mono text-xs text-cyan-400 animate-pulse">
                Parsing 50,000 fashion vectors & neural trend clusters...
              </p>
            </div>
          ) : simulationResult ? (
            <div className="space-y-6 animate-fadeIn">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div>
                  <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">Target: {season}</span>
                  <h3 className="font-editorial text-xl font-bold gradient-text-gold">
                    {simulationResult.title}
                  </h3>
                </div>
                <div className="text-right">
                  <div className="text-xs text-slate-400 font-mono">Viability Index</div>
                  <div className="text-2xl font-bold font-mono text-amber-300">
                    {simulationResult.viabilityScore}/100
                  </div>
                </div>
              </div>

              {/* Vibe summary */}
              <p className="text-sm text-slate-200 leading-relaxed bg-slate-900/60 p-4 rounded-xl border border-white/5">
                {simulationResult.vibeSummary}
              </p>

              {/* Key Forecast Cards */}
              <div className="grid grid-cols-2 gap-3 font-mono text-xs">
                <div className="bg-slate-900/80 p-3 rounded-xl border border-emerald-500/30">
                  <span className="text-slate-400 block text-[11px]">Projected MoM Growth</span>
                  <span className="text-emerald-400 font-bold text-base">{simulationResult.projectedGrowth}</span>
                </div>
                <div className="bg-slate-900/80 p-3 rounded-xl border border-rose-500/30">
                  <span className="text-slate-400 block text-[11px]">Lead Hub Capital</span>
                  <span className="text-rose-300 font-bold text-base">{simulationResult.leadCapital}</span>
                </div>
              </div>

              {/* Suggested Color Scheme */}
              <div>
                <h4 className="text-xs font-mono uppercase text-slate-400 mb-2 flex items-center gap-1.5">
                  <Palette className="w-4 h-4 text-cyan-400" />
                  Generated Runway Color Swatches:
                </h4>
                <div className="flex flex-wrap items-center gap-2">
                  {simulationResult.suggestedColors.map((hex, i) => (
                    <div key={i} className="flex items-center gap-2 bg-slate-900/90 px-3 py-1.5 rounded-lg border border-white/10">
                      <span className="w-5 h-5 rounded-full border border-white/30" style={{ backgroundColor: hex }}></span>
                      <span className="text-xs font-mono text-slate-200">{simulationResult.suggestedNames[i]} ({hex})</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Key Pieces */}
              <div>
                <h4 className="text-xs font-mono uppercase text-slate-400 mb-2 flex items-center gap-1.5">
                  <Layers className="w-4 h-4 text-amber-400" />
                  Key Hero Collection Pieces:
                </h4>
                <ul className="space-y-1.5">
                  {simulationResult.keyPieces.map((piece, i) => (
                    <li key={i} className="text-xs text-slate-300 flex items-center gap-2 bg-slate-950/60 px-3 py-2 rounded-lg border border-white/5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      <span>{piece}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-center p-12 space-y-3 text-slate-400">
              <Sparkles className="w-12 h-12 text-slate-600 mb-2 animate-bounce" />
              <h4 className="font-editorial text-lg text-slate-300">Ready to Forecast</h4>
              <p className="text-xs max-w-sm">
                Select your primary and fusion style vectors on the left and click "Generate AI Trend Forecast" to simulate.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
