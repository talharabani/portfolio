import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { SiN8N, SiLinkedin, SiInstagram } from "react-icons/si";
import {
  FaRobot, FaMapMarkerAlt, FaArrowRight, FaDatabase, FaCalendarAlt,
  FaBrain, FaFilter, FaShareAlt, FaChartLine, FaClock, FaCheckCircle,
  FaTable, FaFacebook, FaPaperPlane, FaRocket,
} from "react-icons/fa";
import React from "react";

interface WorkflowNode {
  icon: React.ReactNode;
  label: string;
  color: string;
}

interface WorkflowItem {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  accentFrom: string;
  accentTo: string;
  glowColor: string;
  nodes: WorkflowNode[];
  tags: string[];
  stat: string;
  statLabel: string;
}

function TiltCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-0.5, 0.5], [14, -14]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-14, 14]);
  const springRotX = useSpring(rotateX, { stiffness: 280, damping: 28 });
  const springRotY = useSpring(rotateY, { stiffness: 280, damping: 28 });

  return (
    <div style={{ perspective: "1000px" }} className={className}>
      <motion.div
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          x.set((e.clientX - rect.left) / rect.width - 0.5);
          y.set((e.clientY - rect.top) / rect.height - 0.5);
        }}
        onMouseLeave={() => { x.set(0); y.set(0); }}
        style={{ rotateX: springRotX, rotateY: springRotY, transformStyle: "preserve-3d" }}
        className="h-full"
      >
        {children}
      </motion.div>
    </div>
  );
}

const workflows: WorkflowItem[] = [
  {
    id: 1,
    title: "Lead Generation from Google Maps",
    description:
      "Scrapes business data from Google Maps by location & category, filters and enriches leads, then automatically pushes them to Google Sheets or CRM — 500+ leads per run, fully hands-free.",
    icon: <FaMapMarkerAlt className="text-2xl text-white" />,
    accentFrom: "from-green-500",
    accentTo: "to-emerald-600",
    glowColor: "shadow-green-500/30",
    nodes: [
      { icon: <FaMapMarkerAlt />, label: "Google Maps", color: "border-green-400/40 bg-green-500/20 text-green-300" },
      { icon: <FaFilter />, label: "Extract", color: "border-emerald-400/40 bg-emerald-500/20 text-emerald-300" },
      { icon: <FaDatabase />, label: "Enrich", color: "border-teal-400/40 bg-teal-500/20 text-teal-300" },
      { icon: <FaTable />, label: "Sheets / CRM", color: "border-green-400/40 bg-green-500/20 text-green-300" },
    ],
    tags: ["Google Maps API", "HTTP Request", "Data Enrichment", "Google Sheets"],
    stat: "500+",
    statLabel: "leads/run",
  },
  {
    id: 2,
    title: "AI Content Auto-Generator",
    description:
      "Triggers on a schedule, calls GPT-4 to generate platform-specific captions and hashtags tailored to your brand voice, and queues posts for review — zero manual writing required.",
    icon: <FaBrain className="text-2xl text-white" />,
    accentFrom: "from-purple-500",
    accentTo: "to-violet-600",
    glowColor: "shadow-purple-500/30",
    nodes: [
      { icon: <FaCalendarAlt />, label: "Scheduler", color: "border-purple-400/40 bg-purple-500/20 text-purple-300" },
      { icon: <FaBrain />, label: "GPT-4 AI", color: "border-violet-400/40 bg-violet-500/20 text-violet-300" },
      { icon: <FaPaperPlane />, label: "Generate Post", color: "border-indigo-400/40 bg-indigo-500/20 text-indigo-300" },
      { icon: <FaCheckCircle />, label: "Post Ready", color: "border-purple-400/40 bg-purple-500/20 text-purple-300" },
    ],
    tags: ["OpenAI GPT-4", "Prompt Engineering", "Content Pipeline", "Brand Voice"],
    stat: "50+",
    statLabel: "posts/week",
  },
  {
    id: 3,
    title: "Multi-Platform Social Media Poster",
    description:
      "One trigger posts to LinkedIn, Instagram, and Facebook simultaneously — with platform-specific formatting, optimal timing, and built-in retry logic for failed posts.",
    icon: <FaShareAlt className="text-2xl text-white" />,
    accentFrom: "from-blue-500",
    accentTo: "to-cyan-500",
    glowColor: "shadow-blue-500/30",
    nodes: [
      { icon: <FaRobot />, label: "Content Ready", color: "border-blue-400/40 bg-blue-500/20 text-blue-300" },
      { icon: <SiLinkedin />, label: "LinkedIn", color: "border-blue-400/40 bg-blue-700/20 text-blue-300" },
      { icon: <SiInstagram />, label: "Instagram", color: "border-pink-400/40 bg-pink-500/20 text-pink-300" },
      { icon: <FaFacebook />, label: "Facebook", color: "border-blue-400/40 bg-blue-600/20 text-blue-300" },
    ],
    tags: ["LinkedIn API", "Instagram API", "Facebook API", "Multi-Platform"],
    stat: "4+",
    statLabel: "platforms at once",
  },
];

const stats = [
  { icon: <SiN8N className="text-3xl text-orange-400" />, value: "10+", label: "Workflows Built" },
  { icon: <FaShareAlt className="text-3xl text-blue-400" />, value: "4+", label: "Platforms Connected" },
  { icon: <FaClock className="text-3xl text-green-400" />, value: "24/7", label: "Always Running" },
  { icon: <FaChartLine className="text-3xl text-purple-400" />, value: "100%", label: "Automated" },
];

export default function N8nAutomation() {
  return (
    <section id="automation" className="relative py-16 md:py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-orange-950 to-gray-950">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23EA6B24' fill-opacity='0.08'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-orange-500/5 to-transparent transform -skew-y-12" />
      </div>

      {/* Floating n8n logos */}
      <motion.div
        className="absolute left-8 top-12 opacity-10 hidden md:block"
        animate={{ y: [0, -24, 0], rotate: [0, 10, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <SiN8N size={64} className="text-orange-400" />
      </motion.div>
      <motion.div
        className="absolute right-8 bottom-16 opacity-10 hidden md:block"
        animate={{ y: [0, 20, 0], rotate: [0, -8, 8, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      >
        <SiN8N size={80} className="text-orange-400" />
      </motion.div>
      <motion.div
        className="absolute left-1/3 bottom-8 opacity-5 hidden md:block"
        animate={{ y: [0, 16, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      >
        <SiN8N size={120} className="text-orange-400" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="backdrop-blur-md bg-white/5 rounded-3xl p-8 border border-orange-500/20 shadow-2xl shadow-orange-500/10 inline-block w-full">
            <div className="flex items-center justify-center gap-4 mb-4">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="p-3 rounded-2xl bg-orange-500/20 border border-orange-400/30"
              >
                <SiN8N className="text-4xl md:text-5xl text-orange-400" />
              </motion.div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500 bg-clip-text text-transparent">
                n8n Automation Expert
              </h2>
            </div>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              I build powerful automation workflows that run{" "}
              <span className="font-semibold text-orange-400">24/7 without manual intervention</span> — from lead
              generation to AI content creation and multi-platform social media posting.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
              {["Lead Generation", "AI Content", "Social Media", "Google Maps", "LinkedIn", "Instagram"].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-1.5 rounded-full text-sm font-medium bg-orange-500/15 border border-orange-400/30 text-orange-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Workflow Cards */}
        <div className="grid lg:grid-cols-3 gap-6 md:gap-8 mb-16">
          {workflows.map((wf, idx) => (
            <motion.div
              key={wf.id}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              <TiltCard className="h-full">
                <div
                  className={`h-full backdrop-blur-lg bg-white/5 rounded-3xl border border-white/10 shadow-2xl ${wf.glowColor} overflow-hidden flex flex-col`}
                >
                  {/* Card accent bar + header */}
                  <div className={`bg-gradient-to-r ${wf.accentFrom} ${wf.accentTo} p-5`}>
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 shadow-lg">
                        {wf.icon}
                      </div>
                      <h3 className="text-lg font-bold text-white leading-tight">{wf.title}</h3>
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col gap-5">
                    <p className="text-gray-400 text-sm leading-relaxed">{wf.description}</p>

                    {/* Workflow node diagram */}
                    <div className="space-y-1">
                      <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-3">Workflow</p>
                      <div className="flex flex-wrap items-center gap-2">
                        {wf.nodes.map((node, ni) => (
                          <React.Fragment key={node.label}>
                            <motion.div
                              initial={{ opacity: 0, scale: 0.7 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: idx * 0.15 + ni * 0.1 + 0.3 }}
                              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl border text-xs font-semibold ${node.color}`}
                            >
                              {node.icon}
                              <span>{node.label}</span>
                            </motion.div>
                            {ni < wf.nodes.length - 1 && (
                              <FaArrowRight className="text-gray-600 flex-shrink-0 text-xs" />
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {wf.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-lg text-xs bg-white/8 border border-white/10 text-gray-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Stat badge */}
                    <div
                      className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-gradient-to-r ${wf.accentFrom}/15 ${wf.accentTo}/15 border border-white/10`}
                    >
                      <FaRocket className="text-orange-400 flex-shrink-0" />
                      <span className="text-white font-bold text-lg">{wf.stat}</span>
                      <span className="text-gray-400 text-sm">{wf.statLabel}</span>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12"
        >
          {stats.map((s, idx) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="backdrop-blur-lg bg-white/5 rounded-3xl p-6 border border-white/10 shadow-xl text-center"
            >
              <div className="flex justify-center mb-3">{s.icon}</div>
              <div className="text-3xl font-bold text-white mb-1">{s.value}</div>
              <div className="text-sm text-gray-400">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="backdrop-blur-xl bg-gradient-to-r from-orange-500/10 via-amber-500/10 to-orange-500/10 rounded-3xl p-8 border border-orange-400/20 shadow-2xl shadow-orange-500/10">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 text-white">
              Need a Custom Automation Workflow?
            </h3>
            <p className="text-gray-400 mb-6 max-w-xl mx-auto">
              From lead generation to social media automation — I can build n8n workflows that save you hours every week.
            </p>
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-2xl font-bold shadow-xl hover:shadow-orange-500/40 transition-all duration-300"
              whileHover={{ scale: 1.06, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <SiN8N />
              Let's Automate Together
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
