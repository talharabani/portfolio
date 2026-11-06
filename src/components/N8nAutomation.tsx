import { motion } from "framer-motion";
import { SiN8N, SiLinkedin, SiGooglesheets } from "react-icons/si";
import {
  FaRobot, FaMapMarkerAlt, FaDatabase,
  FaFilter, FaShareAlt, FaChartLine, FaClock,
  FaPlay, FaExternalLinkAlt, FaNewspaper, FaImage,
  FaVideo, FaMicrophone
} from "react-icons/fa";
import React from "react";
import n8nThumbImg from "../assets/n8n_linkedin_automation.jpg";
import n8nGmapsThumbImg from "../assets/n8n_gmaps_leadgen.jpg";
import n8nAutoVideoThumbImg from "../assets/n8n_autovideo_gen.jpg";

interface WorkflowNode {
  icon: React.ReactNode;
  label: string;
}

interface WorkflowItem {
  id: number;
  num: string;
  title: string;
  description: string;
  nodes: WorkflowNode[];
  tags: string[];
  stat: string;
  statLabel: string;
}

const workflows: WorkflowItem[] = [
  {
    id: 1,
    num: "01",
    title: "Google Maps Automated Lead Generation",
    description:
      "Automated webhook & form-triggered pipeline that queries Google Places API, iterates through commercial leads, enriches phone numbers, detects country jurisdiction, filters qualified contacts, and appends rows to Google Sheets in real-time.",
    nodes: [
      { icon: <FaMapMarkerAlt />, label: "Places API" },
      { icon: <FaFilter />, label: "Clean & Format" },
      { icon: <FaDatabase />, label: "Country Detect" },
      { icon: <SiGooglesheets />, label: "Append to Sheets" },
    ],
    tags: ["Google Places API", "Country Detection", "Google Sheets Sync", "Lead Scraping"],
    stat: "500+",
    statLabel: "leads per run",
  },
  {
    id: 2,
    num: "02",
    title: "Autonomous AI Video Generation Pipeline",
    description:
      "Self-orchestrating video production workflow: scrapes trending topics, synthesizes dynamic video scripts via Groq/OpenAI, generates high-fidelity voiceover via ElevenLabs, sources video assets, renders captions with FFmpeg/Creatomate, and auto-publishes to video channels.",
    nodes: [
      { icon: <FaRobot />, label: "Script Generation" },
      { icon: <FaMicrophone />, label: "ElevenLabs TTS" },
      { icon: <FaVideo />, label: "AI Video Render" },
      { icon: <FaShareAlt />, label: "Auto Publishing" },
    ],
    tags: ["n8n Pipeline", "ElevenLabs TTS", "Creatomate API", "FFmpeg", "Auto Rendering"],
    stat: "< 90s",
    statLabel: "full render time",
  },
  {
    id: 3,
    num: "03",
    title: "Auto LinkedIn Post & AI News Generator",
    description:
      "Fetches trending technology news via NewsData API, synthesizes viral professional LinkedIn copy using Groq AI (LLaMA 3), generates matching visual artwork via Pollinations.ai, merges the payload, and auto-dispatches directly to LinkedIn & Discord.",
    nodes: [
      { icon: <FaNewspaper />, label: "News API" },
      { icon: <FaRobot />, label: "Groq AI (Copy)" },
      { icon: <FaImage />, label: "Pollinations.ai" },
      { icon: <SiLinkedin />, label: "Auto LinkedIn Post" },
    ],
    tags: ["NewsData API", "Groq AI", "Pollinations.ai", "Discord Webhook", "LinkedIn API"],
    stat: "100%",
    statLabel: "Autonomous Run",
  },
  {
    id: 4,
    num: "04",
    title: "Autonomous AI Customer Support Agent",
    description:
      "Smart AI agent connecting OpenAI with company knowledge base & vector store to triage inquiries, reply instantly, and escalate complex tickets to human support.",
    nodes: [
      { icon: <FaRobot />, label: "Telegram Trigger" },
      { icon: <FaDatabase />, label: "Pinecone Vector DB" },
      { icon: <FaChartLine />, label: "OpenAI Tools" },
      { icon: <SiLinkedin />, label: "Auto Response" },
    ],
    tags: ["OpenAI API", "Vector Store", "Instant Response", "Telegram"],
    stat: "< 3s",
    statLabel: "average reply time",
  },
];

const stats = [
  { icon: <SiN8N className="text-2xl text-crimson-500" />, value: "15+", label: "Workflows Built" },
  { icon: <FaShareAlt className="text-2xl text-crimson-500" />, value: "8+", label: "APIs Connected" },
  { icon: <FaClock className="text-2xl text-crimson-500" />, value: "24/7", label: "Autonomous Uptime" },
  { icon: <FaChartLine className="text-2xl text-crimson-500" />, value: "100%", label: "Hands-Free Execution" },
];

export default function N8nAutomation() {
  return (
    <section id="automation" className="bg-[#0a0a0a] py-14 sm:py-20 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-6 sm:pb-8 border-b border-zinc-900 mb-8 sm:mb-12 gap-4">
          <div>
            <span className="text-[11px] sm:text-xs font-black uppercase tracking-widest text-crimson-500 block mb-2">
              AUTONOMOUS ARCHITECTURE &amp; WORKFLOW PIPELINES
            </span>
            <h2 className="text-xl sm:text-2xl font-black uppercase tracking-wider text-white">
              n8n WORKFLOW AUTOMATION
            </h2>
          </div>

          <div className="flex items-center gap-2 text-xs font-bold text-zinc-400 bg-zinc-900 border border-zinc-800 px-3.5 py-1.5 rounded-full w-fit">
            <span className="w-2 h-2 rounded-full bg-crimson-500 animate-pulse" />
            <span>n8n CERTIFIED AUTOMATION BUILDER</span>
          </div>
        </div>

        {/* Featured Video Demonstrations (3-Column Showcase) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 sm:mb-12">
          
          {/* Video Card 1: Google Maps Lead Generation */}
          <div className="relative rounded-2xl overflow-hidden border border-zinc-800 bg-[#0e0f16] flex flex-col justify-between group">
            <div className="relative aspect-[16/10] overflow-hidden bg-black">
              <img
                src={n8nGmapsThumbImg}
                alt="Google Maps Lead Generation - n8n"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
              
              <a
                href="https://drive.google.com/file/d/18meqvObd83HhBls7jvaMKw6yztN8dV-B/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="w-14 h-14 rounded-full bg-crimson-600/90 text-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform pl-1 border-2 border-white/20">
                  <FaPlay className="text-base" />
                </div>
              </a>
            </div>

            <div className="p-5 flex flex-col justify-between flex-1 space-y-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-crimson-500 font-bold text-[11px] uppercase tracking-widest">
                    ✦ DEMO #01
                  </span>
                  <span className="text-[10px] bg-zinc-900 border border-zinc-800 text-zinc-300 px-2 py-0.5 rounded font-mono">
                    Places API + Sheets
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-black uppercase tracking-tight text-white mb-2 leading-snug">
                  Google Maps Lead Scraper &amp; Sheets Sync
                </h3>

                <p className="text-xs text-zinc-400 leading-relaxed font-normal">
                  End-to-end B2B lead generation pipeline: queries Google Places API, extracts verified contacts, detects country jurisdiction, cleans telephone records, and auto-appends rows to Google Sheets.
                </p>
              </div>

              <div className="pt-2 flex items-center justify-between">
                <a
                  href="https://drive.google.com/file/d/18meqvObd83HhBls7jvaMKw6yztN8dV-B/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3.5 py-2 bg-crimson-600 hover:bg-crimson-700 text-white font-bold text-[11px] uppercase tracking-wider rounded-lg transition shadow-md shadow-crimson-950/60"
                >
                  <FaPlay className="text-[9px]" />
                  <span>Watch Demo</span>
                  <FaExternalLinkAlt className="text-[8px] ml-1" />
                </a>

                <span className="text-[10px] font-mono text-zinc-500">Google Drive Video</span>
              </div>
            </div>
          </div>

          {/* Video Card 2: Auto Video Generation Pipeline */}
          <div className="relative rounded-2xl overflow-hidden border border-zinc-800 bg-[#0e0f16] flex flex-col justify-between group">
            <div className="relative aspect-[16/10] overflow-hidden bg-black">
              <img
                src={n8nAutoVideoThumbImg}
                alt="Auto Video Generation Pipeline - n8n"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
              
              <a
                href="https://drive.google.com/file/d/1dz_j8eZ2vXEYY6XS94arScKJPJa_VkFc/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="w-14 h-14 rounded-full bg-crimson-600/90 text-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform pl-1 border-2 border-white/20">
                  <FaPlay className="text-base" />
                </div>
              </a>
            </div>

            <div className="p-5 flex flex-col justify-between flex-1 space-y-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-crimson-500 font-bold text-[11px] uppercase tracking-widest">
                    ✦ DEMO #02
                  </span>
                  <span className="text-[10px] bg-zinc-900 border border-zinc-800 text-zinc-300 px-2 py-0.5 rounded font-mono">
                    AI Script + ElevenLabs + Render
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-black uppercase tracking-tight text-white mb-2 leading-snug">
                  Autonomous AI Video Generation
                </h3>

                <p className="text-xs text-zinc-400 leading-relaxed font-normal">
                  Fully automated video creation system: extracts viral hooks, generates tailored scripts with LLMs, synthesizes voiceovers via ElevenLabs, compiles media assets, renders video with captions, and publishes automatically.
                </p>
              </div>

              <div className="pt-2 flex items-center justify-between">
                <a
                  href="https://drive.google.com/file/d/1dz_j8eZ2vXEYY6XS94arScKJPJa_VkFc/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3.5 py-2 bg-crimson-600 hover:bg-crimson-700 text-white font-bold text-[11px] uppercase tracking-wider rounded-lg transition shadow-md shadow-crimson-950/60"
                >
                  <FaPlay className="text-[9px]" />
                  <span>Watch Demo</span>
                  <FaExternalLinkAlt className="text-[8px] ml-1" />
                </a>

                <span className="text-[10px] font-mono text-zinc-500">Google Drive Video</span>
              </div>
            </div>
          </div>

          {/* Video Card 3: Auto LinkedIn Post Generator */}
          <div className="relative rounded-2xl overflow-hidden border border-zinc-800 bg-[#0e0f16] flex flex-col justify-between group">
            <div className="relative aspect-[16/10] overflow-hidden bg-black">
              <img
                src={n8nThumbImg}
                alt="Auto LinkedIn Post Automation - n8n"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
              
              <a
                href="https://drive.google.com/file/d/1mb5ZI1wn_PE5-rd7E3Er8PACEW5nHF5l/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="w-14 h-14 rounded-full bg-crimson-600/90 text-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform pl-1 border-2 border-white/20">
                  <FaPlay className="text-base" />
                </div>
              </a>
            </div>

            <div className="p-5 flex flex-col justify-between flex-1 space-y-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-crimson-500 font-bold text-[11px] uppercase tracking-widest">
                    ✦ DEMO #03
                  </span>
                  <span className="text-[10px] bg-zinc-900 border border-zinc-800 text-zinc-300 px-2 py-0.5 rounded font-mono">
                    Groq AI + Pollinations
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-black uppercase tracking-tight text-white mb-2 leading-snug">
                  Auto LinkedIn Post &amp; News Intelligence
                </h3>

                <p className="text-xs text-zinc-400 leading-relaxed font-normal">
                  Scans breaking news via NewsData API, crafts viral LinkedIn copy with Groq AI LLaMA 3, synthesizes matching visual artwork via Pollinations.ai, and auto-dispatches posts hands-free.
                </p>
              </div>

              <div className="pt-2 flex items-center justify-between">
                <a
                  href="https://drive.google.com/file/d/1mb5ZI1wn_PE5-rd7E3Er8PACEW5nHF5l/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3.5 py-2 bg-crimson-600 hover:bg-crimson-700 text-white font-bold text-[11px] uppercase tracking-wider rounded-lg transition shadow-md shadow-crimson-950/60"
                >
                  <FaPlay className="text-[9px]" />
                  <span>Watch Demo</span>
                  <FaExternalLinkAlt className="text-[8px] ml-1" />
                </a>

                <span className="text-[10px] font-mono text-zinc-500">Google Drive Video</span>
              </div>
            </div>
          </div>

        </div>

        {/* Stats Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-12">
          {stats.map((s, idx) => (
            <div
              key={idx}
              className="bg-zinc-950 border border-zinc-900 rounded-xl p-4 sm:p-5 flex flex-col justify-between"
            >
              <div className="mb-2 sm:mb-3">{s.icon}</div>
              <div>
                <div className="font-sans font-black text-xl sm:text-3xl text-white">
                  {s.value}
                </div>
                <div className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-zinc-500 mt-0.5 sm:mt-1">
                  {s.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Workflows Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {workflows.map((wf) => (
            <motion.div
              key={wf.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group bg-zinc-950 border border-zinc-850 hover:border-zinc-700 rounded-2xl p-5 sm:p-7 flex flex-col justify-between transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-sans font-black text-2xl text-crimson-500">
                    {wf.num}
                  </span>
                  <span className="text-[11px] font-mono text-zinc-400 bg-zinc-900 border border-zinc-800 px-2.5 py-1 rounded">
                    {wf.stat} {wf.statLabel}
                  </span>
                </div>

                <h3 className="text-base font-bold uppercase tracking-wide text-white group-hover:text-crimson-400 transition-colors mb-2">
                  {wf.title}
                </h3>

                <p className="text-xs text-zinc-400 leading-relaxed mb-6 font-normal">
                  {wf.description}
                </p>

                {/* Workflow Nodes Visual */}
                <div className="bg-[#0e0e10] border border-zinc-900 rounded-xl p-3.5 mb-6">
                  <span className="text-[9px] font-bold uppercase tracking-widest text-zinc-500 block mb-2.5">
                    Pipeline Sequence
                  </span>
                  <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-[10px]">
                    {wf.nodes.map((node, i) => (
                      <React.Fragment key={i}>
                        <div className="flex items-center gap-1 bg-zinc-900 text-zinc-300 px-2 py-1 rounded border border-zinc-800 whitespace-nowrap">
                          <span className="text-crimson-400">{node.icon}</span>
                          <span>{node.label}</span>
                        </div>
                        {i < wf.nodes.length - 1 && (
                          <span className="text-zinc-600 text-xs">→</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-zinc-900">
                {wf.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[9px] uppercase tracking-wider font-semibold text-zinc-400 bg-zinc-900/60 px-2 py-1 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
