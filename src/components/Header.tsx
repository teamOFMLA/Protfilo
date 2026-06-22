import React, { useState, useEffect } from 'react';
import { Menu, X, Code, Shield, Github, Linkedin, Moon, Sun, Download } from 'lucide-react';
import { ME } from '../data';

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
}

export default function Header({ darkMode, setDarkMode }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Sandbox', href: '#sandbox' },
    { label: 'Experience', href: '#experience' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Blog', href: '#blog' },
    { label: 'Contact', href: '#contact' }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const topOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? darkMode
            ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-900 py-3'
            : 'bg-white/80 backdrop-blur-md border-b border-slate-200 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Brand Brand */}
          <a
            href="#hero"
            className="flex items-center space-x-2.5 group"
            onClick={(e) => handleNavClick(e, '#hero')}
          >
            <div className="bg-indigo-600 p-2 rounded-lg text-white group-hover:bg-indigo-500 transition">
              <Code className="w-4 h-4" />
            </div>
            <div>
              <span className={`font-display font-bold text-sm tracking-tight block ${darkMode ? 'text-slate-100' : 'text-slate-900'}`}>
                {ME.name}
              </span>
              <span className="text-[10px] font-mono text-cyan-500 font-semibold uppercase tracking-widest block -mt-1">
                .NET BACKEND ENGINEER
              </span>
            </div>
          </a>

          {/* Desktop Navigation Link Anchors */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`text-xs font-medium px-3 py-2 rounded-lg transition-all ${
                  scrolled
                    ? darkMode
                      ? 'text-slate-300 hover:text-white hover:bg-slate-900/60'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                    : darkMode
                    ? 'text-slate-300 hover:text-white hover:bg-white/5'
                    : 'text-slate-600 hover:text-slate-950 hover:bg-slate-100/40'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Utility Tools (Theme Toggle, Social Links, Resume) */}
          <div className="hidden lg:flex items-center space-x-3 border-l border-slate-800/40 pl-4 ml-1">
            
            {/* Theme Toggle Button */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg transition cursor-pointer ${
                darkMode ? 'text-slate-300 hover:bg-slate-900 hover:text-white' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-950'
              }`}
              title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Social Icons */}
            <a
              href={ME.github}
              target="_blank"
              rel="noreferrer"
              className={`p-2 rounded-lg transition ${
                darkMode ? 'text-slate-400 hover:text-slate-100' : 'text-slate-500 hover:text-slate-950'
              }`}
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={ME.linkedin}
              target="_blank"
              rel="noreferrer"
              className={`p-2 rounded-lg transition ${
                darkMode ? 'text-slate-400 hover:text-slate-100' : 'text-slate-500 hover:text-slate-950'
              }`}
            >
              <Linkedin className="w-4 h-4" />
            </a>

            {/* Secure Resume Badge Downloads */}
            <a
              href={ME.resumeUrl}
              className="flex items-center space-x-1.5 bg-indigo-600 hover:bg-indigo-500 text-white font-display font-medium text-xs py-2 px-3.5 rounded-lg shadow-sm hover:shadow-indigo-950/20 transition-all font-semibold"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Right Controls - Hamburger + Toggle */}
          <div className="flex lg:hidden items-center space-x-2">
            
            {/* Theme Toggle Button */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg transition ${
                darkMode ? 'text-slate-300 hover:bg-slate-900' : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              {darkMode ? <Sun className="w-4 m-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Hamburger toggle button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg transition ${
                darkMode ? 'text-slate-300 hover:bg-slate-900' : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation Links */}
      {isOpen && (
        <div
          className={`lg:hidden border-b transition-all ${
            darkMode ? 'bg-slate-950 border-slate-900' : 'bg-white border-slate-200'
          }`}
        >
          <div className="px-4 pt-2 pb-6 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`block px-3 py-2.5 rounded-lg text-sm font-medium transition ${
                  darkMode ? 'text-slate-300 hover:text-white hover:bg-slate-900' : 'text-slate-600 hover:text-slate-950 hover:bg-slate-100'
                }`}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 border-t border-slate-800/40 p-2 flex items-center justify-between">
              <div className="flex space-x-3">
                <a href={ME.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-slate-100">
                  <Github className="w-5 h-5" />
                </a>
                <a href={ME.linkedin} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-slate-100">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
              <a
                href={ME.resumeUrl}
                className="flex items-center space-x-1 bg-indigo-600 hover:bg-indigo-500 text-white text-xs py-2 px-3 rounded-lg font-medium"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Resume PDF</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
