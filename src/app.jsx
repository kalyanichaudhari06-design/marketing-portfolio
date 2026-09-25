import React from 'react';
import database from './data/db.json';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased selection:bg-emerald-500 selection:text-slate-950">
      
      {/* Portfolio Deployment Banner */}
      <div className="bg-gradient-to-r from-indigo-900 via-slate-900 to-emerald-900 border-b border-slate-800 px-6 py-3 text-center text-xs tracking-wider text-slate-300 font-mono">
        ⚙️ GTM Portfolio Architecture developed by <span className="text-emerald-400 font-bold">{database.profile.name}</span> | Revenue Architect • Fully Self-Hosted Interface
      </div>

      {/* Header Array */}
      <header className="border-b border-slate-800 bg-slate-900/30 backdrop-blur-md sticky top-0 z-50 px-6 py-4">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-xl font-black tracking-tight text-white">{database.profile.name}</h1>
            <p className="text-xs font-mono text-emerald-400 mt-0.5">{database.profile.title}</p>
          </div>
          <div className="flex gap-3">
            <a 
              href={database.profile.linkedin} 
              target="_blank" 
              rel="noreferrer"
              className="text-xs font-mono bg-slate-900 border border-slate-800 px-3 py-2 rounded-xl text-slate-300 hover:text-white hover:border-slate-700 transition-all"
            >
              LinkedIn Profile ↗
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12 space-y-16">
        
        {/* Core Narrative Profile Box */}
        <section className="bg-gradient-to-br from-slate-900 to-indigo-950/30 border border-slate-800/80 p-8 rounded-3xl relative overflow-hidden shadow-2xl">
          <div className="max-w-4xl space-y-4 relative z-10">
            <span className="text-[10px] font-mono uppercase tracking-widest bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2.5 py-1 rounded-md">
              Executive Focus
            </span>
            <p className="text-lg md:text-xl text-slate-200 font-medium leading-relaxed">
              {database.profile.bio}
            </p>
            <p className="text-xs font-mono text-slate-500">📍 Framework Parameters: {database.profile.location} | Active DACH Contract Alignment</p>
          </div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
        </section>

        {/* Live Metric Modules */}
        <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: 'Influenced Pipeline', val: database.metrics.pipeline, sub: 'Cross-border SaaS metric' },
            { label: 'Budget Stewardship', val: database.metrics.budget, sub: 'Strategic multi-channel scale' },
            { label: 'Target Account MROI', val: database.metrics.mroi, sub: 'Verified pipeline return' },
            { label: 'Enterprise Win Rate', val: database.metrics.winrate, sub: 'Programmatic ABM execution' }
          ].map((m, idx) => (
            <div key={idx} className="bg-slate-900/50 border border-slate-800/60 p-6 rounded-2xl font-mono">
              <span className="text-xs text-slate-500 font-bold uppercase tracking-wider block">{m.label}</span>
              <span className="text-2xl md:text-3xl font-black text-white block mt-2 tracking-tight">{m.val}</span>
              <span className="text-[10px] text-slate-500 block mt-1">{m.sub}</span>
            </div>
          ))}
        </section>

        {/* THE CROWN JEWEL: Interactive Live CTA */}
        <section className="bg-gradient-to-r from-slate-900 via-slate-900 to-emerald-950/20 border border-emerald-500/20 p-8 rounded-3xl flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 shadow-xl">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <h3 className="text-lg font-bold font-mono tracking-tight text-white">
                Proprietary Tech Deployment: Marketing Operating System (MKTG OS)
              </h3>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              An interactive, functional full-funnel dashboard prototype engineered using React and Tailwind. Built to align real-time buying committee intent data with target account matrices and cross-departmental Sales/SDR revenue SLAs. Fully public and open for review.
            </p>
          </div>
          <a
            href={database.apps.abmOsUrl}
            target="_blank"
            rel="noreferrer"
            className="w-full lg:w-auto text-center font-mono font-bold text-xs uppercase tracking-widest bg-emerald-500 text-slate-950 px-6 py-4 rounded-xl shadow-lg shadow-emerald-500/10 hover:bg-emerald-400 hover:shadow-emerald-400/20 transition-all transform active:scale-95 whitespace-nowrap cursor-pointer"
          >
            Launch Live Dashboard App ↗
          </a>
        </section>

        {/* STAR METHOD COMPREHENSIVE CASE STUDIES GRID */}
        <section className="space-y-6">
          <div className="border-b border-slate-800 pb-4">
            <h2 className="text-xl font-bold font-mono text-white tracking-wide">💼 Strategic GTM Project Portfolios (STAR Methodology)</h2>
            <p className="text-xs text-slate-500 mt-1">Methodical breakdowns mapping diagnostic situations, task executions, actions, and quantitative commercial outcomes.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {database.projects.map(p => (
              <div key={p.id} className="bg-slate-900/40 border border-slate-800 p-6 rounded-2xl flex flex-col justify-between space-y-4 hover:border-slate-700/80 transition-all">
                <div className="space-y-3">
                  <div className="flex justify-between items-start gap-2">
                    <h4 className="font-bold text-white text-base tracking-tight leading-snug">{p.title}</h4>
                    <span className="text-[9px] uppercase font-mono font-bold tracking-wider text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20 whitespace-nowrap">{p.tag}</span>
                  </div>
                  
                  {/* STAR Structure Fields */}
                  <div className="space-y-2 text-xs font-sans text-slate-400">
                    <p className="leading-relaxed"><strong className="text-slate-300 font-mono text-[10px] uppercase tracking-wider block mb-0.5 text-emerald-400">Situation:</strong> {p.situation}</p>
                    <p className="leading-relaxed"><strong className="text-slate-300 font-mono text-[10px] uppercase tracking-wider block mb-0.5 text-slate-400">Task:</strong> {p.task}</p>
                    <p className="leading-relaxed"><strong className="text-slate-300 font-mono text-[10px] uppercase tracking-wider block mb-0.5 text-slate-400">Action:</strong> {p.action}</p>
                  </div>
                </div>

                <div className="bg-slate-950/80 border border-slate-800/60 p-3.5 rounded-xl text-xs">
                  <strong className="text-emerald-400 font-mono text-[10px] uppercase tracking-widest block mb-1">⚡ Quantifiable Outcome:</strong>
                  <p className="text-slate-200 font-medium leading-relaxed">{p.result}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>

      <footer className="border-t border-slate-900 max-w-6xl mx-auto py-12 px-6 text-center text-xs font-mono text-slate-600">
        © {new Date().getFullYear()} {database.profile.name} • Full-Funnel Governance Engine hosted independently via GitHub Pages
      </footer>
    </div>
  );
}
