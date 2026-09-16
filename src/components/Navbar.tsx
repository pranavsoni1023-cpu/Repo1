import React, { useState, useEffect } from 'react';
import { FileText, Edit3, Send, Menu, X, ArrowUpRight, Terminal, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  onOpenCustomizer: () => void;
  onTogglePrintView: () => void;
  isPrintView: boolean;
}

export function Navbar({ onOpenCustomizer, onTogglePrintView, isPrintView }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['about', 'education', 'abilities', 'terminal', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Profile', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Practical Abilities', href: '#abilities' },
    { name: 'Terminal', href: '#terminal' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 no-print ${
        scrolled
          ? 'bg-[#0c0e17]/85 backdrop-blur-md border-b border-white/10 py-3 shadow-xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo / Personal Brand */}
        <a href="#about" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500/20 via-sky-500/20 to-purple-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-300 font-mono font-bold text-base shadow-sm group-hover:border-emerald-400 transition-colors">
            PS
          </div>
          <div>
            <div className="font-display font-bold text-white text-base tracking-wide flex items-center gap-2">
              <span>Pranav Soni</span>
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse mr-1"></span>
                Open to roles
              </span>
            </div>
            <p className="text-xs text-stone-400 font-mono hidden sm:block">Operations & Data Professional</p>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-white/[0.03] border border-white/10 px-3 py-1.5 rounded-full backdrop-blur-md">
          {navLinks.map(link => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-200 flex items-center gap-1.5 ${
                  isActive
                    ? 'text-white'
                    : 'text-stone-400 hover:text-stone-200 hover:bg-white/[0.04]'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 bg-white/10 rounded-full border border-white/15"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </a>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-2.5">
          {/* Customizer Button */}
          <button
            onClick={onOpenCustomizer}
            id="nav-edit-resume-btn"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium text-stone-300 bg-white/[0.04] border border-white/10 hover:bg-white/[0.08] hover:text-white transition-colors"
            title="Edit resume details or paste custom bullet points"
          >
            <Edit3 className="w-3.5 h-3.5 text-emerald-400" />
            <span>Customize</span>
          </button>

          {/* Toggle Recruiter Print/PDF View */}
          <button
            onClick={onTogglePrintView}
            id="nav-print-resume-btn"
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
              isPrintView
                ? 'bg-emerald-500 text-black font-semibold shadow-lg shadow-emerald-500/20'
                : 'text-stone-300 bg-white/[0.04] border border-white/10 hover:bg-white/[0.08] hover:text-white'
            }`}
            title="Toggle Recruiter A4 Document View"
          >
            <FileText className="w-3.5 h-3.5 text-sky-400" />
            <span>{isPrintView ? 'Exit PDF View' : 'Resume PDF'}</span>
          </button>

          {/* Contact Direct Link */}
          <a
            href="#contact"
            id="nav-contact-btn"
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-medium text-white bg-gradient-to-r from-emerald-600 to-sky-600 hover:from-emerald-500 hover:to-sky-500 shadow-md shadow-emerald-950/40 transition-all active:scale-95"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={onTogglePrintView}
            className="p-2 rounded-lg bg-white/[0.04] border border-white/10 text-stone-300 text-xs flex items-center gap-1"
            aria-label="Resume View"
          >
            <FileText className="w-4 h-4 text-sky-400" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-white/[0.04] border border-white/10 text-stone-300 hover:text-white focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden border-b border-white/10 bg-[#0c0e17]/95 backdrop-blur-xl px-4 py-5 space-y-3"
          >
            <nav className="flex flex-col space-y-1">
              {navLinks.map(link => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg text-sm text-stone-300 hover:text-white hover:bg-white/[0.05] transition-colors flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-stone-500" />
                </a>
              ))}
            </nav>

            <div className="pt-3 border-t border-white/10 grid grid-cols-2 gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCustomizer();
                }}
                className="w-full flex items-center justify-center gap-1.5 py-2.5 rounded-lg text-xs font-mono font-medium text-stone-200 bg-white/[0.06] border border-white/10"
              >
                <Edit3 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Customize Data</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onTogglePrintView();
                }}
                className="w-full flex items-center justify-center gap-1.5 py-2.5 rounded-lg text-xs font-mono font-medium text-stone-200 bg-white/[0.06] border border-white/10"
              >
                <FileText className="w-3.5 h-3.5 text-sky-400" />
                <span>A4 Resume View</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
