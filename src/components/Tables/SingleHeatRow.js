import React, { useEffect, useState } from "react";

const SingleHeatRow = ({ val, index }) => {
  const [color, setcolor] = useState(0);
  useEffect(() => {
    let myVal;
    if (val.includes("%")) {
      myVal = +(val.replace("%", "") / 100);
    } else {
      myVal = 0;
    }
    setcolor(myVal);
    console.log(myVal);
  }, []);
  const divStyle = {
    color: "black",

    // opacity: `${!val.includes("%") ? 1 : +val.replace("%", "") / 100}`,
    backgroundColor: `rgba(0, 150, 230, ${color})`,
  };
  console.log(val, index);
  return (
    <div className="td_heat_content" style={divStyle}>
      <p> {val}</p>
    </div>
  );
};

export default SingleHeatRow;
