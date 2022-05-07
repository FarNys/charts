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
    console.log(totals);
    // console.log(typeof x);
    setpercent(+x.toString().slice(0, 2));
  }, []);

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
  return <div className="table_heat_row_percent">{percent}%</div>;
};

export default AnimatedRowHeat;
