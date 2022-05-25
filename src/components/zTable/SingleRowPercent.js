import React from "react";

const SingleRowPercent = ({ val }) => {
  const singleRowPercentStylePos = {
    textAlign: "center",
    backgroundColor: `rgba(53,154,250,${+val.replace("%", "") / 100})`,
    fontSize: "12px",
  };
  const singleRowPercentStyleNeg = {
    textAlign: "center",
    backgroundColor: `rgba(246,78,96,${+val.replace("%", "") / 100})`,
    fontSize: "12px",
  };

  return (
    <td style={+val > 0 ? singleRowPercentStyleNeg : singleRowPercentStylePos}>
      {val}
    </td>
  );
};

export default SingleRowPercent;
