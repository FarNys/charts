import React from "react";
import { ResponsiveSankey } from "@nivo/sankey";

const NivoSankey = () => {
  const data = {
    nodes: [
      {
        id: "John",
        nodeColor: "hsl(291, 70%, 50%)",
      },
      {
        id: "Raoul",
        nodeColor: "hsl(350, 70%, 50%)",
      },
      {
        id: "Jane",
        nodeColor: "hsl(144, 70%, 50%)",
      },
      {
        id: "Marcel",
        nodeColor: "hsl(200, 70%, 50%)",
      },
      {
        id: "Ibrahim",
        nodeColor: "hsl(105, 70%, 50%)",
      },
      {
        id: "Junko",
        nodeColor: "hsl(217, 70%, 50%)",
      },
    ],
    links: [
      {
        source: "John",
        target: "Junko",
        value: 173,
      },
      {
        source: "John",
        target: "Raoul",
        value: 49,
      },
      {
        source: "John",
        target: "Marcel",
        value: 83,
      },
      {
        source: "Jane",
        target: "Junko",
        value: 104,
      },
      {
        source: "Jane",
        target: "Raoul",
        value: 152,
      },
      {
        source: "Jane",
        target: "Marcel",
        value: 16,
      },
      {
        source: "Raoul",
        target: "Marcel",
        value: 144,
      },
      {
        source: "Raoul",
        target: "Ibrahim",
        value: 200,
      },
      {
        source: "Raoul",
        target: "Junko",
        value: 23,
      },
      {
        source: "Marcel",
        target: "Junko",
        value: 197,
      },
      {
        source: "Ibrahim",
        target: "Junko",
        value: 5,
      },
      {
        source: "Ibrahim",
        target: "Marcel",
        value: 52,
      },
    ],
  };
  return (
    <div dir="ltr" style={{ height: "700px", width: "100%" }}>
      {" "}
      <ResponsiveSankey
        data={data}
        margin={{ top: 40, right: 160, bottom: 40, left: 50 }}
        align="justify"
        colors={{ scheme: "nivo" }}
        nodeOpacity={1}
        nodeHoverOthersOpacity={0.35}
        nodeThickness={18}
        nodeSpacing={24}
        nodeBorderWidth={0}
        nodeBorderColor={{
          from: "color",
          modifiers: [["darker", 0.8]],
        }}
        nodeBorderRadius={3}
        linkOpacity={0.5}
        linkHoverOthersOpacity={0.1}
        linkContract={3}
        enableLinkGradient={true}
        labelPosition="outside"
        labelOrientation="vertical"
        labelPadding={16}
        labelTextColor={{
          from: "color",
          modifiers: [["darker", 1]],
        }}
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            translateX: 130,
            itemWidth: 100,
            itemHeight: 14,
            itemDirection: "right-to-left",
            itemsSpacing: 2,
            itemTextColor: "#999",
            symbolSize: 14,
            effects: [
              {
                on: "hover",
                style: {
                  itemTextColor: "#000",
                },
              },
            ],
          },
        ]}
      />
    </div>
  );
};

export default NivoSankey;
