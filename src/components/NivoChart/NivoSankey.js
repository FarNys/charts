import { ResponsiveSankey } from "@nivo/sankey";

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
const data = {
  nodes: [
    {
      id: "John",
      nodeColor: "hsl(180, 70%, 50%)",
    },
    {
      id: "Raoul",
      nodeColor: "hsl(353, 70%, 50%)",
    },
    {
      id: "Jane",
      nodeColor: "hsl(208, 70%, 50%)",
    },
    {
      id: "Marcel",
      nodeColor: "hsl(256, 70%, 50%)",
    },
    {
      id: "Ibrahim",
      nodeColor: "hsl(112, 70%, 50%)",
    },
    {
      id: "Junko",
      nodeColor: "hsl(146, 70%, 50%)",
    },
  ],
  links: [
    {
      source: "John",
      target: "Marcel",
      value: 46,
    },
    {
      source: "John",
      target: "Ibrahim",
      value: 10,
    },
    {
      source: "John",
      target: "Jane",
      value: 60,
    },
    {
      source: "John",
      target: "Raoul",
      value: 13,
    },
    {
      source: "Jane",
      target: "Junko",
      value: 127,
    },
    {
      source: "Jane",
      target: "Raoul",
      value: 11,
    },
    {
      source: "Jane",
      target: "Marcel",
      value: 184,
    },
    {
      source: "Jane",
      target: "Ibrahim",
      value: 175,
    },
    {
      source: "Ibrahim",
      target: "Junko",
      value: 142,
    },
    {
      source: "Ibrahim",
      target: "Marcel",
      value: 94,
    },
    {
      source: "Ibrahim",
      target: "Raoul",
      value: 149,
    },
    {
      source: "Raoul",
      target: "Marcel",
      value: 199,
    },
    {
      source: "Marcel",
      target: "Junko",
      value: 172,
    },
  ],
};
// you'll often use just a few of them.
const NivoSankey = () => (
  <div style={{ height: "500px", width: "400px" }}>
    <ResponsiveSankey
      data={data}
      margin={{ top: 40, right: 160, bottom: 40, left: 50 }}
      align="justify"
      colors={{ scheme: "category10" }}
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

export default NivoSankey;
