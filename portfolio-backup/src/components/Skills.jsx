import { motion } from 'framer-motion';
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaDatabase,
  FaGitAlt,
  FaDocker,
  FaAws,
} from 'react-icons/fa';
import {
  SiTailwindcss,
  SiTypescript,
  SiDjango,
  SiRubyonrails,
  SiPostgresql,
  SiMongodb,
  SiFirebase,
  SiAndroidstudio,
} from 'react-icons/si';

const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React", icon: FaReact },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ]
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "Python", icon: FaPython },
      { name: "Django", icon: SiDjango },
      { name: "Ruby on Rails", icon: SiRubyonrails },
    ]
  },
  {
    category: "Mobile",
    items: [
      { name: "Android", icon: SiAndroidstudio },
      { name: "Java", icon: FaJava },
    ]
  },
  {
    category: "Database",
    items: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Firebase", icon: SiFirebase },
    ]
  },
  {
    category: "DevOps & Tools",
    items: [
      { name: "Git", icon: FaGitAlt },
      { name: "Docker", icon: FaDocker },
      { name: "AWS", icon: FaAws },
    ]
  }
];

const SkillCard = ({ skill, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="card group hover:translate-y-[-5px]"
    >
      <h3 className="text-xl font-semibold mb-4 text-textPrimary group-hover:text-secondary transition-colors">
        {skill.category}
      </h3>
      <div className="grid grid-cols-2 gap-4">
        {skill.items.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-2 text-textSecondary group-hover:text-secondary transition-colors"
          >
            <item.icon className="w-6 h-6 group-hover:scale-110 transition-transform" />
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 bg-backgroundSecondary">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Skills & Expertise</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <SkillCard key={index} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 