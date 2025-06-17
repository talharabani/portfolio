import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: "Notava",
    description: "A music streaming web application built using Ruby on Rails and Tailwind CSS. It allows users to search and listen to songs, manage playlists, and enjoy a smooth and interactive UI.",
    technologies: ["Ruby on Rails", "Tailwind CSS", "PostgreSQL", "AWS S3"],
    github: "https://github.com/talhaishaqrabani/notava",
    live: "https://notava-demo.com",
  },
  {
    title: "Tic Tac Toe (AI + Multiplayer)",
    description: "A Tic Tac Toe game made using Android Studio. It supports both multiplayer mode and single-player mode with a built-in AI opponent.",
    technologies: ["Android Studio", "Java", "Firebase", "Material Design"],
    github: "https://github.com/talhaishaqrabani/tictactoe",
    live: "https://play.google.com/store/apps/details?id=com.talhaishaqrabani.tictactoe",
  },
  {
    title: "Flipkart Clone",
    description: "A full-featured eCommerce website clone of Flipkart, developed using Django. It supports product listings, cart, checkout, user authentication, and more.",
    technologies: ["Django", "Python", "SQLite", "Bootstrap"],
    github: "https://github.com/talhaishaqrabani/flipkart-clone",
    live: "https://flipkart-clone-demo.com",
  },
];

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="card group hover:translate-y-[-5px]"
    >
      <h3 className="text-xl font-semibold mb-2 text-textPrimary group-hover:text-secondary transition-colors">
        {project.title}
      </h3>
      <p className="text-textSecondary mb-4">{project.description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech, i) => (
          <span
            key={i}
            className="px-3 py-1 text-sm bg-secondary/10 text-secondary rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
      
      <div className="flex gap-4">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-textSecondary hover:text-secondary transition-colors group"
        >
          <FaGithub className="w-6 h-6 group-hover:scale-110 transition-transform" />
        </a>
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="text-textSecondary hover:text-secondary transition-colors group"
        >
          <FaExternalLinkAlt className="w-6 h-6 group-hover:scale-110 transition-transform" />
        </a>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">My Projects</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 