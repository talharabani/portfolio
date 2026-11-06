import { motion } from "framer-motion";
import profileImg from "../assets/talha1.png";
import { FaGlobeAmericas, FaArrowDown } from "react-icons/fa";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[85vh] sm:min-h-[90vh] bg-[#0a0a0a] overflow-hidden flex flex-col justify-between pt-4 sm:pt-10 pb-8 sm:pb-12">
      {/* Massive Editorial Background Title "PORTFOLIO" */}
      <div className="absolute top-2 sm:top-6 left-0 right-0 flex justify-center pointer-events-none select-none z-0 overflow-hidden px-2">
        <h1 className="font-bebas text-[22vw] leading-none tracking-normal text-[#8a1017] opacity-85 uppercase whitespace-nowrap text-center max-w-full">
          PORTFOLIO
        </h1>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 w-full flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-6 lg:gap-0 min-h-[500px] sm:min-h-[580px]">
          
          {/* Left Column: Bio & Intro */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-4 z-20 flex flex-col items-start pt-4 sm:pt-6 lg:pt-0"
          >
            <span className="font-script text-2xl sm:text-4xl text-crimson-500 font-bold -mb-1 transform -rotate-3">
              Hello, I'm
            </span>

            <h2 className="font-sans font-black text-4xl sm:text-6xl xl:text-7xl tracking-tighter text-white uppercase leading-[0.95] my-2">
              TALHA <br /> ISHAQ
            </h2>

            <div className="text-xs sm:text-sm font-extrabold tracking-widest uppercase text-crimson-500 mt-1 sm:mt-2 mb-2 sm:mb-3">
              FULL STACK DEVELOPER &<br />n8n AUTOMATION EXPERT
            </div>

            <p className="text-xs sm:text-sm text-zinc-400 font-normal leading-relaxed max-w-sm mb-5 sm:mb-6">
              I design and build stylish, user-focused web experiences that combine creativity with rock-solid engineering. Passionate about clean architectures, smooth interactions, and AI workflows that deliver real business impact.
            </p>

            <div className="flex items-center gap-2 text-[10px] sm:text-[11px] font-bold tracking-widest uppercase text-zinc-300 bg-zinc-900/80 border border-zinc-800 px-3 py-1.5 rounded-full">
              <FaGlobeAmericas className="text-crimson-500 text-xs shrink-0" />
              <span>AVAILABLE WORLDWIDE</span>
            </div>

            <div className="mt-5 sm:mt-6 flex flex-wrap items-center gap-2.5 sm:gap-3 w-full sm:w-auto">
              <a
                href="#projects"
                className="flex-1 sm:flex-initial text-center px-4 sm:px-5 py-2.5 bg-crimson-600 hover:bg-crimson-700 text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-all shadow-lg shadow-crimson-900/40"
              >
                View Work
              </a>
              <a
                href="/Talha_Ishaq_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial justify-center px-3.5 sm:px-4 py-2.5 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 font-bold text-xs uppercase tracking-wider rounded-lg transition-all flex items-center gap-1.5 shadow-md"
              >
                <span>Resume / CV</span>
              </a>
              <a
                href="#contact"
                className="w-full sm:w-auto text-center px-3 py-2 text-zinc-400 hover:text-white font-bold text-xs uppercase tracking-wider transition-colors"
              >
                Let's Talk →
              </a>
            </div>
          </motion.div>

          {/* Center Column: Transparent Cutout layered in front of PORTFOLIO text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-5 relative flex justify-center items-end self-end z-10 -mt-2 sm:-mt-6 lg:-mt-0"
          >
            <div className="relative w-full max-w-[300px] sm:max-w-[420px] lg:max-w-[500px] flex justify-center">
              {/* Subtle ambient red spotlight behind cutout */}
              <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 sm:w-72 h-56 sm:h-72 bg-crimson-600/20 blur-[90px] sm:blur-[110px] rounded-full pointer-events-none" />

              <div className="relative w-full flex justify-center">
                <img
                  src={profileImg}
                  alt="Talha Ishaq"
                  className="w-auto h-[320px] xs:h-[380px] sm:h-[480px] lg:h-[580px] object-contain object-bottom drop-shadow-[0_20px_35px_rgba(0,0,0,0.85)] filter contrast-[1.03] brightness-100"
                />
                {/* Soft bottom blend into page background */}
                <div className="absolute inset-x-0 bottom-0 h-20 sm:h-28 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/70 to-transparent pointer-events-none" />
              </div>
            </div>
          </motion.div>

          {/* Right Column: Mini card quote & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-3 z-20 flex flex-col justify-between h-full pt-2 sm:pt-4 lg:pt-12 pl-0 lg:pl-6"
          >
            {/* Top quote pill */}
            <div className="flex items-start gap-2.5 max-w-[280px] lg:max-w-[240px] mb-4 sm:mb-6 lg:mb-16">
              <span className="text-crimson-500 text-base leading-none mt-0.5">✦</span>
              <p className="text-xs text-zinc-300 leading-snug font-medium">
                Turning ideas into powerful digital experiences &amp; automated workflows.
              </p>
            </div>

            {/* Stats: Responsive Row on Mobile, Vertical Stack on Desktop */}
            <div className="grid grid-cols-3 lg:grid-cols-1 gap-4 lg:gap-6 border-t lg:border-t-0 lg:border-l border-zinc-800/80 pt-4 lg:pt-2 pl-0 lg:pl-6 text-center lg:text-left">
              <div>
                <div className="font-sans font-black text-3xl sm:text-4xl xl:text-5xl text-crimson-500 leading-none">
                  3<span className="text-xl sm:text-2xl font-bold">+</span>
                </div>
                <div className="text-[9px] sm:text-[11px] font-bold tracking-wider sm:tracking-widest uppercase text-zinc-400 mt-1">
                  YEARS EXP
                </div>
              </div>

              <div>
                <div className="font-sans font-black text-3xl sm:text-4xl xl:text-5xl text-crimson-500 leading-none">
                  15<span className="text-xl sm:text-2xl font-bold">+</span>
                </div>
                <div className="text-[9px] sm:text-[11px] font-bold tracking-wider sm:tracking-widest uppercase text-zinc-400 mt-1">
                  PROJECTS
                </div>
              </div>

              <div>
                <div className="font-sans font-black text-3xl sm:text-4xl xl:text-5xl text-crimson-500 leading-none">
                  20<span className="text-xl sm:text-2xl font-bold">+</span>
                </div>
                <div className="text-[9px] sm:text-[11px] font-bold tracking-wider sm:tracking-widest uppercase text-zinc-400 mt-1">
                  CLIENTS &amp; FLOWS
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Bottom subtle indicator */}
      <div className="relative z-10 flex justify-center mt-6">
        <a
          href="#projects"
          className="text-zinc-600 hover:text-crimson-500 transition-colors flex flex-col items-center gap-1 text-[10px] tracking-widest uppercase"
        >
          <span>Scroll Down</span>
          <FaArrowDown className="animate-bounce text-xs" />
        </a>
      </div>
    </section>
  );
}
