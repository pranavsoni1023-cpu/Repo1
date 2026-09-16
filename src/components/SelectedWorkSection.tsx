import React from 'react';
import { motion } from 'motion/react';
import { SelectedWorkItem } from '../types';
import { LayoutGrid, Clock, ArrowUpRight, BarChart3, Calculator, Users2, FileSearch } from 'lucide-react';

interface SelectedWorkSectionProps {
  selectedWork: SelectedWorkItem[];
}

export function SelectedWorkSection({ selectedWork }: SelectedWorkSectionProps) {
  const getIconForWork = (index: number) => {
    switch (index) {
      case 0:
        return <BarChart3 className="w-5 h-5 text-emerald-400" />;
      case 1:
        return <Calculator className="w-5 h-5 text-sky-400" />;
      case 2:
        return <Users2 className="w-5 h-5 text-purple-400" />;
      case 3:
      default:
        return <FileSearch className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <section id="selected-work" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-400 mb-2">
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>Demonstrable Systems & Projects</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Selected Work
            </h2>
            <p className="text-stone-400 text-sm max-w-xl mt-1">
              Structured operational dashboards, financial simulations, and client management architectures.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-amber-400/90 bg-amber-500/10 border border-amber-500/20 px-3.5 py-1.5 rounded-full w-fit">
            <Clock className="w-3.5 h-3.5" />
            <span>Active Work / In Development</span>
          </div>
        </div>

        {/* Selected Work Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {selectedWork.map((work, idx) => (
            <motion.div
              key={work.id || idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-panel rounded-2xl p-6 sm:p-7 border border-white/10 hover:border-emerald-500/40 hover:bg-white/[0.03] transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Card Top: Icon & Status */}
                <div className="flex items-center justify-between gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getIconForWork(idx)}
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-amber-500/10 border border-amber-500/30 text-amber-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                    <span>{work.status || "In Development"}</span>
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-display font-bold text-white tracking-tight mb-2 group-hover:text-emerald-300 transition-colors">
                  {work.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-stone-300 leading-relaxed mb-6 font-normal">
                  {work.description}
                </p>
              </div>

              {/* Tools Chips & Action */}
              <div className="pt-4 border-t border-white/5 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-1.5">
                  {work.tools.map((tool, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/[0.03] border border-white/10 text-stone-300"
                    >
                      {tool}
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
