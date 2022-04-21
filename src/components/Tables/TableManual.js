import React, { useCallback, useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import millify from "millify";
import Select from "react-select";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

const TableManual = () => {
  const formatNumber = (item) => {
    const spliter = item.toString().split("");
    const spliterLength = spliter.length;
    // console.log(spliter);
    if (spliterLength === 4) {
      const newVal =
        spliter.join("").slice(0, 1) + "," + spliter.join("").slice(1, 2) + "k";
      console.log(newVal);
    }
    if (spliterLength === 5) {
      const newVal =
        spliter.join("").slice(0, 1) + spliter.join("").slice(1, 2) + "k";
      console.log(newVal);
    }
    if (spliterLength === 6) {
      const newVal =
        spliter.join("").slice(0, 1) +
        spliter.join("").slice(1, 2) +
        spliter.join("").slice(2, 3) +
        "k";
      // console.log(newVal);
    }
  };
  formatNumber("123456");
  const data = {
    table: {
      header: {
        cat_1: "دسته بندی",
        date_max: "تاریخ آخرین سفارش",
        OrderId: "تعداد سفارش",
        Quantity: "تعداد کالا",
        total: "مجموع فروش",
        available: "موجود",
        unavailable: "ناموجود",
        all_pro: "تنوع کالایی",
        depot_val_pro: "ارزش کالای انبار",
        Stock_pro_sum: "موجودی کالا",
        depot_val_att: "ارزش ویژگی کالای انبار",
        Stock_att_sum: "موجودی ویژگی کالا",
        Stock_pro_min: "حداقل موجودی کالا",
        Stock_pro_max: "حداکثر موجودی کالا",
        Stock_att_min: "حداقل موجودی در ویژگی",
        Stock_att_max: "حداکثر موجودی در ویژگی",
      },
      body: {
        count: 46,
        next: null,
        previous: null,
        results: [
          {
            cat_1: "آرایشی",
            date_max: "1401-01-22",
            OrderId: "23,705",
            Quantity: "65,148",
            total: "6,477,200,301",
            available: "267",
            unavailable: "1,285",
            all_pro: "1,547",
            depot_val_pro: "1,115,145,480",
            Stock_pro_sum: "6,693",
            depot_val_att: "3,647,552,370",
            Stock_att_sum: "21,527",
            Stock_pro_min: "-3",
            Stock_pro_max: "277",
            Stock_att_min: "-6",
            Stock_att_max: "406",
          },
          {
            cat_1: "بدن",
            date_max: "1401-01-22",
            OrderId: "1,955",
            Quantity: "3,044",
            total: "222,922,782",
            available: "121",
            unavailable: "251",
            all_pro: "371",
            depot_val_pro: "144,098,336",
            Stock_pro_sum: "947",
            depot_val_att: "480,000",
            Stock_att_sum: "3",
            Stock_pro_min: "-6",
            Stock_pro_max: "54",
            Stock_att_min: "1",
            Stock_att_max: "2",
          },
          {
            cat_1: "بدون دسته بندی",
            date_max: "1401-01-21",
            OrderId: "567",
            Quantity: "565",
            total: "3,743,340",
            available: "6",
            unavailable: "3",
            all_pro: "9",
            depot_val_pro: "51,626,000",
            Stock_pro_sum: "163",
            depot_val_att: "15,540,360",
            Stock_att_sum: "230",
            Stock_pro_min: "0",
            Stock_pro_max: "49",
            Stock_att_min: "-1",
            Stock_att_max: "74",
          },
          {
            cat_1: "بهداشت و سلامت",
            date_max: "1401-01-21",
            OrderId: "777",
            Quantity: "1,260",
            total: "56,002,807",
            available: "78",
            unavailable: "123",
            all_pro: "201",
            depot_val_pro: "51,924,180",
            Stock_pro_sum: "1,543",
            depot_val_att: "0",
            Stock_att_sum: "0",
            Stock_pro_min: "-1",
            Stock_pro_max: "286",
            Stock_att_min: "0",
            Stock_att_max: "0",
          },
          {
            cat_1: "عطر",
            date_max: "1401-01-21",
            OrderId: "408",
            Quantity: "610",
            total: "132,295,250",
            available: "34",
            unavailable: "135",
            all_pro: "169",
            depot_val_pro: "41,969,000",
            Stock_pro_sum: "93",
            depot_val_att: "0",
            Stock_att_sum: "0",
            Stock_pro_min: "-2",
            Stock_pro_max: "10",
            Stock_att_min: "0",
            Stock_att_max: "0",
          },
          {
            cat_1: "مو",
            date_max: "1401-01-21",
            OrderId: "4,826",
            Quantity: "7,988",
            total: "1,167,800,329",
            available: "321",
            unavailable: "443",
            all_pro: "763",
            depot_val_pro: "409,358,100",
            Stock_pro_sum: "2,834",
            depot_val_att: "32,003,000",
            Stock_att_sum: "630",
            Stock_pro_min: "-2",
            Stock_pro_max: "43",
            Stock_att_min: "-1",
            Stock_att_max: "20",
          },
          {
            cat_1: "پوست",
            date_max: "1401-01-22",
            OrderId: "11,976",
            Quantity: "33,662",
            total: "3,142,218,046",
            available: "478",
            unavailable: "864",
            all_pro: "1,341",
            depot_val_pro: "1,165,614,174",
            Stock_pro_sum: "9,182",
            depot_val_att: "66,240,200",
            Stock_att_sum: "347",
            Stock_pro_min: "-4",
            Stock_pro_max: "916",
            Stock_att_min: "-1",
            Stock_att_max: "31",
          },
          {
            cat_1: "پوشاک",
            date_max: "1401-01-01",
            OrderId: "50",
            Quantity: "67",
            total: "4,466,150",
            available: "11",
            unavailable: "38",
            all_pro: "49",
            depot_val_pro: "1,744,000",
            Stock_pro_sum: "12",
            depot_val_att: "0",
            Stock_att_sum: "0",
            Stock_pro_min: "-1",
            Stock_pro_max: "4",
            Stock_att_min: "0",
            Stock_att_max: "0",
          },
          {
            cat_1: "پوشاک",
            date_max: "1401-01-01",
            OrderId: "50",
            Quantity: "67",
            total: "4,466,150",
            available: "11",
            unavailable: "38",
            all_pro: "49",
            depot_val_pro: "1,744,000",
            Stock_pro_sum: "12",
            depot_val_att: "0",
            Stock_att_sum: "0",
            Stock_pro_min: "-1",
            Stock_pro_max: "4",
            Stock_att_min: "0",
            Stock_att_max: "0",
          },
          {
            cat_1: "پوشاک",
            date_max: "1401-01-01",
            OrderId: "50",
            Quantity: "67",
            total: "4,466,150",
            available: "11",
            unavailable: "38",
            all_pro: "49",
            depot_val_pro: "1,744,000",
            Stock_pro_sum: "12",
            depot_val_att: "0",
            Stock_att_sum: "0",
            Stock_pro_min: "-1",
            Stock_pro_max: "4",
            Stock_att_min: "0",
            Stock_att_max: "0",
          },
          {
            cat_1: "پوشاک",
            date_max: "1401-01-01",
            OrderId: "50",
            Quantity: "67",
            total: "4,466,150",
            available: "11",
            unavailable: "38",
            all_pro: "49",
            depot_val_pro: "1,744,000",
            Stock_pro_sum: "12",
            depot_val_att: "0",
            Stock_att_sum: "0",
            Stock_pro_min: "-1",
            Stock_pro_max: "4",
            Stock_att_min: "0",
            Stock_att_max: "0",
          },
          {
            cat_1: "پوشاک",
            date_max: "1401-01-01",
            OrderId: "50",
            Quantity: "67",
            total: "4,466,150",
            available: "11",
            unavailable: "38",
            all_pro: "49",
            depot_val_pro: "1,744,000",
            Stock_pro_sum: "12",
            depot_val_att: "0",
            Stock_att_sum: "0",
            Stock_pro_min: "-1",
            Stock_pro_max: "4",
            Stock_att_min: "0",
            Stock_att_max: "0",
          },
          {
            cat_1: "پوشاک",
            date_max: "1401-01-01",
            OrderId: "50",
            Quantity: "67",
            total: "4,466,150",
            available: "11",
            unavailable: "38",
            all_pro: "49",
            depot_val_pro: "1,744,000",
            Stock_pro_sum: "12",
            depot_val_att: "0",
            Stock_att_sum: "0",
            Stock_pro_min: "-1",
            Stock_pro_max: "4",
            Stock_att_min: "0",
            Stock_att_max: "0",
          },
          {
            cat_1: "پوشاک",
            date_max: "1401-01-01",
            OrderId: "50",
            Quantity: "67",
            total: "4,466,150",
            available: "11",
            unavailable: "38",
            all_pro: "49",
            depot_val_pro: "1,744,000",
            Stock_pro_sum: "12",
            depot_val_att: "0",
            Stock_att_sum: "0",
            Stock_pro_min: "-1",
            Stock_pro_max: "4",
            Stock_att_min: "0",
            Stock_att_max: "0",
          },
          // {
          //   cat_1: "پوشاک",
          //   date_max: "1401-01-01",
          //   OrderId: "50",
          //   Quantity: "67",
          //   total: "4,466,150",
          //   available: "11",
          //   unavailable: "38",
          //   all_pro: "49",
          //   depot_val_pro: "1,744,000",
          //   Stock_pro_sum: "12",
          //   depot_val_att: "0",
          //   Stock_att_sum: "0",
          //   Stock_pro_min: "-1",
          //   Stock_pro_max: "4",
          //   Stock_att_min: "0",
          //   Stock_att_max: "0",
          // },
          // {
          //   cat_1: "پوشاک",
          //   date_max: "1401-01-01",
          //   OrderId: "50",
          //   Quantity: "67",
          //   total: "4,466,150",
          //   available: "11",
          //   unavailable: "38",
          //   all_pro: "49",
          //   depot_val_pro: "1,744,000",
          //   Stock_pro_sum: "12",
          //   depot_val_att: "0",
          //   Stock_att_sum: "0",
          //   Stock_pro_min: "-1",
          //   Stock_pro_max: "4",
          //   Stock_att_min: "0",
          //   Stock_att_max: "0",
          // },
          // {
          //   cat_1: "پوشاک",
          //   date_max: "1401-01-01",
          //   OrderId: "50",
          //   Quantity: "67",
          //   total: "4,466,150",
          //   available: "11",
          //   unavailable: "38",
          //   all_pro: "49",
          //   depot_val_pro: "1,744,000",
          //   Stock_pro_sum: "12",
          //   depot_val_att: "0",
          //   Stock_att_sum: "0",
          //   Stock_pro_min: "-1",
          //   Stock_pro_max: "4",
          //   Stock_att_min: "0",
          //   Stock_att_max: "0",
          // },
          // {
          //   cat_1: "پوشاک",
          //   date_max: "1401-01-01",
          //   OrderId: "50",
          //   Quantity: "67",
          //   total: "4,466,150",
          //   available: "11",
          //   unavailable: "38",
          //   all_pro: "49",
          //   depot_val_pro: "1,744,000",
          //   Stock_pro_sum: "12",
          //   depot_val_att: "0",
          //   Stock_att_sum: "0",
          //   Stock_pro_min: "-1",
          //   Stock_pro_max: "4",
          //   Stock_att_min: "0",
          //   Stock_att_max: "0",
          // },
          // {
          //   cat_1: "پوشاک",
          //   date_max: "1401-01-01",
          //   OrderId: "50",
          //   Quantity: "67",
          //   total: "4,466,150",
          //   available: "11",
          //   unavailable: "38",
          //   all_pro: "49",
          //   depot_val_pro: "1,744,000",
          //   Stock_pro_sum: "12",
          //   depot_val_att: "0",
          //   Stock_att_sum: "0",
          //   Stock_pro_min: "-1",
          //   Stock_pro_max: "4",
          //   Stock_att_min: "0",
          //   Stock_att_max: "0",
          // },
          // {
          //   cat_1: "پوشاک",
          //   date_max: "1401-01-01",
          //   OrderId: "50",
          //   Quantity: "67",
          //   total: "4,466,150",
          //   available: "11",
          //   unavailable: "38",
          //   all_pro: "49",
          //   depot_val_pro: "1,744,000",
          //   Stock_pro_sum: "12",
          //   depot_val_att: "0",
          //   Stock_att_sum: "0",
          //   Stock_pro_min: "-1",
          //   Stock_pro_max: "4",
          //   Stock_att_min: "0",
          //   Stock_att_max: "0",
          // },
          // {
          //   cat_1: "پوشاک",
          //   date_max: "1401-01-01",
          //   OrderId: "50",
          //   Quantity: "67",
          //   total: "4,466,150",
          //   available: "11",
          //   unavailable: "38",
          //   all_pro: "49",
          //   depot_val_pro: "1,744,000",
          //   Stock_pro_sum: "12",
          //   depot_val_att: "0",
          //   Stock_att_sum: "0",
          //   Stock_pro_min: "-1",
          //   Stock_pro_max: "4",
          //   Stock_att_min: "0",
          //   Stock_att_max: "0",
          // },
          // {
          //   cat_1: "پوشاک",
          //   date_max: "1401-01-01",
          //   OrderId: "50",
          //   Quantity: "67",
          //   total: "4,466,150",
          //   available: "11",
          //   unavailable: "38",
          //   all_pro: "49",
          //   depot_val_pro: "1,744,000",
          //   Stock_pro_sum: "12",
          //   depot_val_att: "0",
          //   Stock_att_sum: "0",
          //   Stock_pro_min: "-1",
          //   Stock_pro_max: "4",
          //   Stock_att_min: "0",
          //   Stock_att_max: "0",
          // },
          // {
          //   cat_1: "پوشاک",
          //   date_max: "1401-01-01",
          //   OrderId: "50",
          //   Quantity: "67",
          //   total: "4,466,150",
          //   available: "11",
          //   unavailable: "38",
          //   all_pro: "49",
          //   depot_val_pro: "1,744,000",
          //   Stock_pro_sum: "12",
          //   depot_val_att: "0",
          //   Stock_att_sum: "0",
          //   Stock_pro_min: "-1",
          //   Stock_pro_max: "4",
          //   Stock_att_min: "0",
          //   Stock_att_max: "0",
          // },
          // {
          //   cat_1: "پوشاک",
          //   date_max: "1401-01-01",
          //   OrderId: "50",
          //   Quantity: "67",
          //   total: "4,466,150",
          //   available: "11",
          //   unavailable: "38",
          //   all_pro: "49",
          //   depot_val_pro: "1,744,000",
          //   Stock_pro_sum: "12",
          //   depot_val_att: "0",
          //   Stock_att_sum: "0",
          //   Stock_pro_min: "-1",
          //   Stock_pro_max: "4",
          //   Stock_att_min: "0",
          //   Stock_att_max: "0",
          // },
          // {
          //   cat_1: "پوشاک",
          //   date_max: "1401-01-01",
          //   OrderId: "50",
          //   Quantity: "67",
          //   total: "4,466,150",
          //   available: "11",
          //   unavailable: "38",
          //   all_pro: "49",
          //   depot_val_pro: "1,744,000",
          //   Stock_pro_sum: "12",
          //   depot_val_att: "0",
          //   Stock_att_sum: "0",
          //   Stock_pro_min: "-1",
          //   Stock_pro_max: "4",
          //   Stock_att_min: "0",
          //   Stock_att_max: "0",
          // },
          // {
          //   cat_1: "پوشاک",
          //   date_max: "1401-01-01",
          //   OrderId: "50",
          //   Quantity: "67",
          //   total: "4,466,150",
          //   available: "11",
          //   unavailable: "38",
          //   all_pro: "49",
          //   depot_val_pro: "1,744,000",
          //   Stock_pro_sum: "12",
          //   depot_val_att: "0",
          //   Stock_att_sum: "0",
          //   Stock_pro_min: "-1",
          //   Stock_pro_max: "4",
          //   Stock_att_min: "0",
          //   Stock_att_max: "0",
          // },
          // {
          //   cat_1: "پوشاک",
          //   date_max: "1401-01-01",
          //   OrderId: "50",
          //   Quantity: "67",
          //   total: "4,466,150",
          //   available: "11",
          //   unavailable: "38",
          //   all_pro: "49",
          //   depot_val_pro: "1,744,000",
          //   Stock_pro_sum: "12",
          //   depot_val_att: "0",
          //   Stock_att_sum: "0",
          //   Stock_pro_min: "-1",
          //   Stock_pro_max: "4",
          //   Stock_att_min: "0",
          //   Stock_att_max: "0",
          // },
          // {
          //   cat_1: "پوشاک",
          //   date_max: "1401-01-01",
          //   OrderId: "50",
          //   Quantity: "67",
          //   total: "4,466,150",
          //   available: "11",
          //   unavailable: "38",
          //   all_pro: "49",
          //   depot_val_pro: "1,744,000",
          //   Stock_pro_sum: "12",
          //   depot_val_att: "0",
          //   Stock_att_sum: "0",
          //   Stock_pro_min: "-1",
          //   Stock_pro_max: "4",
          //   Stock_att_min: "0",
          //   Stock_att_max: "0",
          // },
          // {
          //   cat_1: "پوشاک",
          //   date_max: "1401-01-01",
          //   OrderId: "50",
          //   Quantity: "67",
          //   total: "4,466,150",
          //   available: "11",
          //   unavailable: "38",
          //   all_pro: "49",
          //   depot_val_pro: "1,744,000",
          //   Stock_pro_sum: "12",
          //   depot_val_att: "0",
          //   Stock_att_sum: "0",
          //   Stock_pro_min: "-1",
          //   Stock_pro_max: "4",
          //   Stock_att_min: "0",
          //   Stock_att_max: "0",
          // },
          // {
          //   cat_1: "پوشاک",
          //   date_max: "1401-01-01",
          //   OrderId: "50",
          //   Quantity: "67",
          //   total: "4,466,150",
          //   available: "11",
          //   unavailable: "38",
          //   all_pro: "49",
          //   depot_val_pro: "1,744,000",
          //   Stock_pro_sum: "12",
          //   depot_val_att: "0",
          //   Stock_att_sum: "0",
          //   Stock_pro_min: "-1",
          //   Stock_pro_max: "4",
          //   Stock_att_min: "0",
          //   Stock_att_max: "0",
          // },
          // {
          //   cat_1: "پوشاک",
          //   date_max: "1401-01-01",
          //   OrderId: "50",
          //   Quantity: "67",
          //   total: "4,466,150",
          //   available: "11",
          //   unavailable: "38",
          //   all_pro: "49",
          //   depot_val_pro: "1,744,000",
          //   Stock_pro_sum: "12",
          //   depot_val_att: "0",
          //   Stock_att_sum: "0",
          //   Stock_pro_min: "-1",
          //   Stock_pro_max: "4",
          //   Stock_att_min: "0",
          //   Stock_att_max: "0",
          // },
          // {
          //   cat_1: "پوشاک",
          //   date_max: "1401-01-01",
          //   OrderId: "50",
          //   Quantity: "67",
          //   total: "4,466,150",
          //   available: "11",
          //   unavailable: "38",
          //   all_pro: "49",
          //   depot_val_pro: "1,744,000",
          //   Stock_pro_sum: "12",
          //   depot_val_att: "0",
          //   Stock_att_sum: "0",
          //   Stock_pro_min: "-1",
          //   Stock_pro_max: "4",
          //   Stock_att_min: "0",
          //   Stock_att_max: "0",
          // },
          // {
          //   cat_1: "پوشاک",
          //   date_max: "1401-01-01",
          //   OrderId: "50",
          //   Quantity: "67",
          //   total: "4,466,150",
          //   available: "11",
          //   unavailable: "38",
          //   all_pro: "49",
          //   depot_val_pro: "1,744,000",
          //   Stock_pro_sum: "12",
          //   depot_val_att: "0",
          //   Stock_att_sum: "0",
          //   Stock_pro_min: "-1",
          //   Stock_pro_max: "4",
          //   Stock_att_min: "0",
          //   Stock_att_max: "0",
          // },
          // {
          //   cat_1: "پوشاک",
          //   date_max: "1401-01-01",
          //   OrderId: "50",
          //   Quantity: "67",
          //   total: "4,466,150",
          //   available: "11",
          //   unavailable: "38",
          //   all_pro: "49",
          //   depot_val_pro: "1,744,000",
          //   Stock_pro_sum: "12",
          //   depot_val_att: "0",
          //   Stock_att_sum: "0",
          //   Stock_pro_min: "-1",
          //   Stock_pro_max: "4",
          //   Stock_att_min: "0",
          //   Stock_att_max: "0",
          // },
        ],
      },
    },
    chart: {
      labels: [
        "آرایشی",
        "بدن",
        "بدون دسته بندی",
        "بهداشت و سلامت",
        "عطر",
        "مو",
        "پوست",
        "پوشاک",
      ],
      data_1: [
        6477200301, 222922782, 3743340, 56002807, 132295250, 1167800329,
        3142218046, 4466150,
      ],
      data_2: [
        1115145480, 144098336, 51626000, 51924180, 41969000, 409358100,
        1165614174, 1744000,
      ],
      data_3: [3647552370, 480000, 15540360, 0, 0, 32003000, 66240200, 0],
      name_1: "مجموع فروش",
      name_2: "ارزش انبار(کالا)",
      name_3: "ارزش انبار(ویژگی)",
    },
    values: {
      values: {
        title: "دسته بندی",
        data_1: "29.6 %",
        data_2: "70.6 %",
        data_3: "4,450",
        name_1: "سهم کالاهای موجود",
        name_2: "سهم کالاهای ناموجود",
        name_3: "تنوع کالایی",
      },
    },
  };
  const options = [
    { value: 5, label: "5" },
    { value: 10, label: "10" },
    { value: 20, label: "20" },
  ];
  const [init, setinit] = useState(0);
  const tableHeader = data.table.header;
  const tableData = data.table.body.results;
  const dataLength = data.table.body.count;
  const totalItems = tableData.map((el) => el.Quantity.replaceAll(",", ""));
  let initial = 0;

  totalItems.forEach((el) => {
    initial = +initial + +el;
  });
  const newData = +((65148 / initial) * 100).toFixed(2);
  // console.log(newData);

  // console.log(initial);
  const chartData = {
    data_1: ["a", "aa"],
    data_2: ["b", "bb"],
    data_3: ["c", "cc"],
    data_4: ["d", "dd"],
    data_5: ["e", "ee"],
    name_1: "asb",
    name_2: "asb2",
    name_3: "asb3",
    name_4: "asb4",
    name_5: "asb5",
  };
  const [counter, setcounter] = useState(0);
  useEffect(() => {
    const getEl = document.querySelectorAll(".tdw_animation div");
    for (let i = 0; i < getEl.length; i++) {
      getEl[i].style.animationDelay = `${i / 10}s`;
    }
  }, []);

  //ITEM PER PAGE HANDLER
  const [perPage, setperPage] = useState(5);
  const [pageNumber, setpageNumber] = useState(0);
  const [totalPage, settotalPage] = useState(null);
  const itemPerPage = useCallback(
    (e) => {
      setperPage(e.value);
      console.log(e.value);
    },
    [pageNumber]
  );
  useMemo(() => {
    settotalPage(Math.ceil(dataLength / perPage));
  }, [perPage]);

  //
  const prevHandler = () => {
    console.log("Prev");
    if (pageNumber > totalPage) {
      console.log("FIX");
      setpageNumber(totalPage - 2);
    } else {
      setpageNumber(pageNumber - 1);
    }
  };
  const nextHandler = () => {
    console.log("Next");
    setpageNumber(pageNumber + 1);
  };
  const [goToState, setgoToState] = useState(0);
  const goToChange = (e) => {
    const target = e.target.value;
    console.log(target);
    if (+target < 0) {
      setgoToState(0);
      console.log("BACK TO ZERO");
    } else if (+target > +totalPage) {
      setgoToState(+totalPage - 1);
      console.log("BACK TO MAXIMUM");
    } else {
      setgoToState(+target);
      console.log("STANDARD");
    }
  };
  // console.log(goToState);
  // console.log(counter);
  const changePageHandler = () => {
    setpageNumber(goToState);
  };
  console.log(totalPage);
  console.log(pageNumber);
  // console.log(goToState);
  return (
    <div className="table_manual_container">
      <div className="table_manual_box">
        <table>
          <thead>
            <tr>
              {Object.entries(tableHeader).map(([key, val]) => (
                <td className="td_head" key={key} id={key}>
                  {val}
                </td>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData.map((el, index) => (
              <tr key={`el+${index}`}>
                {Object.entries(el).map(([key, val]) =>
                  key === "Quantity" ? (
                    <Tdw
                      className="tdw_animation"
                      key={val + key}
                      id={key}
                      colorWidth={
                        +((+val.replaceAll(",", "") / initial) * 100).toFixed(2)
                      }
                    >
                      <div></div>
                      {+((+val.replaceAll(",", "") / initial) * 100).toFixed(2)}
                      <span style={{ paddingLeft: "5px" }}>%</span>
                      <TdText className="value_show" key={key + val} id={key}>
                        {val}
                      </TdText>
                    </Tdw>
                  ) : (
                    <td key={val + key} id={key}>
                      {val}
                    </td>
                  )
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="table_paginator_container">
        <div className="table_dropdown_container">
          <Select
            options={options}
            defaultValue={{ label: 5, value: 5 }}
            onChange={itemPerPage}
          />
          {/* <div className="table_paginator_page_counter">
            {+pageNumber * +perPage + 1} ----
            {+(pageNumber - 1) * +perPage < dataLength
              ? +(pageNumber + 1) * +perPage
              : dataLength}{" "}
            from {dataLength}{" "}
          </div> */}
          <div className="table_paginator_page_counter">
            from{" "}
            {(pageNumber + 1) * perPage < dataLength
              ? pageNumber * perPage + 1
              : (totalPage - 1) * perPage}{" "}
            --- to{" "}
            {(pageNumber + 1) * perPage < dataLength
              ? (pageNumber + 1) * perPage
              : dataLength}
          </div>
          <div>totalPage={totalPage}</div>
          <div>--ITEMS={dataLength}</div>
        </div>
        <div className="table_paginator_next_prev">
          {pageNumber * perPage !== 0 && (
            <BsFillArrowLeftCircleFill
              color="blue"
              style={{ marginRight: "3px" }}
              onClick={prevHandler}
            />
          )}
          {(pageNumber + 1) * perPage < dataLength && (
            <BsFillArrowRightCircleFill color="blue" onClick={nextHandler} />
          )}
        </div>
        <div className="table_paginator_goto">
          <input type="number" onChange={goToChange} value={goToState} />
          <button onClick={changePageHandler}>Go</button>
        </div>
      </div>
    </div>
  );
};

export default TableManual;

const Tr = styled.tr``;
const Td = styled.td`
  text-align: right;
  position: relative;
  z-index: 10;
  font-weight: bold;
  div {
    position: absolute;
    top: 0;
    left: 0;
    color: blue;
    width: 100%;
    height: 100%;
    background-color: #00ff00;
    z-index: -1;
    // opacity: ${(props) => 0.05 + props.colorWidth / 100};
  }
  .
`;
const Tdw = styled(Td)`
  div {
    width: ${(props) => 2 + props.colorWidth}%;
    // animation-delay: ${(props) => props.id / 10}s;
  }
  &:hover {
    color: transparent;
    text-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    div {
      background-color: transparent;
    }
    .value_show {
      opacity: 1;
      transition: 0.4s ease all;
      border: 1px solid #00ccff;
    }
  }
`;
const TableD = styled.td`
  position: relative;
  width: 400px;
  color: blue;

  div {
    position: absolute;
    bottom: 80%;
    left: 0;
    width: fit-content;
    color: white;
    background-color: black;
    opacity: 0;
    transform: translatey(10px);
    transition: 0.2s ease all;
    padding: 3px 6px;
    border-radius: 4px;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
    font-size: 10px;
    font-family: "Roboto", sans-serif;
    font-wight: bolder;

    &:hover {
      opacity: 1;
    }
  }
  &:hover {
    div {
      opacity: 1;
      transform: translatey(0);
      transition: 0.2s ease all;
    }
  }
`;
const TdText = styled.td`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  height: fit-content;
  opacity: 0;
  /* background-color: black; */
  color: black;
  /* padding: 0 6px; */
  font-size: 10px;
  border-radius: 6px;
  transition: 0.4s ease all;
`;
