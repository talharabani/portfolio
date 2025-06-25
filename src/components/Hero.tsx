import { motion } from "framer-motion";
import profileImg from "../assets/talha1.png";
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaGitAlt } from "react-icons/fa";
import { SiTypescript, SiTailwindcss } from "react-icons/si";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[80vh] flex flex-col md:flex-row-reverse items-center justify-center gap-12 py-16 group overflow-hidden">
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
      <motion.img
        src={profileImg}
        alt="Profile"
        className="w-56 h-56 md:w-72 md:h-72 rounded-full shadow-lg object-cover border-4 border-primary transition-all duration-300 group-hover:scale-105 group-hover:border-blue-500 group-hover:bg-blue-50 dark:group-hover:border-blue-400 dark:group-hover:bg-blue-950"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      />
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-center md:text-left"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
          Hi, I'm <span className="text-primary">TALHA ISHAQ</span>
        </h1>
        <p className="text-lg md:text-2xl mb-6 max-w-xl">
          Experienced <span className="font-semibold">Full Stack Developer</span> specializing in building scalable, high-performance web applications with modern technologies. Passionate about UI/UX, cloud solutions, and delivering robust digital products that drive business success.
        </p>
        <a
          href="#projects"
          className="inline-block px-6 py-3 bg-primary text-white rounded-lg shadow hover:bg-primary-dark transition mr-4"
        >
          View Projects
        </a>
        <a
          href="/resume.pdf"
          download
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          Download Resume
        </a>
      </motion.div>
    </section>
  );
} 