import { motion } from "framer-motion";
import profileImg from "../assets/talha1.png";
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaGitAlt, FaDownload, FaArrowDown } from "react-icons/fa";
import { SiTypescript, SiTailwindcss } from "react-icons/si";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col md:flex-row-reverse items-center justify-center gap-8 md:gap-12 py-12 md:py-16 px-4 group overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-y-12"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-l from-transparent via-blue-500/10 to-transparent transform skew-y-12"></div>
      </div>
      {/* Floating Tech Icons */}
      <motion.div
        className="absolute left-10 top-10 opacity-30 rounded-full text-sky-400"
        animate={{ y: [0, 20, 0], rotate: [0, 10, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <FaReact size={56} />
      </motion.div>
      <motion.div
        className="absolute right-10 top-24 opacity-20 rounded-full text-blue-500"
        animate={{ y: [0, -30, 0], rotate: [0, -8, 8, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <SiTypescript size={48} />
      </motion.div>
      <motion.div
        className="absolute left-24 bottom-16 opacity-20 rounded-full text-cyan-400"
        animate={{ y: [0, 18, 0], x: [0, 10, -10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <SiTailwindcss size={48} />
      </motion.div>
      <motion.div
        className="absolute right-24 bottom-10 opacity-20 rounded-full text-yellow-400"
        animate={{ y: [0, -15, 0], x: [0, -10, 10, 0] }}
        transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <FaJs size={44} />
      </motion.div>
      <motion.div
        className="absolute left-1/2 top-4 opacity-20 rounded-full text-orange-500"
        animate={{ y: [0, 25, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      >
        <FaHtml5 size={44} />
      </motion.div>
      <motion.div
        className="absolute right-1/2 bottom-4 opacity-20 rounded-full text-blue-400"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <FaCss3Alt size={44} />
      </motion.div>
      <motion.div
        className="absolute left-1/4 top-1/2 opacity-20 rounded-full text-red-500"
        animate={{ y: [0, 12, 0], rotate: [0, 8, -8, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      >
        <FaGitAlt size={40} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="relative"
        whileHover={{ 
          scale: 1.05,
          rotateY: 5,
          transition: { duration: 0.3 }
        }}
      >
        <div className="backdrop-blur-lg bg-white/10 dark:bg-black/20 rounded-full p-3 md:p-4 border border-white/20 dark:border-white/20 shadow-2xl">
          <img
            src={profileImg}
            alt="Profile"
            className="w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 rounded-full object-cover border-4 border-white/30 dark:border-white/30 shadow-xl"
          />
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-center md:text-left w-full md:w-auto"
      >
        <div className="backdrop-blur-lg bg-white/10 dark:bg-black/20 rounded-3xl p-6 md:p-8 border border-white/20 dark:border-white/20 shadow-2xl">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 leading-tight text-gray-900 dark:text-white drop-shadow-lg">
            Hi, I'm <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">TALHA ISHAQ</span>
          </h1>
          <p className="text-base sm:text-lg md:text-2xl mb-6 max-w-xl text-gray-800 dark:text-white/90 drop-shadow-md leading-relaxed">
            Experienced <span className="font-semibold text-cyan-600 dark:text-cyan-300">Full Stack Developer</span> specializing in building scalable, high-performance web applications with modern technologies. Passionate about UI/UX, cloud solutions, and delivering robust digital products that drive business success.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <motion.a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 backdrop-blur-md bg-white/20 dark:bg-white/20 text-gray-900 dark:text-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 font-semibold border border-gray-300 dark:border-white/30 hover:bg-white/40 dark:hover:bg-white/30"
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
              <FaArrowDown className="animate-bounce" />
            </motion.a>
            <motion.a
              href="/TALHA ESUME UPDATED.pdf"
              download="TALHA_RESUME_UPDATED.pdf"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 backdrop-blur-md bg-gradient-to-r from-green-500/20 to-teal-500/20 text-gray-900 dark:text-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 font-semibold border border-green-400/30 hover:bg-green-500/30"
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <FaDownload />
              Download Resume
            </motion.a>
          </div>
        </div>
      </motion.div>
    </section>
  );
} 