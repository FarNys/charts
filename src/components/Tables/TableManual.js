import React, {
  useCallback,
  useEffect,
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
// import { useLocation } from "react-router-dom";

// import { useSearchParams } from "react-router-dom";

const TableManual = () => {
  const dispatch = useDispatch();
  const [tableH, settableH] = useState([]);
  const [tableB, settableB] = useState([]);
  const [tableLength, settableLength] = useState(null);

  const sortDirection = useSelector((state) => state.TableSlice.sortDir);

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
  const [sortType, setsortType] = useState();
  const table_Cat_url = `${baseUrl}/api/v1/monitoring/sales/monitoring-table/?limit=${perPage}&offset=${
    (pageNumber - 1) * perPage
  }&sort_value=${currentSort}&sort_ascending=${currentDirection}`;

  useEffect(() => {
    settableH([]);
    settableB([]);
    settableLength(null);
    console.log("zxzxzxzxz");
    axios({
      method: "get",
      url: table_Cat_url,
      headers: {
        // Authorization: "Token 20cbeb0cdaab80e56244ffd303550cb049ba1927",
        Authorization: "Token 62989f298ab9802631732393723f71bb8a30c216",
      },
    })
      .then((res) => {
        console.log(res.data);
        const tableHeader = res.data.table.header;
        const tableBody = res.data.table.body.results;

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

  const [counter, setcounter] = useState(0);
  useEffect(() => {
    const getEl = document.querySelectorAll(".tdw_animation div");
    for (let i = 0; i < getEl.length; i++) {
      getEl[i].style.animationDelay = `${i / 10}s`;
    }
    console.log(getEl);
  }, []);

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
                    <SingleHeader
                      key={key}
                      val={val}
                      id={key}
                      setsortType={setsortType}
                    />
                  ))}
                </tr>
              </thead>
              <tbody>
                {tableB.map((el, index) => (
                  <tr key={`el+${index}`}>
                    {Object.entries(el).map(([key, val]) =>
                      key === "Quantity" ? (
                        <Tdw
                          className="tdw_animation"
                          key={val + key}
                          id={key}
                          // colorWidth={
                          //   +(
                          //     (+val.replaceAll(",", "") / initial) *
                          //     100
                          //   ).toFixed(2)
                          // }
                        >
                          <div></div>
                          {/* {
                            +(
                              (+val.replaceAll(",", "") / initial) *
                              100
                            ).toFixed(2)
                          } */}
                          <span style={{ paddingLeft: "5px" }}>%</span>
                          <TdText
                            className="value_show"
                            key={key + val}
                            id={key}
                          >
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
    text-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
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
