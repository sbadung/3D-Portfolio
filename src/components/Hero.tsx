import Spline from '@splinetool/react-spline';
import { motion } from "framer-motion";


const Hero: React.FC = () => {
  const initial = { opacity: 0, y: -180 };
  const animate = { opacity: 1, y: 0 };
  const transition = {
    ease: "easeInOut",
    duration: 1.5,
    delay: 0.6,
  };
  
  return (
    <div className="w-3/4 m-auto">
      <motion.div initial={initial} animate={animate} transition={transition}>
        <Spline scene="https://prod.spline.design/TM1DIoFJQ9sfzrEp/scene.splinecode" />
      </motion.div>
    </div>
  );
}

export default Hero;
