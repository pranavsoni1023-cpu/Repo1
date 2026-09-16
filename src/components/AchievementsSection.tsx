import React from 'react';
import { motion } from 'motion/react';
import { AchievementItem, WorkPrincipleItem } from '../types';
import { Award, Zap, Compass, CheckCircle, ShieldCheck, Sparkles } from 'lucide-react';

interface AchievementsSectionProps {
  achievements: AchievementItem[];
  howIWork: WorkPrincipleItem[];
}

export function AchievementsSection({ achievements, howIWork }: AchievementsSectionProps) {
  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Selected Achievements */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-400 mb-2">
              <Award className="w-3.5 h-3.5" />
              <span>Measurable Evidence</span>
            </div>
            <h2 className="font-display text-3xl font-bold text-white tracking-tight mb-2">
              Selected Achievements
            </h2>
            <p className="text-stone-400 text-sm mb-8">
              Demonstrated outcomes from direct customer interaction and internal operational tool building.
            </p>

            <div className="space-y-4">
              {achievements.map((ach, idx) => (
                <motion.div
                  key={ach.id || idx}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="glass-panel p-5 rounded-2xl border border-white/10 hover:border-emerald-500/30 transition-all flex items-start gap-4"
                >
                  <div className="w-14 h-14 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex flex-col items-center justify-center shrink-0">
                    <span className="font-display font-bold text-lg text-emerald-400 leading-none">
                      {ach.metric}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-sm font-mono font-bold text-white uppercase tracking-wider mb-1">
                      {ach.label}
                    </h3>
                    <p className="text-xs text-stone-300 leading-relaxed font-normal">
                      {ach.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: How I Work */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-sky-400 mb-2">
              <Zap className="w-3.5 h-3.5" />
              <span>Execution Philosophy</span>
            </div>
            <h2 className="font-display text-3xl font-bold text-white tracking-tight mb-2">
              How I Work
            </h2>
            <p className="text-stone-400 text-sm mb-8">
              A systematic approach blending technology, AI-assisted speed, and disciplined execution.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {howIWork.map((principle, idx) => (
                <motion.div
                  key={principle.id || idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="glass-panel p-5 rounded-2xl border border-white/10 hover:border-sky-500/30 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-2 text-xs font-mono text-sky-400 mb-2 font-bold uppercase tracking-wider">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                      <span>{principle.title}</span>
                    </div>
                    <p className="text-xs text-stone-300 leading-relaxed font-normal">
                      {principle.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
