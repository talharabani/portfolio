import { useState, useEffect } from "react";
import { motion, useMotionValue, useTransform, useSpring, AnimatePresence } from "framer-motion";
import profileImg from "../assets/talha1.png";
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaGitAlt, FaDownload, FaArrowDown } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiN8N } from "react-icons/si";

const roles = [
  "Full Stack Developer",
  "n8n Automation Expert",
  "React & React Native Dev",
  "Workflow Automation Builder",
];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setRoleIdx((prev) => (prev + 1) % roles.length), 2800);
    return () => clearInterval(id);
  }, []);

  // 3D mouse-tracking for profile card
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useTransform(my, [-0.5, 0.5], [18, -18]);
  const rotateY = useTransform(mx, [-0.5, 0.5], [-18, 18]);
  const springRotX = useSpring(rotateX, { stiffness: 260, damping: 26 });
  const springRotY = useSpring(rotateY, { stiffness: 260, damping: 26 });
  const profileScale = useSpring(useMotionValue(1), { stiffness: 300, damping: 30 });

  const handleProfileMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
    profileScale.set(1.04);
  };
  const handleProfileMouseLeave = () => {
    mx.set(0);
    my.set(0);
    profileScale.set(1);
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col md:flex-row-reverse items-center justify-center gap-8 md:gap-12 py-12 md:py-16 px-4 group overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-y-12" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-l from-transparent via-blue-500/10 to-transparent transform skew-y-12" />
      </div>

      {/* Floating Tech Icons */}
      {[
        { el: <FaReact size={56} />, cls: "text-sky-400 left-10 top-10", anim: { y: [0,20,0], rotate:[0,10,-10,0] }, dur: 6 },
        { el: <SiTypescript size={48} />, cls: "text-blue-500 right-10 top-24", anim: { y:[0,-30,0], rotate:[0,-8,8,0] }, dur: 7 },
        { el: <SiTailwindcss size={48} />, cls: "text-cyan-400 left-24 bottom-16", anim: { y:[0,18,0], x:[0,10,-10,0] }, dur: 8 },
        { el: <FaJs size={44} />, cls: "text-yellow-400 right-24 bottom-10", anim: { y:[0,-15,0], x:[0,-10,10,0] }, dur: 7.5 },
        { el: <FaHtml5 size={44} />, cls: "text-orange-500 left-1/2 top-4", anim: { y:[0,25,0] }, dur: 9 },
        { el: <FaCss3Alt size={44} />, cls: "text-blue-400 right-1/2 bottom-4", anim: { y:[0,-20,0] }, dur: 8.5 },
        { el: <FaGitAlt size={40} />, cls: "text-red-500 left-1/4 top-1/2", anim: { y:[0,12,0], rotate:[0,8,-8,0] }, dur: 10 },
        { el: <SiN8N size={36} />, cls: "text-orange-400 right-1/4 top-1/3", anim: { y:[0,-18,0], rotate:[0,15,-15,0] }, dur: 8 },
      ].map((item, i) => (
        <motion.div
          key={i}
          className={`absolute opacity-20 rounded-full hidden md:block ${item.cls}`}
          animate={item.anim}
          transition={{ duration: item.dur, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      {/* Profile with real 3D mouse tilt */}
      <motion.div
        initial={{ opacity: 0, x: 60, rotateY: -20 }}
        animate={{ opacity: 1, x: 0, rotateY: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative"
        style={{ perspective: "1000px" }}
      >
        <motion.div
          onMouseMove={handleProfileMouseMove}
          onMouseLeave={handleProfileMouseLeave}
          style={{
            rotateX: springRotX,
            rotateY: springRotY,
            scale: profileScale,
            transformStyle: "preserve-3d",
          }}
          className="relative"
        >
          <div className="backdrop-blur-lg bg-white/10 dark:bg-black/20 rounded-full p-3 md:p-4 border border-white/20 shadow-2xl">
            <img
              src={profileImg}
              alt="Talha Ishaq"
              className="w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 rounded-full object-cover border-4 border-white/30 shadow-xl"
            />
          </div>

          {/* n8n expert badge */}
          <motion.div
            style={{ translateZ: 40 }}
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-2 -right-2 md:-bottom-3 md:-right-3 flex items-center gap-1.5 px-3 py-2 rounded-2xl bg-orange-500 shadow-xl shadow-orange-500/40 border border-orange-400/50"
          >
            <SiN8N className="text-white text-base" />
            <span className="text-white text-xs font-bold">n8n Expert</span>
          </motion.div>

          {/* Available badge */}
          <motion.div
            style={{ translateZ: 30 }}
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -top-2 -left-2 md:-top-3 md:-left-3 flex items-center gap-1.5 px-3 py-2 rounded-2xl bg-green-500 shadow-xl shadow-green-500/40 border border-green-400/50"
          >
            <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
            <span className="text-white text-xs font-bold">Available</span>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Text content */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="text-center md:text-left w-full md:w-auto"
      >
        <div className="backdrop-blur-lg bg-white/10 dark:bg-black/20 rounded-3xl p-6 md:p-8 border border-white/20 shadow-2xl">
          <motion.h1
            className="text-3xl sm:text-4xl md:text-6xl font-bold mb-3 leading-tight text-white drop-shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              TALHA ISHAQ
            </span>
          </motion.h1>

          {/* Cycling role text */}
          <div className="flex items-center justify-center md:justify-start gap-2 mb-4 h-8">
            <span className="text-white/70 text-lg md:text-xl font-light">I'm a</span>
            <div className="overflow-hidden h-8">
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleIdx}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -30, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className={`block text-lg md:text-xl font-bold ${
                    roleIdx === 1
                      ? "text-orange-400"
                      : "bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
                  }`}
                >
                  {roles[roleIdx]}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>

          <motion.p
            className="text-sm sm:text-base md:text-lg mb-6 max-w-xl text-white/80 drop-shadow-md leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Full Stack Developer &amp; n8n Automation Expert — I build scalable web apps and powerful automation
            workflows that generate leads, create content, and post across social media platforms — all on autopilot.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65 }}
          >
            <motion.a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 backdrop-blur-md bg-white/20 text-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 font-semibold border border-white/30 hover:bg-white/30"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
              <FaArrowDown className="animate-bounce" />
            </motion.a>
            <motion.a
              href="#automation"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-2xl shadow-xl hover:shadow-orange-500/40 transition-all duration-300 font-semibold"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <SiN8N />
              My Automations
            </motion.a>
            <motion.a
              href="/TALHA ESUME UPDATED.pdf"
              download="TALHA_RESUME_UPDATED.pdf"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 backdrop-blur-md bg-gradient-to-r from-green-500/20 to-teal-500/20 text-white rounded-2xl shadow-xl transition-all duration-300 font-semibold border border-green-400/30 hover:bg-green-500/30"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaDownload />
              Resume
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
