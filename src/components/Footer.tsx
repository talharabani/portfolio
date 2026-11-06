import { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaEnvelope,
  FaArrowUp,
  FaCopy,
  FaCheck,
  FaRobot,
  FaMapMarkerAlt,
  FaClock,
  FaFileAlt,
} from "react-icons/fa";
import {
  SiN8N,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPostgresql,
  SiPython,
  SiVercel,
} from "react-icons/si";

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("talha.ishaq.rabani@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const triggerChat = () => {
    window.dispatchEvent(new CustomEvent("open-chatbot"));
  };

  return (
    <footer className="bg-[#070709] border-t border-zinc-900 relative overflow-hidden text-zinc-400">
      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-crimson-600/10 blur-[130px] rounded-full pointer-events-none" />

      {/* ======================================================== */}
      {/* 1. TOP CTA HERO BOX */}
      {/* ======================================================== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-10 sm:pt-16 pb-8 sm:pb-12">
        <div className="relative rounded-2xl sm:rounded-3xl p-6 sm:p-12 bg-gradient-to-br from-[#101118] via-[#0d0e14] to-[#120f13] border border-zinc-800/80 shadow-2xl overflow-hidden">
          {/* Decorative Corner Accents */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-crimson-600/15 blur-3xl pointer-events-none rounded-full" />
          <div className="absolute bottom-0 left-0 w-36 h-36 bg-crimson-900/10 blur-2xl pointer-events-none rounded-full" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6 sm:gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-crimson-400 bg-crimson-950/60 border border-crimson-800/50 px-3 py-1 rounded-full mb-3">
                <span className="w-2 h-2 rounded-full bg-crimson-500 animate-pulse" />
                <span>ACCEPTING NEW PROJECTS &amp; CONTRACTS</span>
              </div>

              <h2 className="text-xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-white mb-2 sm:mb-3 leading-tight">
                HAVE A VISION FOR YOUR NEXT DIGITAL PRODUCT?
              </h2>

              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
                Let's collaborate to build high-performance web systems, 3D WebGL experiences, or autonomous n8n automation pipelines that drive real, measurable impact.
              </p>
            </div>

            {/* Action Buttons Cluster (Responsive on Mobile) */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 w-full sm:w-auto">
              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/923009490631"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition shadow-lg shadow-emerald-950/60 hover:scale-102 active:scale-98"
              >
                <FaWhatsapp className="text-base" />
                <span>WhatsApp</span>
              </a>

              {/* Email Direct */}
              <a
                href="mailto:talha.ishaq.rabani@gmail.com"
                className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl bg-crimson-600 hover:bg-crimson-700 text-white font-bold text-xs uppercase tracking-wider transition shadow-lg shadow-crimson-950/60 hover:scale-102 active:scale-98"
              >
                <FaEnvelope className="text-xs" />
                <span>Email</span>
              </a>

              {/* Copy Email Button */}
              <button
                onClick={handleCopyEmail}
                className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-200 font-bold text-xs uppercase tracking-wider transition cursor-pointer"
                title="Copy email to clipboard"
              >
                {copied ? (
                  <>
                    <FaCheck className="text-emerald-400 text-xs" />
                    <span className="text-emerald-300">Copied!</span>
                  </>
                ) : (
                  <>
                    <FaCopy className="text-xs" />
                    <span>Copy</span>
                  </>
                )}
              </button>

              {/* Resume / CV Direct Download */}
              <a
                href="/Talha_Ishaq_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-200 hover:text-white font-bold text-xs uppercase tracking-wider transition cursor-pointer"
                title="View / Download Resume"
              >
                <FaFileAlt className="text-xs text-crimson-400" />
                <span>Resume</span>
              </a>

              {/* Ask Talha AI Button */}
              <button
                onClick={triggerChat}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2.5 sm:py-3 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 border border-crimson-900/50 hover:border-crimson-500 text-crimson-300 hover:text-white font-bold text-xs uppercase tracking-wider transition cursor-pointer shadow-md"
              >
                <FaRobot className="text-sm text-crimson-400" />
                <span>Ask Talha AI</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ======================================================== */}
      {/* 2. MAIN 4-COLUMN FOOTER NAVIGATION */}
      {/* ======================================================== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 border-t border-zinc-900/80">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Column 1: Identity & Bio (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="w-3 h-3 rounded-full bg-crimson-600 animate-pulse" />
              <h3 className="text-lg font-black uppercase tracking-wider text-white font-sans">
                TALHA ISHAQ RABANI
              </h3>
            </div>

            <p className="text-xs text-zinc-400 leading-relaxed font-normal pr-4">
              Senior Full Stack Developer &amp; n8n Automation Specialist based in Lahore, Pakistan. Engineering scalable enterprise web systems, high-converting POS platforms, immersive 3D WebGL experiences, and autonomous AI pipelines.
            </p>

            {/* Availability Pill */}
            <div className="inline-flex items-center gap-2 text-[11px] font-bold text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 px-3 py-1.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span>Available for Global Remote Roles &amp; Contracts</span>
            </div>

            {/* Location & Time Info */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-zinc-400 pt-1">
              <span className="flex items-center gap-1.5">
                <FaMapMarkerAlt className="text-crimson-500 text-[11px]" />
                <span>Lahore, Pakistan</span>
              </span>
              <span className="text-zinc-700">•</span>
              <span className="flex items-center gap-1.5">
                <FaClock className="text-crimson-500 text-[11px]" />
                <span>PKT (UTC+5)</span>
              </span>
            </div>

            {/* Social Buttons Row */}
            <div className="flex items-center gap-2.5 pt-2">
              <a
                href="https://github.com/talharabani"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-white flex items-center justify-center transition shadow-sm"
                aria-label="GitHub Profile"
              >
                <FaGithub className="text-base" />
              </a>

              <a
                href="https://www.linkedin.com/in/talha-ishaq-rabani9490/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-white flex items-center justify-center transition shadow-sm"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin className="text-base" />
              </a>

              <a
                href="https://wa.me/923009490631"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-zinc-900 hover:bg-emerald-600 border border-zinc-800 hover:border-emerald-500 text-zinc-300 hover:text-white flex items-center justify-center transition shadow-sm"
                aria-label="WhatsApp Direct"
              >
                <FaWhatsapp className="text-base" />
              </a>

              <a
                href="mailto:talha.ishaq.rabani@gmail.com"
                className="w-9 h-9 rounded-xl bg-zinc-900 hover:bg-crimson-600 border border-zinc-800 hover:border-crimson-500 text-zinc-300 hover:text-white flex items-center justify-center transition shadow-sm"
                aria-label="Email Direct"
              >
                <FaEnvelope className="text-sm" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-zinc-200">
              NAVIGATION
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              <li>
                <a href="#hero" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-crimson-500 text-[10px]">›</span>
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-crimson-500 text-[10px]">›</span>
                  <span>Selected Projects</span>
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-crimson-500 text-[10px]">›</span>
                  <span>Process &amp; Skills</span>
                </a>
              </li>
              <li>
                <a href="#automation" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-crimson-500 text-[10px]">›</span>
                  <span>n8n Workflows</span>
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-crimson-500 text-[10px]">›</span>
                  <span>Contact Form</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Featured Projects Direct (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-zinc-200">
              HIGHLIGHTS
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              <li>
                <a href="https://agentlink-mu.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-crimson-500 text-[10px]">✦</span>
                  <span>AgentLink</span>
                </a>
              </li>
              <li>
                <a href="https://veloce-lime-five.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-crimson-500 text-[10px]">✦</span>
                  <span>Veloce 3D Car</span>
                </a>
              </li>
              <li>
                <a href="https://3d-property-website.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-crimson-500 text-[10px]">✦</span>
                  <span>Meridia Estate</span>
                </a>
              </li>
              <li>
                <a href="https://vaypar-nine.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-crimson-500 text-[10px]">✦</span>
                  <span>Vaypar POS</span>
                </a>
              </li>
              <li>
                <a href="https://tudostockportugal.vercel.app/en/wholesale" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-crimson-500 text-[10px]">✦</span>
                  <span>TudoStock Portugal</span>
                </a>
              </li>
              <li>
                <a href="https://food-guy.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-crimson-500 text-[10px]">✦</span>
                  <span>FoodGuy Platform</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Direct Inquiries (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-zinc-200">
              DIRECT CHANNELS
            </h4>
            
            <div className="space-y-3 text-xs">
              <div>
                <span className="text-[10px] text-zinc-500 uppercase tracking-widest block font-mono">
                  EMAIL ADDRESS
                </span>
                <a
                  href="mailto:talha.ishaq.rabani@gmail.com"
                  className="text-white hover:text-crimson-400 font-semibold break-all transition"
                >
                  talha.ishaq.rabani@gmail.com
                </a>
              </div>

              <div>
                <span className="text-[10px] text-zinc-500 uppercase tracking-widest block font-mono">
                  PHONE / WHATSAPP
                </span>
                <a
                  href="https://wa.me/923009490631"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-emerald-400 font-semibold transition"
                >
                  +92 300 9490631
                </a>
              </div>

              <div className="pt-1">
                <span className="text-[10px] font-mono text-zinc-400 bg-zinc-900 border border-zinc-800 px-2.5 py-1 rounded inline-block">
                  ⚡ &lt; 2h Average Turnaround Time
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ======================================================== */}
      {/* 3. TECH STACK BADGES STRIP */}
      {/* ======================================================== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-6 border-t border-zinc-900 flex flex-wrap items-center justify-between gap-4 text-xs">
        <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-widest">
          CORE ARSENAL &amp; FRAMEWORKS
        </span>

        <div className="flex flex-wrap items-center gap-3 text-zinc-400">
          <span className="flex items-center gap-1.5 bg-zinc-950 px-2.5 py-1 rounded-md border border-zinc-900 hover:border-zinc-700 transition">
            <SiReact className="text-sky-400 text-xs" />
            <span className="text-[11px] font-semibold text-zinc-300">React 19</span>
          </span>

          <span className="flex items-center gap-1.5 bg-zinc-950 px-2.5 py-1 rounded-md border border-zinc-900 hover:border-zinc-700 transition">
            <SiNextdotjs className="text-white text-xs" />
            <span className="text-[11px] font-semibold text-zinc-300">Next.js</span>
          </span>

          <span className="flex items-center gap-1.5 bg-zinc-950 px-2.5 py-1 rounded-md border border-zinc-900 hover:border-zinc-700 transition">
            <SiTypescript className="text-blue-400 text-xs" />
            <span className="text-[11px] font-semibold text-zinc-300">TypeScript</span>
          </span>

          <span className="flex items-center gap-1.5 bg-zinc-950 px-2.5 py-1 rounded-md border border-zinc-900 hover:border-zinc-700 transition">
            <SiN8N className="text-crimson-500 text-xs" />
            <span className="text-[11px] font-semibold text-zinc-300">n8n Automation</span>
          </span>

          <span className="flex items-center gap-1.5 bg-zinc-950 px-2.5 py-1 rounded-md border border-zinc-900 hover:border-zinc-700 transition">
            <SiPython className="text-yellow-400 text-xs" />
            <span className="text-[11px] font-semibold text-zinc-300">Python</span>
          </span>

          <span className="flex items-center gap-1.5 bg-zinc-950 px-2.5 py-1 rounded-md border border-zinc-900 hover:border-zinc-700 transition">
            <SiPostgresql className="text-blue-500 text-xs" />
            <span className="text-[11px] font-semibold text-zinc-300">PostgreSQL</span>
          </span>

          <span className="flex items-center gap-1.5 bg-zinc-950 px-2.5 py-1 rounded-md border border-zinc-900 hover:border-zinc-700 transition">
            <SiTailwindcss className="text-teal-400 text-xs" />
            <span className="text-[11px] font-semibold text-zinc-300">Tailwind CSS</span>
          </span>

          <span className="flex items-center gap-1.5 bg-zinc-950 px-2.5 py-1 rounded-md border border-zinc-900 hover:border-zinc-700 transition">
            <SiVercel className="text-white text-xs" />
            <span className="text-[11px] font-semibold text-zinc-300">Vercel Edge</span>
          </span>
        </div>
      </div>

      {/* ======================================================== */}
      {/* 4. BOTTOM COPYRIGHT & BACK TO TOP BAR */}
      {/* ======================================================== */}
      <div className="bg-black/60 border-t border-zinc-900/80 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          
          <div className="flex items-center gap-2 text-center sm:text-left">
            <span>&copy; {new Date().getFullYear()}</span>
            <span className="font-bold text-zinc-300 uppercase tracking-wider">
              Talha Ishaq Rabani
            </span>
            <span>•</span>
            <span className="text-[11px]">All rights reserved.</span>
          </div>

          <div className="text-[11px] text-zinc-500 text-center">
            Designed &amp; Engineered with React 19, TypeScript &amp; Tailwind CSS.
          </div>

          {/* Back To Top Action */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-zinc-400 hover:text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-crimson-500 px-3.5 py-1.5 rounded-lg transition-all cursor-pointer group"
          >
            <span className="text-[10px] font-bold uppercase tracking-wider">Back to Top</span>
            <FaArrowUp className="text-[10px] text-crimson-500 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
