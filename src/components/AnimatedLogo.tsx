import { motion } from "framer-motion"
import { ReactNode } from "react";

interface AnimatedLogoProps {
  src: string;
}

export default function AnimatedLogo({ src }: AnimatedLogoProps) {
  return (
    <motion.div
      whileHover={{ scale: 0.85 }}
      whileTap={{ scale: 1.0 }}
      drag="x"
      dragConstraints={{ left: -100, right: 100 }}
    >
      <img src={src} alt="" />
    </motion.div>
  );
}