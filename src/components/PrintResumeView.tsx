import React from 'react';
import { FullResumeData } from '../types';
import { Printer, ArrowLeft, Mail, MapPin, Globe, Phone } from 'lucide-react';

interface PrintResumeViewProps {
  data: FullResumeData;
  onClose: () => void;
}

export function PrintResumeView({ data, onClose }: PrintResumeViewProps) {
  const {
    profile,
    coreCompetencies,
    experiences,
    selectedProjects,
    skillCategories,
    education,
    certifications,
    businessExposure,
    languages,
    portfolioDetails,
    additionalInfo
  } = data;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-[#0d0e14] py-8 px-4 sm:px-6">
      {/* Top Floating Controls (Hidden when printing) */}
      <div className="max-w-4xl mx-auto mb-6 flex items-center justify-between no-print bg-[#161922] p-4 rounded-xl border border-white/10 shadow-lg">
        <button
          onClick={onClose}
          className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium text-stone-300 hover:text-white bg-white/[0.05] hover:bg-white/10 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Portfolio</span>
        </button>

        <div className="flex items-center gap-3">
          <span className="text-xs font-mono text-stone-400 hidden sm:inline">
            Official Clean Resume Format
          </span>
          <button
            onClick={handlePrint}
            id="print-resume-action-btn"
            className="flex items-center gap-2 px-4 py-1.5 rounded-lg text-xs font-mono font-semibold text-black bg-emerald-400 hover:bg-emerald-300 transition-colors shadow-sm cursor-pointer"
          >
            <Printer className="w-4 h-4" />
            <span>Print / Save as PDF</span>
          </button>
        </div>
      </div>

      {/* Standard Printable Container */}
      <div className="max-w-4xl mx-auto bg-white text-slate-900 shadow-2xl rounded-xl p-8 sm:p-12 print-page font-sans text-sm leading-normal">
        
        {/* HEADER: Name · Professional Title · Contact Information · LinkedIn · Portfolio · Location · Remote Availability */}
        <div className="border-b-2 border-slate-900 pb-4 mb-5">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
            <h1 className="text-3xl font-bold tracking-tight text-slate-900">
              {profile.name}
            </h1>
            <div className="text-base font-semibold text-slate-700">
              {profile.title}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-700 font-mono mt-2.5">
            <span className="flex items-center gap-1 font-semibold">
              <Mail className="w-3 h-3 text-slate-600" />
              {profile.email}
            </span>
            {profile.phone && (
              <>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Phone className="w-3 h-3 text-slate-600" />
                  {profile.phone}
                </span>
              </>
            )}
            <span>•</span>
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3 text-slate-600" />
              {profile.location}
            </span>
            <span>•</span>
            <span className="text-emerald-800 font-medium">{profile.remoteAvailability}</span>
          </div>
        </div>

        {/* PROFESSIONAL PROFILE: 3-4 Line Summary */}
        <div className="mb-5">
          <h2 className="text-xs font-bold font-mono uppercase tracking-widest text-slate-900 border-b border-slate-300 pb-1 mb-2">
            Professional Profile
          </h2>
          <p className="text-xs text-slate-700 leading-relaxed">
            {profile.bio}
          </p>
        </div>

        {/* CORE COMPETENCIES */}
        <div className="mb-5">
          <h2 className="text-xs font-bold font-mono uppercase tracking-widest text-slate-900 border-b border-slate-300 pb-1 mb-2">
            Core Competencies
          </h2>
          <div className="text-xs text-slate-800 font-medium">
            {coreCompetencies.join(' · ')}
          </div>
        </div>

        {/* PRACTICAL ABILITIES */}
        <div className="mb-5">
          <h2 className="text-xs font-bold font-mono uppercase tracking-widest text-slate-900 border-b border-slate-300 pb-1 mb-3">
            Practical Abilities
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {portfolioDetails.curatedItems.map((item, idx) => (
              <div key={idx} className="border border-slate-200 rounded p-2.5 text-xs text-slate-700">
                <div className="font-bold text-slate-900 mb-0.5">{item.title}</div>
                <div className="text-[11px] text-emerald-800 font-medium mb-1">{item.category}</div>
                <p className="text-slate-600 leading-normal mb-1">{item.description}</p>
                <div className="font-mono text-[10px] text-slate-500">Key Tools: {item.tools}</div>
              </div>
            ))}
          </div>
        </div>

        {/* EDUCATION & CERTIFICATIONS (2 Cols) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5 pt-1">
          <div>
            <h2 className="text-xs font-bold font-mono uppercase tracking-widest text-slate-900 border-b border-slate-300 pb-1 mb-2">
              Education
            </h2>
            <div className="space-y-2">
              {education.map(edu => (
                <div key={edu.id} className="text-xs text-slate-700">
                  <div className="font-bold text-slate-900">{edu.degree}</div>
                  <div>{edu.institution} · {edu.period}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xs font-bold font-mono uppercase tracking-widest text-slate-900 border-b border-slate-300 pb-1 mb-2">
              Certifications
            </h2>
            <div className="space-y-2 text-xs text-slate-700">
              {certifications.map(cert => (
                <div key={cert.id}>
                  <div className="font-semibold text-slate-900">{cert.title}</div>
                  <div className="text-slate-600 text-[11px]">{cert.issuer} ({cert.issueDate})</div>
                  <div className="text-slate-700 text-[11px] leading-tight">{cert.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* BUSINESS & PROFESSIONAL EXPOSURE & LANGUAGES */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2 border-t border-slate-200 text-xs text-slate-700">
          <div>
            <h3 className="font-bold font-mono uppercase tracking-wider text-slate-900 mb-1">
              Business & Professional Exposure
            </h3>
            <p className="leading-relaxed">
              {businessExposure.join(' · ')}
            </p>
          </div>

          <div>
            <h3 className="font-bold font-mono uppercase tracking-wider text-slate-900 mb-1">
              Languages & Details
            </h3>
            <div>
              <span className="font-semibold">Languages:</span> {languages.map(l => `${l.name} (${l.proficiency})`).join(', ')}
            </div>
            <div className="mt-1">
              <span className="font-semibold">Remote Availability:</span> {additionalInfo.remoteAvailability}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
