import { motion } from 'framer-motion';

const Logo = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex items-center"
    >
      <div className="relative">
        <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center">
          <span className="text-secondary font-bold text-xl">T</span>
        </div>
        <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-secondary/40"></div>
      </div>
      <span className="ml-2 text-textPrimary font-semibold text-lg">TIR</span>
    </motion.div>
  );
};

export default Logo; 