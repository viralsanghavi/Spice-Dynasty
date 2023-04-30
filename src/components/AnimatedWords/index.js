import {motion} from "framer-motion";

const AnimatedWords = ({text, textSx, containerSx}) => {
  const words = text.split(" ");

  const sentence = {
    hidden: {
      opacity: 1,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.18,
        staggerChildren: 0.05,
      },
    },
  };

  const letter = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  const container = {
    hidden: {opacity: 0},
    visible: (i = 1) => ({
      opacity: 1,
      transition: {staggerChildren: 0.12, delayChildren: 0.09 * i},
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 18,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.h3
      style={{
        overflow: "hidden",
        display: "flex",
        flexWrap: "wrap",
        textAlign: "justify",
        ...containerSx,
      }}
      variants={sentence}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, index) => (
        <motion.span
          variants={letter}
          style={{fontSize: "1rem", ...textSx}}
          key={index}
        >
          {word}
        </motion.span>
      ))}
    </motion.h3>
  );
};

export default AnimatedWords;
