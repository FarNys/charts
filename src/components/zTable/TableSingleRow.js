import React from "react";
import SingleRowNum from "./SingleRowNum";
import SingleRowPercent from "./SingleRowPercent";

const TableSingleRow = ({ el, id, val }) => {
  if (id.includes("_NUM")) {
    return <SingleRowNum el={el} id={id} val={val} />;
  }
  if (id.includes("_PERCENT")) {
    return <SingleRowPercent el={el} id={id} val={val} />;
  }
  return <td className="single_row_num_real_data">{val}</td>;
};

export default TableSingleRow;
