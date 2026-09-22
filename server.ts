import "dotenv/config";
import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { GoogleGenAI } from "@google/genai";

function synthesizeVerifiedPortfolioAnswer(question: string, data: any): string {
  const q = question.toLowerCase();
  if (q.includes('excel')) {
    return "Pranav is proficient in Microsoft Excel for business automation, dynamic reporting, formula-based data modeling, PivotTables, and operational dashboards. Certified by Samyak / Skill India NSDC (2026).";
  }
  if (q.includes('sale') || q.includes('exhibit') || q.includes('lead')) {
    return "Pranav has direct sales experience representing the family commercial enterprise across 5+ nationwide trade exhibitions, engaging prospective clients and contributing to the collection of 1,000+ leads and orders.";
  }
  if (q.includes('business') || q.includes('experien') || q.includes('family') || q.includes('operat')) {
    return "Pranav has practical business experience in Business Operations & Sales Support (Family Business, Jaipur, 2023–Present), focusing on client engagement, lead qualification, operational tracking, and customer communication.";
  }
  if (q.includes('account') || q.includes('tally') || q.includes('gst')) {
    return "Pranav is certified as an Accounts Executive in Tally Prime (Samyak / Skill India NSDC, 2026), with practical competence in computerized accounting, ledger management, GST compliance, and financial records.";
  }
  if (q.includes('certif')) {
    return "Pranav holds certifications in Advanced Excel / Microsoft Office (Samyak / Skill India NSDC, 2026) and Accounts Executive / Tally Prime (Samyak / Skill India NSDC, 2026), with Project Management training in progress via Coursera.";
  }
  if (q.includes('educat') || q.includes('degree') || q.includes('bba') || q.includes('bca') || q.includes('university') || q.includes('college')) {
    return "Pranav is pursuing concurrent Bachelor of Business Administration (BBA) and Bachelor of Computer Applications (BCA) degrees at Manipal University Jaipur (Online).";
  }
  if (q.includes('project') || q.includes('built') || q.includes('work') || q.includes('abilit')) {
    return "Pranav's practical abilities include business operational tracking models in Excel, computerized financial management in Tally Prime, and client communication workflows.";
  }
  if (q.includes('contact') || q.includes('email') || q.includes('phone') || q.includes('reach') || q.includes('call') || q.includes('hire') || q.includes('linkedin')) {
    return `Email: ${data?.profile?.email || 'pranavsoni1023@gmail.com'}\nPhone: ${data?.profile?.phone || '+91 80056 55458'}\nLocation: ${data?.profile?.location || 'Jaipur, Rajasthan, India'}\nLinkedIn: ${data?.profile?.linkedin || 'https://www.linkedin.com/in/pranav1023/'}\nAvailability: ${data?.profile?.remoteAvailability || 'Open to Remote Opportunities'}`;
  }
  return "This information is not available in the verified portfolio content.";
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json({ limit: '10mb' }));

  // Health check endpoint
  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok" });
  });

  // AI-Assisted Portfolio Terminal endpoint
  app.post("/api/terminal-ai", async (req, res) => {
    try {
      const { question, resumeData } = req.body;
      if (!question || typeof question !== 'string') {
        return res.status(400).json({ error: "Missing question." });
      }

      if (!process.env.GEMINI_API_KEY) {
        const answer = synthesizeVerifiedPortfolioAnswer(question, resumeData);
        return res.json({ answer, source: 'verified-local-engine' });
      }

      try {
        const ai = new GoogleGenAI({ 
          apiKey: process.env.GEMINI_API_KEY,
          httpOptions: {
            headers: {
              'x-goog-api-client': 'applet-portfolio-terminal/1.0.0'
            }
          }
        });

        const response = await ai.models.generateContent({
          model: 'gemini-3.8-flash',
          contents: `You are the AI-Assisted Portfolio Navigator on Pranav Soni's digital portfolio.
Reviewer question: "${question.trim()}"

Verified Portfolio Context:
${JSON.stringify(resumeData || {}, null, 2)}

Strict Verification Instructions:
- Answer directly, succinctly and accurately (1 to 3 short sentences or concise bullet lines).
- ONLY answer from the verified portfolio content provided above.
- NEVER make unsupported claims or hallucinate qualifications, experiences, or corporate titles.
- If relevant information is not available in the portfolio content, explicitly state: "This information is not available in the verified portfolio content."
- Format for a clean, monospaced terminal (no markdown headers, no HTML).
- Professional tone: focus on business understanding, sales experience, data/system skills, research, technology, and AI-assisted execution.`,
        });

        const answer = response.text?.trim() || synthesizeVerifiedPortfolioAnswer(question, resumeData);
        res.json({ answer });
      } catch (geminiErr: any) {
        console.warn("[terminal-ai] Gemini API unavailable or quota limit reached, using grounded fallback:", geminiErr?.message);
        const answer = synthesizeVerifiedPortfolioAnswer(question, resumeData);
        res.json({ answer, source: 'verified-local-engine' });
      }
    } catch (err: any) {
      console.error("[terminal-ai] Error:", err);
      res.json({ answer: "This information is not available in the verified portfolio content." });
    }
  });

  const distPath = path.join(process.cwd(), 'dist');

  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
