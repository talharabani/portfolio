import React, { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaRobot,
  FaTimes,
  FaPaperPlane,
  FaTrashAlt,
  FaMagic,
  FaChevronDown,
  FaUser,
  FaMicrophone,
  FaVolumeUp,
  FaVolumeMute,
  FaStop,
  FaCommentDots,
} from "react-icons/fa";
import { SiN8N } from "react-icons/si";
import profileImg from "../assets/talha1.png";

interface Message {
  id: string;
  role: "user" | "assistant" | "system";
  content: string;
  timestamp: string;
}

const GROQ_API_KEY = (import.meta.env.VITE_GROQ_API_KEY as string) || "";

const SYSTEM_PROMPT = `You are "Talha AI", the official interactive AI assistant on Talha Ishaq Rabani's portfolio website.
Your role is to represent Talha professionally, politely, and knowledgeably to recruiters, clients, and visitors.
When responding in voice mode, keep answers concise, punchy, and conversational (1 to 3 short sentences) so that listening to the answer is natural and engaging.

--- TALHA ISHAQ RABANI BIO ---
- Name: Talha Ishaq Rabani
- Role: Senior Full Stack Developer & n8n Automation Specialist
- Location: Lahore, Pakistan (Available worldwide for freelance, remote contracts & full-time roles)
- Education: Information Technology, Punjab University College of Information Technology (PUCIT, 2022-2026)
- Experience: Software Engineer at DevelopSuite (Lahore, 2 years) & Freelance Full-Stack Developer at PureLogics
- Experience & Track Record: 5+ Years in Full Stack Development, Enterprise SaaS, AI Agents & Workflow Automation. 20+ completed featured projects, 20+ satisfied global clients.
- Contact:
  * Email: talhaishaqrabani@gmail.com
  * WhatsApp / Phone: +92 300 9490631 (Direct WhatsApp available)
  * LinkedIn: https://www.linkedin.com/in/talha-ishaq-rabani9490/
  * GitHub: https://github.com/talharabani

--- COMPLETE PROJECTS KNOWLEDGE BASE (13 SOFTWARE & WEB PROJECTS) ---
1. AGENTLINK (AI Agent Remote Control Platform) [Featured Project]
   - Purpose: Allows developers to control AI coding agents (Antigravity, Cursor, Kiro, VS Code) remotely from their mobile phone or web browser. Approve, reject, and monitor agent terminal commands on the go.
   - Stack: Python, PowerShell, Neon PostgreSQL, Next.js / HTML5, Windows UIAutomation, VAPID Web Push, Vercel.
   - Links: Live: https://agentlink-mu.vercel.app/ | GitHub: https://github.com/talharabani/AgentLink

2. VAYPAR (Multi-Business POS & Retail ERP Platform)
   - Purpose: Customizable Point of Sale (POS) & ERP software for retail shops, clothing boutiques, and service businesses. Features real-time billing, thermal slip printing, customer credit (udhaar ledger), low-stock alerts, exchange/refund workflows, and Vaypar AI.
   - Stack: React 19, Next.js, TypeScript, Tailwind CSS, HTML5 Canvas Print API, Vercel.
   - Links: Live: https://vaypar-nine.vercel.app/ | GitHub: https://github.com/talharabani/vaypar

3. TUDOSTOCK PORTUGAL (Custom Shopify B2B Storefront & Integrated POS)
   - Purpose: B2B wholesale platform & physical in-store POS developed for an electronics repair and spare parts distributor in Portugal. Supports Portuguese NIF/VAT tax verification, bulk wholesale tiered pricing, and multi-warehouse inventory.
   - Stack: Next.js, React 19, Shopify Storefront API, Tailwind CSS, POS Engine, Vercel.
   - Links: Live: https://tudostockportugal.vercel.app/en/wholesale

4. DEVELOPWORK (Autonomous Enterprise Operations & Task Dispatch ERP)
   - Purpose: Smart company operations system that automatically assigns engineering tasks to developers based on their verified skills, tracks sprint velocity, and provides a transparent external client milestone portal.
   - Stack: Next.js, React 19, TypeScript, Tailwind CSS, Skill-Matrix Dispatch Algorithm.
   - Links: Live: https://www.thedevelopwork.com/

5. NEW ALI LAJPAL RENT A CAR (Fleet Booking & Car Rental Platform)
   - Purpose: Commercial car rental platform for travelers, corporate clients, and weddings. Features comprehensive fleet catalog, transparent city-to-city route pricing, and 1-click WhatsApp reservations.
   - Stack: React, Tailwind CSS, WhatsApp Business API.
   - Links: Live: https://newalilajpal.com/

6. LUXE SALOON (Saloon Management & Smart POS Billing System)
   - Purpose: Operational dashboard and POS billing terminal for salon owners. Tracks daily revenue, cash vs card payments, stylist appointments, and generates instant customer receipts.
   - Stack: React, TypeScript, Tailwind CSS, POS Local State Engine.
   - Links: Live: https://saloon-portfolio.vercel.app/

7. THE RHA BUILDERS (Commercial Construction & Real Estate Engineering)
   - Purpose: Corporate architectural platform showcasing completed multi-storey commercial plazas in Islamabad & Lahore (G-11 Markaz, F-10 Markaz) and residential luxury developments.
   - Stack: Next.js, React, TypeScript, Tailwind CSS.
   - Links: Live: https://www.therhabuilders.com/ | GitHub: https://github.com/talharabani/RhaBuilder

8. VELOCE (3D Interactive Car Experience & WebGL Configurator)
   - Purpose: Cutting-edge 3D automotive website with an interactive model of "The 04 Coupe" assembled in Modena. Features real-time WebGL rendering, camera orbit controls, live vehicle color configurator, and engineering telemetry.
   - Stack: Three.js, WebGL, React 19, TypeScript, Tailwind CSS, Framer Motion, Vercel.
   - Links: Live: https://veloce-lime-five.vercel.app/ | GitHub: https://github.com/talharabani/veloce

9. MERIDIA (3D Luxury Architectural Property & Walkthrough)
   - Purpose: High-end 3D architectural web experience for an ultra-luxury private estate ("Nine hundred metres of private road, and then nothing"). Features scroll-to-walk-in spatial exploration, Chapter narrative storytelling, material inspection, and VIP dossier inquiries.
   - Stack: Three.js, WebGL, React 19, GSAP, TypeScript, Tailwind CSS, Vercel.
   - Links: Live: https://3d-property-website.vercel.app/ | GitHub: https://github.com/talharabani/3d-property-website-

10. FOOD GUY (Modern Fast-Food Ordering & Delivery Platform)
    - Purpose: Fast-food web application for FoodGuy (Johar Town, Lahore). Features gourmet zinger fillets, live customized cart, promotional deals (starting at Rs. 700), real-time delivery estimation, and direct WhatsApp kitchen ordering.
    - Stack: React 19, TypeScript, Tailwind CSS, Vite, WhatsApp API, Vercel.
    - Links: Live: https://food-guy.vercel.app/ | GitHub: https://github.com/talharabani/food-guy

11. ATTACK DETECTION SYSTEM FOR CPS (Cybersecurity IDS/IPS)
    - Purpose: Python-based intrusion detection & prevention system continuously monitoring network packets, inspecting ICS protocols, querying Shodan threat intel, and alerting via Discord.
    - Stack: Python, Scapy, Shodan API, Discord API, ElasticSearch.
    - Links: GitHub: https://github.com/talharabani/Attack-detection-system-for-CPS

12. 3D NAMAZ VIEWER LEARNING PLATFORM
    - Purpose: Progressive Web App (PWA) with step-by-step 3D visual postures, audio recitations with transliteration, and interactive quiz system for learning Islamic prayer.
    - Stack: React 19, TypeScript, Vite, Tailwind CSS, Web Audio API, PWA.
    - Links: Live: https://namaz-p10k.onrender.com/ | GitHub: https://github.com/talharabani/3D-Namaz-Viewer/

13. DELICIOUSBITES RESTAURANT PLATFORM
    - Purpose: Modern food ordering and online table reservation platform with interactive menus and dish showcase.
    - Stack: React, Tailwind CSS, Netlify.
    - Links: Live: https://thunderous-bonbon-a4564a.netlify.app/ | GitHub: https://github.com/talharabani/DeliciousBites

--- DEDICATED N8N WORKFLOW AUTOMATIONS (FEATURED DEMOS) ---
1. Google Maps Automated Lead Scraper & Sheets Sync: Form-triggered B2B pipeline scraping Google Places API, detecting country jurisdiction, and appending rows to Google Sheets in real-time.
2. Autonomous AI Video Generation: Complete pipeline with ElevenLabs TTS, LLM scriptwriting, FFmpeg/Creatomate rendering, and auto-publishing.
3. Auto LinkedIn Post & AI News Intelligence: NewsData API scraper + Groq AI LLaMA 3 copy synthesis + Pollinations.ai image art + LinkedIn/Discord webhook dispatch.

--- STRICT GUARDRAILS ---
1. SCOPE: ONLY answer questions about Talha Ishaq Rabani, his portfolio, his projects (AgentLink, Vaypar, TudoStock, n8n automations, etc.), his skills, background, work experience, and how to hire or contact him.
2. OUT-OF-SCOPE QUERIES: Politely decline and guide visitors back to Talha's work and projects.
3. LANGUAGE MATCHING: If visitor speaks in English, answer in English. If visitor speaks in Urdu or Roman Urdu, answer warmly and politely in Roman Urdu.`;

const SUGGESTED_PROMPTS = [
  "What is AgentLink?",
  "Tell me about n8n Automations",
  "How can I hire Talha?",
  "Tell me about Vaypar POS",
];

// Helper to render markdown-like text safely with links and bold
function FormattedText({ text }: { text: string }) {
  const parseLine = (line: string, key: number) => {
    const isBullet = line.trim().startsWith("- ") || line.trim().startsWith("* ");
    const cleanLine = isBullet ? line.trim().substring(2) : line;

    const parts: React.ReactNode[] = [];
    const regex = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\)|`[^`]+`)/g;
    let lastIndex = 0;
    let match;

    while ((match = regex.exec(cleanLine)) !== null) {
      if (match.index > lastIndex) {
        parts.push(cleanLine.substring(lastIndex, match.index));
      }
      const token = match[0];
      if (token.startsWith("**") && token.endsWith("**")) {
        parts.push(
          <strong key={`${key}-${match.index}`} className="text-white font-bold">
            {token.slice(2, -2)}
          </strong>
        );
      } else if (token.startsWith("[") && token.includes("](")) {
        const titleMatch = token.match(/\[([^\]]+)\]/);
        const urlMatch = token.match(/\(([^)]+)\)/);
        if (titleMatch && urlMatch) {
          parts.push(
            <a
              key={`${key}-${match.index}`}
              href={urlMatch[1]}
              target="_blank"
              rel="noopener noreferrer"
              className="text-crimson-400 hover:text-crimson-300 underline font-semibold break-all"
            >
              {titleMatch[1]}
            </a>
          );
        } else {
          parts.push(token);
        }
      } else if (token.startsWith("`") && token.endsWith("`")) {
        parts.push(
          <code
            key={`${key}-${match.index}`}
            className="bg-zinc-800 text-crimson-300 px-1.5 py-0.5 rounded text-[11px] font-mono"
          >
            {token.slice(1, -1)}
          </code>
        );
      } else {
        parts.push(token);
      }
      lastIndex = match.index + token.length;
    }

    if (lastIndex < cleanLine.length) {
      parts.push(cleanLine.substring(lastIndex));
    }

    if (isBullet) {
      return (
        <li key={key} className="flex items-start gap-2 my-1">
          <span className="text-crimson-500 font-bold mt-1 text-xs">•</span>
          <span className="flex-1">{parts}</span>
        </li>
      );
    }

    return (
      <p key={key} className={line.trim() === "" ? "h-2" : "my-1"}>
        {parts}
      </p>
    );
  };

  const lines = text.split("\n");
  return <div>{lines.map((l, i) => parseLine(l, i))}</div>;
}

// Glowing Fluid Waveform Component matching reference image
function VoiceWaveform({
  state,
}: {
  state: "idle" | "listening" | "thinking" | "speaking";
}) {
  const isListening = state === "listening";
  const isSpeaking = state === "speaking";
  const isThinking = state === "thinking";

  return (
    <div className="relative w-full h-32 flex items-center justify-center overflow-hidden my-3">
      {/* Ambient background glow orb */}
      <div
        className={`absolute w-44 h-44 rounded-full blur-3xl pointer-events-none transition-all duration-700 ${
          isListening
            ? "bg-cyan-500/25 scale-125"
            : isSpeaking
            ? "bg-crimson-600/30 scale-120"
            : isThinking
            ? "bg-purple-600/30 animate-pulse scale-110"
            : "bg-blue-600/15 scale-90"
        }`}
      />

      {/* SVG Multi-Layer Harmonic Fluid Waves */}
      <svg
        viewBox="0 0 500 120"
        className="w-full h-full relative z-10 overflow-visible"
        preserveAspectRatio="none"
      >
        <defs>
          <filter id="wave-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          <linearGradient id="waveGradCyan" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0284c7" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#38bdf8" stopOpacity="1" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="waveGradCrimson" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#dc2626" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#9333ea" stopOpacity="0.3" />
          </linearGradient>
        </defs>

        {/* Outer Deep Glow Sine Wave */}
        <motion.path
          d={
            isListening
              ? "M 0,60 Q 125,5 250,60 T 500,60"
              : isSpeaking
              ? "M 0,60 Q 125,25 250,60 T 500,60"
              : isThinking
              ? "M 0,60 Q 125,40 250,60 T 500,60"
              : "M 0,60 Q 125,50 250,60 T 500,60"
          }
          animate={{
            d: isListening
              ? [
                  "M 0,60 Q 125,5 250,60 T 500,60",
                  "M 0,60 Q 125,115 250,60 T 500,60",
                  "M 0,60 Q 125,5 250,60 T 500,60",
                ]
              : isSpeaking
              ? [
                  "M 0,60 Q 125,20 250,60 T 500,60",
                  "M 0,60 Q 125,100 250,60 T 500,60",
                  "M 0,60 Q 125,20 250,60 T 500,60",
                ]
              : isThinking
              ? [
                  "M 0,60 Q 125,40 250,60 T 500,60",
                  "M 0,60 Q 125,80 250,60 T 500,60",
                  "M 0,60 Q 125,40 250,60 T 500,60",
                ]
              : [
                  "M 0,60 Q 125,52 250,60 T 500,60",
                  "M 0,60 Q 125,68 250,60 T 500,60",
                  "M 0,60 Q 125,52 250,60 T 500,60",
                ],
          }}
          transition={{
            repeat: Infinity,
            duration: isListening ? 1.1 : isSpeaking ? 1.4 : isThinking ? 1.8 : 3.5,
            ease: "easeInOut",
          }}
          fill="none"
          stroke="url(#waveGradCrimson)"
          strokeWidth={isListening || isSpeaking ? 2.5 : 1.5}
          filter="url(#wave-glow)"
          opacity={0.65}
        />

        {/* Secondary Cyan Wave (Inverted Phase) */}
        <motion.path
          d={
            isListening
              ? "M 0,60 Q 125,115 250,60 T 500,60"
              : isSpeaking
              ? "M 0,60 Q 125,95 250,60 T 500,60"
              : "M 0,60 Q 125,65 250,60 T 500,60"
          }
          animate={{
            d: isListening
              ? [
                  "M 0,60 Q 125,115 250,60 T 500,60",
                  "M 0,60 Q 125,10 250,60 T 500,60",
                  "M 0,60 Q 125,115 250,60 T 500,60",
                ]
              : isSpeaking
              ? [
                  "M 0,60 Q 125,95 250,60 T 500,60",
                  "M 0,60 Q 125,25 250,60 T 500,60",
                  "M 0,60 Q 125,95 250,60 T 500,60",
                ]
              : [
                  "M 0,60 Q 125,68 250,60 T 500,60",
                  "M 0,60 Q 125,52 250,60 T 500,60",
                  "M 0,60 Q 125,68 250,60 T 500,60",
                ],
          }}
          transition={{
            repeat: Infinity,
            duration: isListening ? 1.3 : isSpeaking ? 1.6 : 3.8,
            ease: "easeInOut",
          }}
          fill="none"
          stroke="url(#waveGradCyan)"
          strokeWidth={isListening || isSpeaking ? 2.5 : 1.5}
          filter="url(#wave-glow)"
          opacity={0.8}
        />

        {/* Core Crisp White Harmonic Line (Exact Match to Reference Design) */}
        <motion.path
          d="M 0,60 C 100,60 150,15 250,60 C 350,105 400,60 500,60"
          animate={{
            d: isListening
              ? [
                  "M 0,60 C 100,60 150,10 250,60 C 350,110 400,60 500,60",
                  "M 0,60 C 100,60 150,110 250,60 C 350,10 400,60 500,60",
                  "M 0,60 C 100,60 150,10 250,60 C 350,110 400,60 500,60",
                ]
              : isSpeaking
              ? [
                  "M 0,60 C 100,60 150,25 250,60 C 350,95 400,60 500,60",
                  "M 0,60 C 100,60 150,95 250,60 C 350,25 400,60 500,60",
                  "M 0,60 C 100,60 150,25 250,60 C 350,95 400,60 500,60",
                ]
              : isThinking
              ? [
                  "M 0,60 C 100,60 150,45 250,60 C 350,75 400,60 500,60",
                  "M 0,60 C 100,60 150,75 250,60 C 350,45 400,60 500,60",
                  "M 0,60 C 100,60 150,45 250,60 C 350,75 400,60 500,60",
                ]
              : [
                  "M 0,60 C 100,60 150,55 250,60 C 350,65 400,60 500,60",
                  "M 0,60 C 100,60 150,65 250,60 C 350,55 400,60 500,60",
                  "M 0,60 C 100,60 150,55 250,60 C 350,65 400,60 500,60",
                ],
          }}
          transition={{
            repeat: Infinity,
            duration: isListening ? 1.0 : isSpeaking ? 1.3 : isThinking ? 1.6 : 3.0,
            ease: "easeInOut",
          }}
          fill="none"
          stroke="#ffffff"
          strokeWidth={isListening || isSpeaking ? 2.8 : 1.8}
          filter="url(#wave-glow)"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

function generateLocalFallbackResponse(query: string): string {
  const q = query.toLowerCase();

  if (q.includes("hi") || q.includes("hello") || q.includes("hey") || q.includes("salam") || q.includes("who are you") || q.includes("about")) {
    return "Hello! I'm Talha AI, Talha Ishaq Rabani's official portfolio assistant. Talha is a Senior Full-Stack Developer & n8n Automation Specialist with 5+ years of experience and 20+ delivered production systems. How can I assist you today?";
  }

  if (q.includes("contact") || q.includes("hire") || q.includes("email") || q.includes("phone") || q.includes("whatsapp") || q.includes("reach") || q.includes("call")) {
    return "You can connect with Talha directly:\n• WhatsApp: +92 300 9490631 (Fastest response)\n• Email: talhaishaqrabani@gmail.com\n• LinkedIn: linkedin.com/in/talha-ishaq-rabani9490/\n• GitHub: github.com/talharabani\nHe is available worldwide for remote contracts, freelance projects, and full-time engineering roles.";
  }

  if (q.includes("experi") || q.includes("year") || q.includes("background") || q.includes("education") || q.includes("pucit") || q.includes("degree")) {
    return "Talha has 5+ years of engineering experience across full-stack web applications, enterprise SaaS, POS/ERP platforms, and autonomous n8n workflows. He graduated in Information Technology from PUCIT (Punjab University) and has delivered solutions for 20+ global clients.";
  }

  if (q.includes("project") || q.includes("work") || q.includes("portfolio") || q.includes("case study") || q.includes("app")) {
    return "Talha has engineered 20+ production-grade systems including:\n1. AgentLink — Remote AI coding agent controller\n2. Vaypar — Multi-business POS & Retail ERP platform\n3. ChatWithoutTalk — 24/7 WhatsApp AI sales employee\n4. DevYork — Full-stack agency & marketing growth platform\n5. GymPro & BuildEstimate Pro — Commercial SaaS platforms\n6. Tudostock Portugal — Custom Shopify B2B store & POS\n7. 3D WebGL interactive configurators (Veloce, Meridia)\nYou can explore full interactive demos and architecture breakdowns right in the Projects section above!";
  }

  if (q.includes("skill") || q.includes("stack") || q.includes("tech") || q.includes("language") || q.includes("framework")) {
    return "Talha's core technology stack includes:\n• Frontend: React 19, Next.js 15, TypeScript, Tailwind CSS, Three.js / WebGL\n• Backend & Cloud: Node.js, Python, PostgreSQL (Neon), Docker, Vercel Edge\n• AI & Workflows: n8n pipelines, Meta Cloud API, WhatsApp AI agents, Whisper, Groq/OpenAI LLMs.";
  }

  if (q.includes("n8n") || q.includes("automat") || q.includes("pipeline") || q.includes("bot") || q.includes("lead")) {
    return "Talha is an n8n Automation Specialist who develops autonomous multi-step pipelines: Google Maps automated lead scraping, automated AI video generation workflows, automated LinkedIn article synthesis with Groq AI, and live CRM synchronization.";
  }

  if (q.includes("rate") || q.includes("price") || q.includes("cost") || q.includes("quote") || q.includes("budget")) {
    return "Talha offers transparent, value-driven pricing tailored to your requirements (fixed project pricing or milestone-based contracts). Connect directly on WhatsApp at +92 300 9490631 or email talhaishaqrabani@gmail.com for a quick consultation and free project estimate.";
  }

  return "I'm Talha AI. Talha Ishaq Rabani is a Senior Full-Stack Developer & n8n Specialist with 5+ years of experience across 20+ projects (AgentLink, Vaypar, ChatWithoutTalk, DevYork, etc.). Feel free to ask about his projects, skills, or contact him directly on WhatsApp (+92 300 9490631) or email (talhaishaqrabani@gmail.com)!";
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState<"text" | "voice">("text"); // Mode switcher: Text Chat vs Voice Assistant
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);

  // Voice States
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [voiceLang, setVoiceLang] = useState<"en-US" | "ur-PK">("en-US");
  const [liveTranscript, setLiveTranscript] = useState("");
  const [voiceSpokenReply, setVoiceSpokenReply] = useState<string>("");
  const [speechSupported, setSpeechSupported] = useState(true);

  const [messages, setMessages] = useState<Message[]>([
    {
      id: "initial-welcome",
      role: "assistant",
      content:
        "Hello! 👋 I'm **Talha AI**, Talha's interactive voice & portfolio assistant.\n\nI can tell you all about his **13 featured web & software platforms** (including AgentLink, Veloce 3D, Meridia, Vaypar POS), his technical stack, and his **n8n autonomous workflow pipelines**. How can I assist you today?",
      timestamp: "Just now",
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const recognitionRef = useRef<any>(null);
  const currentTranscriptRef = useRef<string>("");

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen && mode === "text") {
      scrollToBottom();
      setHasUnread(false);
      setTimeout(() => inputRef.current?.focus(), 250);
    }
  }, [isOpen, mode, messages]);

  // Check Web Speech API support on mount
  useEffect(() => {
    const SpeechRec =
      typeof window !== "undefined"
        ? (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition
        : null;
    if (!SpeechRec) {
      setSpeechSupported(false);
    }
  }, []);

  // External trigger for chat (from Footer "Ask Talha AI" button)
  useEffect(() => {
    const handleOpenChat = () => setIsOpen(true);
    window.addEventListener("open-chatbot", handleOpenChat);
    return () => window.removeEventListener("open-chatbot", handleOpenChat);
  }, []);

  // Text-To-Speech (TTS) using window.speechSynthesis
  const speakText = useCallback(
    (text: string) => {
      if (typeof window === "undefined" || !("speechSynthesis" in window) || isMuted) {
        return;
      }

      window.speechSynthesis.cancel(); // Stop any pending speech

      // Clean markdown, links, and code markers so spoken audio sounds natural
      const cleanText = text
        .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1") // [title](url) -> title
        .replace(/[*_#`~]/g, "") // remove formatting symbols
        .replace(/https?:\/\/\S+/g, "") // strip URLs
        .replace(/•/g, "")
        .trim();

      if (!cleanText) return;

      const utterance = new SpeechSynthesisUtterance(cleanText);
      utterance.lang = voiceLang;
      utterance.rate = 1.0;
      utterance.pitch = 1.0;

      // Select natural sounding voice if available
      const voices = window.speechSynthesis.getVoices();
      if (voices.length > 0) {
        const preferred = voices.find(
          (v) =>
            v.lang.startsWith(voiceLang.split("-")[0]) &&
            (v.name.includes("Natural") ||
              v.name.includes("Google") ||
              v.name.includes("Samantha") ||
              v.name.includes("Daniel") ||
              v.name.includes("English"))
        );
        if (preferred) utterance.voice = preferred;
      }

      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);

      window.speechSynthesis.speak(utterance);
    },
    [isMuted, voiceLang]
  );

  const stopSpeaking = () => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  };

  // Speech-To-Text (STT) Controller
  const startListening = () => {
    stopSpeaking();

    const SpeechRec =
      typeof window !== "undefined"
        ? (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition
        : null;

    if (!SpeechRec) {
      alert("Voice recognition is not supported in this browser. Please use Chrome, Edge, or Safari.");
      return;
    }

    try {
      if (recognitionRef.current) {
        recognitionRef.current.abort();
      }

      const rec = new SpeechRec();
      rec.continuous = false;
      rec.interimResults = true;
      rec.lang = voiceLang;

      rec.onstart = () => {
        setIsListening(true);
        setLiveTranscript("");
        currentTranscriptRef.current = "";
      };

      rec.onresult = (event: any) => {
        let transcriptAccumulated = "";
        for (let i = event.resultIndex; i < event.results.length; i++) {
          transcriptAccumulated += event.results[i][0].transcript;
        }
        setLiveTranscript(transcriptAccumulated);
        currentTranscriptRef.current = transcriptAccumulated;
      };

      rec.onerror = (event: any) => {
        console.warn("Speech recognition error:", event.error);
        setIsListening(false);
      };

      rec.onend = () => {
        setIsListening(false);
        const finalQuery = currentTranscriptRef.current.trim();
        if (finalQuery) {
          sendMessage(finalQuery, true);
        }
      };

      recognitionRef.current = rec;
      rec.start();
    } catch (err) {
      console.error("Failed to start speech recognition:", err);
      setIsListening(false);
    }
  };

  const stopListening = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      setIsListening(false);
    }
  };

  const toggleListening = () => {
    if (isListening) {
      stopListening();
    } else {
      startListening();
    }
  };

  // Send query to Groq Chat Completion
  const sendMessage = async (textToSend?: string, autoSpeak = false) => {
    const query = (textToSend || input).trim();
    if (!query || loading) return;

    // Stop speaking old audio
    stopSpeaking();

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: query,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      // Build conversation history for Groq
      const historyForApi = [
        { role: "system", content: SYSTEM_PROMPT },
        ...messages
          .filter((m) => m.role === "user" || m.role === "assistant")
          .map((m) => ({ role: m.role, content: m.content })),
        { role: "user", content: query },
      ];

      const modelsToTry = [
        "llama-3.3-70b-versatile",
        "llama-3.1-8b-instant",
        "mixtral-8x7b-32768",
      ];
      let assistantReply = "";

      if (GROQ_API_KEY && !GROQ_API_KEY.includes("your_groq")) {
        for (const model of modelsToTry) {
          try {
            const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
              method: "POST",
              headers: {
                Authorization: `Bearer ${GROQ_API_KEY}`,
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                model,
                messages: historyForApi,
                temperature: 0.5,
                max_tokens: 500,
              }),
            });

            if (!res.ok) continue;

            const data = await res.json();
            const choice = data.choices?.[0];
            const content = choice?.message?.content?.trim();
            const reasoning = choice?.message?.reasoning?.trim();

            if (content) {
              assistantReply = content;
              break;
            } else if (reasoning && !content) {
              assistantReply = reasoning;
              break;
            }
          } catch {
            // try next model fallback
          }
        }
      }

      if (!assistantReply) {
        assistantReply = generateLocalFallbackResponse(query);
      }

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: assistantReply,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };

      setMessages((prev) => [...prev, botMessage]);
      setVoiceSpokenReply(assistantReply);

      // Auto-vocalize in Voice Mode or if autoSpeak was triggered
      if (mode === "voice" || autoSpeak) {
        speakText(assistantReply);
      }
    } catch {
      const errorReply =
        "Sorry, I encountered a network connection error. Please try again or reach out to Talha directly via WhatsApp: +92 300 9490631.";
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content: errorReply,
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        },
      ]);
      setVoiceSpokenReply(errorReply);
      if (mode === "voice" || autoSpeak) {
        speakText(errorReply);
      }
    } finally {
      setLoading(false);
    }
  };

  const clearChat = () => {
    stopSpeaking();
    setMessages([
      {
        id: "cleared-welcome",
        role: "assistant",
        content: "Chat cleared! Ask me anything about Talha's projects, experience, or skills.",
        timestamp: "Just now",
      },
    ]);
    setVoiceSpokenReply("");
    setLiveTranscript("");
  };

  // Derive Voice Status
  const voiceState: "idle" | "listening" | "thinking" | "speaking" = isListening
    ? "listening"
    : loading
    ? "thinking"
    : isSpeaking
    ? "speaking"
    : "idle";

  return (
    <>
      {/* Floating Trigger Button */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex items-center gap-2 sm:gap-3">
        {/* Floating Tooltip Pill (when closed) */}
        {!isOpen && hasUnread && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="hidden sm:flex items-center gap-2 bg-zinc-900/95 border border-crimson-500/40 text-white text-xs px-3.5 py-2 rounded-full shadow-2xl backdrop-blur-md cursor-pointer hover:border-crimson-500 transition"
            onClick={() => {
              setIsOpen(true);
              setMode("voice");
            }}
          >
            <span className="w-2 h-2 rounded-full bg-crimson-500 animate-ping" />
            <span className="font-semibold text-zinc-200">Talk or Chat with Talha AI</span>
          </motion.div>
        )}

        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          onClick={() => {
            if (isOpen) {
              stopSpeaking();
              stopListening();
              setIsOpen(false);
            } else {
              setIsOpen(true);
            }
          }}
          aria-label={isOpen ? "Close AI assistant" : "Open AI assistant"}
          className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-crimson-700 via-crimson-600 to-rose-500 text-white flex items-center justify-center shadow-2xl shadow-crimson-900/60 border border-crimson-400/40 focus:outline-none focus:ring-2 focus:ring-crimson-400 cursor-pointer group"
        >
          {isOpen ? (
            <FaTimes className="text-lg sm:text-xl transition-transform group-hover:rotate-90 duration-300" />
          ) : (
            <>
              <FaRobot className="text-xl sm:text-2xl transition-transform group-hover:scale-110 duration-200" />
              {hasUnread && (
                <span className="absolute -top-1 -right-1 w-3.5 h-3.5 sm:w-4 sm:h-4 bg-emerald-500 border-2 border-black rounded-full animate-pulse" />
              )}
            </>
          )}
        </motion.button>
      </div>

      {/* Main Interactive Assistant Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 25, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 25, scale: 0.96 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className={`fixed bottom-[68px] sm:bottom-24 left-2.5 right-2.5 sm:left-auto sm:right-6 z-40 w-auto sm:w-[420px] max-h-[84vh] ${
              mode === "voice" ? "h-[540px] sm:h-[600px]" : "h-[550px] sm:h-[640px]"
            } flex flex-col rounded-3xl overflow-hidden bg-[#0a0c13]/95 border border-zinc-800 shadow-[0_25px_70px_rgba(0,0,0,0.95)] backdrop-blur-2xl text-left transition-all duration-300`}
          >
            {/* ======================================================== */}
            {/* VIEW A: VOICE PORTFOLIO ASSISTANT (Exact Dribbble Style) */}
            {/* ======================================================== */}
            {mode === "voice" ? (
              <div className="relative w-full h-full flex flex-col justify-between p-5 sm:p-6 bg-gradient-to-b from-[#0e1222] via-[#090b14] to-[#06070d] overflow-hidden select-none">
                {/* Background Ambient Neon Arcs */}
                <div className="absolute -top-20 -left-20 w-64 h-64 bg-cyan-600/15 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-24 -right-20 w-72 h-72 bg-crimson-600/20 rounded-full blur-3xl pointer-events-none" />

                {/* Voice Window Header */}
                <div className="relative z-10 flex items-center justify-between pb-3 border-b border-zinc-800/60">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                    <span className="text-[11px] font-black uppercase tracking-wider text-white">
                      VOICE ASSISTANT
                    </span>
                    <span className="text-[9px] font-mono bg-cyan-950/80 text-cyan-300 border border-cyan-800/60 px-1.5 py-0.5 rounded font-bold">
                      LIVE
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    {/* Switch to Text Chat Mode */}
                    <button
                      onClick={() => {
                        stopSpeaking();
                        stopListening();
                        setMode("text");
                      }}
                      className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-zinc-900/90 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-700 text-[10px] font-bold uppercase tracking-wider transition cursor-pointer"
                      title="Switch to Text Chat"
                    >
                      <FaCommentDots className="text-xs text-crimson-400" />
                      <span>Text Chat</span>
                    </button>

                    {/* Language Switcher */}
                    <button
                      onClick={() =>
                        setVoiceLang((prev) => (prev === "en-US" ? "ur-PK" : "en-US"))
                      }
                      className="px-2 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-[10px] font-mono font-bold text-zinc-400 hover:text-white transition"
                      title="Switch Recognition Language"
                    >
                      {voiceLang === "en-US" ? "EN" : "UR"}
                    </button>

                    {/* Close Button */}
                    <button
                      onClick={() => {
                        stopSpeaking();
                        stopListening();
                        setIsOpen(false);
                      }}
                      className="p-1.5 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white transition"
                      aria-label="Close voice assistant"
                    >
                      <FaTimes className="text-xs" />
                    </button>
                  </div>
                </div>

                {/* Live Transcribed Speech & Response View (Matching Dribbble Reference) */}
                <div className="relative z-10 flex-1 flex flex-col justify-center px-2 py-4">
                  {/* Status Banner */}
                  <div className="flex flex-col items-center justify-center gap-1.5 mb-3">
                    {!speechSupported && (
                      <span className="text-[9px] font-mono bg-amber-950/70 border border-amber-800 text-amber-300 px-2.5 py-0.5 rounded-full">
                        ⚠️ Mic voice input best supported in Chrome, Edge &amp; Safari
                      </span>
                    )}
                    <span
                      className={`text-[10px] font-mono uppercase tracking-widest px-3 py-1 rounded-full border ${
                        voiceState === "listening"
                          ? "bg-cyan-950/60 border-cyan-500/50 text-cyan-300"
                          : voiceState === "thinking"
                          ? "bg-purple-950/60 border-purple-500/50 text-purple-300"
                          : voiceState === "speaking"
                          ? "bg-crimson-950/60 border-crimson-500/50 text-crimson-300"
                          : "bg-zinc-900/80 border-zinc-800 text-zinc-400"
                      }`}
                    >
                      {voiceState === "listening" && "🎙️ Listening to your voice..."}
                      {voiceState === "thinking" && "⚡ Processing with Groq AI..."}
                      {voiceState === "speaking" && "🔊 Talha AI Speaking..."}
                      {voiceState === "idle" && "💤 Tap white microphone below"}
                    </span>
                  </div>

                  {/* Spoken Text Display Area */}
                  <div className="min-h-[100px] flex items-center justify-center text-center px-3">
                    {isListening ? (
                      <p className="text-base sm:text-lg font-medium text-white leading-relaxed">
                        "{liveTranscript || "Listening... speak now"}"
                        <span className="inline-block w-1.5 h-4 ml-1.5 bg-cyan-400 animate-pulse align-middle" />
                      </p>
                    ) : loading ? (
                      <p className="text-sm font-medium text-purple-300 animate-pulse">
                        Analyzing your query across 13 portfolio projects...
                      </p>
                    ) : voiceSpokenReply ? (
                      <p className="text-xs sm:text-sm font-normal text-zinc-200 leading-relaxed max-h-[120px] overflow-y-auto no-scrollbar">
                        "{voiceSpokenReply}"
                      </p>
                    ) : (
                      <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
                        "Hey Talha AI, tell me about your <strong className="text-white">AgentLink</strong> project or <strong className="text-white">n8n workflows</strong>..."
                      </p>
                    )}
                  </div>

                  {/* Center Glowing Waveform Visualizer */}
                  <VoiceWaveform state={voiceState} />
                </div>

                {/* Voice Interaction Controls & Microphone Button (Matching Reference) */}
                <div className="relative z-10 flex flex-col items-center gap-3 pt-2">
                  <div className="flex items-center gap-4">
                    {/* Mute/Unmute Audio */}
                    <button
                      onClick={() => {
                        if (!isMuted && isSpeaking) stopSpeaking();
                        setIsMuted(!isMuted);
                      }}
                      className={`w-10 h-10 rounded-full border flex items-center justify-center transition cursor-pointer ${
                        isMuted
                          ? "bg-red-950/80 border-red-700 text-red-400"
                          : "bg-zinc-900 border-zinc-700 text-zinc-300 hover:text-white"
                      }`}
                      title={isMuted ? "Unmute Voice" : "Mute Voice"}
                    >
                      {isMuted ? <FaVolumeMute className="text-sm" /> : <FaVolumeUp className="text-sm" />}
                    </button>

                    {/* Hero White Circular Microphone Button (Matching Reference Image) */}
                    <div className="relative flex items-center justify-center">
                      {isListening && (
                        <>
                          <div className="absolute w-20 h-20 rounded-full bg-cyan-400/25 animate-ping" />
                          <div className="absolute w-24 h-24 rounded-full bg-cyan-500/15 animate-pulse" />
                        </>
                      )}

                      <motion.button
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 0.94 }}
                        onClick={toggleListening}
                        className={`relative w-16 h-16 sm:w-18 sm:h-18 rounded-full shadow-[0_15px_35px_rgba(0,0,0,0.6)] flex items-center justify-center cursor-pointer transition-all ${
                          isListening
                            ? "bg-gradient-to-tr from-cyan-400 to-blue-500 text-black shadow-cyan-500/50"
                            : "bg-white text-zinc-950 hover:bg-zinc-100 shadow-white/20"
                        }`}
                        title={isListening ? "Stop Listening" : "Tap to Speak"}
                      >
                        {isListening ? (
                          <FaStop className="text-lg text-black" />
                        ) : (
                          <FaMicrophone className="text-xl sm:text-2xl text-black" />
                        )}
                      </motion.button>
                    </div>

                    {/* Stop Speaking / Replay Button */}
                    <button
                      onClick={() => {
                        if (isSpeaking) {
                          stopSpeaking();
                        } else if (voiceSpokenReply) {
                          speakText(voiceSpokenReply);
                        }
                      }}
                      className={`w-10 h-10 rounded-full border flex items-center justify-center transition cursor-pointer ${
                        isSpeaking
                          ? "bg-crimson-950/80 border-crimson-700 text-crimson-400 animate-pulse"
                          : "bg-zinc-900 border-zinc-700 text-zinc-300 hover:text-white"
                      }`}
                      title={isSpeaking ? "Stop Speaking" : "Replay Speech"}
                    >
                      {isSpeaking ? <FaStop className="text-xs" /> : <FaVolumeUp className="text-xs" />}
                    </button>
                  </div>

                  {/* Profile & Identity Footer Badge */}
                  <div className="flex items-center gap-2.5 pt-2 border-t border-zinc-900/80 w-full justify-center">
                    <img
                      src={profileImg}
                      alt="Talha Ishaq"
                      className="w-6 h-6 rounded-full object-cover object-top border border-zinc-700"
                    />
                    <div className="flex items-center gap-1.5 text-[10px] text-zinc-400">
                      <span className="font-bold text-zinc-200">@talharabani</span>
                      <span className="text-zinc-600">•</span>
                      <span>Senior Full Stack &amp; n8n</span>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              /* ======================================================== */
              /* VIEW B: CLASSIC TEXT CHAT WITH VOICE ENHANCEMENTS        */
              /* ======================================================== */
              <>
                {/* Window Header */}
                <div className="bg-gradient-to-r from-zinc-950 via-[#13141c] to-zinc-950 px-4 py-3.5 border-b border-zinc-800/80 flex items-center justify-between shrink-0">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="w-9 h-9 rounded-full bg-crimson-600/30 border border-crimson-500/50 flex items-center justify-center text-crimson-400">
                        <FaRobot className="text-base" />
                      </div>
                      <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-black ring-1 ring-emerald-500/50" />
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-sm font-black uppercase tracking-wider text-white">
                          TALHA AI
                        </h3>
                        <span className="text-[9px] font-mono bg-crimson-950/80 text-crimson-300 border border-crimson-800/60 px-1.5 py-0.2 rounded font-bold uppercase tracking-tight">
                          Groq Fast
                        </span>
                      </div>
                      <p className="text-[10px] text-zinc-400 font-medium">
                        Portfolio &amp; Project Assistant
                      </p>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-1.5 text-zinc-400">
                    {/* Toggle to Full Voice Mode */}
                    <button
                      onClick={() => {
                        stopSpeaking();
                        setMode("voice");
                      }}
                      className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-cyan-400 hover:text-white border border-cyan-800/40 text-[10px] font-bold uppercase tracking-wider transition cursor-pointer"
                      title="Switch to Voice Mode"
                    >
                      <FaMicrophone className="text-[10px]" />
                      <span>Voice Mode</span>
                    </button>

                    <button
                      onClick={clearChat}
                      title="Clear chat history"
                      className="p-1.5 rounded-lg hover:bg-zinc-800 hover:text-zinc-200 transition text-xs"
                    >
                      <FaTrashAlt />
                    </button>
                    <button
                      onClick={() => {
                        stopSpeaking();
                        stopListening();
                        setIsOpen(false);
                      }}
                      title="Minimize chat"
                      className="p-1.5 rounded-lg hover:bg-zinc-800 hover:text-zinc-200 transition text-sm"
                    >
                      <FaChevronDown />
                    </button>
                  </div>
                </div>

                {/* Quick Context Bar */}
                <div className="bg-crimson-950/20 border-b border-crimson-900/30 px-3.5 py-1.5 flex items-center justify-between text-[10px] text-zinc-400 font-mono shrink-0">
                  <span className="flex items-center gap-1.5 text-zinc-300">
                    <SiN8N className="text-crimson-500 text-xs" />
                    <span>13 Live Systems + 3 n8n Pipelines Loaded</span>
                  </span>

                  <button
                    onClick={() => {
                      if (!isMuted && isSpeaking) stopSpeaking();
                      setIsMuted(!isMuted);
                    }}
                    className="flex items-center gap-1 text-[9px] hover:text-white transition"
                    title={isMuted ? "Unmute Voice Answers" : "Mute Voice Answers"}
                  >
                    {isMuted ? (
                      <>
                        <FaVolumeMute className="text-red-400 text-xs" />
                        <span>Muted</span>
                      </>
                    ) : (
                      <>
                        <FaVolumeUp className="text-emerald-400 text-xs" />
                        <span>Voice On</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Messages Container */}
                <div className="flex-1 overflow-y-auto p-3.5 space-y-3.5 text-left">
                  {messages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`flex flex-col ${
                        msg.role === "user" ? "items-end" : "items-start"
                      }`}
                    >
                      <div
                        className={`flex items-end gap-2 max-w-[88%] ${
                          msg.role === "user" ? "flex-row-reverse" : "flex-row"
                        }`}
                      >
                        {/* Tiny Avatar */}
                        <div
                          className={`w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center text-[10px] mb-1 ${
                            msg.role === "user"
                              ? "bg-zinc-800 text-zinc-300 border border-zinc-700"
                              : "bg-crimson-600/30 text-crimson-400 border border-crimson-500/40"
                          }`}
                        >
                          {msg.role === "user" ? <FaUser /> : <FaRobot />}
                        </div>

                        {/* Speech Bubble */}
                        <div
                          className={`p-3 rounded-2xl text-xs leading-relaxed transition relative group ${
                            msg.role === "user"
                              ? "bg-crimson-600 text-white rounded-br-xs shadow-md shadow-crimson-950"
                              : "bg-zinc-900/90 text-zinc-200 border border-zinc-800 rounded-bl-xs shadow-md"
                          }`}
                        >
                          <FormattedText text={msg.content} />

                          {/* Listen Aloud Button on Bot Messages */}
                          {msg.role === "assistant" && (
                            <button
                              onClick={() => speakText(msg.content)}
                              className="absolute bottom-1 right-2 opacity-0 group-hover:opacity-100 transition-opacity text-[10px] text-zinc-400 hover:text-white p-1 rounded hover:bg-zinc-800"
                              title="Listen to this response aloud"
                            >
                              <FaVolumeUp />
                            </button>
                          )}
                        </div>
                      </div>

                      <span className="text-[9px] text-zinc-500 mt-1 px-8 font-mono">
                        {msg.timestamp}
                      </span>
                    </div>
                  ))}

                  {/* Typing / Loading Indicator */}
                  {loading && (
                    <div className="flex items-center gap-2 text-zinc-400 text-xs">
                      <div className="w-6 h-6 rounded-full bg-crimson-600/20 text-crimson-400 flex items-center justify-center text-[10px] border border-crimson-500/30">
                        <FaRobot />
                      </div>
                      <div className="bg-zinc-900 border border-zinc-800 px-3.5 py-2 rounded-2xl rounded-bl-xs flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-crimson-500 animate-bounce" />
                        <span
                          className="w-1.5 h-1.5 rounded-full bg-crimson-500 animate-bounce"
                          style={{ animationDelay: "150ms" }}
                        />
                        <span
                          className="w-1.5 h-1.5 rounded-full bg-crimson-500 animate-bounce"
                          style={{ animationDelay: "300ms" }}
                        />
                        <span className="text-[10px] font-mono text-zinc-400 ml-1">
                          Thinking with Groq...
                        </span>
                      </div>
                    </div>
                  )}

                  <div ref={messagesEndRef} />
                </div>

                {/* Suggested Prompt Chips */}
                {messages.length <= 3 && (
                  <div className="px-3.5 py-2 bg-zinc-950/60 border-t border-zinc-900/80 flex items-center gap-1.5 overflow-x-auto scrollbar-none shrink-0">
                    <span className="text-[10px] text-zinc-500 flex items-center gap-1 font-mono flex-shrink-0">
                      <FaMagic className="text-crimson-500 text-[9px]" />
                      <span>Try:</span>
                    </span>
                    {SUGGESTED_PROMPTS.map((prompt, i) => (
                      <button
                        key={i}
                        onClick={() => sendMessage(prompt, true)}
                        className="text-[11px] bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-crimson-500/50 text-zinc-300 hover:text-white px-2.5 py-1 rounded-full whitespace-nowrap transition cursor-pointer flex-shrink-0"
                      >
                        {prompt}
                      </button>
                    ))}
                  </div>
                )}

                {/* Input Form with Microphone Button */}
                <div className="p-3 bg-zinc-950 border-t border-zinc-900 shrink-0">
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      sendMessage();
                    }}
                    className="flex items-center gap-2"
                  >
                    <input
                      ref={inputRef}
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder={
                        isListening
                          ? "Listening to voice..."
                          : "Type a question or tap microphone..."
                      }
                      disabled={loading}
                      className="flex-1 bg-zinc-900/90 border border-zinc-800 text-white placeholder-zinc-500 text-xs px-3.5 py-2.5 rounded-xl focus:outline-none focus:border-crimson-500 focus:ring-1 focus:ring-crimson-500 transition disabled:opacity-50"
                    />

                    {/* Microphone Voice Input Button in Text Mode */}
                    <button
                      type="button"
                      onClick={toggleListening}
                      className={`w-10 h-10 rounded-xl border flex items-center justify-center transition shadow-md flex-shrink-0 cursor-pointer ${
                        isListening
                          ? "bg-cyan-500 border-cyan-400 text-black shadow-cyan-500/50 animate-pulse"
                          : "bg-zinc-900 hover:bg-zinc-800 border-zinc-700 text-zinc-300 hover:text-white"
                      }`}
                      title={isListening ? "Stop listening" : "Speak question"}
                    >
                      {isListening ? (
                        <FaStop className="text-xs" />
                      ) : (
                        <FaMicrophone className="text-xs" />
                      )}
                    </button>

                    {/* Send Button */}
                    <button
                      type="submit"
                      disabled={!input.trim() || loading}
                      className="w-10 h-10 rounded-xl bg-crimson-600 hover:bg-crimson-700 disabled:bg-zinc-800 text-white disabled:text-zinc-500 flex items-center justify-center transition shadow-md shadow-crimson-950/50 flex-shrink-0 cursor-pointer disabled:cursor-not-allowed"
                      title="Send message"
                    >
                      <FaPaperPlane className="text-xs" />
                    </button>
                  </form>

                  <div className="flex items-center justify-between mt-2 px-1 text-[9px] text-zinc-500 font-mono">
                    <span className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      <span>Speech-to-Text &amp; Voice Enabled</span>
                    </span>
                    <span className="text-zinc-600">Enter to send</span>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
