import { motion } from "framer-motion";
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaGitAlt } from "react-icons/fa";
import { SiTypescript, SiTailwindcss } from "react-icons/si";
import musicImg from "../assets/music.jpg";
import realestateImg from "../assets/realestate.jpg";
import tictactoeImg from "../assets/tictactoe.jpg";
import calculatorImg from "../assets/calculator.jpg";
import groceryImg from "../assets/grocery.jpg";
import carImg from "../assets/car.jpg";
import cricketImg from "../assets/cricket.jpg";
import puzzleImg from "../assets/puzzle.jpg";
import deliciousBitesImg from "../assets/DeliciousBites.jpg";
import namazImg from "../assets/DeliciousBites.jpg";
import attackDetectionImg from "../assets/attack detetction system.png";

const projects = [
  {
    title: "Attack Detection System for CPS - IDS/IPS",
    description:
      "A cross-platform Intrusion Detection & Prevention System (IDS/IPS) built in Python that continuously monitors network traffic, system logs, processes, and ICS/CPS protocols to detect cyber attacks in real-time. Features include desktop & Discord notifications, attacker profiling, comprehensive dashboard with attack analytics, Shodan API integration for threat intelligence, and a downloadable extension for personal use. Supports Windows, Linux, and macOS with 17+ Python libraries, 8+ network protocols, and multiple export formats (JSON, CSV, PDF, ElasticSearch, Grafana). Works like a 24/7 security guard for your computer or network.",
    image: attackDetectionImg,
    tech: ["Python", "Shodan API", "Discord API", "Network Security", "IDS/IPS", "Threat Intelligence"],
    github: "https://github.com/talharabani/Attack-detection-system-for-CPS",
    live: "#", // Desktop application
  },
  {
    title: "3D Namaz Viewer - Islamic Prayer Learning Platform",
    description:
      "A comprehensive Islamic prayer learning website with detailed instructions, Arabic text, transliterations, and visual guides. Features step-by-step learning, audio recitations, video tutorials, interactive galleries, and a quiz system. Built with modern React and Vite for optimal performance and user experience.",
    image: namazImg,
    tech: ["React", "Vite", "Tailwind CSS", "JavaScript", "PWA"],
    github: "https://github.com/talharabani/3D-Namaz-Viewer/",
    live: "https://namaz-p10k.onrender.com/",
  },
  {
    title: "DeliciousBites Restaurant Website",
    description:
      "A modern and responsive restaurant website for DeliciousBites with menu, booking, and gallery.",
    image: deliciousBitesImg,
    tech: ["React", "Vite", "Tailwind CSS", "TypeScript"],
    github: "https://github.com/talharabani/DeliciousBites",
    live: "https://thunderous-bonbon-a4564a.netlify.app/",
  },
  {
    title: "Notava Music Streaming App",
    description:
      "A modern web application for streaming music, built with Ruby on Rails and JavaScript. Features robust audio playback, playlist management, artist/album views, and a multi-layered streaming architecture. (Private repo, not live yet)",
    image: musicImg,
    tech: ["Ruby on Rails", "JavaScript", "HTML", "CSS"],
    github: "https://github.com/talharabani/Notava",
    live: "#", // Not live yet
  },
  {
    title: "Real Estate Listing & Management System",
    description:
      "A complete real estate management platform with property listings, user authentication, admin dashboard, and advanced search/filtering. Built with a modern MERN stack architecture.",
    image: realestateImg,
    tech: ["React", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/talharabani/real-estate-listing-site",
    live: "#", // Not live yet
  },
  {
    title: "Tic Tac Toe Multiplayer & Bot (Android)",
    description:
      "A feature-rich mobile Tic Tac Toe game supporting multiplayer and AI bot modes. Built in Android Studio with a focus on smooth UX and real-time play. (Not on GitHub)",
    image: tictactoeImg,
    tech: ["Android Studio", "Java", "Mobile App"],
    github: "https://github.com/talharabani",
    live: "#", // Not live
  },
  {
    title: "Calculator Mobile App",
    description:
      "A professional calculator app for Android, supporting scientific and standard modes, built with a clean UI and robust logic. (Not on GitHub)",
    image: calculatorImg,
    tech: ["Android Studio", "Java", "Mobile App"],
    github: "https://github.com/talharabani",
    live: "#", // Not live
  },
  {
    title: "Grocery Store Web Application",
    description:
      "E-commerce platform (Flipkart-like) for groceries, built with Python, Django, and MERN stack. Features secure payments, product management, and a modern UI. (Oct 2024–Dec 2024, not on GitHub)",
    image: groceryImg,
    tech: ["Python", "Django", "MERN", "E-commerce"],
    github: "https://github.com/talharabani",
    live: "#", // Not live
  },
  {
    title: "Car Rental System",
    description:
      "A Java-based car rental management system with automated booking, real-time tracking, and secure payments. (Jan 2023–Mar 2023, not on GitHub)",
    image: carImg,
    tech: ["Java", "Desktop App"],
    github: "https://github.com/talharabani",
    live: "#", // Not live
  },
  {
    title: "Cricket Tournament Database System",
    description:
      "A MySQL/SQL database system for managing cricket tournaments, including match scheduling, player registration, and score tracking. (June 2024–Sep 2024, not on GitHub)",
    image: cricketImg,
    tech: ["MySQL", "SQL", "Database"],
    github: "https://github.com/talharabani",
    live: "#", // Not live
  },
  {
    title: "Word Search Puzzle (C++)",
    description:
      "A C++ word search puzzle game that efficiently identifies words in a grid. (Oct 2022–Dec 2022, not on GitHub)",
    image: puzzleImg,
    tech: ["C++", "Game"],
    github: "https://github.com/talharabani",
    live: "#", // Not live
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-16 md:py-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-y-12"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-l from-transparent via-blue-500/10 to-transparent transform skew-y-12"></div>
      </div>
      {/* Floating Tech Icons */}
      <motion.div
        className="absolute left-10 top-10 opacity-20 rounded-full text-sky-400 z-0"
        animate={{ y: [0, 20, 0], rotate: [0, 10, -10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <FaReact size={48} />
      </motion.div>
      <motion.div
        className="absolute right-10 top-24 opacity-10 rounded-full text-blue-500 z-0"
        animate={{ y: [0, -30, 0], rotate: [0, -8, 8, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      >
        <SiTypescript size={40} />
      </motion.div>
      <motion.div
        className="absolute left-24 bottom-16 opacity-10 rounded-full text-cyan-400 z-0"
        animate={{ y: [0, 18, 0], x: [0, 10, -10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      >
        <SiTailwindcss size={40} />
      </motion.div>
      <motion.div
        className="absolute right-24 bottom-10 opacity-10 rounded-full text-yellow-400 z-0"
        animate={{ y: [0, -15, 0], x: [0, -10, 10, 0] }}
        transition={{ duration: 10.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <FaJs size={36} />
      </motion.div>
      <motion.div
        className="absolute left-1/2 top-4 opacity-10 rounded-full text-orange-500 z-0"
        animate={{ y: [0, 25, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      >
        <FaHtml5 size={36} />
      </motion.div>
      <motion.div
        className="absolute right-1/2 bottom-4 opacity-10 rounded-full text-blue-400 z-0"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 9.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <FaCss3Alt size={36} />
      </motion.div>
      <motion.div
        className="absolute left-1/4 top-1/2 opacity-10 rounded-full text-red-500 z-0"
        animate={{ y: [0, 12, 0], rotate: [0, 8, -8, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      >
        <FaGitAlt size={32} />
      </motion.div>
      {/* Project Cards Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="backdrop-blur-md bg-white/10 dark:bg-black/20 rounded-3xl p-8 border border-white/20 shadow-2xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent drop-shadow-lg">
              Featured Projects
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-white/90 max-w-3xl mx-auto drop-shadow-md">
              Here are some of my recent projects that showcase my skills and passion for creating amazing digital experiences.
            </p>
          </div>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              className="group backdrop-blur-lg bg-white/10 dark:bg-black/20 rounded-3xl shadow-2xl overflow-hidden flex flex-col transition-all duration-500 hover:scale-105 hover:shadow-3xl border border-white/20 hover:bg-white/20 dark:hover:bg-black/30"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ 
                y: -15,
                rotateY: 5,
                rotateX: 5,
                transition: { duration: 0.3 }
              }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-2">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="p-2 bg-white/20 dark:bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/40 dark:hover:bg-white/30 transition-colors duration-300"
                    >
                      <svg className="w-4 h-4 text-gray-900 dark:text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                    <a 
                      href={project.live} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="p-2 bg-white/20 dark:bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/40 dark:hover:bg-white/30 transition-colors duration-300"
                    >
                      <svg className="w-4 h-4 text-gray-900 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-lg md:text-xl font-bold mb-3 transition-colors duration-300 text-gray-900 dark:text-white drop-shadow-lg group-hover:text-cyan-600 dark:group-hover:text-cyan-300">
                  {project.title}
                </h3>
                <p className="mb-4 flex-1 text-gray-700 dark:text-white/90 text-sm leading-relaxed drop-shadow-md">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span 
                      key={t} 
                      className="px-3 py-1 backdrop-blur-sm bg-white/20 dark:bg-white/20 text-gray-900 dark:text-white/90 rounded-full text-xs font-medium transition-all duration-300 border border-gray-300 dark:border-white/30 group-hover:bg-white/40 dark:group-hover:bg-white/30"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 mt-auto">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 backdrop-blur-md bg-white/20 dark:bg-white/20 text-gray-900 dark:text-white rounded-xl hover:bg-white/40 dark:hover:bg-white/30 border border-gray-300 dark:border-white/30 transition-all duration-300 font-medium"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub
                  </a>
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 backdrop-blur-md bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-gray-900 dark:text-white rounded-xl hover:from-cyan-500/30 hover:to-purple-500/30 border border-cyan-400/30 transition-all duration-300 font-medium"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 