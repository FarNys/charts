import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import styled from "styled-components";
import millify from "millify";
import Select from "react-select";
import { baseUrl } from "../../App";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
  BsFillArrowRightSquareFill,
  BsFillArrowLeftSquareFill,
} from "react-icons/bs";
import axios from "axios";
import SingleHeader from "./SingleHeader";
import { useDispatch, useSelector } from "react-redux";
import AnimatedRow from "./AnimatedRow";
import AnimateData from "./AnimateData";
import SingleHeatRow from "./SingleHeatRow";
import { Button } from "react-bootstrap";
import AnimatedRowHeat from "./AnimateRowHeat";
import AnimatedPercent from "./AnimatedPercent";
// import { useLocation } from "react-router-dom";

// import { useSearchParams } from "react-router-dom";

const TableHeat = () => {
  const dispatch = useDispatch();
  const [tableH, settableH] = useState([]);
  const [tableB, settableB] = useState([]);
  const [tableLength, settableLength] = useState(null);
  const [totals, settotals] = useState(0);
  const [totalSale, settotalSale] = useState(0);

  //   const sortDirection = useSelector((state) => state.TableSlice.sortDir);

  const currentSort = useSelector((state) => state.TableSlice.currentSort);
  const currentDirection = useSelector(
    (state) => state.TableSlice.currentDirection
  );

  //ITEM PER PAGE HANDLER
  const [perPage, setperPage] = useState(5);
  const [pageNumber, setpageNumber] = useState(1);
  const [totalPage, settotalPage] = useState(null);
  const [defaultSelect, setdefaultSelect] = useState({ label: 5, value: 5 });
  // const [sortDirection, setsortDirection] = useState();
  // const table_Cat_url = `${baseUrl}/api/v1/customer/return-rate/table/?limit=${perPage}&offset=${
  //   (pageNumber - 1) * perPage
  // }&sort_value=${currentSort}&sort_ascending=${currentDirection}`;
  const table_Cat_url = `${baseUrl}/api/v1/monitoring/sales/monitoring-table/?limit=${perPage}&offset=${
    (pageNumber - 1) * perPage
  }&sort_value=${currentSort}&sort_ascending=${currentDirection}`;
  //   const [totalQuantity, settotalQuantity] = useState(0);

  useEffect(() => {
    settableH([]);
    settableB([]);
    settableLength(null);
    console.log("zxzxzxzxz");
    axios({
      method: "get",
      url: table_Cat_url,
      headers: {
        Authorization: "Token 20cbeb0cdaab80e56244ffd303550cb049ba1927",
        // Authorization: "Token abf71aa782962257109e482b58a9f51bdd74720f",
      },
    })
      .then((res) => {
        console.log(res.data);
        const tableHeader = res.data.table.header;
        const tableBody = res.data.table.body.results;
        let total = 0;
        let totalSales = 0;
        for (let i = 0; i < tableBody.length; i++) {
          const x = tableBody[i].OrderId;
          const y = +x.replaceAll(",", "");
          total = total + y;
        }
        for (let i = 0; i < tableBody.length; i++) {
          const x = tableBody[i].total;
          const y = +x.replaceAll(",", "");
          totalSales = totalSales + y;
        }
        settotals(total);
        settotalSale(totalSales);
        console.log(total);
        // const dataMod = res.data.table.body.results;
        // let initVal = 0;
        // dataMod.forEach(
        //   (el) => (initVal = +initVal + +el.num_p.replaceAll(",", ""))
        // );
        // settotalQuantity(initVal);

        // dispatch(getTableHeader({table_header:tableHeader}))
        settableLength(res.data.table.body.count);
        settableH(tableHeader);
        settableB(tableBody);
      })
      .catch((err) => console.log(err));
  }, [perPage, pageNumber, currentSort, currentDirection]);

  const options = [
    { value: 5, label: "5" },
    { value: 10, label: "10" },
    { value: 20, label: "20" },
  ];

  const itemPerPage = useCallback(
    (e) => {
      setpageNumber(Math.ceil((perPage * pageNumber) / e.value));
      setperPage(e.value);
      setdefaultSelect({ label: e.label, value: e.value });
      console.log(e.value);
    },
    [pageNumber]
  );
  useMemo(() => {
    settotalPage(Math.ceil(tableLength / perPage));
  }, [perPage, tableLength]);

  //
  const prevHandler = () => {
    setpageNumber(pageNumber - 1);
  };
  const nextHandler = () => {
    setpageNumber(pageNumber + 1);
  };
  const [goToState, setgoToState] = useState(1);
  const goToChange = (e) => {
    const target = e.target.value;
    if (+target < 1) {
      setgoToState(1);
    } else if (+target > +totalPage) {
      setgoToState(+totalPage);
    } else {
      setgoToState(+target);
    }
  };

  const changePageHandler = () => {
    setpageNumber(goToState);
    setgoToState(1);
  };

  return (
    <div className="table_manual_container">
      {tableH.length === 0 ? (
        <h1>Loading</h1>
      ) : (
        <>
          <div className="table_manual_box">
            <table>
              <thead>
                <tr>
                  {Object.entries(tableH).map(([key, val]) => (
                    <SingleHeader key={key} val={val} id={key} />
                  ))}
                </tr>
              </thead>
              <tbody>
                {tableB.map((el, index) => (
                  <tr key={`el+${index}`} className="td_container">
                    {Object.entries(el).map(([key, val]) =>
                      key === "OrderId" || key === "total" ? (
                        <td className="t_data_container" key={val} id={key}>
                          <AnimatedRowHeat
                            val={val}
                            el={el}
                            id={key}
                            index={index}
                            tableH={tableH}
                            totals={key === "OrderId" ? totals : totalSale}
                            // totalQuantity={totalQuantity}
                          />
                          <AnimatedPercent
                            val={val}
                            el={el}
                            id={key}
                            index={index}
                            tableH={tableH}
                            totals={totals}
                          />
                          <AnimateData val={val} />
                          {/* <span style={{ paddingLeft: "5px" }}>%</span> */}
                          {/* <div className="value_show" key={key + val} id={key}>
                            {val}
                          </div> */}
                        </td>
                      ) : (
                        <td className="td_heat_container">
                          <SingleHeatRow
                            key={val}
                            val={val}
                            index={index}
                            objKey={key}
                          />
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
                defaultValue={defaultSelect}
                onChange={itemPerPage}
              />
              <div className="table_paginator_page_counter">
                <span>از</span>
                {pageNumber * perPage < tableLength
                  ? (pageNumber - 1) * perPage + 1
                  : (totalPage - 1) * perPage + 1}{" "}
                <span>تا</span>
                {pageNumber * perPage < tableLength
                  ? pageNumber * perPage
                  : tableLength}
                <span>از مجموع</span>
                {tableLength}
              </div>
            </div>
            <div className="table_paginator_next_prev_container">
              {pageNumber !== 1 && (
                <BsFillArrowLeftSquareFill
                  onClick={prevHandler}
                  className="arrow_left_icon_table"
                />
              )}
              {pageNumber * perPage < tableLength && (
                <BsFillArrowRightSquareFill
                  onClick={nextHandler}
                  className="arrow_right_icon_table"
                />
              )}
            </div>
            <div className="table_paginator_goto">
              <input type="number" onChange={goToChange} value={goToState} />
              <Button onClick={changePageHandler}>Go</Button>
            </div>
          </div>
          <div className="table_page_info_container">
            <div>تعداد کل صفحات : {totalPage}</div>
            <div>تعداد کل آیتم ها : {tableLength}</div>
            <div> شماره صفحه: {pageNumber}</div>
          </div>
        </>
      )}
    </div>
  );
};

export default TableHeat;
