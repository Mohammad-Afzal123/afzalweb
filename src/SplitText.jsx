import React from 'react';
import { motion } from 'framer-motion';

const SplitText = ({ children, onAnimationComplete }) => {
  const letters = Array.from(children);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.04, // Time between each letter animation
      },
    },
  };

  const letterVariants = {
    hidden: {
      opacity: 0,
      y: '50%',
      rotateX: -90,
      transformOrigin: 'bottom',
    },
    visible: {
      opacity: 1,
      y: '0%',
      rotateX: 0,
      transition: {
        type: 'spring',
        damping: 15,
        stiffness: 150,
      },
    },
  };

  return (
    <motion.span
      style={{ display: 'inline-block' }}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      onAnimationComplete={onAnimationComplete}
      aria-label={children}
    >
      {letters.map((char, index) => (
        <motion.span key={`${char}-${index}`} style={{ display: 'inline-block' }} variants={letterVariants} className="char">
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default SplitText;