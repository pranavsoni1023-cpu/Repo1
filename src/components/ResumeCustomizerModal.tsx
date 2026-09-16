import React, { useState } from 'react';
import { FullResumeData } from '../types';
import { X, Save, RotateCcw, Check, Sparkles, User, Layers } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ResumeCustomizerModalProps {
  data: FullResumeData;
  isOpen: boolean;
  onClose: () => void;
  onSave: (updatedData: FullResumeData) => void;
  onReset: () => void;
}

export function ResumeCustomizerModal({
  data,
  isOpen,
  onClose,
  onSave,
  onReset,
}: ResumeCustomizerModalProps) {
  const [formData, setFormData] = useState<FullResumeData>(data);
  const [activeTab, setActiveTab] = useState<'profile' | 'competencies' | 'abilities'>('profile');
  const [savedSuccess, setSavedSuccess] = useState(false);

  // Sync state if opened with fresh data
  React.useEffect(() => {
    setFormData(data);
  }, [data]);

  if (!isOpen) return null;

  const handleProfileChange = (field: keyof typeof formData.profile, value: string) => {
    setFormData(prev => ({
      ...prev,
      profile: {
        ...prev.profile,
        [field]: value,
      },
    }));
  };

  const handleCompetenciesChange = (value: string) => {
    const list = value.split(',').map(s => s.trim()).filter(Boolean);
    setFormData(prev => ({
      ...prev,
      coreCompetencies: list
    }));
  };

  const handlePortfolioDescChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      portfolioDetails: {
        ...prev.portfolioDetails,
        description: value
      }
    }));
  };

  const handleSave = () => {
    onSave(formData);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 800);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-3xl bg-[#11131c] border border-white/15 rounded-2xl shadow-2xl p-6 sm:p-8 z-10 my-8 max-h-[90vh] flex flex-col"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <div>
              <h3 className="text-xl font-display font-bold text-white flex items-center gap-2">
                <span>Resume Data Customizer</span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                  Live Sync
                </span>
              </h3>
              <p className="text-xs text-stone-400 font-mono mt-0.5">
                Update details or customize your live portfolio resume. Changes persist to your local storage.
              </p>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-white/[0.04] text-stone-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Tabs */}
          <div className="flex items-center gap-2 pt-4 pb-3 border-b border-white/5">
            <button
              onClick={() => setActiveTab('profile')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-colors flex items-center gap-1.5 ${
                activeTab === 'profile'
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              <User className="w-3.5 h-3.5" />
              <span>Bio & Contact</span>
            </button>

            <button
              onClick={() => setActiveTab('competencies')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-colors flex items-center gap-1.5 ${
                activeTab === 'competencies'
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Core Competencies</span>
            </button>

            <button
              onClick={() => setActiveTab('abilities')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-colors flex items-center gap-1.5 ${
                activeTab === 'abilities'
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Practical Abilities</span>
            </button>
          </div>

          {/* Tab Content Body */}
          <div className="flex-1 overflow-y-auto py-4 space-y-4 no-scrollbar">
            {activeTab === 'profile' && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-stone-400 mb-1">Full Name</label>
                    <input
                      type="text"
                      value={formData.profile.name}
                      onChange={e => handleProfileChange('name', e.target.value)}
                      className="w-full px-3 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-white text-xs font-mono focus:outline-none focus:border-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-stone-400 mb-1">Professional Title</label>
                    <input
                      type="text"
                      value={formData.profile.title}
                      onChange={e => handleProfileChange('title', e.target.value)}
                      className="w-full px-3 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-white text-xs font-mono focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-stone-400 mb-1">Email</label>
                    <input
                      type="email"
                      value={formData.profile.email}
                      onChange={e => handleProfileChange('email', e.target.value)}
                      className="w-full px-3 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-white text-xs font-mono focus:outline-none focus:border-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-stone-400 mb-1">Location</label>
                    <input
                      type="text"
                      value={formData.profile.location}
                      onChange={e => handleProfileChange('location', e.target.value)}
                      className="w-full px-3 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-white text-xs font-mono focus:outline-none focus:border-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-stone-400 mb-1">Remote Availability</label>
                    <input
                      type="text"
                      value={formData.profile.remoteAvailability}
                      onChange={e => handleProfileChange('remoteAvailability', e.target.value)}
                      className="w-full px-3 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-white text-xs font-mono focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-stone-400 mb-1">Portfolio URL</label>
                  <input
                    type="text"
                    value={formData.profile.portfolio}
                    onChange={e => handleProfileChange('portfolio', e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-white text-xs font-mono focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-stone-400 mb-1">Professional Profile Summary (3–4 Lines)</label>
                  <textarea
                    rows={4}
                    value={formData.profile.bio}
                    onChange={e => handleProfileChange('bio', e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-white text-xs leading-relaxed focus:outline-none focus:border-emerald-500 font-sans"
                  />
                </div>
              </div>
            )}

            {activeTab === 'competencies' && (
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-mono text-stone-400 mb-2">
                    Core Competencies (Comma separated list)
                  </label>
                  <textarea
                    rows={4}
                    value={formData.coreCompetencies.join(', ')}
                    onChange={e => handleCompetenciesChange(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-white text-xs leading-relaxed font-mono focus:outline-none focus:border-emerald-500"
                  />
                  <span className="text-[11px] font-mono text-stone-500 block mt-1">
                    Preview: {formData.coreCompetencies.length} items parsed
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {formData.coreCompetencies.map(c => (
                    <span key={c} className="px-2.5 py-1 rounded-lg text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'abilities' && (
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-mono text-stone-400 mb-2">
                    Practical Abilities Section Description
                  </label>
                  <textarea
                    rows={3}
                    value={formData.portfolioDetails.description}
                    onChange={e => handlePortfolioDescChange(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-white text-xs font-mono focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <div className="space-y-3">
                  <label className="block text-xs font-mono text-stone-400">
                    Demonstrable Practical Systems ({formData.portfolioDetails.curatedItems.length})
                  </label>
                  {formData.portfolioDetails.curatedItems.map((item, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-white/[0.02] border border-white/10">
                      <div className="font-bold text-white text-xs mb-1">{item.title}</div>
                      <div className="text-[11px] text-emerald-400 font-mono mb-1">{item.category}</div>
                      <div className="text-xs text-stone-300">{item.description}</div>
                      <div className="text-[10px] text-stone-500 font-mono mt-1">Tools: {item.tools}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Footer Buttons */}
          <div className="pt-4 border-t border-white/10 flex items-center justify-between">
            <button
              onClick={() => {
                if (confirm('Reset resume data back to initial defaults?')) {
                  onReset();
                  onClose();
                }
              }}
              className="flex items-center gap-1.5 text-xs font-mono text-stone-400 hover:text-rose-400 transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Defaults</span>
            </button>

            <div className="flex items-center gap-3">
              <button
                onClick={onClose}
                className="px-4 py-2 rounded-xl text-xs font-mono text-stone-300 hover:bg-white/[0.05] transition-colors cursor-pointer"
              >
                Cancel
              </button>

              <button
                onClick={handleSave}
                id="save-customized-resume-btn"
                className="flex items-center gap-2 px-5 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-mono font-semibold text-xs transition-colors shadow-md cursor-pointer"
              >
                {savedSuccess ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>Saved!</span>
                  </>
                ) : (
                  <>
                    <Save className="w-3.5 h-3.5" />
                    <span>Save Changes</span>
                  </>
                )}
              </button>
            </div>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
