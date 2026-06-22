/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import {
  Shield,
  Layers,
  Cpu,
  Database,
  Terminal,
  FileCode2,
  Lock,
  ChevronRight,
  BookOpen,
  MapPin,
  Mail,
  Calendar,
  CheckCircle2,
  ExternalLink,
  Phone,
  Clock,
  ArrowDownCircle,
  HelpCircle
} from 'lucide-react';

// Data & Configs
import { ME, SKILL_CATEGORIES, EXPERIENCE, CERTIFICATIONS, EDUCATION, BLOG_POSTS } from './data';

// Custom Interactive components
import Header from './components/Header';
import ProjectShowcase from './components/ProjectShowcase';
import SystemArchitectureDiagram from './components/SystemArchitectureDiagram';
import InteractiveJWTDecoder from './components/InteractiveJWTDecoder';
import ContactForm from './components/ContactForm';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [selectedBlogId, setSelectedBlogId] = useState<string | null>(null);
  const [systemTime, setSystemTime] = useState<string>('');

  // Update dynamic UTC system clock standard
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setSystemTime(now.toUTCString());
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={darkMode ? 'dark bg-slate-950 text-slate-100 min-h-screen transition-colors duration-300' : 'bg-slate-50 text-slate-900 min-h-screen transition-colors duration-300'}>
      
      {/* Dynamic Header Component */}
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Grid Background Pattern */}
      <div className="absolute inset-0 z-0 select-none opacity-40 pointer-events-none">
        <div className={darkMode ? 'grid-pattern w-full h-[800px]' : 'grid-pattern-light w-full h-[800px]'} />
      </div>

      <div className="relative z-10">

        {/* HERO / LANDING SECTION */}
        <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            
            {/* Status indicators */}
            <div className="inline-flex items-center space-x-2 bg-indigo-600/10 dark:bg-indigo-950/40 border border-indigo-200/30 dark:border-indigo-900/60 rounded-full px-3.5 py-1.5 mx-auto">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-mono text-[10px] md:text-xs font-semibold tracking-wide text-indigo-700 dark:text-indigo-400 uppercase">
                Active for .NET developer recruitment
              </span>
            </div>

            {/* Core Display Headline */}
            <div className="space-y-4">
              <h1 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.1] ml-auto mr-auto max-w-3xl">
                {ME.headline}
              </h1>
              <p className={`font-sans font-light text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                {ME.subheadline}
              </p>
            </div>

            {/* Micro Strategic Badging (Mini Trust Line) */}
            <div className="flex flex-wrap items-center justify-center gap-2 max-w-xl mx-auto pt-2">
              {['ASP.NET Core', 'SQL Server', 'JWT Auth', 'Clean Architecture', 'WinForms Desktop', 'REST APIs', 'ADO.NET'].map((trustItem, idx) => (
                <span
                  key={idx}
                  className={`text-[10px] md:text-xs font-mono font-medium py-1 px-3 rounded-full border ${
                    darkMode
                      ? 'bg-slate-900/70 border-slate-800/80 text-slate-300'
                      : 'bg-white border-slate-200 text-slate-600 shadow-sm'
                  }`}
                >
                  {trustItem}
                </span>
              ))}
            </div>

            {/* Hero CTA buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-4">
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-500 text-white font-display font-bold text-xs sm:text-sm py-3.5 px-6 rounded-lg transition-all shadow-lg hover:shadow-indigo-600/20 active:scale-95"
              >
                Review Code Evidence
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className={`w-full sm:w-auto border font-display font-bold text-xs sm:text-sm py-3.5 px-6 rounded-lg transition-all text-center active:scale-95 ${
                  darkMode
                    ? 'border-slate-800 text-slate-300 bg-slate-950/40 hover:bg-slate-900 hover:text-white'
                    : 'border-slate-300 text-slate-700 bg-white hover:bg-slate-50'
                }`}
              >
                Initiate Recruiter Contact
              </a>
            </div>

            {/* Scrolling Anchor arrow */}
            <div className="pt-10 flex items-center justify-center flex-col text-slate-400 space-y-1">
              <span className="text-[10px] font-mono tracking-widest uppercase">Explore Ecosystem</span>
              <ArrowDownCircle className="w-5 h-5 text-indigo-500 animate-bounce" />
            </div>

          </div>
        </section>

        {/* SUMMARY / VALUE PROPOSITION SECTION */}
        <section id="about" className={`py-16 border-t ${darkMode ? 'border-slate-900 bg-slate-950/20' : 'border-slate-200 bg-slate-100/30'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              
              {/* About description (Col 7) */}
              <div className="lg:col-span-7 flex flex-col justify-center space-y-5 text-left">
                <span className="text-[10px] font-mono font-bold text-indigo-500 uppercase tracking-widest">
                  Personal Branding Core Focus
                </span>
                <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-150 tracking-tight leading-snug">
                  Writingorganized, scalable, and easy-to-extend backend solutions.
                </h3>
                <p className={`font-sans text-xs sm:text-sm leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  {ME.about}
                </p>
                <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className={`p-4 rounded-xl border ${darkMode ? 'bg-slate-900/40 border-slate-800/80' : 'bg-white border-slate-200 shadow-sm'}`}>
                    <span className="text-xs font-mono font-bold text-cyan-500">🔒 System Authorization</span>
                    <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">
                      Custom requirement handlers, claims tracking, RBAC, DB-level resource controls.
                    </p>
                  </div>
                  <div className={`p-4 rounded-xl border ${darkMode ? 'bg-slate-900/40 border-slate-800/80' : 'bg-white border-slate-200 shadow-sm'}`}>
                    <span className="text-xs font-mono font-bold text-indigo-400">⚡ Transaction Boundaries</span>
                    <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">
                      Explicit ACID transactional control via direct SqlTransaction ADO.NET and EF pipelines.
                    </p>
                  </div>
                </div>
              </div>

              {/* Sidebar professional card (Col 5) */}
              <div className="lg:col-span-5 flex flex-col justify-between">
                <div className={`p-6 md:p-8 rounded-2xl border flex flex-col justify-between h-full relative text-left ${
                  darkMode ? 'bg-slate-950 border-slate-900 shadow-xl' : 'bg-white border-slate-200 shadow-md'
                }`}>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 pb-3 border-b border-slate-800/40">
                      <div className="bg-indigo-600 p-2 rounded-full text-white">
                        <Shield className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono text-slate-500 block uppercase">Brand Profile Summary</span>
                        <span className="text-xs font-bold text-slate-300 block leading-tight">Mohamed Abass</span>
                      </div>
                    </div>

                    <p className={`text-xs leading-relaxed italic ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                      "{ME.summary}"
                    </p>
                  </div>

                  {/* Operational context stats widget on sidebar */}
                  <div className="mt-6 pt-4 border-t border-slate-900 grid grid-cols-2 gap-4 text-xs font-mono">
                    <div>
                      <span className="text-slate-500 block">Location:</span>
                      <span className="text-slate-300 font-medium block flex items-center space-x-1">
                        <MapPin className="w-3 h-3 text-cyan-400 mr-1" /> Cairo, EG
                      </span>
                    </div>
                    <div>
                      <span className="text-slate-500 block">Commitment:</span>
                      <span className="text-slate-300 font-medium block">Full-time Remote</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* TECHNICAL SKILLS SECTION */}
        <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center space-y-2 mb-12">
            <span className="text-[10px] font-mono font-bold text-indigo-500 uppercase tracking-widest bg-slate-900 border border-slate-800 py-1 px-3.5 rounded-full inline-block">
              ENGINEERING MATRIX
            </span>
            <h2 className="font-display font-extrabold text-2xl sm:text-3.5xl tracking-tight text-slate-100">
              Technical Skill Matrix
            </h2>
            <p className="text-xs text-slate-400 max-w-lg mx-auto">
              C# software development foundations, raw database indexing, and identity verification logic.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {SKILL_CATEGORIES.map((cat, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-2xl border flex flex-col justify-between space-y-4 shadow ${
                  darkMode ? 'bg-slate-900/60 border-slate-800/80 hover:border-slate-700' : 'bg-white border-slate-200'
                }`}
              >
                <div>
                  <h4 className="font-display font-bold text-sm tracking-wide text-slate-100">
                    {cat.category}
                  </h4>
                  <p className="text-[10px] text-slate-500 mt-1 block">
                    {cat.info}
                  </p>

                  <div className="mt-4 space-y-3 pt-2">
                    {cat.items.map((skill, sIdx) => (
                      <div key={sIdx} className="space-y-1 group">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-medium text-slate-200 group-hover:text-cyan-400 transition-colors">
                            {skill.name}
                          </span>
                          <span className="font-mono text-[10px] text-slate-400">
                            {skill.level}%
                          </span>
                        </div>
                        
                        {/* Interactive gauge fill bar */}
                        <div className="w-full h-1.5 bg-slate-950 rounded-full overflow-hidden border border-slate-900/50">
                          <div
                            className="h-full bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full transition-all duration-1000"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>

                        {/* Expandable detailed tooltip string info */}
                        {skill.info && (
                          <span className="text-[9px] text-slate-500 block leading-tight pt-0.5 max-h-[22px] truncate group-hover:text-slate-400 group-hover:whitespace-normal group-hover:max-h-[50px] transition-all">
                            {skill.info}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS SHOWCASE SECTION */}
        <section id="projects" className={`py-20 border-t ${darkMode ? 'border-slate-900 bg-slate-950/30' : 'border-slate-200 bg-slate-100/40'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 text-left">
              <div className="space-y-1.5">
                <span className="text-[10px] font-mono font-bold text-indigo-500 uppercase tracking-widest">
                  Featured Portfolios
                </span>
                <h2 className="font-display font-extrabold text-2xl sm:text-3.5xl text-slate-100 leading-none">
                  Flagship Business Systems
                </h2>
                <p className="text-xs text-slate-400">
                  Select a business application below to explore full backend context, SQL tables schemas, and actual C# source codes.
                </p>
              </div>
              
              <div className="flex items-center space-x-2 text-xs font-mono text-slate-400">
                <Clock className="w-3.5 h-3.5 text-cyan-400" />
                <span>UTC CLOCK: <strong className="text-slate-200">{systemTime || 'Active'}</strong></span>
              </div>
            </div>

            {/* Embedded custom multi-tab showcase controller */}
            <ProjectShowcase />

          </div>
        </section>

        {/* INTERACTIVE PLAYGROUND SANDBOX SECTION */}
        <section id="sandbox" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <span className="text-[10px] font-mono font-bold text-indigo-500 uppercase tracking-widest bg-slate-900 border border-slate-800 py-1 px-3.5 rounded-full inline-block">
              RECRUITER PLAYGROUND
            </span>
            <h2 className="font-display font-extrabold text-2xl sm:text-3.5xl text-slate-105 tracking-tight text-slate-100">
              Interactive Hardware Sandbox
            </h2>
            <p className="text-xs text-slate-400 leading-relaxed">
              Play with real claims matrices and architecture paradigms to see validation mechanics and transaction pipeline flows.
            </p>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 items-stretch">
            
            {/* Widget A: Auth/JWT Decoders and Rotation Sandbox */}
            <div className="flex flex-col justify-between">
              <InteractiveJWTDecoder />
            </div>

            {/* Widget B: System Diagram Layer structures */}
            <div className="flex flex-col justify-between">
              <SystemArchitectureDiagram />
            </div>

          </div>
        </section>

        {/* DEVELOPMENT EXPERIENCE TIMELINE SECTION */}
        <section id="experience" className={`py-20 border-t ${darkMode ? 'border-slate-900 bg-slate-950/20' : 'border-slate-200 bg-slate-100/30'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left">
              
              {/* Left explanation block */}
              <div className="lg:col-span-4 space-y-4">
                <span className="text-[10px] font-mono font-bold text-indigo-400 uppercase tracking-widest">
                  Milestone Paths
                </span>
                <h3 className="font-display font-black text-2xl text-slate-100">
                  Selected Development Experience
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
                  A timeline documenting code achievements, system design validations, and actual enterprise deployment tasks.
                </p>
                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 text-[11px] text-slate-400 leading-relaxed space-y-2 max-w-sm">
                  <span className="font-bold text-indigo-400 uppercase block">RECRUITER NOTE</span>
                  Focused primarily on C# OOP, clean class contracts, and hardened identity models, maintaining an active focus on high productivity and scalability.
                </div>
              </div>

              {/* Right timeline loop */}
              <div className="lg:col-span-8 space-y-8 relative pl-4 sm:pl-8 border-l border-slate-800/80 ml-2">
                {EXPERIENCE.map((exp, idx) => (
                  <div key={idx} className="relative space-y-3 group">
                    
                    {/* Visual dot on timeline */}
                    <div className="absolute -left-[21px] sm:-left-[37px] top-1 w-3 h-3 rounded-full bg-indigo-500 border-2 border-slate-950 group-hover:bg-cyan-400 transition" />
                    
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <h4 className="font-display font-extrabold text-base text-slate-100 group-hover:text-indigo-400 transition-colors">
                        {exp.company}
                      </h4>
                      <span className="font-mono text-xs font-semibold text-cyan-400 bg-cyan-950/30 border border-cyan-900/40 py-0.5 px-2.5 rounded-full">
                        {exp.period}
                      </span>
                    </div>

                    <div className="text-xs font-mono font-semibold text-slate-400">
                      {exp.role}
                    </div>

                    <p className="text-xs text-slate-400 leading-relaxed">
                      {exp.description}
                    </p>

                    <ul className="space-y-2 pt-1.5">
                      {exp.bullets.map((b, bIdx) => (
                        <li key={bIdx} className="flex items-start space-x-2 text-xs text-slate-300">
                          <ChevronRight className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {exp.tags.map((t, tIdx) => (
                        <span key={tIdx} className="text-[10px] font-mono text-slate-400 bg-slate-950 border border-slate-800 py-0.5 px-2 rounded">
                          {t}
                        </span>
                      ))}
                    </div>

                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* CERTIFICATIONS & EDUCATION BOARDS */}
        <section id="certifications" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-left">
            
            {/* Certifications (Col 7) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-1">
                <span className="text-[10px] font-mono font-bold text-indigo-500 uppercase tracking-widest bg-slate-900 border border-slate-800 py-0.5 px-2.5 rounded inline-block">
                  Validations
                </span>
                <h3 className="font-display font-semibold text-xl text-slate-100 leading-none">
                  Certifications & Qualifications
                </h3>
                <p className="text-xs text-slate-500">
                  Credibility checkpoints validating code standards and performance tuning.
                </p>
              </div>

              <div className="space-y-4">
                {CERTIFICATIONS.map((cert) => (
                  <div
                    key={cert.id}
                    className={`p-4 rounded-xl border flex items-center justify-between gap-4 transition shadow-sm ${
                      darkMode ? 'bg-slate-900/40 border-slate-800/80 hover:border-slate-700' : 'bg-white border-slate-200'
                    }`}
                  >
                    <div className="space-y-1.5">
                      <h4 className="font-display font-bold text-xs text-slate-200 leading-snug">
                        {cert.name}
                      </h4>
                      <div className="flex items-center space-x-3 text-[10px] text-slate-500 font-mono">
                        <span>Issuer: {cert.issuer}</span>
                        <span>•</span>
                        <span>Year: {cert.date}</span>
                      </div>
                    </div>

                    {cert.credentialId && (
                      <span className="font-mono text-[9px] text-slate-400 bg-slate-950 border border-slate-800 py-1 px-2 rounded-full hidden sm:inline-block">
                        ID: {cert.credentialId}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Education (Col 5) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-1">
                <span className="text-[10px] font-mono font-bold text-indigo-500 uppercase tracking-widest bg-slate-900 border border-slate-800 py-0.5 px-2.5 rounded inline-block">
                  Academia
                </span>
                <h3 className="font-display font-semibold text-xl text-slate-100 leading-none">
                  Educational Backgrounds
                </h3>
                <p className="text-xs text-slate-500">
                  Core theories foundation in Computer Science and systems structures.
                </p>
              </div>

              {EDUCATION.map((edu, idx) => (
                <div
                  key={idx}
                  className={`p-5 rounded-xl border space-y-3 shadow-sm ${
                    darkMode ? 'bg-slate-900/40 border-slate-800/80' : 'bg-white border-slate-200'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2 text-left">
                    <div>
                      <h4 className="font-display font-bold text-sm text-slate-200 leading-tight">
                        {edu.degree}
                      </h4>
                      <p className="text-xs text-slate-400 mt-1">{edu.school}</p>
                    </div>
                    <span className="font-mono text-[10px] font-semibold text-indigo-400 bg-indigo-950/20 py-0.5 px-2 rounded shrink-0">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500 leading-relaxed text-left border-t border-slate-900/60 pt-2.5 font-sans">
                    {edu.details}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* BACKEND WRITING SECTION (BLOG) */}
        <section id="blog" className={`py-20 border-t ${darkMode ? 'border-slate-900 bg-slate-950/20' : 'border-slate-200 bg-slate-100/30'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            <div className="text-center space-y-2 max-w-lg mx-auto">
              <span className="text-[10px] font-mono font-bold text-indigo-500 uppercase tracking-widest bg-slate-900 border border-slate-800 py-1 px-3.5 rounded-full inline-block">
                KNOWLEDGE EXCHANGE
              </span>
              <h2 className="font-display font-extrabold text-2xl sm:text-3.5xl text-slate-100">
                Backend Writing & Technical Articles
              </h2>
              <p className="text-xs text-slate-400 leading-relaxed">
                Mohamed explains backend schemas, data validation controls, and code rotation systems.
              </p>
            </div>

            {/* List or grid card layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left items-start">
              {BLOG_POSTS.map((post) => {
                const isExpanded = selectedBlogId === post.id;
                return (
                  <div
                    key={post.id}
                    className={`p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
                      isExpanded
                        ? 'bg-slate-950 border-indigo-600 shadow-xl md:col-span-3'
                        : darkMode
                        ? 'bg-slate-900/40 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/60'
                        : 'bg-white border-slate-200 shadow hover:shadow-md'
                    }`}
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-[10px] font-mono">
                        <span className="text-cyan-500 font-bold bg-slate-950/80 border border-slate-800 px-2 py-0.5 rounded">
                          {post.category}
                        </span>
                        <span className="text-slate-500">{post.date}</span>
                      </div>

                      <h4 className="font-display font-bold text-base text-slate-150 leading-snug group-hover:text-indigo-400 transition-colors">
                        {post.title}
                      </h4>
                      
                      <p className="text-xs text-slate-400 leading-relaxed font-sans">
                        {post.summary}
                      </p>

                      {/* Expanded text blocks layout */}
                      {isExpanded && (
                        <div className="pt-4 border-t border-slate-800/60 text-xs text-slate-300 leading-relaxed space-y-4 font-sans max-w-4xl">
                          {/* Parse mockup headers manually to avoid large dependency loads */}
                          {post.content.split('\n\n').map((para, pIdx) => {
                            if (para.startsWith('###')) {
                              return (
                                <h5 key={pIdx} className="font-mono text-sm font-bold text-cyan-400 mt-4 block">
                                  {para.replace('###', '')}
                                </h5>
                              );
                            }
                            if (para.startsWith('```')) {
                              return (
                                <pre key={pIdx} className="bg-slate-950 p-4 border border-slate-900 rounded-xl font-mono text-[11px] text-slate-300 overflow-x-auto my-3 select-all leading-normal">
                                  <code>{para.replace(/```[a-z]*/g, '')}</code>
                                </pre>
                              );
                            }
                            return <p key={pIdx} className="font-sans text-[12px] leading-relaxed">{para}</p>;
                          })}
                        </div>
                      )}
                    </div>

                    <div className="pt-4 mt-2.5 border-t border-slate-900 flex items-center justify-between">
                      <span className="text-[10px] font-mono text-slate-500">
                        {post.readTime}
                      </span>
                      
                      <button
                        onClick={() => setSelectedBlogId(isExpanded ? null : post.id)}
                        className="text-xs font-mono font-bold text-indigo-400 hover:text-indigo-300 transition-colors cursor-pointer"
                      >
                        {isExpanded ? "Collapse Content ▲" : "Read Full Post ▼"}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* RECRUITER CONTACT CORE INVITATION */}
        <section id="contact" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-left">
            
            {/* Left coordinates description */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-2">
                <span className="text-[10px] font-mono font-bold text-indigo-500 uppercase tracking-widest bg-slate-900 border border-slate-800 py-1 px-3 rounded inline-block">
                  Direct Inquiries
                </span>
                <h2 className="font-display font-extrabold text-2xl sm:text-3.5xl text-slate-0">
                  Initiate Secure Pipeline
                </h2>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Reviewing the code is the first step. Let's arrange a direct call and outline architectural requirements of mutual benefits.
                </p>
              </div>

              {/* Coordinates list */}
              <div className="space-y-4">
                
                <div className={`p-4 rounded-xl border flex items-center space-x-3.5 ${
                  darkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-white border-slate-200'
                }`}>
                  <Mail className="w-5 h-5 text-cyan-400" />
                  <div>
                    <span className="text-[10px] text-slate-500 font-mono block">CORPORATE EMAIL ADDRESS</span>
                    <a href={`mailto:${ME.email}`} className="text-xs font-semibold text-slate-200 hover:underline">
                      {ME.email}
                    </a>
                  </div>
                </div>

                <div className={`p-4 rounded-xl border flex items-center space-x-3.5 ${
                  darkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-white border-slate-200'
                }`}>
                  <Phone className="w-5 h-5 text-indigo-400" />
                  <div>
                    <span className="text-[10px] text-slate-500 font-mono block">COMMUNICATIONS DIAL</span>
                    <span className="text-xs font-semibold text-slate-200">
                      {ME.phone}
                    </span>
                  </div>
                </div>

                <div className={`p-4 rounded-xl border flex items-center space-x-3.5 ${
                  darkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-white border-slate-200'
                }`}>
                  <MapPin className="w-5 h-5 text-emerald-400" />
                  <div>
                    <span className="text-[10px] text-slate-500 font-mono block">REGIONAL CO-ORDINATION</span>
                    <span className="text-xs font-semibold text-slate-200">
                      {ME.location} / Remote Worldwide
                    </span>
                  </div>
                </div>

              </div>

              <div className="p-4 rounded-xl bg-slate-950/40 border border-slate-900 text-[11px] text-slate-500 leading-relaxed">
                <strong>Response assertion guarantee:</strong> Messages submitted via the secure REST gateway are converted into notification streams, resulting in email responses typically inside 12 hours.
              </div>
            </div>

            {/* Right form container */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

          </div>
        </section>

        {/* SYSTEM FOOTER */}
        <footer className={`py-12 border-t ${darkMode ? 'bg-slate-950 border-slate-900' : 'bg-slate-100 border-slate-200'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-slate-500 font-sans">
            
            <div className="flex items-center space-x-2">
              <div className="bg-indigo-600 p-1.5 rounded text-white">
                <Shield className="w-3.5 h-3.5" />
              </div>
              <span className="font-mono text-slate-300 font-semibold tracking-tight">
                MOHAMED ABASS
              </span>
              <span className="text-slate-600">|</span>
              <span>Backend Developer Portfolio © 2026</span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 text-[11px]">
              <a href="#about" className="hover:text-slate-300 transition">About</a>
              <a href="#skills" className="hover:text-slate-300 transition">Skills Mastery</a>
              <a href="#projects" className="hover:text-slate-300 transition">Code Case Studies</a>
              <a href="#blog" className="hover:text-slate-300 transition">Backend Writing</a>
              <a href="#contact" className="hover:text-slate-300 transition">Request API Node</a>
            </div>

            <div className="text-[10px] font-mono text-slate-600 bg-slate-900 p-2 rounded border border-slate-900/60 text-center">
              SYSTEM STATUS: SECURITY_CIPHER_OK_2026
            </div>

          </div>
        </footer>

      </div>
    </div>
  );
}
