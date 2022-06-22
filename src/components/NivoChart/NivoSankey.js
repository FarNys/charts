import React, { useEffect, useState } from "react";
import { ResponsiveSankey } from "@nivo/sankey";
import axios from "axios";
const data = {
  nodes: [
    {
      id: "Z",
      nodeColor: "hsl(291, 70%, 50%)",
    },
    {
      id: "K",
      nodeColor: "hsl(350, 70%, 50%)",
    },

    {
      id: "C",
      nodeColor: "hsl(144, 70%, 50%)",
    },
    {
      id: " A",
      nodeColor: "hsl(291, 70%, 50%)",
    },
    {
      id: " F",
      nodeColor: "hsl(350, 70%, 50%)",
    },

    {
      id: " C",
      nodeColor: "red",
    },
  ],
  links: [
    {
      source: "Z",
      target: " F",
      value: 173,
    },
    {
      source: "C",
      target: " F",
      value: 49,
    },
    {
      source: "C",
      target: " A",
      value: 49,
    },
    {
      source: "K",
      target: " C",
      value: 83,
    },
    {
      source: "K",
      target: " F",
      value: 104,
    },
    {
      source: "Z",
      target: " C",
      value: 152,
    },
    {
      source: "Z",
      target: " A",
      value: 16,
    },
  ],
};
const NivoSankey = () => {
  const arrowText = "<-";
  const toolText = "مشتری";
  const [dataSankey, setdataSankey] = useState();
  const [links, setlinks] = useState([]);
  const [nodes, setnodes] = useState([]);
  // const getData = async () => {

  useEffect(() => {
    // setInterval(() => {
    // console.log("INTERVAL");
    axios({
      method: "get",
      url: "http://192.168.1.68:8000/api/v1/customer/rfm/sankey-chart/",
      headers: {
        Authorization: "Token d03291e2322b0229016a4543db07d77f59656c41",
      },
    })
      .then((res) => {
        console.log(res);
        const listData = res.data.chart.links.slice(0, 19);
        const nodeData = res.data.chart.nodes;

        setdataSankey(res.data.chart);
        // setdataSankey({
        //   links: listData,
        //   nodes: nodeData,
        // });
      })
      .catch((err) => console.log(err));
    // }, 5000);
  }, []);
  console.log("Check NivoPage");
  return (
    <div dir="rtl" style={{ height: "700px", width: "100%" }}>
      {" "}
      {dataSankey && (
        <ResponsiveSankey
          animate={false}
          data={dataSankey}
          margin={{ top: 40, right: 50, bottom: 40, left: 50 }}
          align="justify"
          colors={(node) => node.nodeColor}
          nodeOpacity={1}
          nodeHoverOthersOpacity={0.35}
          nodeThickness={10}
          nodeSpacing={5}
          nodeBorderWidth={10}
          nodeBorderColor={{
            from: "color",
            modifiers: [["darker", 1]],
          }}
          nodeBorderRadius={3}
          linkOpacity={0.5}
          linkHoverOthersOpacity={0.1}
          linkContract={1}
          linkBlendMode="normal"
          // isInteractive={false}
          // enableLinkGradient={true}
          // label={false}
          labelPosition="outside"
          labelOrientation="horizontal"
          labelPadding={7}
          labelTextColor={{
            from: "color",
            modifiers: [["darker", 1]],
          }}
          sort="input"
          nodeInnerPadding={3}
          // nodeTooltip={({ node }) => (
          //   <>
          //     Custom tooltip for node:
          //     <br />
          //     <strong>{node.label}</strong>
          //   </>
          // )}
          linkTooltip={({ link }) => (
            <div dir="rtl" className="nivo_sankey_tooltip_container">
              <span>
                {" "}
                {toolText} {link.value}{" "}
              </span>
              <strong>{link.target.label}</strong> <span> {arrowText} </span>
              <strong>{link.source.label}</strong>{" "}
            </div>
          )}
          // legends={[
          //   {
          //     anchor: "bottom-right",
          //     direction: "column",
          //     translateX: 130,
          //     itemWidth: 100,
          //     itemHeight: 14,
          //     itemDirection: "right-to-left",
          //     itemsSpacing: 2,
          //     itemTextColor: "#999",
          //     symbolSize: 14,
          //     effects: [
          //       {
          //         on: "hover",
          //         style: {
          //           itemTextColor: "#000",
          //         },
          //       },
          //     ],
          //   },
          // ]}
        />
      )}
      {/* <button onClick={() => getData()}>RE FETCH</button> */}
    </div>
  );
};

export default NivoSankey;
