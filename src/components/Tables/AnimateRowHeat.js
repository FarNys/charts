import React, { useEffect, useState } from "react";

const AnimatedRowHeat = ({
  el,
  val,
  id,
  tableH,
  index,
  totalQuantity,
  totals,
}) => {
  const [percent, setpercent] = useState(0);
  //   console.log(index);
  //   console.log(val);
  useEffect(() => {
    const x = (+val.replaceAll(",", "").replace("%", "") * 100) / totals;
    setpercent(x);
  }, [val, totals]);
  const divStyle = {
    position: "absolute",
    left: 0,
    top: 0,
    height: "100%",
    backgroundColor: "#00FFCC",
    width: `${(+val.replaceAll(",", "").replace("%", "") * 100) / totals}%`,
    animationDelay: `${0.15 * index + 0.3}s`,
  };
  //   useLayoutEffect(() => {
  //     // console.log(val);
  //     if (tableH.length > 0) {
  //       const getEl = document.querySelectorAll(".t_data_animate");
  //       getEl.forEach((el) => {
  //         el.style.visibility = "hidden";
  //         console.log(el);
  //       });
  //       //   getEl[0].style.color = "white";
  //     }
  //   }, [tableH, val]);
  return <div className="t_data_animate" style={divStyle}></div>;
};

export default AnimatedRowHeat;
