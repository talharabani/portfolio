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
    <section id="about" className="relative py-16 md:py-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 dark:from-indigo-900 dark:via-purple-900 dark:to-pink-900">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-y-12"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-l from-transparent via-purple-500/10 to-transparent transform skew-y-12"></div>
      </div>
      {/* Floating Tech Icons */}
      <motion.div
        className="absolute left-10 top-10 opacity-20 rounded-full text-sky-400 z-0 hidden md:block"
        animate={{ y: [0, 20, 0], rotate: [0, 10, -10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <FaReact size={48} />
      </motion.div>
      <motion.div
        className="absolute right-10 top-24 opacity-15 rounded-full text-blue-500 z-0 hidden md:block"
        animate={{ y: [0, -30, 0], rotate: [0, -8, 8, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      >
        <FaNodeJs size={40} />
      </motion.div>
      <motion.div
        className="absolute left-24 bottom-16 opacity-15 rounded-full text-cyan-400 z-0 hidden md:block"
        animate={{ y: [0, 18, 0], x: [0, 10, -10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      >
        <SiTailwindcss size={40} />
      </motion.div>
      <motion.div
        className="absolute right-24 bottom-10 opacity-15 rounded-full text-yellow-400 z-0 hidden md:block"
        animate={{ y: [0, -15, 0], x: [0, -10, 10, 0] }}
        transition={{ duration: 10.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <FaJs size={36} />
      </motion.div>
      <motion.div
        className="absolute left-1/2 top-4 opacity-15 rounded-full text-orange-500 z-0 hidden md:block"
        animate={{ y: [0, 25, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      >
        <FaHtml5 size={36} />
      </motion.div>
      <motion.div
        className="absolute right-1/2 bottom-4 opacity-15 rounded-full text-blue-400 z-0 hidden md:block"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 9.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <FaCss3Alt size={36} />
      </motion.div>
      <motion.div
        className="absolute left-1/4 top-1/2 opacity-15 rounded-full text-red-500 z-0 hidden md:block"
        animate={{ y: [0, 12, 0], rotate: [0, 8, -8, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      >
        <FaGitAlt size={32} />
      </motion.div>
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="backdrop-blur-md bg-white/10 dark:bg-black/20 rounded-3xl p-6 md:p-8 border border-white/20 dark:border-white/20 shadow-2xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              I'm <span className="font-semibold text-blue-600 dark:text-blue-400">TALHA ISHAQ</span>, a passionate Full Stack Developer who loves creating beautiful, performant web applications. I specialize in modern technologies and always strive to deliver exceptional user experiences.
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Skills with Progress Bars */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <motion.div 
              className="backdrop-blur-lg bg-white/10 dark:bg-black/20 rounded-3xl p-6 md:p-8 border border-white/20 dark:border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 hover:rotate-1 hover:bg-white/20 dark:hover:bg-black/30"
              whileHover={{ 
                y: -10,
                rotateY: 5,
                rotateX: 5,
                transition: { duration: 0.3 }
              }}
            >
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-center text-gray-900 dark:text-white drop-shadow-lg">Technical Skills</h3>
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
                        <span className="font-medium text-gray-900 dark:text-white/90 drop-shadow-md">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-sm font-semibold text-gray-900 dark:text-white/80 bg-white/20 dark:bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm border border-gray-300 dark:border-white/30">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-white/20 dark:bg-white/20 backdrop-blur-sm rounded-full h-3 border border-gray-300 dark:border-white/30 overflow-hidden">
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
              className="backdrop-blur-lg bg-white/10 dark:bg-black/20 rounded-3xl p-6 md:p-8 border border-white/20 dark:border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 hover:rotate-1 hover:bg-white/20 dark:hover:bg-black/30"
              whileHover={{ 
                y: -10,
                rotateY: 5,
                rotateX: 5,
                transition: { duration: 0.3 }
              }}
            >
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-center text-gray-900 dark:text-white drop-shadow-lg">What I Do</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-3 h-3 bg-blue-400 rounded-full mt-2 shadow-lg flex-shrink-0"></div>
                  <p className="text-gray-700 dark:text-white/90 drop-shadow-md text-sm sm:text-base">
                    Build responsive and interactive web applications using modern frameworks
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-3 h-3 bg-purple-400 rounded-full mt-2 shadow-lg flex-shrink-0"></div>
                  <p className="text-gray-700 dark:text-white/90 drop-shadow-md text-sm sm:text-base">
                    Create seamless user experiences with attention to detail and performance
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full mt-2 shadow-lg flex-shrink-0"></div>
                  <p className="text-gray-700 dark:text-white/90 drop-shadow-md text-sm sm:text-base">
                    Develop full-stack solutions with robust backend architectures
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-3 h-3 bg-orange-400 rounded-full mt-2 shadow-lg flex-shrink-0"></div>
                  <p className="text-gray-700 dark:text-white/90 drop-shadow-md text-sm sm:text-base">
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