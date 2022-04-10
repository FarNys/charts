import React, { useState } from "react";
import Select from "react-select";

const data = {
  radio_id: {
    label: "انتخاب دسته بندی",
    options: [
      {
        cat_1: "دسته بندی اصلی",
      },
      {
        cat_2: "دسته بندی",
      },
      {
        cat_3: "زیر دسته",
      },
    ],
  },
  drop_cat1: {
    label: "دسته بندی اصلی",
    options: [
      {
        17: "آرایشی",
      },
      {
        68: "مو",
      },
      {
        nan: "بدون دسته بندی",
      },
      {
        92: "پوست",
      },
      {
        93: "بدن",
      },
      {
        53: "عطر",
      },
      {
        258: "بهداشت و سلامت",
      },
      {
        244: "پوشاک",
      },
      {
        295: "لوازم برقی",
      },
    ],
  },
  drop_cat2: {
    label: "دسته بندی دوم",
    options: [
      {
        18: "آرایش چشم",
      },
      {
        19: "آرایش صورت",
      },
      {
        59: "حالت دهنده مو",
      },
      {
        nan: "بدون دسته بندی",
      },
      {
        20: "آرایش لب",
      },
      {
        95: "مراقبت پوست",
      },
      {
        22: "محصولات جانبی آرایشی",
      },
      {
        122: "مراقبت بدن",
      },
      {
        21: "آرایش ناخن",
      },
      {
        198: "خوشبو کننده",
      },
      {
        96: "پاک کننده",
      },
      {
        54: "ادوپرفیوم",
      },
      {
        55: "ادوتویلت",
      },
      {
        56: "مراقبت مو",
      },
      {
        190: "آرایش مو",
      },
      {
        159: "ابزار آرایش مو",
      },
      {
        260: "بهداشت بانوان",
      },
      {
        121: "شوینده بدن",
      },
      {
        261: "بهداشت عمومی",
      },
      {
        259: "بهداشت دهان و دندان",
      },
      {
        224: "عطر جیبی",
      },
      {
        264: "بهداشت آقایان",
      },
      {
        297: "پوشاک زنانه",
      },
      {
        298: "مو",
      },
      {
        342: "اکسسوری",
      },
      {
        299: "صورت",
      },
    ],
  },
};

const ReSelect = () => {
  const [list, setlist] = useState([]);
  const options = [
    { value: "chocolate", label: "Chocolate", name: "drop_cat_1" },
    { value: "strawberry", label: "Strawberry", name: "drop_cat_1" },
    { value: "vanilla", label: "Vanilla", name: "drop_cat_99" },
  ];

  const handler = (e) => {
    // const x=e.filter(el=>el.)
  };
  console.log(data);
  Object.entries(data).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
  });

  return (
    <div>
      <h1>Hello</h1>
      <Select options={options} isMulti onChange={handler} />
    </div>
  );
};

export default ReSelect;
