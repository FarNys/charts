import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCurrentDir,
  getCurrentSort,
  sortDirStore,
} from "../store/slice/TableSlice";
import {
  BsFillArrowDownCircleFill,
  BsFillArrowUpCircleFill,
} from "react-icons/bs";
import { BiUpArrow, BiDownArrow } from "react-icons/bi";

const SingleHeader = ({
  id,
  val,
  setcurrState,
  currState,
  setcurrDirection,
  currDirection,
  setsearchList,
  searchList,
}) => {
  const dispatch = useDispatch();

  //   const [sortDir, setsortDir] = useState("asc");

  //   const sortHandler = () => {
  //     if (sortDir === "asc") {
  //       setsortDir("desc");
  //     } else {
  //       setsortDir("asc");
  //     }
  //   };

  const searchInputHandler = (e) => {
    setsearchList({ ...searchList, [e.target.name]: e.target.value });
  };

  // console.log(searchList);
  return (
    <td className="td_head">
      <p>{val}</p>
      {/* <div>
          {currentSort===id ? currentDirection==='asc' ?        (<BsFillArrowDownCircleFill onClick={sortDesc} /> ?
 :         <BsFillArrowUpCircleFill onClick={sortAsc} />)
 : <><BsFillArrowDownCircleFill onClick={sortDesc} /> 
         <BsFillArrowUpCircleFill onClick={sortAsc} /></>}
      </div> */}
      {val && (
        <ConditionalSort
          id={id}
          setcurrState={setcurrState}
          setcurrDirection={setcurrDirection}
        />
      )}
      <div className="table_header_input_container">
        <input
          onChange={searchInputHandler}
          placeholder={`جستجوی ${val} ...`}
          name={id}
        />
        {/* <button>اعمال</button> */}
      </div>
    </td>
  );
};

export default SingleHeader;

const ConditionalSort = ({
  id,
  setcurrState,
  currState,
  setcurrDirection,
  currDirection,
}) => {
  const dispatch = useDispatch();
  const [localSort, setlocalSort] = useState(undefined);
  const [localDirection, setlocalDirection] = useState(undefined);
  const sortAsc = () => {
    // dispatch(getCurrentSort({ data: id }));
    // dispatch(getCurrentDir({ data: "asc" }));
    setcurrState(id);
    setcurrDirection("asc");
    setlocalSort(id);
    setlocalDirection("asc");
  };
  const sortDesc = () => {
    // dispatch(getCurrentSort({ data: id }));
    // dispatch(getCurrentDir({ data: "desc" }));
    setcurrState(id);
    setcurrDirection("desc");
    setlocalSort(id);
    setlocalDirection("asc");
  };
  // const currentSort = useSelector((state) => state.TableSlice.currentSort);
  // const currentDirection = useSelector(
  //   (state) => state.TableSlice.currentDirection
  // );
  //   console.log(currentSort, currentDirection);
  // console.log(id, currentSort);

  if (currState === id) {
    return (
      <>
        {currDirection === "desc" ? (
          <BiUpArrow className="sort_table_icon" onClick={sortAsc} />
        ) : (
          <BiDownArrow className="sort_table_icon" onClick={sortDesc} />
        )}
      </>
    );
  } else {
    return (
      <>
        <BiUpArrow className="sort_table_icon " onClick={sortAsc} />{" "}
        <BiDownArrow className="sort_table_icon" onClick={sortDesc} />
      </>
    );
  }
};
