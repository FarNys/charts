import React, { useEffect, useState } from "react";

const totalData = {
  OrderDiscount_NUM: "22,584,543",
  OrderId_NUM: "6,126",
  ProductId_NUM: "94",
  Quantity_NUM: "8,776",
  Stock_att_NUM: "416",
  Stock_pro_NUM: "19",
  att_id_NUM: "296",
  benefit_NUM: "0",
  benefit_net_NUM: "-22,584,543",
  brand: "گلدن رز",
  brand_num_NUM: "2,521",
  logestic_num_NUM: "1",
  num_p_PERCENT: "32.21 %",
  percent_PERCENT: "0.00 %",
  product_num_NUM: "218",
  sub_order_num_NUM: "1",
  sum_order_num_NUM: "86",
  total_NUM: "601,435,320",
  total_p_PERCENT: "3.76 %",
};

const SingleRowNum = ({ id, el, val }) => {
  const [calcData, setcalcData] = useState(null);
  useEffect(() => {
    for (const item in totalData) {
      if (item === id) {
        const newVal = +val.replaceAll(",", "");
        const newItem = +totalData[item].replaceAll(",", "");
        if (val == 0) {
          setcalcData(0);
        } else {
          const value = (+newVal / +newItem).toFixed(2);
          setcalcData(value);
        }

        return;
      }
    }
  }, []);
  console.log(+calcData, typeof calcData);
  // const singleRowNumStyle = {
  //   position: "absolute",
  //   top: "0",
  //   left: "0",
  //   width: "100%",
  //   height: "100%",
  // };
  const singleRowNum = {
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    backgroundColor: `rgba(54,153,255,${calcData / 100})`,
    fontSize: "12px",
    opacity: 0,
    // backgroundColor: "red",
  };

  return (
    <td className="single_row_num_container">
      {/* <div style={singleRowNumStyle}></div> */}
      <div className="single_row_num_heat" style={singleRowNum}>
        {calcData && calcData} %
      </div>
      <div className="single_row_num_value">{val}</div>
    </td>
  );
};

export default SingleRowNum;
