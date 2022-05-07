import React, { useEffect, useState } from "react";

const SingleHeatRow = ({ val, index, objKey }) => {
  // console.log(objKey);
  const [color, setcolor] = useState(0);
  useEffect(() => {
    let myVal;
    if (val.includes("%")) {
      myVal = +(val.replace("%", "") / 100);
    } else {
      myVal = 0;
    }
    setcolor(myVal);
    // console.log(myVal);
  }, []);
  const divStyle = {
    color: "black",
    borderRadius: "6px",
    width: "96%",
    height: "96%",
    top: "2%",
    left: "2%",
    margin: "auto",
    // opacity: `${!val.includes("%") ? 1 : +val.replace("%", "") / 100}`,
    backgroundColor: `rgba(54, 153, 255, ${color})`,
  };
  // console.log(val, index);
  return (
    <div className="td_heat_content" style={divStyle}>
      <p> {val}</p>
    </div>
  );
};

export default SingleHeatRow;
