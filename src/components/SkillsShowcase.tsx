import { motion } from "framer-motion";
import { 
  FaReact, FaJs, FaHtml5, FaCss3Alt, FaGitAlt, FaNodeJs, FaCode, FaMobile, 
  FaCloud, FaRocket, FaLaptopCode, FaServer, FaPalette 
} from "react-icons/fa";
import { 
  SiTailwindcss, SiMongodb, 
  SiFirebase, SiVercel, SiNetlify, SiFigma, SiAdobexd, SiReact, SiN8N 
} from "react-icons/si";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: <FaReact className="text-4xl text-blue-500" />,
    skills: [
      { name: "React", level: 60, icon: <FaReact className="text-2xl text-blue-500" /> },
      { name: "React Native", level: 55, icon: <SiReact className="text-2xl text-cyan-400" /> },
      { name: "JavaScript", level: 55, icon: <FaJs className="text-2xl text-yellow-500" /> },
      { name: "HTML5", level: 60, icon: <FaHtml5 className="text-2xl text-orange-500" /> },
      { name: "CSS3", level: 60, icon: <FaCss3Alt className="text-2xl text-blue-400" /> },
      { name: "Tailwind CSS", level: 55, icon: <SiTailwindcss className="text-2xl text-cyan-500" /> },
    ]
  },
  {
    title: "Backend Development",
    icon: <FaServer className="text-4xl text-green-500" />,
    skills: [
      { name: "Node.js", level: 55, icon: <FaNodeJs className="text-2xl text-green-600" /> },
      { name: "MongoDB", level: 50, icon: <SiMongodb className="text-2xl text-green-500" /> },
      { name: "Python", level: 80, icon: <FaCode className="text-2xl text-yellow-600" /> },
      { name: "Firebase", level: 50, icon: <SiFirebase className="text-2xl text-orange-500" /> },
      { name: "n8n Automation", level: 50, icon: <SiN8N className="text-2xl text-orange-400" /> },
    ]
  },
  {
    title: "Tools & Deployment",
    icon: <FaRocket className="text-4xl text-purple-500" />,
    skills: [
      { name: "Git", level: 85, icon: <FaGitAlt className="text-2xl text-red-500" /> },
      { name: "Vercel", level: 80, icon: <SiVercel className="text-2xl text-black dark:text-white" /> },
      { name: "Netlify", level: 75, icon: <SiNetlify className="text-2xl text-teal-500" /> },
      { name: "Figma", level: 70, icon: <SiFigma className="text-2xl text-pink-500" /> },
      { name: "Adobe XD", level: 65, icon: <SiAdobexd className="text-2xl text-purple-500" /> },
    ]
  }
];

const achievements = [
  {
    icon: <FaLaptopCode className="text-3xl text-blue-500" />,
    title: "50+ Projects",
    description: "Completed various web applications and mobile apps"
  },
  {
    icon: <FaCloud className="text-3xl text-green-500" />,
    title: "Cloud Deployed",
    description: "Successfully deployed projects on multiple platforms"
  },
  {
    icon: <FaMobile className="text-3xl text-purple-500" />,
    title: "Responsive Design",
    description: "Mobile-first approach for all applications"
  },
  {
    icon: <FaPalette className="text-3xl text-pink-500" />,
    title: "UI/UX Focused",
    description: "Creating beautiful and intuitive user experiences"
  }
];

export default function SkillsShowcase() {
  return (
    <section id="skills" className="relative py-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-y-12"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-l from-transparent via-purple-500/10 to-transparent transform skew-y-12"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="backdrop-blur-md bg-white/10 dark:bg-black/20 rounded-3xl p-8 border border-white/20 shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent drop-shadow-lg">
              Skills & Technologies
            </h2>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto drop-shadow-md">
              A comprehensive overview of my technical expertise and the tools I use to bring ideas to life.
            </p>
          </div>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              className="backdrop-blur-lg bg-white/10 dark:bg-black/20 rounded-3xl p-8 border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 hover:rotate-1 hover:bg-white/20 dark:hover:bg-black/30"
              whileHover={{ 
                y: -10,
                rotateY: 5,
                rotateX: 5,
                transition: { duration: 0.3 }
              }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 shadow-lg">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-white drop-shadow-lg">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: skillIndex * 0.1 }}
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
                        transition={{ duration: 1, delay: skillIndex * 0.1 + 0.5 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mb-12"
        >
          <div className="backdrop-blur-md bg-white/10 dark:bg-black/20 rounded-2xl p-6 border border-white/20 shadow-xl inline-block">
            <h3 className="text-3xl font-bold mb-8 text-white drop-shadow-lg">
              Key Achievements
            </h3>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="backdrop-blur-lg bg-white/10 dark:bg-black/20 rounded-3xl p-6 border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 text-center group hover:bg-white/20 dark:hover:bg-black/30"
              whileHover={{ 
                y: -15,
                rotateY: 10,
                rotateX: 5,
                transition: { duration: 0.3 }
              }}
            >
              <div className="mb-4 group-hover:scale-110 transition-transform duration-300 p-4 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 shadow-lg">
                {achievement.icon}
              </div>
              <h4 className="text-xl font-bold mb-2 text-white drop-shadow-lg">
                {achievement.title}
              </h4>
              <p className="text-white/80 text-sm drop-shadow-md">
                {achievement.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="backdrop-blur-xl bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl p-8 border border-white/30 shadow-2xl hover:shadow-3xl transition-all duration-500">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white drop-shadow-lg">
              Ready to Work Together?
            </h3>
            <p className="text-lg mb-6 text-white/90 drop-shadow-md">
              Let's discuss how I can help bring your next project to life with these skills and technologies.
            </p>
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 backdrop-blur-md bg-white/20 text-white rounded-2xl font-semibold hover:bg-white/30 border border-white/30 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <FaRocket />
              Get In Touch
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
