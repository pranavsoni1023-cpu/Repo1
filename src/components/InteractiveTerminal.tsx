import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, CornerDownLeft, Play, Sparkles, Loader2 } from 'lucide-react';
import { FullResumeData } from '../types';

interface InteractiveTerminalProps {
  data: FullResumeData;
}

interface TerminalHistoryItem {
  id: string;
  command: string;
  output: string | React.ReactNode;
  timestamp: string;
  isAi?: boolean;
  isLoading?: boolean;
}

export function InteractiveTerminal({ data }: InteractiveTerminalProps) {
  const [input, setInput] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [history, setHistory] = useState<TerminalHistoryItem[]>([
    {
      id: 'init-1',
      command: 'welcome',
      output: 'Ask me anything',
      timestamp: '00:01',
    }
  ]);

  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const fallbackAnswer = (query: string): string => {
    const q = query.toLowerCase();
    if (q.includes('excel')) {
      return `Pranav is proficient in Microsoft Excel for business automation, dynamic reporting, formula-based data modeling, PivotTables, and operational dashboards. Certified by Samyak / Skill India NSDC (2026).`;
    }
    if (q.includes('experien') || q.includes('family') || q.includes('business')) {
      return `Pranav has practical business experience in Business Operations & Sales Support (Family Business, Jaipur, 2023–Present). He participated in 5+ nationwide exhibitions as a salesperson, collecting 1,000+ leads and orders, maintaining client communications, and designing Excel operational tracking systems.`;
    }
    if (q.includes('project') || q.includes('built') || q.includes('work')) {
      return `Selected Work (In Development):\n• Sales & Operations Intelligence Dashboard (Excel, Data Analysis, Automation)\n• Tally Prime Accounting Simulation (Accounting, Financial Reporting)\n• Client Communication & Follow-up System (Excel, Operations, CRM)\n• Business Research & Intelligence Dossier (Research, Analysis, Documentation)`;
    }
    if (q.includes('account') || q.includes('tally')) {
      return `Pranav is certified as an Accounts Executive in Tally Prime (Samyak / Skill India NSDC, 2026), with practical competence in transaction recording, ledger management, invoicing, GST compliance, and financial records.`;
    }
    if (q.includes('certif')) {
      return `Certifications:\n• Advanced Excel / Microsoft Office (Samyak / Skill India NSDC Certified, 2026)\n• Accounts Executive / Tally Prime (Samyak / Skill India NSDC Certified, 2026)\n• Project Management (Coursera — In Progress)`;
    }
    if (q.includes('sale') || q.includes('exhibit') || q.includes('lead')) {
      return `In sales, Pranav represented the family commercial enterprise at 5+ nationwide trade exhibitions, engaged directly with prospective clients, collected 1,000+ leads/orders, and managed client inquiries and follow-ups.`;
    }
    if (q.includes('educat') || q.includes('bba') || q.includes('bca') || q.includes('degree')) {
      return `Pranav is pursuing concurrent Bachelor of Business Administration (BBA) and Bachelor of Computer Applications (BCA) degrees at Manipal University Jaipur (Online).`;
    }
    if (q.includes('contact') || q.includes('email') || q.includes('reach') || q.includes('phone') || q.includes('call') || q.includes('linkedin')) {
      return `Email: ${data.profile.email}\nPhone: ${data.profile.phone || '+91 80056 55458'}\nLocation: ${data.profile.location}\nLinkedIn: ${data.profile.linkedin || 'https://www.linkedin.com/in/pranav1023/'}\nStatus: ${data.profile.remoteAvailability}`;
    }
    return `This information is not available in the verified portfolio content.`;
  };

  const handleAiQuery = async (question: string, itemId: string) => {
    try {
      const response = await fetch('/api/terminal-ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question, resumeData: data })
      });

      if (!response.ok) {
        throw new Error(`Server returned status ${response.status}`);
      }

      const result = await response.json();
      const aiText = result.answer || fallbackAnswer(question);

      setHistory(prev =>
        prev.map(item =>
          item.id === itemId
            ? { ...item, output: aiText, isLoading: false, isAi: true }
            : item
        )
      );
    } catch (err) {
      console.warn('Falling back to local knowledge engine:', err);
      const answer = fallbackAnswer(question);
      setHistory(prev =>
        prev.map(item =>
          item.id === itemId
            ? { ...item, output: answer, isLoading: false, isAi: true }
            : item
        )
      );
    } finally {
      setIsProcessing(false);
    }
  };

  const executeCommand = (cmd: string) => {
    const trimmed = cmd.trim();
    if (!trimmed || isProcessing) return;

    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    const lower = trimmed.toLowerCase();

    if (lower === 'clear') {
      setHistory([]);
      setInput('');
      return;
    }

    if (lower === 'whoami') {
      const output = `${data.profile.name} — ${data.profile.title}\nStatus: ${data.profile.status}\nBio: ${data.profile.bio}`;
      setHistory(prev => [...prev, { id: String(Date.now()), command: trimmed, output, timestamp: time }]);
      setInput('');
      return;
    }

    if (lower === 'help') {
      const output = `Terminal Navigation & AI Q&A:
  • Ask any question  - Type naturally (e.g. "What certifications do you hold?")
  • education         - Show degrees & institutions
  • abilities         - List practical systems and business operations models
  • competencies      - List core operational proficiencies
  • contact           - Print email, location, and availability
  • whoami            - Display candidate profile & summary
  • clear             - Clear terminal screen`;
      setHistory(prev => [...prev, { id: String(Date.now()), command: trimmed, output, timestamp: time }]);
      setInput('');
      return;
    }

    if (lower === 'education') {
      const output = (
        <div className="space-y-1.5 text-xs font-mono">
          {data.education.map(edu => (
            <div key={edu.id} className="border-l-2 border-emerald-400/70 pl-2">
              <div className="text-white font-bold">{edu.degree} in {edu.field}</div>
              <div className="text-stone-300">{edu.institution}</div>
              <div className="text-emerald-300 font-medium">Status: {edu.period}</div>
            </div>
          ))}
        </div>
      );
      setHistory(prev => [...prev, { id: String(Date.now()), command: trimmed, output, timestamp: time }]);
      setInput('');
      return;
    }

    if (lower === 'abilities' || lower === 'portfolio') {
      const output = (
        <div className="space-y-2 text-xs font-mono">
          <div className="text-emerald-400 font-semibold">{data.portfolioDetails.description}</div>
          {data.portfolioDetails.curatedItems.map((item, idx) => (
            <div key={idx} className="border-l-2 border-emerald-400/60 pl-2">
              <div className="text-white font-bold">{item.title} [{item.tools}]</div>
              <div className="text-stone-300">{item.description}</div>
            </div>
          ))}
        </div>
      );
      setHistory(prev => [...prev, { id: String(Date.now()), command: trimmed, output, timestamp: time }]);
      setInput('');
      return;
    }

    if (lower === 'competencies') {
      const output = (
        <div className="flex flex-wrap gap-1.5 pt-1">
          {data.coreCompetencies.map(comp => (
            <span key={comp} className="px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs">
              {comp}
            </span>
          ))}
        </div>
      );
      setHistory(prev => [...prev, { id: String(Date.now()), command: trimmed, output, timestamp: time }]);
      setInput('');
      return;
    }

    if (lower === 'contact') {
      const output = `Email:        ${data.profile.email}
Phone:        ${data.profile.phone || '+91 80056 55458'}
Location:     ${data.profile.location}
LinkedIn:     ${data.profile.linkedin || 'https://www.linkedin.com/in/pranav1023/'}
Status:       ${data.profile.status}
Availability: ${data.profile.remoteAvailability}`;
      setHistory(prev => [...prev, { id: String(Date.now()), command: trimmed, output, timestamp: time }]);
      setInput('');
      return;
    }

    // Otherwise, treat as AI question query!
    const query = trimmed.replace(/^(ask:|ask\s+)/i, '').trim();
    const itemId = `ai-${Date.now()}`;

    setHistory(prev => [
      ...prev,
      {
        id: itemId,
        command: trimmed,
        output: (
          <span className="inline-flex items-center gap-2 text-stone-400 italic">
            <Loader2 className="w-3 h-3 animate-spin text-emerald-400" />
            <span>AI analyzing page context & formulating answer...</span>
          </span>
        ),
        timestamp: time,
        isLoading: true,
        isAi: true
      }
    ]);
    setInput('');
    setIsProcessing(true);
    handleAiQuery(query, itemId);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      executeCommand(input);
    }
  };

  const quickCommands = [
    'What Excel skills does Pranav have?',
    'Show me his practical business experience.',
    'What projects has he built?',
    'What accounting experience does he have?',
    'What certifications has he completed?',
    'What experience does he have in sales?',
    'Where can I see his Excel work?',
  ];

  return (
    <section id="terminal" className="py-20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-400 mb-2">
            <TerminalIcon className="w-3.5 h-3.5" />
            <span>AI-ASSISTED PORTFOLIO NAVIGATOR</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
            AI-Assisted Portfolio Navigator
          </h2>
          <p className="text-stone-300 text-xs sm:text-sm mt-1 max-w-2xl leading-relaxed">
            Ask natural-language questions about this portfolio. The integrated AI assistant scans the available page content, identifies relevant information and presents concise answers to help reviewers find information faster.
          </p>
        </div>

        {/* Quick Command Chips */}
        <div className="mb-4">
          <div className="text-[11px] font-mono text-stone-400 mb-2 flex items-center gap-1.5">
            <Play className="w-3 h-3 text-emerald-400" />
            <span>Suggested Queries:</span>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {quickCommands.map(cmd => (
              <button
                key={cmd}
                onClick={() => executeCommand(cmd)}
                disabled={isProcessing}
                className="px-2.5 py-1.5 rounded-lg text-xs font-mono bg-white/[0.04] border border-white/10 text-stone-300 hover:text-white hover:border-emerald-500/40 hover:bg-emerald-500/10 transition-colors disabled:opacity-50 cursor-pointer text-left"
              >
                {cmd}
              </button>
            ))}
          </div>
        </div>

        {/* Terminal Window */}
        <div
          onClick={() => inputRef.current?.focus()}
          className="rounded-2xl border border-white/15 bg-[#090b10] shadow-2xl overflow-hidden font-mono text-xs cursor-text"
        >
          {/* Terminal Titlebar */}
          <div className="px-4 py-3 bg-[#12151f] border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              <span className="ml-2 text-xs text-stone-400">pranav@portfolio: ~ (gemini-3.8-flash)</span>
            </div>
            <div className="flex items-center gap-1.5 text-[11px] text-emerald-400">
              <Sparkles className="w-3 h-3" />
              <span>AI Assisted</span>
            </div>
          </div>

          {/* Terminal Screen Body */}
          <div className="p-4 sm:p-6 min-h-[260px] max-h-[420px] overflow-y-auto space-y-3">
            {history.map((item) => (
              <div key={item.id} className="space-y-1">
                <div className="flex items-center gap-2 text-stone-400">
                  <span className="text-emerald-400 font-bold">pranav@systems:~$</span>
                  <span className="text-white font-semibold">{item.command}</span>
                  {item.isAi && !item.isLoading && (
                    <span className="text-[10px] px-1.5 py-0.2 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      AI Response
                    </span>
                  )}
                  <span className="text-[10px] text-stone-600 ml-auto">{item.timestamp}</span>
                </div>
                <div className="text-stone-300 pl-4 whitespace-pre-wrap leading-relaxed">
                  {item.output}
                </div>
              </div>
            ))}

            {/* Active Prompt Input */}
            <div className="flex items-center gap-2 text-stone-300 pt-1">
              <span className="text-emerald-400 font-bold">pranav@systems:~$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                disabled={isProcessing}
                onChange={e => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={isProcessing ? "Processing question..." : "Ask me anything..."}
                className="bg-transparent border-none outline-none text-white w-full placeholder-stone-600 font-mono text-xs disabled:opacity-50"
              />
              <CornerDownLeft className="w-3.5 h-3.5 text-stone-500 shrink-0" />
            </div>

            <div ref={bottomRef} />
          </div>

          {/* Terminal Footer */}
          <div className="px-4 py-2 bg-[#0c0e15] border-t border-white/5 flex items-center justify-between text-[11px] text-stone-500">
            <span>Press Enter to ask AI or run CLI command</span>
            <span>Tab / Click to focus</span>
          </div>
        </div>

      </div>
    </section>
  );
}
