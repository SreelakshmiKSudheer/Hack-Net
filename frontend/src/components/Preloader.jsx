import React from 'react';
import { motion } from 'framer-motion';

const Preloader = () => {
  return (
    <motion.div
      className="fixed inset-0 bg-white z-[9999] flex items-center justify-center"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 3, duration: 0.5 }}
    >
      <motion.h1
        className="text-4xl font-bold text-blue-600"
        initial={{ x: '-100vw' }}
        animate={{ x: ['-100vw', '0vw', '100vw'] }}
        transition={{
          duration: 3,
          ease: 'easeInOut',
          times: [0, 0.4, 1], // Pause in center at 40%
        }}
      >
        CampusBook
      </motion.h1>
    </motion.div>
  );
};

export default Preloader;



