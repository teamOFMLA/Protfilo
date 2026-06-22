import { useState } from 'react';
import { Project, SchemaTable } from '../types';
import { PROJECTS, OTHER_PROJECTS } from '../data';
import { FolderGit2, ArrowUpRight, Code, Key, Settings, Cpu, ShieldCheck, Database, Calendar, Server, HelpCircle, CheckCircle } from 'lucide-react';

export default function ProjectShowcase() {
  const [selectedProjectId, setSelectedProjectId] = useState<string>(PROJECTS[0].id);
  const [activeTab, setActiveTab] = useState<'problem' | 'features' | 'schema' | 'code' | 'challenges'>('features');

  const selectedProject = PROJECTS.find(p => p.id === selectedProjectId) || PROJECTS[0];

  return (
    <div className="space-y-8" id="projects-showcase">
      
      {/* Bento-Grid Selector of 5 Flagship Client Projects */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
        {PROJECTS.map((proj) => {
          const isSelected = proj.id === selectedProjectId;
          return (
            <button
              key={proj.id}
              onClick={() => {
                setSelectedProjectId(proj.id);
                // Reset to features tab
                setActiveTab('features');
              }}
              className={`text-left p-4 rounded-xl border transition-all duration-300 relative overflow-hidden group ${
                isSelected
                  ? 'bg-indigo-950/60 border-indigo-600/80 shadow-md ring-1 ring-indigo-500/30'
                  : 'bg-slate-900/40 border-slate-800/80 hover:bg-slate-900/70 hover:border-slate-700'
              }`}
            >
              <div className="flex flex-col h-full justify-between space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-mono font-bold tracking-widest text-cyan-500 uppercase bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
                    {proj.category}
                  </span>
                  
                  {isSelected && (
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
                  )}
                </div>

                <div>
                  <h4 className="font-display font-semibold text-xs md:text-sm text-slate-100 group-hover:text-white leading-tight">
                    {proj.title}
                  </h4>
                  <p className="text-[10px] text-slate-400 mt-1 line-clamp-2 md:line-clamp-1">
                    {proj.headline}
                  </p>
                </div>

                <div className="flex items-center text-xs font-mono font-medium mt-1 text-slate-400 group-hover:text-slate-300">
                  <span>Explore Evidence</span>
                  <ArrowUpRight className="w-3.5 h-3.5 ml-1 text-cyan-500" />
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Main Selected Project Case Study Screen */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl transition-all duration-300">
        
        {/* Dynamic Project Header Banner */}
        <div className="bg-slate-950 p-6 border-b border-slate-800/60 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 text-slate-800/20 font-display font-black text-6xl select-none select-none pointer-events-none hidden md:block uppercase">
            .NET PRO
          </div>

          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
            
            <div className="space-y-1.5 max-w-3xl">
              <span className="text-[10px] font-mono font-bold text-cyan-400 uppercase tracking-widest bg-cyan-950/40 border border-cyan-800/30 py-0.5 px-2.5 rounded-full">
                CASE STUDY EVIDENCE PORTAL
              </span>
              <h3 className="font-display font-bold text-lg md:text-xl text-slate-100">
                {selectedProject.title}
              </h3>
              <p className="text-xs text-slate-400 block italic leading-normal">
                {selectedProject.headline}
              </p>
            </div>

            <div className="flex items-center space-x-2 shrink-0">
              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center space-x-1.5 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white font-mono text-[11px] py-1.5 px-3 rounded-lg transition"
              >
                <FolderGit2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>Source Code</span>
              </a>
            </div>

          </div>

          {/* Quick Metrics KPI Ribbons (If populated) */}
          {selectedProject.metrics && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mt-5 pt-4 border-t border-slate-900">
              {selectedProject.metrics.map((met, idx) => (
                <div key={idx} className="bg-slate-900 border border-slate-800/60 p-2 rounded-lg text-left">
                  <div className="text-[10px] font-mono text-slate-400 leading-none">{met.label}</div>
                  <div className="text-xs font-display font-extrabold text-cyan-400 mt-1">{met.value}</div>
                </div>
              ))}
            </div>
          )}

          {/* Core Tech badging */}
          <div className="flex flex-wrap gap-1.5 mt-4">
            {selectedProject.tech.map((t, idx) => (
              <span key={idx} className="text-[10px] font-mono font-medium rounded py-0.5 px-2 bg-slate-900 border border-slate-800 text-slate-300">
                {t}
              </span>
            ))}
          </div>

        </div>

        {/* Navigation Tabs for drilling into details */}
        <div className="bg-slate-950/40 border-b border-slate-800/80 flex flex-wrap">
          {(['features', 'problem', 'schema', 'code', 'challenges'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-xs px-4 md:px-5 py-3 transition font-display font-medium relative ${
                activeTab === tab
                  ? 'text-cyan-400 bg-slate-900 border-b-2 border-cyan-400 font-semibold'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/20'
              }`}
            >
              {tab === 'features' && '📁 High-Level Features'}
              {tab === 'problem' && '🎯 Problem Statement'}
              {tab === 'schema' && '🗄️ SQL Schema'}
              {tab === 'code' && '💻 Code Snippet'}
              {tab === 'challenges' && '🚨 Engineering Challenges'}
            </button>
          ))}
        </div>

        {/* Tab display window */}
        <div className="p-6 md:p-8 min-h-[300px]">
          
          {/* Tab 1: System Features */}
          {activeTab === 'features' && (
            <div className="space-y-5 animate-fade-in">
              <div className="text-xs font-bold font-mono tracking-wider text-cyan-400 uppercase">
                Core Architectural Mechanics & Features
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {selectedProject.features.map((feat, idx) => (
                  <div key={idx} className="bg-slate-950/40 p-4 rounded-xl border border-slate-800/40 flex items-start space-x-3 hover:border-slate-700/60 transition group">
                    <div className="bg-indigo-950 text-indigo-400 p-1.5 rounded-lg border border-indigo-900 shrink-0 group-hover:bg-indigo-900 group-hover:text-indigo-300 transition">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-300 leading-relaxed font-sans">{feat}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-slate-950/50 p-4 rounded-lg border border-slate-800/50 flex items-start space-x-3 text-xs text-slate-400 mt-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <p>
                  <strong>Verification details:</strong> The security properties illustrated above have been mapped directly to SOLID principles. Decoupled abstractions ensure that core code routes require no modifications during database engine migrations.
                </p>
              </div>
            </div>
          )}

          {/* Tab 2: Context / Problem Statement */}
          {activeTab === 'problem' && (
            <div className="space-y-6 animate-fade-in max-w-4xl text-left">
              <div>
                <h5 className="text-xs font-bold font-mono tracking-wider text-cyan-400 uppercase mb-2">
                  1. The Real-World Challenge / Problem Context
                </h5>
                <p className="text-xs md:text-sm text-slate-300 leading-relaxed font-sans">
                  {selectedProject.problem}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-800/40">
                <h5 className="text-xs font-bold font-mono tracking-wider text-indigo-400 uppercase mb-2">
                  2. Implemented Backend Solution Structure
                </h5>
                <p className="text-xs md:text-sm text-slate-300 leading-relaxed font-sans font-sans">
                  {selectedProject.solution}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-800/40">
                <h5 className="text-xs font-bold font-mono tracking-wider text-emerald-400 uppercase mb-2">
                  3. Key Deliverables & Practical Business Value
                </h5>
                <p className="text-xs md:text-sm text-slate-300 leading-relaxed font-sans font-sans">
                  {selectedProject.results}
                </p>
              </div>
            </div>
          )}

          {/* Tab 3: Detailed Database Relational Schema Design */}
          {activeTab === 'schema' && (
            <div className="space-y-6 animate-fade-in text-left">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                <div className="text-xs font-bold font-mono tracking-wider text-cyan-400 uppercase">
                  Relational SQL Server DB Schemas (3NF Layout)
                </div>
                <span className="text-[10px] bg-slate-950 border border-slate-800 py-1 px-3 rounded font-mono text-slate-500">
                  SQL Server Express Standard
                </span>
              </div>

              {selectedProject.schemaDesign ? (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {selectedProject.schemaDesign.map((table: SchemaTable, idx) => (
                    <div key={idx} className="bg-slate-950 rounded-xl border border-slate-800/60 overflow-hidden shadow-lg">
                      {/* Table Banner Title */}
                      <div className="bg-slate-900 px-4 py-2.5 border-b border-slate-800 flex items-center space-x-2">
                        <Database className="w-3.5 h-3.5 text-cyan-400" />
                        <span className="font-mono text-xs font-bold text-slate-100">{table.tableName}</span>
                      </div>
                      
                      {/* Column Table Schema details */}
                      <table className="w-full text-left border-collapse text-[11px] font-mono">
                        <thead>
                          <tr className="bg-slate-950/40 border-b border-slate-800/80 text-slate-400 text-[10px]">
                            <th className="p-2">Name</th>
                            <th className="p-2">Data Type</th>
                            <th className="p-2 text-center">Key</th>
                            <th className="p-2 hidden md:table-cell">Metadata Rule</th>
                          </tr>
                        </thead>
                        <tbody>
                          {table.columns.map((col, cIdx) => (
                            <tr key={cIdx} className="hover:bg-slate-900/30 border-b border-slate-900/30 transition-colors">
                              <td className="p-2 text-slate-200 font-semibold">{col.name}</td>
                              <td className="p-2 text-indigo-300 font-medium">{col.type}</td>
                              <td className="p-2 text-center">
                                {col.key && (
                                  <span className={`text-[9px] px-1 rounded font-bold ${
                                    col.key === 'PK' ? 'bg-amber-950/60 text-amber-400 border border-amber-900/50' : 
                                    col.key === 'FK' ? 'bg-indigo-950/60 text-indigo-400 border border-indigo-900/50' : 
                                    'bg-cyan-950/60 text-cyan-400 border border-cyan-900/50'
                                  }`}>
                                    {col.key}
                                  </span>
                                )}
                              </td>
                              <td className="p-2 text-slate-400 text-[10px] max-w-[150px] truncate hidden md:table-cell" title={col.description}>
                                {col.description || "-"}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center p-8 bg-slate-950 rounded-xl border border-slate-800 text-xs text-slate-400">
                  SQL Schema details not indexed. Under active audit mapping.
                </div>
              )}
            </div>
          )}

          {/* Tab 4: C# Code Snippet Viewer */}
          {activeTab === 'code' && (
            <div className="space-y-4 animate-fade-in text-left">
              {selectedProject.codeSnippet ? (
                <div>
                  <div className="bg-slate-950 px-4 py-2 border border-b-0 border-slate-800 rounded-t-xl flex items-center justify-between text-xs">
                    <div className="flex items-center space-x-2">
                      <Code className="w-3.5 h-3.5 text-cyan-400" />
                      <span className="font-mono text-slate-300">{selectedProject.codeSnippet.filename}</span>
                    </div>
                    <span className="text-[10px] font-mono text-slate-500 uppercase">
                      {selectedProject.codeSnippet.language}
                    </span>
                  </div>
                  
                  {/* Visual editor screen style */}
                  <pre className="bg-slate-950 p-4 border border-slate-800 rounded-b-xl font-mono text-[11px] md:text-xs text-slate-300 overflow-x-auto leading-relaxed max-h-[400px]">
                    <code>{selectedProject.codeSnippet.code}</code>
                  </pre>
                </div>
              ) : (
                <div className="text-center p-8 bg-slate-950 rounded-xl border border-slate-800 text-xs text-slate-400">
                  Code snippet under optimization reviews. Check back shortly.
                </div>
              )}
            </div>
          )}

          {/* Tab 5: Detailed Engineering Challenges & Business Workarounds */}
          {activeTab === 'challenges' && (
            <div className="space-y-6 animate-fade-in text-left">
              <div className="text-xs font-bold font-mono tracking-wider text-cyan-400 uppercase">
                Technical Challenges Encountered & Strategic Workarounds
              </div>

              <div className="space-y-4">
                {selectedProject.challenges.map((chal, idx) => (
                  <div key={idx} className="bg-slate-950 rounded-xl border border-slate-800 overflow-hidden">
                    {/* Block 1: Problem */}
                    <div className="bg-slate-900 px-4 py-3 border-b border-slate-800 flex items-start space-x-2.5">
                      <span className="text-[10px] font-mono font-bold bg-rose-950 text-rose-400 border border-rose-900/60 py-0.5 px-2 rounded mt-0.5 shrink-0">
                        BUG EXPOSURE
                      </span>
                      <p className="text-xs font-semibold text-slate-200 leading-normal">{chal.problem}</p>
                    </div>

                    {/* Block 2: Solution */}
                    <div className="p-4 bg-slate-950/40 flex items-start space-x-2.5">
                      <span className="text-[10px] font-mono font-bold bg-emerald-950 text-emerald-400 border border-emerald-900/60 py-0.5 px-2 rounded mt-0.5 shrink-0">
                        IMPLEMENTED FIX
                      </span>
                      <p className="text-xs text-slate-400 leading-relaxed font-sans">{chal.solution}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>

      {/* Secondary Projects Section ("More Projects") */}
      <div className="mt-12 space-y-4 text-left">
        <h4 className="font-display font-bold text-sm tracking-wide text-indigo-400 uppercase">
          🛡️ More Supporting Systems & Repositories
        </h4>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {OTHER_PROJECTS.map((other, idx) => (
            <div key={idx} className="bg-slate-950 p-4 border border-slate-900 rounded-xl hover:border-slate-800 transition shadow">
              <div className="flex flex-col h-full justify-between space-y-2">
                <div>
                  <h5 className="font-display font-semibold text-xs text-slate-200 hover:text-white transition">
                    {other.title}
                  </h5>
                  <p className="text-[10px] text-slate-500 mt-1 font-sans leading-relaxed">
                    {other.description}
                  </p>
                </div>
                
                <div className="flex items-center justify-between pt-2">
                  <span className="text-[8px] font-mono bg-slate-900 text-slate-400 py-0.5 px-1.5 rounded">
                    {other.tech}
                  </span>
                  <span className="text-[9px] font-mono text-cyan-500 hover:underline cursor-pointer">
                    View Arch Repo
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
