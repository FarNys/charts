import React, { useState } from "react";

const Data = () => {
  const [dataCounter, setdataCounter] = useState(0);
  const data = {
    chart: {
      labels: [
        "1400-08",
        "1400-09",
        "1400-10",
        "1400-11",
        "1400-12",
        "1401-01",
        "1401-02",
      ],
      name_1: "1400off",
      data_1: [0, 0, 0, 0, 65, 0, 0],
      name_2: "CH10MxOyD",
      data_2: [0, 0, 0, 0, 0, 0, 11],
      name_3: "CH30MxOyD",
      data_3: [0, 0, 0, 0, 0, 0, 4],
      name_4: "Ch15X11Wet",
      data_4: [0, 0, 0, 0, 0, 6, 0],
      name_5: "Ch15X9mOd",
      data_5: [0, 0, 8, 12, 0, 0, 0],
      name_6: "Ch20X11mOd",
      data_6: [0, 0, 0, 33, 57, 40, 0],
      name_7: "MODfreedel",
      data_7: [0, 0, 0, 12, 0, 0, 0],
      name_8: "Mop10Y1X",
      data_8: [0, 0, 0, 0, 0, 0, 5],
      name_9: "Mop15Y1wetX",
      data_9: [0, 0, 0, 0, 0, 2, 0],
    },
  };
  //DATA FOR CHARTS
  const newObj = Object.entries(data.chart);
  const nameLabel = newObj.filter((el) => el[0].includes("label"));
  const nameList = newObj.filter((el) => el[0].includes("name"));
  const dataList = newObj.filter((el) => el[0].includes("data"));
  const dataLength = nameLabel[0][1].length;
  const emptyList = [];
  for (let i = 0; i < dataLength; i++) {
    let x = { name: nameLabel[0][1][i] };
    for (let j = 0; j < dataList.length; j++) {
      x = { ...x, [nameList[j][1]]: dataList[j][1][i] };
    }
    emptyList.push(x);
  }
  //
  console.log(emptyList);
  return <div>Data</div>;
};

export default Data;
