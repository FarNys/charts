import React, { useEffect, useState } from "react";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
// import { scaleLog } from "d3-scale";

import axios from "axios";
import millify from "millify";

const ScatterCharts = () => {
  // const scale = scaleLog().base(Math.E);

  const [scatterData, setscatterData] = useState([]);
  const [scatterLabel, setscatterLabel] = useState();
  let scatterUrl = "http://192.168.1.118:8000/api/v1/marketing/m-scatter-2/";
  useEffect(() => {
    axios({
      method: "get",
      url: scatterUrl,
      headers: {
        Authorization: "Token 29ba6f6782e7f64987e9bb078bf72970f3ee1779",
      },
    }).then((res) => {
      const chartData = res.data.chart.series[0];
      setscatterLabel(chartData.name);
      const scatter_data = chartData.data;
      const emptyList = [];
      for (let i = 0; i < scatter_data.length; i++) {
        const x = {
          x: scatter_data[i][0],
          y: +scatter_data[i][1],
          t: millify(+scatter_data[i][1]),
        };
        emptyList.push(x);
      }
      emptyList.sort((a, b) => a.x - b.x);
      setscatterData(emptyList);
    });
  }, []);
  console.log(scatterData, scatterLabel);
  const labelStyle = {
    display: "none",
    // padding: "20px",
    // padding: "8px 16px",
    // backgroundColor: "white",
    // color: "black",
  };
  const wrapperStyle = {
    // border: "2px solid blue",
    // padding: "0",
  };
  const contentStyle = {
    padding: "0",
    borderRadius: "4px",
    // backgroundColor: "#cccccccc",
    overflow: "hidden",
    border: "none",
    fontWeight: "bold",
    boxShadow: "0 0 8px 0 rgba(0,0,0,0.3)",
  };
  const divStyle = {
    padding: "6px 8px",
    fontSize: "12px",
    backgroundColor: "#323232",
    fontWeight: "bold",
    color: "rgba(0, 143, 251, 0.85)",
  };
  return (
    <div className="rechart_container_scatter">
      <ResponsiveContainer
        minWidth={260}
        width="100%"
        minHeight={350}
        height="100%"
      >
        <ScatterChart margin={{ top: 5, right: 5, bottom: 5, left: 5 }}>
          <XAxis dataKey="x" name="تعداد" />
          <YAxis
            dataKey="y"
            name={scatterLabel}
            // scale="threshold"

            // axisLine={false}
            // tick={false}
          />
          <Tooltip
            cursor={{ strokeDasharray: "3 3" }}
            itemStyle={divStyle}
            wrapperStyle={wrapperStyle}
            labelStyle={labelStyle}
            contentStyle={contentStyle}
          />
          <Legend />
          <Scatter
            name={scatterLabel}
            data={scatterData}
            fill="rgba(0, 143, 251, 0.85)"
          />
          {/* <Brush /> */}
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
};
export default ScatterCharts;
