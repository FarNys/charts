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
} from "react-icons/bs";
import axios from "axios";
import SingleHeader from "./SingleHeader";
import { useDispatch, useSelector } from "react-redux";
import AnimatedRow from "./AnimatedRow";
import AnimateData from "./AnimateData";
// import { useLocation } from "react-router-dom";

// import { useSearchParams } from "react-router-dom";

const TableM = () => {
  const dispatch = useDispatch();
  const [tableH, settableH] = useState([]);
  const [tableB, settableB] = useState([]);
  const [tableLength, settableLength] = useState(null);

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
        Authorization: "Token 645acd0f5c7c9fc03b9c6307e913a0074a83434d",
        // Authorization: "Token abf71aa782962257109e482b58a9f51bdd74720f",
      },
    })
      .then((res) => {
        console.log(res.data);
        const tableHeader = res.data.table.header;
        const tableBody = res.data.table.body.results;
        console.log(res.data);
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
  const copyHandler = (e) => {
    console.log(e);
    console.log(e.target);
  };

  return (
    <div className="table_manual_container" onCopy={copyHandler}>
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
                      key === "num_p" ||
                      key === "total_p" ||
                      key === "percent" ? (
                        <td
                          className="t_data_container"
                          key={val + key}
                          id={key}
                        >
                          <AnimatedRow
                            val={val}
                            el={el}
                            id={key}
                            index={index}
                            tableH={tableH}
                            // totalQuantity={totalQuantity}
                          />
                          <AnimateData val={val} />
                          {/* <span style={{ paddingLeft: "5px" }}>%</span> */}
                          {/* <div className="value_show" key={key + val} id={key}>
                            {val}
                          </div> */}
                        </td>
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
                defaultValue={defaultSelect}
                onChange={itemPerPage}
              />
              <div className="table_paginator_page_counter">
                from{" "}
                {pageNumber * perPage < tableLength
                  ? (pageNumber - 1) * perPage + 1
                  : (totalPage - 1) * perPage}{" "}
                --- to{" "}
                {pageNumber * perPage < tableLength
                  ? pageNumber * perPage
                  : tableLength}
              </div>
              <div>totalPage={totalPage}</div>
              <div>--ITEMS={tableLength}</div>
            </div>
            <div className="table_paginator_next_prev">
              {pageNumber !== 1 && (
                <BsFillArrowLeftCircleFill
                  color="blue"
                  style={{ marginRight: "3px" }}
                  onClick={prevHandler}
                />
              )}
              {(pageNumber + 1) * perPage < tableLength && (
                <BsFillArrowRightCircleFill
                  color="blue"
                  onClick={nextHandler}
                />
              )}
            </div>
            <div className="table_paginator_goto">
              <input type="number" onChange={goToChange} value={goToState} />
              <button onClick={changePageHandler}>Go</button>
            </div>
          </div>
        </>
      )}
      <div>Page={pageNumber}</div>
    </div>
  );
};

export default TableM;
