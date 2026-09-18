import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ResumeProfile } from '../types';
import { ArrowDown, Copy, Check, ExternalLink, Mail, MapPin, Globe, FileDown, Briefcase, Laptop } from 'lucide-react';

interface HeroSectionProps {
  profile: ResumeProfile;
  coreCompetencies: string[];
  onTogglePrintView: () => void;
}

export function HeroSection({ profile, coreCompetencies, onTogglePrintView }: HeroSectionProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  return (
    <section id="about" className="relative pt-32 pb-20 md:pt-36 md:pb-24 overflow-hidden">
      {/* Subtle ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-emerald-500/10 via-sky-500/10 to-purple-500/5 blur-[120px] pointer-events-none -z-10 rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start max-w-4xl">
          
          {/* Header Status & Remote Availability Pill */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex flex-wrap items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md mb-6"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-mono font-medium text-emerald-400 tracking-wide">
              {profile.remoteAvailability || "Open to Remote Opportunities"}
            </span>
            <span className="text-stone-500">•</span>
            <span className="text-xs font-mono text-stone-300 flex items-center gap-1.5">
              <Laptop className="w-3.5 h-3.5 text-sky-400" />
              <span>Jaipur, India · Global Remote</span>
            </span>
          </motion.div>

          {/* Name & Exact Primary Positioning */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-4"
          >
            {profile.name}
            <br />
            <span className="text-stone-400 text-lg sm:text-2xl lg:text-3xl font-mono font-semibold tracking-wider block mt-3">
              {profile.title}
            </span>
          </motion.h1>

          {/* Professional Profile: Exact Specified Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-panel p-6 sm:p-7 rounded-2xl border border-white/10 mb-8 max-w-3xl"
          >
            <div className="text-xs font-mono uppercase tracking-wider text-emerald-400 mb-2 flex items-center gap-2">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Professional Profile</span>
            </div>
            <p className="text-base sm:text-lg text-stone-200 leading-relaxed font-normal">
              {profile.bio}
            </p>
          </motion.div>

          {/* Header Metadata: Contact Information, LinkedIn, Location, Availability */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="flex flex-wrap items-center gap-3 text-xs font-mono text-stone-400 mb-8"
          >
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/10">
              <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>{profile.location}</span>
            </div>

            <button
              onClick={handleCopyEmail}
              id="hero-copy-email-btn"
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/10 hover:border-emerald-500/40 hover:text-white transition-colors cursor-pointer group"
              title="Click to copy email address"
            >
              <Mail className="w-3.5 h-3.5 text-sky-400 group-hover:scale-110 transition-transform" />
              <span className="text-stone-300">{profile.email}</span>
              {copied ? (
                <span className="flex items-center gap-1 text-emerald-400 text-[11px] font-semibold">
                  <Check className="w-3 h-3" /> Copied!
                </span>
              ) : (
                <Copy className="w-3 h-3 text-stone-500 group-hover:text-stone-300" />
              )}
            </button>

            {profile.phone && (
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/10 text-stone-300">
                <span>{profile.phone}</span>
              </div>
            )}

            <a
              href="#selected-work"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 hover:bg-emerald-500/20 transition-colors"
            >
              <Globe className="w-3.5 h-3.5 text-emerald-400" />
              <span>Selected Work</span>
              <ExternalLink className="w-2.5 h-2.5 text-emerald-400" />
            </a>
          </motion.div>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-3 mb-10"
          >
            <a
              href="#experience"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-black font-semibold text-sm hover:bg-stone-200 transition-all shadow-lg active:scale-95"
            >
              <span>View Practical Experience</span>
              <ArrowDown className="w-4 h-4" />
            </a>

            <button
              onClick={onTogglePrintView}
              id="hero-download-resume-btn"
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-medium text-sm hover:bg-emerald-500/20 transition-all active:scale-95 cursor-pointer"
            >
              <FileDown className="w-4 h-4 text-emerald-400" />
              <span>Print / Download Resume PDF</span>
            </button>
          </motion.div>

          {/* Core Competencies Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="w-full"
          >
            <div className="text-xs font-mono uppercase tracking-widest text-stone-400 mb-3 flex items-center gap-2">
              <span className="w-6 h-px bg-emerald-500" />
              <span>Core Operational Focus</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {coreCompetencies.map(comp => (
                <div
                  key={comp}
                  className="px-3.5 py-1.5 rounded-lg border border-emerald-500/20 bg-emerald-500/[0.06] text-emerald-300 text-xs font-mono font-medium"
                >
                  {comp}
                </div>
              ))}
            </div>
          </motion.div>

        </div>

        {/* Highlights Bento Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4 w-full"
        >
          {profile.highlights.map((stat) => (
            <div
              key={stat.label}
              className="glass-panel rounded-2xl p-5 border border-white/10 hover:border-emerald-500/30 transition-all duration-300 group"
            >
              <div className="text-xs font-mono uppercase tracking-wider text-stone-400 mb-1">
                {stat.label}
              </div>
              <div className="text-2xl sm:text-3xl font-display font-bold text-white group-hover:text-emerald-300 transition-colors">
                {stat.value}
              </div>
              <div className="text-xs text-stone-400 mt-1">
                {stat.detail}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

