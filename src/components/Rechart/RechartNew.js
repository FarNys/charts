import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Brush,
  BarChart,
  Bar,
  ScatterChart,
  Scatter,
  AreaChart,
  Area,
  Legend,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const data = {
  labels: ["1400-12", "1401-01"],
  series: [
    {
      name: "1400off",
      data: [41, 0],
    },
    {
      name: "Ch20X11mOd",
      data: [15, 26],
    },
    {
      name: "Mop15Y1wetX",
      data: [0, 2],
    },
    {
      name: "Mop20YMod1X",
      data: [6, 11],
    },
    {
      name: "mdg15-y735yc",
      data: [63, 38],
    },
    {
      name: "mdg20-yyydpq",
      data: [38, 27],
    },
    {
      name: "mdg30-tf0fdz",
      data: [25, 25],
    },
    {
      name: "mdg40-z3mq3n",
      data: [26, 15],
    },
    {
      name: "mdg50-nm1myq",
      data: [14, 10],
    },
    {
      name: "mdg60-9hh5mp",
      data: [10, 4],
    },
    {
      name: "modiagergtl2",
      data: [7, 4],
    },
    {
      name: "offer100_adv",
      data: [13, 3],
    },
    {
      name: "کد تخفیف ندارد",
      data: [54, 24],
    },
  ],
};
// const data = [
//   { name: "Page KO", uv: 400, pv: 2400, amt: 2400, ca: 750 },
//   { name: "Page A", uv: 200, pv: 250, amt: 500, ca: 256 },
//   { name: "Page B", uv: 500, pv: 2000, amt: 1000, ca: 325 },
//   { name: "Page C", uv: 600, pv: 850, amt: 1600, ca: 700 },
//   { name: "Page d", uv: 310, pv: 850, amt: 675, ca: 222 },
//   { name: "Page F", uv: 255, pv: 850, amt: 850, ca: 111 },
//   { name: "Gladiator2022", uv: 76, pv: 850, amt: 358, ca: 333 },
//   { name: "Page Z", uv: 85, pv: 850, amt: 1200, ca: 444 },
//   { name: 53, uv: 600, pv: 267, amt: 2400, ca: 70 },
// ];

// const dummyData = [
//   { name: "uv", state: true },
//   { name: "pv", state: true },
//   { name: "amt", state: true },
// ];
const colorSet = [
  "rgba(0, 143, 251, 0.85)",
  "#00d084",
  "rgb(254, 176, 25)",
  "rgb(255, 69, 96)",
  "#fffd86",
  "#0d1a26",
];
const rUrl = "http://192.168.1.68:80/api/v1/marketing/m-code-line/";

const RechartNew = ({ isSingle }) => {
  //   for (let i = 0; i < data.series.length; i++) {
  //     const emptyList = [];
  //     for (let j = 0; j < data.labels.length; j++) {
  //       const x = { [data.labels[j]]: data.series[i].data[j] };
  //       emptyList.push({ ...x });
  //       console.log({ ...emptyList[0], ...emptyList[1] });
  //     }
  //   }

  const [liveData, setliveData] = useState([]);
  const [liveState, setliveState] = useState([]);
  console.log(isSingle);
  useEffect(() => {
    axios({
      method: "get",
      url: rUrl,
      headers: {
        Authorization: "Token 29ba6f6782e7f64987e9bb078bf72970f3ee1779",
      },
    }).then((res) => {
      const data = res.data.chart;
      console.log(data);
      const dataLength = data.labels.length;
      const emptyList = [];
      for (let i = 0; i < dataLength; i++) {
        const x = {
          name: data.labels[i],
          // تعداد: data.data[i],
          [data.name_1]: +data.data_1[i],
          [data.name_2]: +data.data_2[i],
          [data.name_3]: +data.data_3[i],
        };
        emptyList.push(x);
      }
      setliveData(emptyList);
    });
  }, []);
  console.log(liveData);
  useEffect(() => {
    if (liveData.length > 0) {
      const el = liveData[0];
      console.log(el);
      const emptyList = [];
      for (const key in el) {
        if (key !== "name") {
          const x = {
            name: key,
            state: true,
          };
          emptyList.push(x);
        }
        setliveState(emptyList);
      }
    }
  }, [liveData]);
  // const [barState, setbarState] = useState([
  //   { name: "uv", state: true },
  //   { name: "pv", state: true },
  //   { name: "amt", state: true },
  //   // { name: "ca", state: true },
  // ]);

  const legendHandler = (e) => {
    console.log(e);
    if (isSingle) {
      return;
    }
    const selected = e.dataKey;
    const filtered = liveState.map((el) => {
      if (liveState.length > 1) {
      }
      return el.name === selected ? { ...el, state: false } : el;
    });
    setliveState(filtered);
  };

  const resetHandler = () => {
    const resetState = liveState.map((el) => {
      return { ...el, state: true };
    });
    setliveState(resetState);
    console.log(resetState);
  };
  const labelStyle = {
    // padding: "20px",
    padding: "8px 16px",
    backgroundColor: "white",
    color: "black",
  };
  const wrapperStyle = {
    // border: "2px solid blue",
    // padding: "0",
  };
  const contentStyle = {
    padding: "0",
    borderRadius: "12px",
    backgroundColor: "#cccccccc",
    overflow: "hidden",
    border: "none",
    fontWeight: "bold",
    boxShadow: "0 0 8px 0 rgba(0,0,0,0.3)",
  };
  const divStyle = {
    padding: "8px 16px",
    backgroundColor: "#323232",
    fontWeight: "bold",
  };

  return (
    <div className="rechart_container">
      {liveState.length > 0 && (
        <ResponsiveContainer
          // width={700}
          height={600}
          className="responsive_rechart"
        >
          <BarChart
            data={liveData}
            barCategoryGap="10%"
            barGap="0%"
            // barSize={150}
            maxBarSize={100}
          >
            {liveState.length > 0 &&
              liveState.map(
                (el, index) =>
                  el.state && (
                    <Bar
                      key={`chart+${index}`}
                      type="monotone"
                      dataKey={el.name}
                      stroke={colorSet[index]}
                      strokeWidth="2px"
                      fill={colorSet[index]}
                      fillOpacity={0.85}
                      className="chart_bar_color"
                      // stackId="a"
                    />
                  )
              )}
            <Legend onClick={legendHandler} className="legend_class" />
            <Tooltip
              itemStyle={divStyle}
              wrapperStyle={wrapperStyle}
              labelStyle={labelStyle}
              contentStyle={contentStyle}
              cursor={{
                stroke: "#45321c",
                strokeWidth: 1,
                fill: "#45321c",
                opacity: 0.2,
              }}
            />
            {/* <CartesianGrid stroke="#ccc" /> */}
            <XAxis dataKey="name" />
            <YAxis />
            <Brush stroke="#3d81ff" strokeWidth={0} />
          </BarChart>
        </ResponsiveContainer>
      )}
      {!isSingle && <button onClick={resetHandler}>Reset</button>}
    </div>
  );
};

export default RechartNew;
