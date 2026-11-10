import { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaEnvelope,
  FaArrowUp,
  FaCopy,
  FaCheck,
  FaFileAlt,
  FaRobot,
} from "react-icons/fa";

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("talha.ishaq.rabani@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
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
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[150px] bg-crimson-600/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 sm:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Column 1: Brand & Bio (6 cols) */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-crimson-600" />
              <h3 className="text-base sm:text-lg font-black uppercase tracking-[0.18em] text-white font-sans">
                TALHA ISHAQ RABANI
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal max-w-lg">
              Senior Full Stack Developer &amp; AI Automation Specialist. Engineering resilient web applications, high-converting digital products, and autonomous n8n workflows.
            </p>

            {/* Status & Location Pill */}
            <div className="flex flex-wrap items-center gap-3 text-xs pt-1">
              <div className="inline-flex items-center gap-2 text-[11px] font-medium text-emerald-400 bg-emerald-950/30 border border-emerald-800/40 px-3 py-1 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>Available for Select Projects &amp; Contracts</span>
              </div>
              <span className="text-zinc-600 hidden sm:inline">•</span>
              <span className="text-xs text-zinc-400 font-medium">Lahore, Pakistan</span>
            </div>

            {/* Social Links Row */}
            <div className="flex items-center gap-2.5 pt-3">
              <a
                href="https://github.com/talharabani"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 text-zinc-400 hover:text-white flex items-center justify-center transition"
                aria-label="GitHub Profile"
              >
                <FaGithub className="text-sm" />
              </a>

              <a
                href="https://www.linkedin.com/in/talha-ishaq-rabani9490/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 text-zinc-400 hover:text-white flex items-center justify-center transition"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin className="text-sm" />
              </a>

              <a
                href="https://wa.me/923009490631"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-zinc-900/80 hover:bg-emerald-950/60 border border-zinc-800 hover:border-emerald-600/60 text-zinc-400 hover:text-emerald-400 flex items-center justify-center transition"
                aria-label="WhatsApp Direct"
              >
                <FaWhatsapp className="text-sm" />
              </a>

              <a
                href="mailto:talha.ishaq.rabani@gmail.com"
                className="w-9 h-9 rounded-lg bg-zinc-900/80 hover:bg-crimson-950/60 border border-zinc-800 hover:border-crimson-600/60 text-zinc-400 hover:text-crimson-400 flex items-center justify-center transition"
                aria-label="Email Direct"
              >
                <FaEnvelope className="text-xs" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-zinc-400">
              NAVIGATION
            </h4>
            <ul className="space-y-2.5 text-xs font-medium">
              <li>
                <a href="#hero" className="text-zinc-400 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#projects" className="text-zinc-400 hover:text-white transition-colors">
                  Selected Projects
                </a>
              </li>
              <li>
                <a href="#about" className="text-zinc-400 hover:text-white transition-colors">
                  About &amp; Skills
                </a>
              </li>
              <li>
                <a href="#automation" className="text-zinc-400 hover:text-white transition-colors">
                  n8n Automation
                </a>
              </li>
              <li>
                <a href="#contact" className="text-zinc-400 hover:text-white transition-colors">
                  Contact Form
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Direct Connect & Actions (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-zinc-400">
              CONNECT
            </h4>
            
            <div className="space-y-3 text-xs">
              <div>
                <span className="text-[10px] text-zinc-400 uppercase tracking-widest block font-mono mb-1">
                  EMAIL
                </span>
                <div className="flex items-center gap-2">
                  <a
                    href="mailto:talha.ishaq.rabani@gmail.com"
                    className="text-zinc-200 hover:text-crimson-400 font-semibold break-all transition"
                  >
                    talha.ishaq.rabani@gmail.com
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="text-zinc-400 hover:text-white transition p-1 cursor-pointer shrink-0"
                    title="Copy Email"
                  >
                    {copied ? (
                      <FaCheck className="text-emerald-400 text-xs" />
                    ) : (
                      <FaCopy className="text-xs" />
                    )}
                  </button>
                </div>
              </div>

              <div>
                <span className="text-[10px] text-zinc-400 uppercase tracking-widest block font-mono mb-1">
                  PHONE / WHATSAPP
                </span>
                <a
                  href="https://wa.me/923009490631"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-200 hover:text-emerald-400 font-semibold transition"
                >
                  +92 300 9490631
                </a>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-2">
                <a
                  href="/Talha_Ishaq_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-white text-[11px] font-medium transition"
                >
                  <FaFileAlt className="text-[10px] text-crimson-400" />
                  <span>View Resume</span>
                </a>

                <button
                  onClick={triggerChat}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-crimson-900/40 hover:border-crimson-500/60 text-crimson-300 hover:text-white text-[11px] font-medium transition cursor-pointer"
                >
                  <FaRobot className="text-[11px] text-crimson-400" />
                  <span>Talk with AI</span>
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar: Copyright & Back To Top */}
      <div className="border-t border-zinc-900/80 py-5 bg-black/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          
          <div className="flex items-center gap-2 text-center sm:text-left">
            <span>&copy; {new Date().getFullYear()}</span>
            <span className="font-semibold text-zinc-300 uppercase tracking-wider">
              Talha Ishaq Rabani
            </span>
            <span>•</span>
            <span className="text-[11px]">All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-[11px] text-zinc-400 hidden md:inline">
              Designed &amp; Engineered with precision.
            </span>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-zinc-400 hover:text-white text-xs font-medium transition-colors cursor-pointer group"
            >
              <span>Back to Top</span>
              <FaArrowUp className="text-[10px] text-crimson-500 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
