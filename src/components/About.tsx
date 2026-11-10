import { motion } from "framer-motion";
import { 
  FaSearch, FaLightbulb, FaPenNib, FaCode, FaPaperPlane, FaQuoteLeft 
} from "react-icons/fa";

const educationList = [
  {
    degree: "Information Technology (BS IT)",
    institution: "Punjab University College of Information Technology (PUCIT)",
    years: "2022 — 2026",
  },
  {
    degree: "Software Engineer",
    institution: "DevelopSuite (Lahore)",
    years: "2 Years",
  },
  {
    degree: "Freelance Full-Stack Developer",
    institution: "PureLogics",
    years: "2023 — Present",
  },
];

const skillsList = [
  "REACT / NEXT.JS",
  "NODE.JS",
  "TYPESCRIPT",
  "PYTHON & DJANGO",
  "RUBY ON RAILS",
  "n8n AUTOMATION",
  "POSTGRESQL & MONGODB",
  "TAILWIND CSS",
  "REST & GRAPHQL APIS",
  "ZAPIER & MAKE",
  "DOCKER & VERCEL",
  "SHOPIFY INTEGRATIONS",
  "AI & LLM AGENTS",
  "GIT / GITHUB",
];

const workProcessSteps = [
  {
    num: "01",
    icon: <FaSearch className="text-crimson-400 text-xs" />,
    title: "DISCOVER",
    desc: "Understanding goals, technical requirements, and core problems.",
  },
  {
    num: "02",
    icon: <FaLightbulb className="text-crimson-400 text-xs" />,
    title: "IDEATE",
    desc: "Planning system architecture, UI wireframes, and data flow.",
  },
  {
    num: "03",
    icon: <FaPenNib className="text-crimson-400 text-xs" />,
    title: "DESIGN",
    desc: "Crafting modern, accessible interfaces with clean UX.",
  },
  {
    num: "04",
    icon: <FaCode className="text-crimson-400 text-xs" />,
    title: "DEVELOP",
    desc: "Building fast, high-performance apps & autonomous workflows.",
  },
  {
    num: "05",
    icon: <FaPaperPlane className="text-crimson-400 text-xs" />,
    title: "DELIVER",
    desc: "Testing thoroughly, optimizing performance, and deploying.",
  },
];

export default function About() {
  return (
    <section id="process" className="bg-[#0a0a0a] py-14 sm:py-20 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-stretch">
          
          {/* Column 1: EDUCATION & SKILLS (4 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 flex flex-col justify-between"
          >
            <div>
              <h2 className="text-base sm:text-lg font-black uppercase tracking-wider text-white mb-5 sm:mb-6">
                EDUCATION &amp; SKILLS
              </h2>

              {/* Education Sub-block */}
              <div className="mb-7 sm:mb-8">
                <span className="text-[11px] sm:text-xs font-black uppercase tracking-widest text-crimson-500 block mb-3 sm:mb-4">
                  EDUCATION &amp; EXPERIENCE
                </span>

                <div className="space-y-3.5 sm:space-y-4">
                  {educationList.map((edu, i) => (
                    <div key={i} className="flex flex-col sm:flex-row sm:justify-between items-start gap-1 sm:gap-4 pb-3 border-b border-zinc-900">
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold text-zinc-100">
                          {edu.degree}
                        </h4>
                        <p className="text-[11px] text-zinc-500 mt-0.5">
                          {edu.institution}
                        </p>
                      </div>
                      <span className="text-[10px] sm:text-[11px] font-mono text-zinc-500 whitespace-nowrap shrink-0">
                        {edu.years}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills Sub-block */}
              <div>
                <span className="text-[11px] sm:text-xs font-black uppercase tracking-widest text-crimson-500 block mb-3">
                  CORE SKILLS
                </span>

                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {skillsList.map((skill) => (
                    <span
                      key={skill}
                      className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider bg-zinc-950 hover:bg-zinc-900 text-zinc-300 border border-zinc-800/90 hover:border-zinc-700 px-2.5 sm:px-3 py-1.5 rounded transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Column 2: WORK PROCESS (4 Cols) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.14,
                  delayChildren: 0.15,
                },
              },
            }}
            className="lg:col-span-4"
          >
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-crimson-500 animate-pulse" />
              <h2 className="text-base sm:text-lg font-black uppercase tracking-wider text-white">
                WORK PROCESS
              </h2>
            </div>

            <div className="relative pl-1 space-y-4">
              {/* Connecting vertical line (Curtain track drawing down) */}
              <motion.div
                variants={{
                  hidden: { scaleY: 0, opacity: 0 },
                  visible: {
                    scaleY: 1,
                    opacity: 1,
                    transition: {
                      duration: 1.1,
                      ease: [0.22, 1, 0.36, 1],
                    },
                  },
                }}
                style={{ originY: 0 }}
                className="absolute top-4 bottom-4 left-[43px] w-[2px] bg-gradient-to-b from-crimson-500 via-crimson-600/60 to-zinc-800 -z-0"
              />

              {/* Animated Glowing Laser Pulse rolling down the curtain track */}
              <motion.div
                animate={{
                  top: ["0%", "100%"],
                  opacity: [0, 1, 1, 0],
                }}
                transition={{
                  duration: 2.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  repeatDelay: 0.8,
                }}
                className="absolute left-[42px] w-1 h-14 bg-gradient-to-b from-transparent via-crimson-400 to-transparent blur-[1px] pointer-events-none -z-0"
              />

              {workProcessSteps.map((step) => (
                <motion.div
                  key={step.num}
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: -35,
                      scaleY: 0.88,
                      filter: "blur(5px)",
                    },
                    visible: {
                      opacity: 1,
                      y: 0,
                      scaleY: 1,
                      filter: "blur(0px)",
                      transition: {
                        type: "spring",
                        damping: 17,
                        stiffness: 95,
                        mass: 0.75,
                      },
                    },
                  }}
                  whileHover={{
                    x: 6,
                    transition: { type: "spring", stiffness: 350, damping: 20 },
                  }}
                  className="relative z-10 flex items-start gap-3.5 p-2.5 -ml-2.5 rounded-xl transition-all duration-300 hover:bg-zinc-900/50 border border-transparent hover:border-zinc-800/80 group cursor-default"
                >
                  <div className="flex items-center gap-2.5 shrink-0 pt-0.5">
                    <span className="font-mono text-xs font-bold text-crimson-500 group-hover:text-crimson-400 group-hover:scale-105 transition-all w-4 text-center">
                      {step.num}
                    </span>
                    <div className="w-7 h-7 rounded-full bg-zinc-900/90 border border-zinc-800 group-hover:border-crimson-500 group-hover:bg-crimson-950/70 group-hover:shadow-[0_0_12px_rgba(220,38,38,0.45)] flex items-center justify-center shrink-0 transition-all duration-300">
                      {step.icon}
                    </div>
                  </div>

                  <div className="flex-1">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-crimson-400 group-hover:text-white transition-colors duration-200">
                      {step.title}
                    </h4>
                    <p className="text-xs text-zinc-400 group-hover:text-zinc-200 leading-snug mt-0.5 font-normal transition-colors duration-200">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Column 3: EDITORIAL QUOTE CARD (4 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-4 flex"
          >
            <div className="w-full bg-[#820f16] border border-[#a81c25] rounded-2xl p-6 sm:p-10 flex flex-col justify-between text-white shadow-2xl relative overflow-hidden group">
              
              {/* Subtle background texture */}
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-white/5 rounded-full blur-2xl pointer-events-none" />

              <div>
                <FaQuoteLeft className="text-3xl text-red-300/40 mb-6" />

                <blockquote className="text-lg sm:text-xl font-bold leading-relaxed text-zinc-100 tracking-tight">
                  "Good design and smart code are not just how it looks, but how effortlessly it scales and works."
                </blockquote>

                <div className="mt-8 font-script text-3xl sm:text-4xl text-red-200">
                  Talha Ishaq
                </div>
              </div>

              <div className="pt-8 border-t border-red-700/60 mt-8 flex items-center justify-between">
                <span className="text-[11px] font-black uppercase tracking-widest text-red-200">
                  LET'S CREATE SOMETHING GREAT TOGETHER
                </span>
                <span className="text-lg font-bold text-red-200 group-hover:rotate-45 transition-transform duration-300">
                  +
                </span>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
