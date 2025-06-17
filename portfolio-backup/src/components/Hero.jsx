import { motion } from 'framer-motion';
import profileImage from '../assets/talha1.png';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-left"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
              <span className="text-textSecondary">Hi, I'm </span>
              <span className="text-secondary">Talha Ishaq Rabani</span>
            </h1>

            <h2 className="text-2xl sm:text-3xl text-textSecondary mb-8">
              Computer Science Student & Aspiring Software Developer
            </h2>

            <p className="text-textSecondary text-lg mb-8">
              I'm passionate about creating elegant solutions to complex problems through code.
              Currently pursuing my degree in Computer Science while building projects that make a difference.
            </p>
            
            <div className="flex gap-4">
              <a
                href="#projects"
                className="btn-primary group"
              >
                View My Work
                <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a
                href="/TalhaIshaqRabani_Resume.pdf"
                className="btn-primary bg-transparent border-2 border-secondary text-secondary hover:bg-secondary/10 group"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
                <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Main profile picture container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                {/* Circular border and shadow container */}
                <div className="absolute inset-0 rounded-full border-4 border-secondary/20 shadow-lg shadow-secondary/10"></div>
                
                {/* Image container with overflow hidden */}
                <div className="absolute inset-0 rounded-full overflow-hidden">
                  {/* Profile image */}
                  <img
                    src={profileImage}
                    alt="Talha Ishaq Rabani"
                    className="w-full h-full object-cover"
                    style={{ 
                      objectPosition: 'center 25%',
                      transform: 'scale(1.1)'
                    }}
                  />
                </div>

                {/* Decorative circles */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-secondary/20 rounded-full -z-10"></div>
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-secondary/20 rounded-full -z-10"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 