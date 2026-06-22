import { useState } from 'react';
import { Database, Layout, ShieldAlert, Cpu, GitMerge, ArrowRight, Layers, HelpCircle } from 'lucide-react';

type ArchType = 'clean' | '3tier' | 'decoupled';

export default function SystemArchitectureDiagram() {
  const [activeArch, setActiveArch] = useState<ArchType>('clean');

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-2xl" id="architecture-diagram">
      {/* Tab Control Header */}
      <div className="bg-slate-950 p-4 border-b border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div className="flex items-center space-x-2">
          <Layers className="w-5 h-5 text-indigo-400" />
          <span className="font-display font-semibold text-sm text-slate-200 tracking-wide">
            Interactive Architecture Diagram
          </span>
        </div>
        
        {/* Toggle buttons */}
        <div className="flex bg-slate-900 p-1 rounded-lg border border-slate-800 self-stretch sm:self-auto">
          {(['clean', '3tier', 'decoupled'] as const).map((arch) => (
            <button
              key={arch}
              onClick={() => setActiveArch(arch)}
              className={`text-[10px] md:text-xs px-3 py-1 rounded transition-all font-display font-medium ${
                activeArch === arch
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {arch === 'clean' && 'Clean Architecture (API)'}
              {arch === '3tier' && '3-Tier Pattern (Desktop)'}
              {arch === 'decoupled' && 'Decoupled Client-Server'}
            </button>
          ))}
        </div>
      </div>

      {/* Main Diagram Area */}
      <div className="p-6 md:p-8 min-h-[350px] flex flex-col justify-between bg-slate-900/60 transition-all">
        
        {/* Diagram Display for Clean Architecture */}
        {activeArch === 'clean' && (
          <div className="flex flex-col items-center justify-center space-y-6">
            <p className="text-xs text-slate-400 text-center max-w-2xl leading-relaxed">
              <strong>Dependency Rule:</strong> Outer layers point inward. The inner Core (Domain) is fully independent of databases, tools, or web presentation. It depends on interfaces, with actual adapters injected at runtime.
            </p>

            {/* Concentric Circle Visual using Tailwind CSS flex boxes */}
            <div className="relative w-full max-w-lg aspect-square sm:aspect-video flex items-center justify-center p-2">
              <div className="w-full max-w-md bg-slate-950/40 rounded-full border border-dashed border-rose-500/30 aspect-square flex items-center justify-center p-6 transition-all hover:border-rose-500/50">
                <div className="w-full bg-slate-950/60 rounded-full border border-indigo-500/40 aspect-square flex items-center justify-center p-6 hover:border-indigo-500/70">
                  <div className="w-full bg-slate-950/80 rounded-full border border-cyan-500/50 aspect-square flex items-center justify-center p-6 hover:border-cyan-500/80">
                    <div className="w-full bg-slate-900 rounded-full border-2 border-emerald-500/70 aspect-square flex flex-col items-center justify-center text-center p-4 shadow-lg hover:shadow-emerald-950/30">
                      <Cpu className="w-5 h-5 text-emerald-400 mb-1" />
                      <span className="text-[11px] font-mono font-bold text-slate-200">Domain Core</span>
                      <span className="text-[9px] text-slate-500 block max-w-[80px]">Entities, Rules, Value Objects</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Outside labels pointing inwards */}
              <div className="absolute top-1 left-2 sm:left-12 bg-slate-950 border border-rose-900/50 p-2 rounded text-left shadow-lg">
                <span className="text-[10px] font-bold text-rose-400 block">HTTP Web API / Controllers</span>
                <span className="text-[9px] text-slate-500">Route rules, JSON returns, rate limits</span>
              </div>

              <div className="absolute bottom-2 right-4 bg-slate-950 border border-indigo-900/50 p-2 rounded text-left shadow-lg">
                <span className="text-[10px] font-bold text-indigo-400 block">Infrastructure & DB Adapters</span>
                <span className="text-[9px] text-slate-500">EF Core DbContext, Email emitters, repositories</span>
              </div>

              <div className="absolute top-1/3 right-1 bg-slate-950 border border-cyan-900/50 p-1.5 rounded text-left shadow-lg">
                <span className="text-[10px] font-bold text-cyan-400 block">Application Services</span>
                <span className="text-[9px] text-slate-500">CQRS, Commands, Validators</span>
              </div>
            </div>
          </div>
        )}

        {/* Diagram Display for 3-Tier Layered Schema */}
        {activeArch === '3tier' && (
          <div className="flex flex-col items-center justify-center space-y-6">
            <p className="text-xs text-slate-400 text-center max-w-2xl leading-relaxed">
              <strong>Procedural Flow:</strong> Used extensively in licensing (DVLD) and banking apps. UI triggers events &rarr; Business Layer evaluates permissions/transactions &rarr; Data Access loads/commits to database. Isolate database connections instantly.
            </p>

            <div className="w-full max-w-lg grid grid-cols-1 md:grid-cols-5 items-center gap-4 py-4">
              
              {/* Presentation UI Card */}
              <div className="bg-slate-950 p-4 border border-rose-500/40 rounded-xl flex flex-col items-center justify-center text-center shadow-lg md:col-span-1 min-h-[100px] hover:border-rose-400 transition-colors">
                <Layout className="w-5 h-5 text-rose-400 mb-1" />
                <span className="text-xs font-mono font-bold text-slate-200">Presentation Layer</span>
                <span className="text-[9px] text-slate-500">Desktop WinForms UI, validation events</span>
              </div>

              {/* Arrow */}
              <div className="flex md:flex-col items-center justify-center text-indigo-500 md:col-span-1 rotate-90 md:rotate-0">
                <ArrowRight className="w-5 h-5" />
                <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest mt-0.5">Calls</span>
              </div>

              {/* BLL Card */}
              <div className="bg-slate-950 p-4 border border-indigo-500/50 rounded-xl flex flex-col items-center justify-center text-center shadow-lg md:col-span-1 min-h-[100px] hover:border-indigo-400 transition-colors">
                <Cpu className="w-5 h-5 text-indigo-400 mb-1" />
                <span className="text-xs font-mono font-bold text-slate-200">BLL (Business Logic)</span>
                <span className="text-[9px] text-slate-500">Workflow logic, Bitwise permissions, rates audit</span>
              </div>

              {/* Arrow */}
              <div className="flex md:flex-col items-center justify-center text-cyan-400 md:col-span-1 rotate-90 md:rotate-0">
                <ArrowRight className="w-5 h-5" />
                <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest mt-0.5">Loads</span>
              </div>

              {/* DAL / Database Card */}
              <div className="bg-slate-950 p-4 border border-cyan-500/50 rounded-xl flex flex-col items-center justify-center text-center shadow-lg md:col-span-1 min-h-[100px] hover:border-cyan-400 transition-colors">
                <Database className="w-5 h-5 text-cyan-400 mb-1" />
                <span className="text-xs font-mono font-bold text-slate-200">DAL (Data Access)</span>
                <span className="text-[9px] text-slate-500">ADO.NET readers, SqlTransactions, index views</span>
              </div>

            </div>
          </div>
        )}

        {/* Diagram Display for decoupled Client-Server architecture */}
        {activeArch === 'decoupled' && (
          <div className="flex flex-col items-center justify-center space-y-6">
            <p className="text-xs text-slate-400 text-center max-w-2xl leading-relaxed">
              <strong>Students Management Model:</strong> Multiple client boundaries consume a joint Web API core. Complete data sync across desktop offices and teachers web sessions.
            </p>

            <div className="w-full max-w-2xl flex flex-col md:flex-row items-stretch justify-around gap-4 py-2">
              
              {/* Clients side flex layout */}
              <div className="flex flex-col justify-center space-y-4 md:w-1/3">
                <div className="bg-slate-950 p-3 border border-slate-800 rounded-lg flex items-center space-x-3 text-left">
                  <Layout className="w-4 h-4 text-emerald-400 shrink-0" />
                  <div>
                    <span className="text-[11px] font-mono font-bold text-slate-200 block">Desktop C# Application</span>
                    <span className="text-[9px] text-slate-500">Admin Registrar Terminal (BLL calls API)</span>
                  </div>
                </div>

                <div className="bg-slate-950 p-3 border border-slate-800 rounded-lg flex items-center space-x-3 text-left">
                  <Layout className="w-4 h-4 text-cyan-400 shrink-0" />
                  <div>
                    <span className="text-[11px] font-mono font-bold text-slate-200 block">Web HTML5 Interface</span>
                    <span className="text-[9px] text-slate-500">Teacher and Student dashboard schedules</span>
                  </div>
                </div>
              </div>

              {/* Big central routing arrow */}
              <div className="flex items-center justify-center text-indigo-400 py-2 md:py-0">
                <GitMerge className="w-6 h-6 rotate-90 md:rotate-0" />
                <span className="text-[10px] font-mono uppercase tracking-widest ml-2 md:-ml-4 md:mt-12 bg-slate-900 border border-slate-800 px-2 py-0.5 rounded">
                  CORS Rest Calls
                </span>
              </div>

              {/* Middleware API Route */}
              <div className="bg-slate-950 p-4 border-2 border-indigo-600/60 rounded-xl flex flex-col items-center justify-center text-center shadow-xl md:w-1/3 relative">
                <div className="absolute -top-2.5 bg-indigo-600/90 text-white font-mono text-[8px] py-0.5 px-2 rounded-full tracking-wide">
                  SECURE API PIPELINE
                </div>
                <Cpu className="w-6 h-6 text-indigo-400 mb-1" />
                <span className="text-xs font-mono font-bold text-slate-100">ASP.NET Core Web API</span>
                <span className="text-[9px] text-indigo-300">Auth, CORS validation, JSON endpoints</span>
                
                <div className="w-2.5 h-6 border-l border-indigo-400/40 my-2"></div>
                
                <Database className="w-5 h-5 text-cyan-400 mb-1" />
                <span className="text-xs font-mono font-bold text-slate-100">SQL Server (SSMS)</span>
                <span className="text-[9px] text-slate-500">Stored Procedures & Queries</span>
              </div>

            </div>
          </div>
        )}

        {/* Legend / Tip Panel */}
        <div className="mt-6 pt-4 border-t border-slate-800/65 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-slate-400 gap-2">
          <div className="flex items-center space-x-1">
            <HelpCircle className="w-3.5 h-3.5 text-slate-500" />
            <span>Architecture strategy guarantees system lifespan and testing insulation.</span>
          </div>
          <span className="text-[10px] text-slate-500 font-mono">
            {activeArch === 'clean' && 'CQRS & SOLID design boundaries'}
            {activeArch === '3tier' && 'ADO.NET Connection & SqlTransaction pools'}
            {activeArch === 'decoupled' && 'Shared Domain resources via HTTP API endpoints'}
          </span>
        </div>
      </div>
    </div>
  );
}
