import React from 'react';
import { motion } from 'motion/react';
import { Globe, FileSpreadsheet, Calculator, FileText, CheckCircle2 } from 'lucide-react';

interface PortfolioSectionProps {
  portfolioDetails: {
    url: string;
    description: string;
    curatedItems: {
      title: string;
      category: string;
      description: string;
      tools: string;
    }[];
  };
  languages: { name: string; proficiency: string }[];
  businessExposure: string[];
  additionalInfo: {
    remoteAvailability: string;
    projectManagementTraining: string[];
    areasOfProfessionalInterest: string[];
  };
}

export function PortfolioSection({
  portfolioDetails,
  languages,
  businessExposure,
  additionalInfo
}: PortfolioSectionProps) {
  return (
    <section id="abilities" className="py-20 relative">
      <span id="portfolio" className="absolute -top-24 pointer-events-none" />
      <span id="selected-work" className="absolute -top-24 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-400 mb-2">
              <Globe className="w-3.5 h-3.5" />
              <span>Core Applied Capabilities</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Practical Abilities
            </h2>
            <p className="text-stone-400 text-sm max-w-xl mt-1">
              {portfolioDetails.description}
            </p>
          </div>
        </div>

        {/* Curated Collection Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {portfolioDetails.curatedItems.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="glass-panel p-5 rounded-2xl border border-white/10 hover:border-emerald-500/30 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 mb-2">
                  {item.category}
                </div>
                <h4 className="text-sm font-bold text-white mb-2 leading-snug">
                  {item.title}
                </h4>
                <p className="text-xs text-stone-300 leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 border-t border-white/5 text-[11px] font-mono text-stone-400">
                <span className="text-stone-500">Tech:</span> {item.tools}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Information + Business Exposure + Languages 3-Column Bento */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Column 1: Business & Professional Exposure */}
          <div className="glass-panel p-6 rounded-2xl border border-white/10">
            <h3 className="text-xs font-mono uppercase tracking-wider text-emerald-400 mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              <span>Business & Professional Exposure</span>
            </h3>
            <ul className="space-y-2.5 text-xs text-stone-200">
              {businessExposure.map(exp => (
                <li key={exp} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                  <span>{exp}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Languages */}
          <div className="glass-panel p-6 rounded-2xl border border-white/10">
            <h3 className="text-xs font-mono uppercase tracking-wider text-sky-400 mb-4 flex items-center gap-2">
              <Globe className="w-4 h-4" />
              <span>Languages</span>
            </h3>
            <div className="space-y-3">
              {languages.map(lang => (
                <div
                  key={lang.name}
                  className="p-3 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-between"
                >
                  <span className="text-sm font-semibold text-white">{lang.name}</span>
                  <span className="text-xs font-mono text-emerald-400 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                    {lang.proficiency}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-white/5">
              <div className="text-[11px] font-mono text-stone-400 mb-2">Remote Availability:</div>
              <p className="text-xs text-stone-200">
                {additionalInfo.remoteAvailability}
              </p>
            </div>
          </div>

          {/* Column 3: Additional Information */}
          <div className="glass-panel p-6 rounded-2xl border border-white/10">
            <h3 className="text-xs font-mono uppercase tracking-wider text-purple-400 mb-4 flex items-center gap-2">
              <FileText className="w-4 h-4" />
              <span>Additional Information</span>
            </h3>

            <div className="mb-4">
              <div className="text-[11px] font-mono text-stone-400 mb-2">Project Management Training:</div>
              <ul className="space-y-1.5 text-xs text-stone-200">
                {additionalInfo.projectManagementTraining.map((item, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-purple-400 mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-3 border-t border-white/5">
              <div className="text-[11px] font-mono text-stone-400 mb-2">Areas of Professional Interest:</div>
              <div className="flex flex-wrap gap-1.5">
                {additionalInfo.areasOfProfessionalInterest.map(area => (
                  <span
                    key={area}
                    className="px-2 py-1 rounded text-[11px] font-mono bg-white/[0.04] text-stone-300 border border-white/10"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
