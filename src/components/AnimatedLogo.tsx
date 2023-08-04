import { motion } from "framer-motion"

interface AnimatedLogoProps {
  src: string;
}

const AnimatedLogo: React.FC<AnimatedLogoProps> = ({ src }: AnimatedLogoProps) => {
  const animation = {

    scale: [0, 1],
    rotate: [-180, 0],
  };

  const transition = {
    ease: "easeInOut",
    duration: 1.5,
    delay: 0.4,
  };

  return (
    <motion.div animate={animation} transition={transition} >
      <img src={src} alt="logo" width={96} height={96} />
    </ motion.div>
  );
}

export default AnimatedLogo;