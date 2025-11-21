import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaCode } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiReact, SiN8N } from "react-icons/si";

const skills = [
  { icon: <FaReact className="text-sky-400" />, name: "React", level: 60 },
  { icon: <FaJs className="text-yellow-400" />, name: "JavaScript", level: 55 },
  { icon: <SiReact className="text-cyan-400" />, name: "React Native", level: 55 },
  { icon: <FaNodeJs className="text-green-600" />, name: "Node.js", level: 55 },
  { icon: <SiMongodb className="text-green-500" />, name: "MongoDB", level: 50 },
  { icon: <FaHtml5 className="text-orange-500" />, name: "HTML5", level: 60 },
  { icon: <FaCss3Alt className="text-blue-500" />, name: "CSS3", level: 60 },
  { icon: <SiTailwindcss className="text-cyan-400" />, name: "Tailwind CSS", level: 55 },
  { icon: <FaGitAlt className="text-red-500" />, name: "Git", level: 55 },
  { icon: <FaCode className="text-purple-500" />, name: "Python", level: 80 },
  { icon: <SiN8N className="text-orange-400" />, name: "n8n Automation", level: 50 },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I'm <span className="font-semibold text-blue-600 dark:text-blue-400">TALHA ISHAQ</span>, a passionate Full Stack Developer who loves creating beautiful, performant web applications. I specialize in modern technologies and always strive to deliver exceptional user experiences.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Skills with Progress Bars */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <motion.div 
              className="backdrop-blur-lg bg-white/10 rounded-3xl p-8 border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 hover:rotate-1 hover:bg-white/20 dark:hover:bg-black/30"
              whileHover={{ 
                y: -10,
                rotateY: 5,
                rotateX: 5,
                transition: { duration: 0.3 }
              }}
            >
              <h3 className="text-2xl font-bold mb-6 text-center text-white drop-shadow-lg">Technical Skills</h3>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group"
                >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 group-hover:scale-110 transition-all duration-300 group-hover:bg-white/30">
                          {skill.icon}
                        </div>
                        <span className="font-medium text-white/90 drop-shadow-md">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-sm font-semibold text-white/80 bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm border border-white/30">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-white/20 backdrop-blur-sm rounded-full h-3 border border-white/30 overflow-hidden">
                      <motion.div
                        className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 h-3 rounded-full shadow-lg"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                      />
                    </div>
                </motion.div>
              ))}
            </div>
            </motion.div>
          </motion.div>

          {/* Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <motion.div 
              className="backdrop-blur-lg bg-white/10 rounded-3xl p-8 border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 hover:rotate-1 hover:bg-white/20 dark:hover:bg-black/30"
              whileHover={{ 
                y: -10,
                rotateY: 5,
                rotateX: 5,
                transition: { duration: 0.3 }
              }}
            >
              <h3 className="text-2xl font-bold mb-4 text-center text-white drop-shadow-lg">What I Do</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-3 h-3 bg-blue-400 rounded-full mt-2 shadow-lg"></div>
                  <p className="text-white/90 drop-shadow-md">
                    Build responsive and interactive web applications using modern frameworks
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-3 h-3 bg-purple-400 rounded-full mt-2 shadow-lg"></div>
                  <p className="text-white/90 drop-shadow-md">
                    Create seamless user experiences with attention to detail and performance
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full mt-2 shadow-lg"></div>
                  <p className="text-white/90 drop-shadow-md">
                    Develop full-stack solutions with robust backend architectures
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-3 h-3 bg-orange-400 rounded-full mt-2 shadow-lg"></div>
                  <p className="text-white/90 drop-shadow-md">
                    Continuously learn and adapt to new technologies and industry trends
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 