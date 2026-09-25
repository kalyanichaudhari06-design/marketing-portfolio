import React from 'react';
import database from './data/db.json';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased selection:bg-emerald-500 selection:text-slate-950">
      
      {/* Executive Header Banner */}
      <header className="border-b border-slate-800 bg-slate-900/40 backdrop-blur-md sticky top-0 z-50 px-6 py-4">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-xl font-black tracking-tight text-white">{database.profile.name}</h1>
            <p className="text-xs font-mono text-emerald-400 mt-0.5">{database.profile.title}</p>
          </div>
          <a 
            href={database.profile.linkedin} 
            target="_blank" 
            rel="noreferrer"
            className="text-xs font-mono border border-slate-700 px-3 py-1.5 rounded-lg text-slate-400 hover:text-white hover:border-slate-500 transition-all"
          >
            Connect on LinkedIn ↗
          </a>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12 space-y-12">
        
        {/* Core Profile Narrative Block */}
        <section className="bg-gradient-to-br from-slate-900 to-indigo-950/40 border border-slate-800 p-8 rounded-3xl relative overflow-hidden shadow-2xl">
          <div className="max-w-3xl space-y-4 relative z-10">
            <span className="text-[10px] font-mono uppercase tracking-widest bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2.5 py-1 rounded-md">
              Executive Brief
            </span>
            <p className="text-lg md:text-xl text-slate-200 font-medium leading-relaxed">
              {database.profile.bio}
            </p>
            <p className="text-sm font-mono text-slate-500">📍 Location Framework: {database.profile.location} | Active EU Remote Status</p>
          </div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
        </section>

        {/* Live Verified Growth Metrics Grid */}
        <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: 'Influenced Pipeline', val: database.metrics.pipeline, subtitle: 'Cross-Border SaaS scale' },
            { label: 'Budget Stewardship', val: database.metrics.budget, subtitle: 'Annual GTM alignment' },
            { label: 'Target Account MROI', val: database.metrics.mroi, subtitle: 'Documented return metrics' },
            { label: 'Enterprise Win Rate', val: database.metrics.winrate, subtitle: 'Programmatic ABM conversion' }
          ].map((m, idx) => (
            <div key={idx} className="bg-slate-900/60 border border-slate-800/80 p-6 rounded-2xl font-mono">
              <span className="text-xs text-slate-500 font-bold uppercase tracking-wider block">{m.label}</span>
              <span className="text-2xl md:text-3xl font-black text-white block mt-2 tracking-tight">{m.val}</span>
              <span className="text-[10px] text-slate-500 block mt-1">{m.subtitle}</span>
            </div>
          ))}
        </section>

        {/* THE CROWN JEWEL: Interactive CTA Link Box */}
        <section className="bg-slate-900/40 border border-slate-800 p-8 rounded-3xl flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 shadow-xl">
          <div className="space-y-2 max-w-2xl">
            <h3 className="text-xl font-bold tracking-tight text-white font-mono">
              ⚙️ Proprietary Tech Deployment: ABM Operating System
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              An interactive operational dashboard engineered to unify buying committee intent signals, 
              automated data enrichment sequences, and real-time Sales-Marketing SLA tracking into a single client interface. Built natively using modern frontend modules.
            </p>
          </div>
          
          <a
            href={database.apps.abmOsUrl}
            target="_blank"
            rel="noreferrer"
            className="w-full lg:w-auto text-center font-mono font-bold text-xs uppercase tracking-widest bg-emerald-500 text-slate-950 px-6 py-4 rounded-xl shadow-lg shadow-emerald-500/10 hover:bg-emerald-400 hover:shadow-emerald-400/20 transition-all transform active:scale-95 whitespace-nowrap cursor-pointer"
          >
            Launch Live Interactive App ↗
          </a>
        </section>

      </main>

      <footer className="border-t border-slate-900 max-w-6xl mx-auto py-8 px-6 text-center text-xs font-mono text-slate-600">
        © {new Date().getFullYear()} {database.profile.name} • Architecture hosted via GitHub Engine
      </footer>
    </div>
  );
}
