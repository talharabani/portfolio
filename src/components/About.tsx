import { useState, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaSearch, FaLightbulb, FaPenNib, FaCode, FaPaperPlane, FaQuoteLeft,
  FaExternalLinkAlt, FaNodeJs, FaRobot, FaGithub, FaCheckCircle
} from "react-icons/fa";
import {
  SiReact,
  SiTypescript,
  SiN8N,
  SiPython,
  SiPostgresql,
  SiTailwindcss,
  SiShopify,
  SiDocker,
} from "react-icons/si";

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

interface SkillProofLink {
  title: string;
  url: string;
  tag?: string;
}

interface SkillIntelligence {
  id: string;
  name: string;
  icon: ReactNode;
  experience: string;
  metric: string;
  deliverables: string;
  scale: string;
  links: SkillProofLink[];
}

const skillsIntelligenceData: SkillIntelligence[] = [
  {
    id: "react-next",
    name: "REACT / NEXT.JS",
    icon: <SiReact className="text-cyan-400 text-base" />,
    experience: "3+ Years • Senior Frontend",
    metric: "8+ Production Web Apps",
    deliverables: "Architected high-speed SSR/SSG portals, headless B2B wholesale storefronts, 3D WebGL car configurators, and real-time POS interfaces.",
    scale: "99+ Lighthouse performance scores, sub-second TTFB, handling 50,000+ monthly user interactions.",
    links: [
      { title: "TudoStock B2B Store", url: "https://tudostockportugal.vercel.app/en/wholesale", tag: "Live App" },
      { title: "AgentLink AI Platform", url: "https://agentlink-mu.vercel.app/", tag: "Live App" },
      { title: "Veloce 3D Car", url: "https://veloce-lime-five.vercel.app/", tag: "Live App" },
    ],
  },
  {
    id: "n8n-automation",
    name: "n8n AUTOMATION",
    icon: <SiN8N className="text-crimson-400 text-base" />,
    experience: "2+ Years • Workflow Architect",
    metric: "50+ Production Pipelines",
    deliverables: "Engineered autonomous AI agents, multi-channel B2B lead generation bots, automated video rendering pipelines, and CRM auto-sync workflows.",
    scale: "15,000+ automated tasks executed/month with 99.8% uptime, eliminating 85% of manual operational hours.",
    links: [
      { title: "n8n Workflows Section", url: "#automation", tag: "Portfolio" },
      { title: "LeadGen Automation Repo", url: "https://github.com/talharabani", tag: "GitHub" },
    ],
  },
  {
    id: "typescript",
    name: "TYPESCRIPT",
    icon: <SiTypescript className="text-blue-400 text-base" />,
    experience: "3+ Years • Strict Architecture",
    metric: "100% Type-Safe Codebases",
    deliverables: "Enforced strict end-to-end type safety, custom generic utilities, complex UI state management, and reliable backend API contract validation.",
    scale: "Zero runtime type regressions across 10+ production client applications and open-source packages.",
    links: [
      { title: "AgentLink TypeScript Code", url: "https://agentlink-mu.vercel.app/", tag: "Live App" },
      { title: "Vaypar POS Architecture", url: "https://vaypar-nine.vercel.app/", tag: "Live App" },
    ],
  },
  {
    id: "nodejs",
    name: "NODE.JS & EXPRESS",
    icon: <FaNodeJs className="text-emerald-400 text-base" />,
    experience: "3+ Years • Backend Systems",
    metric: "50k+ Daily API Requests",
    deliverables: "Engineered high-throughput RESTful services, WebSocket real-time event sync, JWT/OAuth2 authentication, and multi-tenant billing webhooks.",
    scale: "Microsecond Redis caching layers, robust connection pooling, and resilient background task queues.",
    links: [
      { title: "Vaypar POS Backend", url: "https://vaypar-nine.vercel.app/", tag: "Live App" },
      { title: "Backend Repositories", url: "https://github.com/talharabani", tag: "GitHub" },
    ],
  },
  {
    id: "python-django",
    name: "PYTHON & AI",
    icon: <SiPython className="text-yellow-400 text-base" />,
    experience: "2.5+ Years • AI & Microservices",
    metric: "100k+ Data Points Analyzed",
    deliverables: "Developed Cyber-Physical System (CPS) attack detection algorithms, web scrapers, and vector embedding microservices for LLMs.",
    scale: "Trained and deployed deep anomaly detection models analyzing 100,000+ sensor telemetry records with 98.4% accuracy.",
    links: [
      { title: "CPS Attack Detection Repo", url: "https://github.com/talharabani", tag: "GitHub" },
      { title: "Autonomous AI Workflows", url: "#automation", tag: "Pipeline" },
    ],
  },
  {
    id: "databases",
    name: "POSTGRESQL & MONGO",
    icon: <SiPostgresql className="text-blue-400 text-base" />,
    experience: "3+ Years • Relational & NoSQL",
    metric: "500k+ Records Managed",
    deliverables: "Designed normalized schemas, JSONB document storage, composite indexing, complex aggregation pipelines, and atomic transaction handling.",
    scale: "Sub-15ms complex analytical query response across 500,000+ multi-tenant inventory & invoice records.",
    links: [
      { title: "TudoStock Database System", url: "https://tudostockportugal.vercel.app/en/wholesale", tag: "Wholesale" },
      { title: "Vaypar Database Schema", url: "https://vaypar-nine.vercel.app/", tag: "POS" },
    ],
  },
  {
    id: "tailwind-framer",
    name: "TAILWIND CSS & UI",
    icon: <SiTailwindcss className="text-teal-400 text-base" />,
    experience: "3+ Years • Modern Design Systems",
    metric: "100% Mobile Responsive",
    deliverables: "Designed bespoke dark luxury design systems, accessible UI interactions, responsive fluid typography, and 60 FPS Framer Motion animations.",
    scale: "0.00 Cumulative Layout Shift (CLS), zero jank, perfectly responsive down to 320px mobile displays.",
    links: [
      { title: "Veloce 3D Interactive UI", url: "https://veloce-lime-five.vercel.app/", tag: "Live 3D" },
      { title: "Portfolio Design System", url: "https://github.com/talharabani/portfolio", tag: "GitHub" },
    ],
  },
  {
    id: "shopify",
    name: "SHOPIFY INTEGRATIONS",
    icon: <SiShopify className="text-emerald-400 text-base" />,
    experience: "2+ Years • Headless B2B",
    metric: "2,000+ Active SKUs",
    deliverables: "Implemented Shopify Storefront GraphQL API with custom Next.js storefronts, automated physical POS inventory sync, and tiered wholesale pricing.",
    scale: "Powering real-time B2B bulk orders for European electronics distributor with automated invoice generation.",
    links: [
      { title: "TudoStock Wholesale Portal", url: "https://tudostockportugal.vercel.app/en/wholesale", tag: "Live App" },
    ],
  },
  {
    id: "ai-agents",
    name: "AI & LLM AGENTS",
    icon: <FaRobot className="text-crimson-400 text-base" />,
    experience: "2+ Years • RAG & Tool Calling",
    metric: "Sub-1s Voice & Text AI",
    deliverables: "Built autonomous multi-step agents, vector retrieval augmented generation (RAG), and integrated speech-to-speech voice assistants.",
    scale: "Custom-trained AI Voice Assistant integrated on this portfolio responding in real-time with zero hallucinations.",
    links: [
      { title: "AgentLink Multi-Agent", url: "https://agentlink-mu.vercel.app/", tag: "Live Platform" },
      { title: "Try Voice AI Assistant", url: "#hero", tag: "Interactive" },
    ],
  },
  {
    id: "apis",
    name: "REST & GRAPHQL APIS",
    icon: <FaCode className="text-amber-400 text-base" />,
    experience: "3+ Years • API Contracts",
    metric: "30+ Third-Party Integrations",
    deliverables: "Designed scalable RESTful endpoints, unified GraphQL schemas, webhook receivers, and rate-limited API gateways with Swagger/OpenAPI docs.",
    scale: "Integrated Stripe, Twilio, WhatsApp Cloud API, Shopify Storefront, Google Cloud APIs, and custom webhook listeners.",
    links: [
      { title: "FoodGuy Restaurant API", url: "https://food-guy.vercel.app/", tag: "Live App" },
      { title: "PakRentals Fleet Booking", url: "https://github.com/talharabani", tag: "GitHub" },
    ],
  },
  {
    id: "docker-vercel",
    name: "DOCKER & VERCEL",
    icon: <SiDocker className="text-sky-400 text-base" />,
    experience: "2.5+ Years • Cloud & CI/CD",
    metric: "12+ Production Deploys",
    deliverables: "Containerized full-stack services with Docker Compose, automated staging/preview environments, and configured global Vercel Edge networks.",
    scale: "Automated rolling zero-downtime deployments, sub-100ms global edge delivery, and automatic SSL orchestration.",
    links: [
      { title: "Cloud Deployments Repo", url: "https://github.com/talharabani", tag: "GitHub" },
      { title: "AgentLink Edge Deployment", url: "https://agentlink-mu.vercel.app/", tag: "Vercel" },
    ],
  },
  {
    id: "git",
    name: "GIT & GITHUB ACTIONS",
    icon: <FaGithub className="text-zinc-200 text-base" />,
    experience: "3+ Years • DevOps Automation",
    metric: "400+ Production Commits",
    deliverables: "Implemented GitFlow release lifecycles, automated PR lint/test check gates with GitHub Actions, and semantic release publishing.",
    scale: "15+ active repositories maintained with 100% build pass rates and automated production deployment on main branch pushes.",
    links: [
      { title: "GitHub Profile @talharabani", url: "https://github.com/talharabani", tag: "GitHub" },
    ],
  },
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
  const [selectedSkillId, setSelectedSkillId] = useState<string>("react-next");

  const currentSkill =
    skillsIntelligenceData.find((s) => s.id === selectedSkillId) ||
    skillsIntelligenceData[0];

  return (
    <section id="process" className="bg-[#0a0a0a] py-14 sm:py-20 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-stretch">
          
          {/* Column 1: EDUCATION & INTERACTIVE SKILLS (4 Cols) */}
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

              {/* Interactive Skills Intelligence Sub-block */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] sm:text-xs font-black uppercase tracking-widest text-crimson-500">
                    CORE SKILLS &amp; PROOFS
                  </span>
                  <span className="text-[9px] font-mono text-zinc-500 hidden sm:inline">
                    Tap to inspect deliverables &amp; links
                  </span>
                </div>

                {/* Skill Pills Grid */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
                  {skillsIntelligenceData.map((skill) => {
                    const isActive = skill.id === selectedSkillId;
                    return (
                      <button
                        key={skill.id}
                        onClick={() => setSelectedSkillId(skill.id)}
                        className={`flex items-center gap-1.5 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider px-2.5 sm:px-3 py-1.5 rounded-lg transition-all duration-200 cursor-pointer ${
                          isActive
                            ? "bg-crimson-950/80 text-white border border-crimson-500 shadow-[0_0_12px_rgba(220,38,38,0.4)] scale-102"
                            : "bg-zinc-950 hover:bg-zinc-900 text-zinc-400 hover:text-zinc-200 border border-zinc-800/90 hover:border-zinc-700"
                        }`}
                        title={`Click to view deliverables and proofs for ${skill.name}`}
                      >
                        <span className="shrink-0">{skill.icon}</span>
                        <span>{skill.name}</span>
                        {isActive && (
                          <span className="w-1.5 h-1.5 rounded-full bg-crimson-400 animate-pulse ml-0.5 shrink-0" />
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Animated Skill Details & Deliverables Proof Card */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSkill.id}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="p-4 sm:p-4.5 rounded-xl bg-gradient-to-br from-zinc-950 via-[#0d0e12] to-zinc-950 border border-zinc-800/90 shadow-xl relative overflow-hidden"
                  >
                    {/* Background subtle glow */}
                    <div className="absolute top-0 right-0 w-28 h-28 bg-crimson-600/10 blur-2xl pointer-events-none rounded-full" />

                    {/* Card Header: Icon + Name + Experience */}
                    <div className="flex items-start justify-between gap-3 pb-3 border-b border-zinc-900/90 relative z-10">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0">
                          {currentSkill.icon}
                        </div>
                        <div>
                          <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                            {currentSkill.name}
                          </h4>
                          <span className="text-[10px] text-zinc-400 font-mono block">
                            {currentSkill.experience}
                          </span>
                        </div>
                      </div>

                      <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-crimson-400 bg-crimson-950/60 border border-crimson-900/60 px-2 py-0.5 rounded shrink-0">
                        {currentSkill.metric}
                      </span>
                    </div>

                    {/* Section 1: Kya Kya Kaam Kiya (Deliverables) */}
                    <div className="pt-3 relative z-10">
                      <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-zinc-400 block mb-1">
                        DELIVERABLES &amp; SYSTEMS BUILT
                      </span>
                      <p className="text-xs text-zinc-300 leading-relaxed font-normal">
                        {currentSkill.deliverables}
                      </p>
                    </div>

                    {/* Section 2: Kitna Kitna Kiya (Scale & Scope) */}
                    <div className="pt-2.5 relative z-10">
                      <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-zinc-400 block mb-1">
                        SCALE &amp; MEASURABLE IMPACT
                      </span>
                      <p className="text-[11px] text-emerald-400/90 leading-snug font-medium flex items-start gap-1.5">
                        <FaCheckCircle className="text-emerald-500 text-[10px] shrink-0 mt-0.5" />
                        <span>{currentSkill.scale}</span>
                      </p>
                    </div>

                    {/* Section 3: Project Links & Proofs (Professional Proofs) */}
                    <div className="pt-3 border-t border-zinc-900/90 mt-3 relative z-10">
                      <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-zinc-400 block mb-1.5">
                        VERIFIED PROJECTS &amp; PROOFS
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {currentSkill.links.map((link, idx) => (
                          <a
                            key={idx}
                            href={link.url}
                            target={link.url.startsWith("#") ? "_self" : "_blank"}
                            rel={link.url.startsWith("#") ? undefined : "noopener noreferrer"}
                            className="inline-flex items-center gap-1.5 text-[10px] font-bold text-zinc-200 hover:text-white bg-zinc-900 hover:bg-crimson-950/60 border border-zinc-800 hover:border-crimson-500/80 px-2.5 py-1 rounded-md transition-all duration-200 group/link"
                          >
                            <span>{link.title}</span>
                            <FaExternalLinkAlt className="text-[8px] text-crimson-400 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                          </a>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
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
