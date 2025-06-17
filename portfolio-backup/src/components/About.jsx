import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">About Me</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <p className="text-textSecondary">
              Hello! I'm Talha, a passionate Computer Science student with a keen interest in software development
              and problem-solving. My journey in technology began with a curiosity about how things work in the
              digital world, which has evolved into a deep passion for creating meaningful software solutions.
            </p>
            <p className="text-textSecondary">
              Currently pursuing my degree in Computer Science, I'm constantly learning and exploring new
              technologies. I believe in writing clean, efficient code and creating user-friendly applications
              that solve real-world problems.
            </p>
            <p className="text-textSecondary">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source
              projects, or learning about the latest developments in the tech industry. I'm always excited to
              take on new challenges and collaborate with others to build something amazing.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-tertiary p-6 rounded-lg"
          >
            <h3 className="text-xl font-semibold mb-4 text-textPrimary">Education</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-secondary">Bachelor of Science in Information Technology</h4>
                <p className="text-textSecondary">PUCIT</p>
                <p className="text-textSecondary">2022 - Present</p>
              </div>
            </div>

            <h3 className="text-xl font-semibold mt-8 mb-4 text-textPrimary">Interests</h3>
            <ul className="list-disc list-inside text-textSecondary space-y-2">
              <li>Web Development</li>
              <li>Software Engineering</li>
              <li>Artificial Intelligence</li>
              <li>Problem Solving</li>
              <li>Exploring intelligent systems and advanced machine learning algorithms</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 