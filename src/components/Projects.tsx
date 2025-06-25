import React from "react";
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

const projects = [
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
    <section id="projects" className="relative py-16 overflow-hidden">
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
      <div className="relative z-10 max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              className="group bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden flex flex-col transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-2 hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950 dark:hover:border-blue-400"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <img src={project.image} alt={project.title} className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105" />
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-2xl font-semibold mb-2 transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">{project.title}</h3>
                <p className="mb-4 flex-1 transition-transform duration-300 group-hover:scale-105 group-hover:text-blue-500 dark:group-hover:text-blue-400">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span key={t} className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium transition-colors duration-300 group-hover:bg-blue-100 group-hover:text-blue-600 dark:group-hover:bg-blue-900 dark:group-hover:text-blue-300">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 mt-auto">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline hover:scale-105 hover:bg-opacity-80 transition-all duration-300 px-3 py-1 rounded-md group-hover:text-blue-600 dark:group-hover:text-blue-400">
                    GitHub
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline hover:scale-105 hover:bg-opacity-80 transition-all duration-300 px-3 py-1 rounded-md group-hover:text-blue-600 dark:group-hover:text-blue-400">
                    Live
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