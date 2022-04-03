import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
const ApexBar = () => {
  const [pos, setpos] = useState(0);

  //   useEffect(() => {
  //     const getEl = document.querySelector(".apex_chart_container");
  //     const toolEl = document.querySelector(".apexcharts-toolbar");
  //     console.log(getEl);
  //     console.log(toolEl);

  //     const getSize = getEl.getBoundingClientRect();
  //     const getW = getSize.width;
  //     const scFun = () => {
  //       const currentScroll = getEl.scrollLeft;
  //       toolEl.style.transform = `translateX(${getW - currentScroll}px)`;
  //     };
  //     getEl.addEventListener("scroll", scFun);
  //     return () => {
  //       getEl.removeEventListener("scroll", scFun);
  //     };
  //   }, []);

  const yData = [
    2722, 2080, 2063, 1972, 1516, 2722, 2080, 2063, 1972, 1516, 1516, 2722,
    2080, 2063, 1972, 1516,
  ];
  const xData = [
    "Burj Khalifa",
    "Tokyo Sky Tree",
    "KVLY-TV mast",
    "Abraj Al-Bait Towers",
    "Bren Tower",
    "Burj Khalifa",
    "Tokyo Sky Tree",
    "KVLY-TV mast",
    "Abraj Al-Bait Towers",
    "Bren Tower",
    "Burj Khalifa",
    "Tokyo Sky Tree",
    "KVLY-TV mast",
    "Abraj Al-Bait Towers",
    "Bren Tower",
  ];
  const chartWidth = xData.length * 200 + "px";
  const series = [
    {
      name: "Height in feet",
      data: yData,
    },
  ];
  const options = {
    chart: {
      toolbar: {
        show: true,
        offsetX: 0,
        offsetY: 0,
        tools: {
          download: true,
          selection: false,
          zoom: true,
          zoomin: true,
          zoomout: true,
          pan: false,
          reset: true | '<img src="/static/icons/reset.png" width="20">',
          customIcons: [],
        },
        export: {
          csv: {
            filename: undefined,
            columnDelimiter: ",",
            headerCategory: "category",
            headerValue: "value",
            dateFormatter(timestamp) {
              return new Date(timestamp).toDateString();
            },
          },
          svg: {
            filename: undefined,
          },
          png: {
            filename: undefined,
          },
        },
        autoSelected: "zoom",
      },
    },

    xaxis: {
      categories: xData,
      tickPlacement: "on",
      labels: {
        rotate: -45,
      },
    },
  };

  return (
    <div className="apex_chart_container">
      <div className="apex_chart_container_box">
        <Chart
          options={options}
          type="bar"
          series={series}
          width={chartWidth}
          // width="100%"
          height="500px"
        />
      </div>
    </div>
  );
};

export default ApexBar;
