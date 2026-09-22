import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ResumeProfile } from '../types';
import { Mail, Copy, Check, Send, MapPin, Globe, ExternalLink, MessageSquare, Sparkles, Linkedin } from 'lucide-react';

interface ContactSectionProps {
  profile: ResumeProfile;
}

export function ContactSection({ profile }: ContactSectionProps) {
  const [copied, setCopied] = useState(false);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [subject, setSubject] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const bodyContent = `Hi Pranav,\n\n${message}${name ? `\n\nBest,\n${name}` : ''}`;
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      profile.email
    )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyContent)}`;
    window.open(gmailUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-400 mb-2">
            <Mail className="w-3.5 h-3.5" />
            <span>Contact Information</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Connect & Collaborate
          </h2>
          <p className="text-stone-400 text-sm max-w-xl mt-1">
            Available for Business Operations, Data Management, Financial Analysis, and Executive Operational Support engagements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          
          {/* Left Column: Direct Info & Quick Copy (2 cols) */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Primary Email Card */}
            <div className="glass-panel rounded-2xl p-6 border border-white/10 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 blur-2xl rounded-full pointer-events-none" />
              
              <div className="text-xs font-mono uppercase tracking-wider text-stone-400 mb-2 flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-emerald-400" />
                <span>Direct Inbox</span>
              </div>

              <div className="text-lg font-mono font-bold text-white mb-4 break-all">
                {profile.email}
              </div>

              <div className="flex flex-wrap gap-2">
                <button
                  onClick={handleCopyEmail}
                  id="contact-copy-email-btn"
                  className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/[0.06] border border-white/10 hover:bg-white/10 text-xs font-mono text-stone-200 transition-colors cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-semibold">Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-stone-400" />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>

                <a
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(profile.email)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-emerald-500/20 border border-emerald-500/40 hover:bg-emerald-500/30 text-xs font-mono text-emerald-300 transition-colors font-semibold"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Open in Gmail</span>
                </a>
              </div>
            </div>

            {/* Location & Status Info */}
            <div className="glass-panel rounded-2xl p-6 border border-white/10 space-y-4">
              <div>
                <div className="text-xs font-mono text-stone-400 mb-1 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-sky-400" />
                  <span>Location</span>
                </div>
                <div className="text-sm text-stone-200 font-medium">
                  {profile.location}
                </div>
              </div>

              <div className="pt-3 border-t border-white/5">
                <div className="text-xs font-mono text-stone-400 mb-1 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>Current Availability</span>
                </div>
                <div className="text-xs font-mono text-emerald-400">
                  {profile.status}
                </div>
              </div>

              {profile.linkedin && (
                <div className="pt-3 border-t border-white/5 flex items-center gap-3">
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-mono text-sky-400 hover:text-sky-300 transition-colors"
                  >
                    <Linkedin className="w-4 h-4 text-sky-400" />
                    <span>LinkedIn Profile</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                </div>
              )}
            </div>

          </div>

          {/* Right Column: Quick Email Message Composer (3 cols) */}
          <div className="lg:col-span-3">
            <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-white/10">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-stone-400 mb-4">
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>Quick Message Composer</span>
              </div>

              <form onSubmit={handleSendEmail} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-stone-400 mb-1">Your Name</label>
                    <input
                      type="text"
                      value={name}
                      onChange={e => setName(e.target.value)}
                      placeholder="Jane Doe"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-stone-600 text-sm focus:outline-none focus:border-emerald-500/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-stone-400 mb-1">Subject</label>
                    <input
                      type="text"
                      value={subject}
                      onChange={e => setSubject(e.target.value)}
                      placeholder="Subject (leave blank or specify)"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-stone-600 text-sm focus:outline-none focus:border-emerald-500/50"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-stone-400 mb-1">Message</label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    placeholder="Message content..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-stone-600 text-sm focus:outline-none focus:border-emerald-500/50 resize-none font-sans"
                    required
                  />
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-[11px] font-mono text-stone-400">
                    Composes in Gmail to {profile.email}
                  </span>

                  <button
                    type="submit"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-black font-semibold text-xs hover:bg-stone-200 transition-all shadow-md active:scale-95 cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send via Gmail</span>
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
