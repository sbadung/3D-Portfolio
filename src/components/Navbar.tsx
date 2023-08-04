import React from "react";
import { motion } from "framer-motion";
import AnimatedLogo from "./AnimatedLogo";

const Navbar: React.FC = () => {
  const routes = [
    { value: "projects", href: "projects" },
    { value: "about", href: "about" },
    { value: "contact", href: "contact" }
  ];

  const initial = { opacity: 0, y: -180 };
  const animate = { opacity: 1, y: 0 };
  const transition = {
    ease: "easeInOut",
    duration: 1.5,
    delay: 3,
  };

  return (
    <motion.div initial={initial} animate={animate} transition={transition}>
      <div className="flex justify-between p-5">
        <div className="font-condensed font-bold text-white hover:underline">
          <AnimatedLogo src="logo.png" />
        </div>
        <nav className="flex justify-between">
          {routes.map(route => {
            return (
              <li className="list-none mx-10 font-condensed">
                <a href={route.href} className="text-white no-underline">{route.value}</a>
              </li>
            );
          })}
        </nav>
      </div>
    </motion.div>
  );
};

export default Navbar;
