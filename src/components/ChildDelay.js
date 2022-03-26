import React from "react";
import { motion } from "framer-motion";

const ChildDelay = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };
  return (
    <div className="childdelay_container">
      <motion.div className="childdelay_box">
        {" "}
        <motion.ul variants={container} initial="hidden" whileInView="show">
          <motion.li variants={item}>Hi</motion.li>
          <motion.li variants={item}>EveryBody</motion.li>
          <motion.li variants={item}>Is Here</motion.li>
          <motion.li variants={item}>Isnt</motion.li>
          <motion.li variants={item}>It?</motion.li>
        </motion.ul>
      </motion.div>
    </div>
  );
};

export default ChildDelay;
