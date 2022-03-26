import ChildDelay from "./components/ChildDelay";
import ChildTransition from "./components/ChildTransition";
import Menu from "./components/Menu";
import Scale from "./components/Scale";
import { motion, useViewportScroll } from "framer-motion";
import ApexBar from "./components/ApexBar";

function App() {
  const { scrollYProgress } = useViewportScroll();

  return (
    <div className="app_container">
      {/* <motion.path
        d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
        style={{ pathLength: scrollYProgress }}
      />
      <Scale />
      <ChildDelay />
      <ChildTransition /> */}
      <Menu />
      <ApexBar />
    </div>
  );
}

export default App;
