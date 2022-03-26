import React from "react";
import { motion } from "framer-motion";

const Scale = () => {
  return (
    <motion.div className="scale_container">
      <motion.div
        className="box_container"
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        }}
        transition={{ duration: 1 }}
      ></motion.div>
    </motion.div>
  );
};

export default Scale;
