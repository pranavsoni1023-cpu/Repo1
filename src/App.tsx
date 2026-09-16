import React, { useState, useEffect } from 'react';
import { initialResumeData } from './data/resumeData';
import { FullResumeData } from './types';
import { InteractiveCanvas } from './components/InteractiveCanvas';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { EducationSection } from './components/EducationSection';
import { PortfolioSection } from './components/PortfolioSection';
import { InteractiveTerminal } from './components/InteractiveTerminal';
import { ContactSection } from './components/ContactSection';
import { PrintResumeView } from './components/PrintResumeView';
import { ResumeCustomizerModal } from './components/ResumeCustomizerModal';
import { ArrowUp, Mail, Globe } from 'lucide-react';

const STORAGE_KEY = 'pranav_portfolio_resume_v4';

export default function App() {
  const [resumeData, setResumeData] = useState<FullResumeData>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error('Failed to load saved resume data', e);
    }
    return initialResumeData;
  });

  const [isCustomizerOpen, setIsCustomizerOpen] = useState(false);
  const [isPrintView, setIsPrintView] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSaveResumeData = (updated: FullResumeData) => {
    setResumeData(updated);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch (e) {
      console.error('Failed to persist resume data', e);
    }
  };

  const handleResetResumeData = () => {
    setResumeData(initialResumeData);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {
      console.error('Failed to clear storage', e);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // If in printable A4 view
  if (isPrintView) {
    return (
      <PrintResumeView
        data={resumeData}
        onClose={() => setIsPrintView(false)}
      />
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0b0f] text-stone-100 relative selection:bg-emerald-500/20 selection:text-emerald-300 font-sans">
      {/* Creative Interactive Constellation Background Canvas */}
      <InteractiveCanvas />

      {/* Floating Sticky Navigation Bar */}
      <Navbar
        onOpenCustomizer={() => setIsCustomizerOpen(true)}
        onTogglePrintView={() => setIsPrintView(prev => !prev)}
        isPrintView={isPrintView}
      />

      {/* Main Content Sections strictly adhering to user's resume schema */}
      <main className="relative z-10">
        {/* HEADER, PROFESSIONAL PROFILE, & CORE COMPETENCIES */}
        <HeroSection
          profile={resumeData.profile}
          coreCompetencies={resumeData.coreCompetencies}
          onTogglePrintView={() => setIsPrintView(true)}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>

        {/* EDUCATION & CERTIFICATIONS */}
        <EducationSection
          education={resumeData.education}
          certifications={resumeData.certifications}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>

        {/* PRACTICAL ABILITIES */}
        <PortfolioSection
          portfolioDetails={resumeData.portfolioDetails}
          languages={resumeData.languages}
          businessExposure={resumeData.businessExposure}
          additionalInfo={resumeData.additionalInfo}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>

        {/* Interactive CLI Console */}
        <InteractiveTerminal data={resumeData} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>

        {/* CONTACT INFORMATION */}
        <ContactSection profile={resumeData.profile} />
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 py-12 bg-[#090a0e]/90 backdrop-blur-md no-print">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center font-mono font-bold text-xs text-emerald-400">
              PS
            </div>
            <div>
              <div className="text-sm font-semibold text-white">{resumeData.profile.name}</div>
              <div className="text-xs font-mono text-stone-500">
                {resumeData.profile.title}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs font-mono text-stone-400">
            <a href="#about" className="hover:text-white transition-colors">Profile</a>
            <a href="#education" className="hover:text-white transition-colors">Education</a>
            <a href="#abilities" className="hover:text-white transition-colors">Practical Abilities</a>
            <a href="#terminal" className="hover:text-white transition-colors">Terminal</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          <div className="flex items-center gap-3 text-stone-500 text-xs font-mono">
            <span>© {new Date().getFullYear()} {resumeData.profile.name}</span>
            <span>•</span>
            <div className="flex items-center gap-2">
              <a
                href={resumeData.portfolioDetails.url}
                target="_blank"
                rel="noreferrer"
                className="hover:text-emerald-400 transition-colors"
                aria-label="Portfolio"
              >
                <Globe className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${resumeData.profile.email}`}
                className="hover:text-emerald-400 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          id="back-to-top-btn"
          className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-white/[0.08] hover:bg-white/[0.16] border border-white/15 text-stone-200 hover:text-white shadow-xl backdrop-blur-md transition-all active:scale-95 cursor-pointer no-print"
          title="Scroll to top"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

      {/* Live Resume Customizer Modal */}
      <ResumeCustomizerModal
        data={resumeData}
        isOpen={isCustomizerOpen}
        onClose={() => setIsCustomizerOpen(false)}
        onSave={handleSaveResumeData}
        onReset={handleResetResumeData}
      />
    </div>
  );
}
