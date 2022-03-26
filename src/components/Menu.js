import React, { useState } from "react";
import { motion } from "framer-motion";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  };
  return (
    <div className="menu_container">
      <div className="menu_box">
        <motion.nav animate={isOpen ? "open" : "closed"} variants={variants}>
          <Toggle onClick={() => setIsOpen((isOpen) => !isOpen)} />
          <Items />
        </motion.nav>
      </div>
    </div>
  );
};

export default Menu;

const Toggle = () => {
  return (
    <div>
      <h1>Humb Icon</h1>
    </div>
  );
};
const Items = () => {
  return (
    <ul>
      <li>FIRST</li>
      <li>sEC</li>
      <li>Thirs</li>
      <li>Fourth</li>
    </ul>
  );
};
