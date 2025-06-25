import React from "react";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGitAlt } from "react-icons/fa";

const skills = [
  { icon: <FaReact className="text-sky-400" />, name: "React" },
  { icon: <FaNodeJs className="text-green-600" />, name: "Node.js" },
  { icon: <FaHtml5 className="text-orange-500" />, name: "HTML5" },
  { icon: <FaCss3Alt className="text-blue-500" />, name: "CSS3" },
  { icon: <FaJs className="text-yellow-400" />, name: "JavaScript" },
  { icon: <FaGitAlt className="text-red-500" />, name: "Git" },
];

export default function About() {
  return (
    <section id="about" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>
        <p className="text-lg mb-8 text-center max-w-2xl mx-auto">
          I'm Rabani, a developer who loves building beautiful, performant web apps. I enjoy working with modern tech and always learning new things.
        </p>
        <div className="flex flex-wrap justify-center gap-8">
          {skills.map((skill) => (
            <div key={skill.name} className="group flex flex-col items-center transition-all duration-300 cursor-pointer">
              <div className="text-5xl mb-2 transition-transform transition-colors duration-300 group-hover:scale-110 group-hover:text-blue-500 dark:group-hover:text-blue-400">{skill.icon}</div>
              <span className="text-base font-medium transition-colors duration-300 group-hover:text-blue-500 dark:group-hover:text-blue-400">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 