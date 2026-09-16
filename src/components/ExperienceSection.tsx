import React from 'react';
import { motion } from 'motion/react';
import { ExperienceItem } from '../types';
import { Briefcase, MapPin, Calendar, CheckCircle2, TrendingUp, Users, Database } from 'lucide-react';

interface ExperienceSectionProps {
  experiences: ExperienceItem[];
}

export function ExperienceSection({ experiences }: ExperienceSectionProps) {
  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-400 mb-2">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Practical Business Experience</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Professional & Operational Experience
          </h2>
          <p className="text-stone-400 text-sm max-w-2xl mt-1">
            Hands-on commercial engagement, customer-facing exhibition sales, and structured business systems execution.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.id || idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-panel rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-emerald-500/30 transition-all duration-300"
            >
              {/* Header Info */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-white/10">
                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 mb-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span>Commercial Enterprise & Practical Experience</span>
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white tracking-tight">
                    {exp.company}
                  </h3>
                  <div className="text-base text-stone-300 font-medium mt-0.5">
                    {exp.role}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-stone-400">
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/10">
                    <MapPin className="w-3.5 h-3.5 text-sky-400" />
                    <span>{exp.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-300">
                    <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{exp.period}</span>
                  </div>
                </div>
              </div>

              {/* Key Practical Impact Stats */}
              {exp.metrics && exp.metrics.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
                  {exp.metrics.map((m, mIdx) => (
                    <div key={mIdx} className="rounded-xl p-4 bg-white/[0.02] border border-white/5">
                      <div className="text-xl sm:text-2xl font-display font-bold text-white">
                        {m.value}
                      </div>
                      <div className="text-xs text-stone-400 mt-0.5 font-mono">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Verified Achievements / Evidence Bullets */}
              <div className="mt-6 space-y-3">
                <div className="text-xs font-mono uppercase tracking-wider text-stone-400 mb-2">
                  Key Practical Responsibilities & Achievements:
                </div>
                <ul className="space-y-3">
                  {exp.achievements.map((item, aIdx) => (
                    <li key={aIdx} className="flex items-start gap-3 text-sm text-stone-300 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Competencies & Tools Utilized */}
              {exp.technologies && exp.technologies.length > 0 && (
                <div className="mt-6 pt-5 border-t border-white/5 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono text-stone-500 mr-2">Core Tools & Focus:</span>
                  {exp.technologies.map(tech => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/[0.04] border border-white/10 text-stone-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
