import ChildDelay from "./components/ChildDelay";
import ChildTransition from "./components/ChildTransition";
import Menu from "./components/Menu";
import Scale from "./components/Scale";
import { motion, useViewportScroll } from "framer-motion";
import ApexBar from "./components/ApexBar";
import ApexScrollChart from "./components/ApexScrollChart";
import ReactTable from "./components/ReactTable";
import TablePaginate from "./components/TablePaginate";
import DataGrid from "./components/DataGrid";
import NivoLineData from "./components/NivoChart/NivoLineData";
import NivoLine from "./components/NivoChart/NivoLine";
import RechartExample from "./components/Rechart/RechartExample";
import ReSelect from "./components/ReSelect";
import CarouselBS from "./components/Bootstrap/CarouselBS";
import ScatterCharts from "./components/Rechart/ScatterChart";
import RechartNew from "./components/Rechart/RechartNew";
import TableManual from "./components/Tables/TableManual";
import SwrTest from "./components/Swr/SwrTest";
import Data from "./components/Data/Data";
import TableM from "./components/Tables/TableM";
import TableHeat from "./components/Tables/TableHeat";
import Draft from "./components/Editor/Draft";
import NivoSankey from "./components/NivoChart/NivoSankey";
import Draft2 from "./components/Editor/Draft2";
import ZTable from "./components/zTable/ZTable";
import Wrapper from "./components/Wrapper";

export const baseUrl = "http://192.168.1.68:5000";

function App() {
  const { scrollYProgress } = useViewportScroll();

  return (
    <div className="app_container" dir="rtl">
      {/* <motion.path
        d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
        style={{ pathLength: scrollYProgress }}
      />
      <
      <Scale />
      <ChildDelay />
      <ChildTransition /> */}
      {/* <Menu /> */}
      {/* <ApexBar /> */}
      {/* <ApexScrollChart /> */}
      {/* <ReactTable />
      <TablePaginate /> */}
      {/* <DataGrid /> */}
      {/* <NivoLine /> */}
      {/* <RechartExample /> */}
      {/* <RechartNew /> */}
      {/* <ScatterCharts /> */}
      {/* <ReSelect /> */}
      {/* <CarouselBS /> */}
      {/* <TablePaginate /> */}
      {/* <TableManual /> */}
      {/* <TableM /> */}
      {/* <TableHeat /> */}
      {/* <SwrTest /> */}
      {/* <Data /> */}
      {/* <Draft />
      <Draft2 /> */}
      {/* <NivoSankey /> */}
      <ZTable />
      {/* <Wrapper x="a" children="gg">
        Salam
      </Wrapper>  */}
    </div>
  );
}

export default App;
