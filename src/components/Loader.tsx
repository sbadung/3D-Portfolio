import { motion } from 'framer-motion';
import React from 'react';

interface LoaderProps { animationDuration: number; }

const Loader: React.FC<LoaderProps> = ({ animationDuration }: LoaderProps) => {

  const animate = { 
    scale: [0, 1.1, 0], 
    rotate: [0, 1080, 2160]
  };
  const transition = { duration: animationDuration, ease: "easeOut" };

  return (
    <motion.div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 text-white flex justify-center items-center"
      animate={animate}
      transition={transition}
    ><img src="logo.png" alt="" /></motion.div>
  );
};

export default Loader;
