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
import { current } from "@reduxjs/toolkit";

// import { useLocation } from "react-router-dom";

// import { useSearchParams } from "react-router-dom";

const TableHeat = () => {
  const dispatch = useDispatch();
  const [tableH, settableH] = useState([]);
  const [tableB, settableB] = useState([]);
  const [tableHeadClone, settableHeadClone] = useState([]);
  const [tableBodyClone, settableBodyClone] = useState([]);

  const [tableLength, settableLength] = useState(null);
  const [totals, settotals] = useState(0);
  const [totalSale, settotalSale] = useState(0);

  const [currState, setcurrState] = useState(undefined);
  const [currDirection, setcurrDirection] = useState(undefined);
  const [searchList, setsearchList] = useState({});
  console.log(searchList);
  const [searchState, setsearchState] = useState(false);
  const [isAdvance, setisAdvance] = useState(false);
  const [selectedValues, setselectedValues] = useState([]);
  const [reCall, setreCall] = useState(false);
  //   const sortDirection = useSelector((state) => state.TableSlice.sortDir);
  const [optionList, setoptionList] = useState([]);
  const currentSort = useSelector((state) => state.TableSlice.currentSort);
  const currentDirection = useSelector(
    (state) => state.TableSlice.currentDirection
  );

  const [serverModal, setserverModal] = useState(false);

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
  }&sort_value=${currState}&sort_ascending=${currDirection}`;
  //   const [totalQuantity, settotalQuantity] = useState(0);

  useEffect(() => {
    settableH([]);
    settableB([]);
    settableHeadClone([]);
    settableBodyClone([]);
    settableLength(null);
    setsearchList({});
    let x;
    for (const key in searchList) {
      if (searchList[key] !== "") {
        x = { ...x, [key]: searchList[key].trim() };
      }
    }
    console.log(x);

    axios({
      method: "get",
      url: table_Cat_url,
      headers: {
        // Authorization: "Token 645acd0f5c7c9fc03b9c6307e913a0074a83434d",
        Authorization: "Token 62989f298ab9802631732393723f71bb8a30c216",
      },
      params: { ...x },
    })
      .then((res) => {
        console.log(res);
        const tableHeader = res.data.table.header;
        const tableBody = res.data.table.body.results;
        let total = 0;
        let totalSales = 0;
        console.log(tableHeader);
        console.log(tableBody);
        let createOption = [];
        for (const item in tableHeader) {
          const x = { value: item, label: tableHeader[item] };
          createOption.push(x);
        }
        setoptionList(createOption);
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
        if (selectedValues.length > 0) {
          const x = { ...tableH };
          const cloneTableBody = [...tableB];
          for (const key in x) {
            if (selectedValues.includes(key)) {
              delete x[key];
            }
          }
          for (let i = 0; i < cloneTableBody.length; i++) {
            for (const item in cloneTableBody[i]) {
              if (selectedValues.includes(item)) {
                delete cloneTableBody[i][item];
              }
            }
          }
          settableH(x);
          settableB(cloneTableBody);
        } else {
          settableH(tableHeader);
          settableB(tableBody);
        }
        // settableH(tableHeader);
        // settableB(tableBody);
        settableHeadClone(tableHeader);
        settableBodyClone(tableBody);
        setreCall((prev) => !prev);
      })
      .catch((err) => {
        console.log(err);
        if (!serverModal) {
          setserverModal(true);
          setTimeout(() => {
            window.location.reload();
          }, 20000);
        }
      });
  }, [perPage, pageNumber, currState, currDirection, searchState]);

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

  const acceptHandler = () => {
    setsearchState((prev) => !prev);
  };

  const tableShowHandler = (e) => {
    e.preventDefault();
    setisAdvance((prev) => !prev);
    console.log(isAdvance);
  };

  const selectChangeHandler = (e) => {
    const getValue = e.map((el) => el.value);
    setselectedValues(getValue);
  };

  const colHandler = () => {
    const cloneTableHead = { ...tableHeadClone };
    const cloneTableBody = [...tableBodyClone];
    for (const key in cloneTableHead) {
      if (selectedValues.includes(key)) {
        delete cloneTableHead[key];
      }
    }
    for (let i = 0; i < cloneTableBody.length; i++) {
      for (const item in cloneTableBody[i]) {
        if (selectedValues.includes(item)) {
          delete cloneTableBody[i][item];
        }
      }
    }
    settableH(cloneTableHead);
    settableB(cloneTableBody);

    // console.log(cloneTableHead);
    // console.log(tableH);
  };

  const [errorTimer, seterrorTimer] = useState(20);
  useEffect(() => {
    if (serverModal) {
      console.log("HI ALL");
      setTimeout(() => {
        seterrorTimer(errorTimer - 1);
        console.log(errorTimer);
      }, 1000);
      // clearInterval(interval);
    }
  }, [serverModal, errorTimer]);

  // console.log(selectedValues);
  // console.log(optionList);
  console.log(tableH);
  console.log(tableB);

  const progressStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    backgroundColor: "rgb(47, 216, 146)",
    width: (19 - errorTimer) * 5 + "%",
  };

  return (
    <div className="table_manual_container">
      {/* <div className="table_show_columns_container">
        <button onClick={colHandler}> اعمال ستون</button>
        {optionList.length > 0 && (
          <div className="table_select_container">
            <Select
              options={optionList}
              isMulti
              onChange={selectChangeHandler}
            />
          </div>
        )}
      </div>
      {isAdvance ? (
        <button onClick={tableShowHandler}>Simple</button>
      ) : (
        <button onClick={tableShowHandler}>Advance</button>
      )} */}
      {serverModal && (
        <div className="server_modal_container">
          <p>{errorTimer}</p>
          <div className="server_error_progress_bar_container">
            <div style={progressStyle}></div>
          </div>
        </div>
      )}
      {tableH.length === 0 ? (
        <h1>Loading . . .</h1>
      ) : (
        <>
          <div className="table_manual_box">
            <div className="table_accept_btn_container">
              <button onClick={acceptHandler}>اعمال</button>
            </div>
            {!isAdvance ? (
              <table>
                <thead>
                  <tr>
                    {Object.entries(tableH).map(([key, val]) => (
                      <SingleHeader
                        key={key}
                        val={val}
                        id={key}
                        setcurrState={setcurrState}
                        currState={currState}
                        setcurrDirection={setcurrDirection}
                        currDirection={currDirection}
                        setsearchList={setsearchList}
                        searchList={searchList}
                      />
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {tableB.map((el, index) => (
                    <tr key={`el+${index}`} className="td_container">
                      {Object.entries(el).map(([key, val]) =>
                        key === "OrderId" || key === "total" ? (
                          <td
                            className="t_data_container"
                            key={`${el}-${val}-${key}-${index}`}
                            id={key}
                          >
                            <AnimatedRowHeat
                              val={val}
                              el={el}
                              id={key}
                              index={index}
                              tableH={tableH}
                              totals={key === "OrderId" ? totals : totalSale}
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
                          </td>
                        ) : (
                          <td
                            className="td_heat_container"
                            key={`${key}-${val}-${index}`}
                          >
                            <SingleHeatRow
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
            ) : (
              pageNumber
            )}
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
