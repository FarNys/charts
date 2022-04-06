import React, { useEffect } from "react";
import Chart from "react-apexcharts";

const ApexScrollChart = () => {
  var data = generateDayWiseTimeSeries(new Date("22 Apr 2017").getTime(), 115, {
    min: 30,
    max: 90,
  });
  // var data2 = generateDayWiseTimeSeries(
  //   new Date("22 Apr 2017").getTime(),
  //   115,
  //   {
  //     min: 30,
  //     max: 50,
  //   }
  // );
  // var data3 = generateDayWiseTimeSeries(
  //   new Date("22 Apr 2017").getTime(),
  //   115,
  //   {
  //     min: 20,
  //     max: 70,
  //   }
  // );
  var options1 = {
    chart: {
      id: "chart2",
      type: "area",
      height: 230,
      foreColor: "#ccc",

      toolbar: {
        autoSelected: "pan",
        show: false,
      },
    },
    style: {
      fontSize: "12px",
      cssClass: "apexcharts_xaxis_manual",
    },
    colors: ["#00BAEC", "#00dd55"],
    stroke: {
      width: 3,
    },
    grid: {
      borderColor: "#555",
      clipMarkers: false,
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      gradient: {
        enabled: true,
        opacityFrom: 0.55,
        opacityTo: 0,
      },
    },
    markers: {
      size: 5,
      colors: ["#000524"],
      strokeColor: "#00BAEC",
      strokeWidth: 3,
    },
    series: [
      { name: "R uOK", data: data },
      // {
      //   name: "Data 2",
      //   data: data2,
      // },
      // {
      //   name: "Data 3",
      //   data: data3,
      // },
    ],
    tooltip: {
      theme: "dark",
    },
    xaxis: {
      type: "datetime",
    },
    yaxis: {
      min: 0,
      tickAmount: 4,
    },
  };

  //   var chart1 = new ApexCharts(document.querySelector("#chart-area"), options1);

  //   chart1.render();

  var options2 = {
    chart: {
      id: "chart1",
      height: 130,
      type: "bar",
      foreColor: "#ccc",
      brush: {
        target: "chart2",
        enabled: true,
        autoScaleYaxis: false,
      },
      selection: {
        enabled: true,
        fill: {
          color: "#fff",
          opacity: 0.4,
        },
        xaxis: {
          min: new Date("20 Jul 2017 10:00:00").getTime(),
          max: new Date("13 Aug 2017 10:00:00").getTime(),
        },
      },
    },
    colors: ["#FF0080"],
    series: [
      {
        data: data,
      },
      // {
      //   data: data2,
      // },
    ],
    stroke: {
      width: 2,
    },
    grid: {
      borderColor: "#444",
    },
    markers: {
      size: 0,
    },
    xaxis: {
      type: "datetime",
      tooltip: {
        enabled: false,
      },
    },
    yaxis: {
      tickAmount: 2,
    },
  };

  //   var chart2 = new ApexCharts(document.querySelector("#chart-bar"), options2);

  //   chart2.render();

  function generateDayWiseTimeSeries(baseval, count, yrange) {
    var i = 0;
    var series = [];
    while (i < count) {
      var x = baseval;
      var y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

      series.push([x, y]);
      baseval += 86400000;
      i++;
    }
    return series;
  }
  console.log(options1.series);

  return (
    <div className="apexscrollchart_container">
      <Chart
        options={options1}
        type="bar"
        series={options1.series}
        // width={chartWidth}
        width="100%"
        height="500px"
        id="chart1"
      />
      <Chart
        options={options2}
        type="bar"
        series={options1.series}
        // width={chartWidth}
        width="100%"
        height="150px"
        id="chart2"
      />
    </div>
  );
};

export default ApexScrollChart;
