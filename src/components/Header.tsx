import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";
import { FaFileAlt, FaWhatsapp } from "react-icons/fa";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-900/80 bg-[#0a0a0a]/95 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3.5 sm:py-4 flex items-center justify-between text-xs uppercase tracking-widest text-zinc-400 font-semibold">
        {/* Left Sub-header info */}
        <a href="#" className="flex flex-col group">
          <span className="text-white font-bold text-sm tracking-tight font-sans group-hover:text-crimson-400 transition-colors">
            TALHA ISHAQ
          </span>
          <span className="text-[10px] text-zinc-500 tracking-wider">
            FULL STACK &amp; n8n AUTOMATION
          </span>
        </a>

        {/* Center Navigation (Desktop) */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-8">
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#process" className="hover:text-white transition-colors">Process &amp; Skills</a>
          <a href="#automation" className="hover:text-white transition-colors">n8n Automation</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </nav>

        {/* Right Status (Desktop) */}
        <div className="hidden sm:flex items-center gap-2">
          <span className="text-crimson-500 text-sm">✦</span>
          <a
            href="#contact"
            className="text-[11px] text-zinc-300 hover:text-white transition-colors flex items-center gap-1.5"
          >
            AVAILABLE FOR FREELANCE
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 -mr-1 text-zinc-400 hover:text-white focus:outline-none"
          aria-label="Toggle Menu"
        >
          {menuOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer with smooth animation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-[#0d0e14] border-b border-zinc-800 px-5 py-4 flex flex-col gap-3 text-xs font-semibold uppercase tracking-wider overflow-hidden shadow-2xl"
          >
            <a
              href="#projects"
              onClick={() => setMenuOpen(false)}
              className="text-zinc-300 hover:text-white py-2 border-b border-zinc-900 transition-colors"
            >
              Selected Projects
            </a>
            <a
              href="#process"
              onClick={() => setMenuOpen(false)}
              className="text-zinc-300 hover:text-white py-2 border-b border-zinc-900 transition-colors"
            >
              Work Process &amp; Skills
            </a>
            <a
              href="#automation"
              onClick={() => setMenuOpen(false)}
              className="text-zinc-300 hover:text-white py-2 border-b border-zinc-900 transition-colors"
            >
              n8n Workflow Automation
            </a>
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="text-zinc-300 hover:text-white py-2 border-b border-zinc-900 transition-colors"
            >
              Contact &amp; Inquiries
            </a>

            {/* Quick Actions in Mobile Menu */}
            <div className="pt-2 flex items-center gap-2">
              <a
                href="/Talha_Ishaq_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="flex-1 flex items-center justify-center gap-1.5 py-2.5 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-200 text-[11px] font-bold rounded-lg transition"
              >
                <FaFileAlt className="text-crimson-400 text-xs" />
                <span>Resume PDF</span>
              </a>
              <a
                href="https://wa.me/923009490631"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="flex-1 flex items-center justify-center gap-1.5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-[11px] font-bold rounded-lg transition shadow-md"
              >
                <FaWhatsapp className="text-sm" />
                <span>WhatsApp</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
