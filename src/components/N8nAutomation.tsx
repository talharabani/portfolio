import { motion } from "framer-motion";
import { SiN8N } from "react-icons/si";
import {
  FaShareAlt, FaChartLine, FaClock,
  FaPlay, FaExternalLinkAlt
} from "react-icons/fa";
import FlyInText from "./FlyInText";
import n8nThumbImg from "../assets/n8n_linkedin_automation.jpg";
import n8nGmapsThumbImg from "../assets/n8n_gmaps_leadgen.jpg";
import n8nAutoVideoThumbImg from "../assets/n8n_autovideo_gen.jpg";

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
            <FlyInText
              as="span"
              text="AUTONOMOUS ARCHITECTURE & WORKFLOW PIPELINES"
              className="text-[11px] sm:text-xs font-black uppercase tracking-widest text-crimson-500 block mb-2"
              stagger={0.04}
            />
            <FlyInText
              as="h2"
              text="n8n WORKFLOW AUTOMATION"
              className="text-xl sm:text-2xl font-black uppercase tracking-wider text-white"
              delay={0.1}
              stagger={0.08}
            />
          </div>

          <div className="flex items-center gap-2 text-xs font-bold text-zinc-400 bg-zinc-900 border border-zinc-800 px-3.5 py-1.5 rounded-full w-fit">
            <span className="w-2 h-2 rounded-full bg-crimson-500 animate-pulse" />
            <span>n8n CERTIFIED AUTOMATION BUILDER</span>
          </div>
        </div>

        {/* Featured Video Demonstrations (3-Column Showcase) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 sm:mb-12">
          
          {/* Video Card 1: Google Maps Lead Generation */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="relative rounded-2xl overflow-hidden border border-zinc-800 bg-[#0e0f16] flex flex-col justify-between group"
          >
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
          </motion.div>

          {/* Video Card 2: Auto Video Generation Pipeline */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="relative rounded-2xl overflow-hidden border border-zinc-800 bg-[#0e0f16] flex flex-col justify-between group"
          >
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
          </motion.div>

          {/* Video Card 3: Auto LinkedIn Post Generator */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="relative rounded-2xl overflow-hidden border border-zinc-800 bg-[#0e0f16] flex flex-col justify-between group"
          >
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
          </motion.div>

        </div>

        {/* Stats Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
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

      </div>
    </section>
  );
}
