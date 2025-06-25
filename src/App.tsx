import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaGitAlt } from "react-icons/fa";
import { SiTypescript, SiTailwindcss } from "react-icons/si";
import { motion } from "framer-motion";

type LogoKey = 'react' | 'js' | 'html' | 'css' | 'ts' | 'tailwind' | 'git';

type LogoDef = {
  icon: React.ComponentType<{ size: number; className?: string }>;
  colorClass: string;
  label: string;
};

const logos: Record<LogoKey, LogoDef> = {
  react: { icon: FaReact, colorClass: 'text-sky-400', label: 'React' },
  js: { icon: FaJs, colorClass: 'text-yellow-400', label: 'JavaScript' },
  html: { icon: FaHtml5, colorClass: 'text-orange-500', label: 'HTML5' },
  css: { icon: FaCss3Alt, colorClass: 'text-blue-400', label: 'CSS3' },
  ts: { icon: SiTypescript, colorClass: 'text-blue-500', label: 'TypeScript' },
  tailwind: { icon: SiTailwindcss, colorClass: 'text-cyan-400', label: 'Tailwind' },
  git: { icon: FaGitAlt, colorClass: 'text-red-500', label: 'Git' },
};

function App() {
  const [logo, setLogo] = React.useState<LogoKey>('react');
  const LogoIcon = logos[logo].icon;
  return (
    <div className="bg-white dark:bg-gray-950 min-h-screen flex flex-col relative">
      {/* Animated Background Logo */}
      <motion.div
        className="hidden md:block fixed inset-0 z-[-1] flex items-center justify-center pointer-events-none"
        initial={{ opacity: 0, scale: 0.9, rotate: 0, x: -100, y: 100 }}
        animate={{
          opacity: 0.12,
          scale: [0.9, 1.1, 0.9],
          rotate: [0, 20, -20, 0],
          x: [-100, 100, -100],
          y: [100, -100, 100],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        aria-hidden="true"
      >
        <LogoIcon size={520} className={`${logos[logo].colorClass} opacity-90 blur-sm rounded-full`} />
      </motion.div>
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;