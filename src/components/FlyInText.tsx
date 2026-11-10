import { motion, type Variants } from "framer-motion";

interface FlyInTextProps {
  text: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div" | "blockquote";
  className?: string;
  wordClassName?: string;
  delay?: number;
  stagger?: number;
  once?: boolean;
}

export default function FlyInText({
  text,
  as: Component = "span",
  className = "",
  wordClassName = "",
  delay = 0,
  stagger = 0.05,
  once = false,
}: FlyInTextProps) {
  const lines = text.split("\n");

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const wordVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 45,
      rotateX: -45,
      scale: 0.9,
      filter: "blur(6px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        type: "spring" as const,
        damping: 14,
        stiffness: 110,
        mass: 0.6,
      },
    },
  };

  return (
    <Component className={className}>
      <motion.span
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once, amount: 0.2 }}
        className="inline-block w-full"
        style={{ perspective: 1000 }}
      >
        {lines.map((line, lineIdx) => {
          const words = line.trim().split(/\s+/).filter(Boolean);
          return (
            <span key={lineIdx} className="inline-flex flex-wrap w-full gap-x-[0.28em]">
              {words.map((word, wordIdx) => (
                <motion.span
                  key={wordIdx}
                  variants={wordVariants}
                  className={`inline-block will-change-transform ${wordClassName}`}
                >
                  {word}
                </motion.span>
              ))}
            </span>
          );
        })}
      </motion.span>
    </Component>
  );
}
