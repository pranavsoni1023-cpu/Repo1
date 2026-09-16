import React from 'react';
import { motion } from 'motion/react';
import { CapabilityCategory } from '../types';
import { Layers, Briefcase, FileSpreadsheet, Calculator, Cpu, Search } from 'lucide-react';

interface CapabilitiesSectionProps {
  categories: CapabilityCategory[];
}

export function CapabilitiesSection({ categories }: CapabilitiesSectionProps) {
  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'cap-business-sales':
        return <Briefcase className="w-4 h-4 text-emerald-400" />;
      case 'cap-office-data':
        return <FileSpreadsheet className="w-4 h-4 text-sky-400" />;
      case 'cap-accounting':
        return <Calculator className="w-4 h-4 text-emerald-400" />;
      case 'cap-ai-productivity':
        return <Cpu className="w-4 h-4 text-purple-400" />;
      case 'cap-research-analysis':
      default:
        return <Search className="w-4 h-4 text-amber-400" />;
    }
  };

  return (
    <section id="capabilities" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-400 mb-2">
            <Layers className="w-3.5 h-3.5" />
            <span>Structured Functional Toolkit</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Core Capabilities
          </h2>
          <p className="text-stone-400 text-sm max-w-xl mt-1">
            Proficiencies across commercial operations, spreadsheet automation, computerized accounting, and AI-enabled research.
          </p>
        </div>

        {/* 5 Structured Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.id || idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className={`glass-panel rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between ${
                idx === 0 || idx === 1 ? 'lg:col-span-1' : ''
              }`}
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 pb-4 mb-4 border-b border-white/5">
                  <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center">
                    {getCategoryIcon(cat.id)}
                  </div>
                  <h3 className="text-sm font-mono font-bold tracking-wider text-stone-100 uppercase">
                    {cat.title}
                  </h3>
                </div>

                {/* Skill Pills (Clean, no percentage bars) */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {cat.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3 py-1.5 rounded-lg text-xs font-mono bg-white/[0.03] border border-white/10 text-stone-300 hover:text-white hover:border-emerald-500/30 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
