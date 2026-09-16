import React from 'react';
import { motion } from 'motion/react';
import { EducationItem, CertificationItem } from '../types';
import { GraduationCap, Award, ExternalLink, Calendar, MapPin, BookOpen } from 'lucide-react';

interface EducationSectionProps {
  education: EducationItem[];
  certifications: CertificationItem[];
  languages?: { name: string; proficiency: string }[];
}

export function EducationSection({ education, certifications, languages }: EducationSectionProps) {
  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-400 mb-2">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Qualifications & Credentials</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Education & Certifications
          </h2>
          <p className="text-stone-400 text-sm max-w-xl mt-1">
            Concurrent degrees in Business Administration and Computer Applications, complemented by certified technical training.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Education Block */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-mono uppercase tracking-wider text-stone-400 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-emerald-400" />
                <span>Degrees & Academics</span>
              </h3>
              <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                Concurrent Degree Track
              </span>
            </div>

            {education.map(edu => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="glass-panel rounded-2xl p-6 border border-white/10 hover:border-emerald-500/30 transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-3">
                  <div>
                    <h4 className="text-xl font-bold text-white tracking-tight">
                      {edu.degree}
                    </h4>
                    <div className="text-emerald-300 text-sm font-medium mt-0.5">
                      {edu.institution}
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/[0.03] border border-white/10 text-xs font-mono text-stone-300 self-start">
                    <Calendar className="w-3 h-3 text-sky-400" />
                    <span>{edu.period}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-stone-400 mb-4">
                  <MapPin className="w-3 h-3 text-stone-500" />
                  <span>{edu.location}</span>
                </div>

                {/* Coursework */}
                {edu.coursework && edu.coursework.length > 0 && (
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-stone-400 block mb-2">
                      Core Subjects & Focus Areas
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {edu.coursework.map(c => (
                        <span
                          key={c}
                          className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/[0.03] border border-white/10 text-stone-300"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            ))}

            {/* Languages Block (Clean, No Bars) */}
            {languages && languages.length > 0 && (
              <div className="glass-panel rounded-2xl p-5 border border-white/10 mt-6">
                <div className="text-xs font-mono uppercase tracking-wider text-stone-400 mb-3">
                  Languages (Professional Working Proficiency)
                </div>
                <div className="flex flex-wrap gap-4">
                  {languages.map(lang => (
                    <div
                      key={lang.name}
                      className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/[0.03] border border-white/10"
                    >
                      <span className="text-sm font-semibold text-white">{lang.name}</span>
                      <span className="text-stone-500 font-mono">•</span>
                      <span className="text-xs font-mono text-emerald-400 font-medium">{lang.proficiency}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Certifications Block */}
          <div className="space-y-6">
            <h3 className="text-xs font-mono uppercase tracking-wider text-stone-400 flex items-center gap-2">
              <Award className="w-4 h-4 text-sky-400" />
              <span>Certified Qualifications</span>
            </h3>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="glass-panel rounded-2xl p-5 border border-white/10 hover:border-sky-500/30 transition-all duration-300 flex items-start justify-between gap-4"
                >
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 shrink-0 mt-0.5">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white tracking-tight">
                        {cert.title}
                      </h4>
                      <div className="text-xs font-mono text-emerald-300 mt-0.5">
                        {cert.issuer} {cert.issueDate && `• ${cert.issueDate}`}
                      </div>
                      <p className="text-xs text-stone-300 mt-2 leading-relaxed">
                        {cert.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Practical Synthesis Note */}
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 text-xs text-stone-300 leading-relaxed font-mono">
              <span className="text-emerald-400 font-bold block mb-1">Dual Business & Computing Foundation</span>
              Concurrent BBA & BCA coursework at Manipal University Jaipur delivers a strong balance of business operations, commercial law, quantitative statistics, and relational database systems.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
