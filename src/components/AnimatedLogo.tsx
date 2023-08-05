import { motion } from "framer-motion"

interface AnimatedLogoProps {
  src: string;
  width: number;
  height: number;
}

const AnimatedLogo: React.FC<AnimatedLogoProps> = ({ src, width, height }: AnimatedLogoProps) => {
  const animate = {
    scale: [0, 1],
    rotate: [-180, 0],
  };

  const transition = {
    ease: "easeInOut",
    duration: 1.5
  };

  const whileHover = {
    scale: [1, 0.25, 1],
    rotate: [0, -360],
    ease: "easeInOut",
  }

  return (
    <motion.div animate={animate} transition={transition} whileHover={whileHover}>
      <img src={src} alt="logo" width={width} height={height} />
    </ motion.div>
  );
}

export default AnimatedLogo;
