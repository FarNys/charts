import React, { useState } from "react";
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

const SingleHeader = ({ id, val }) => {
  const dispatch = useDispatch();
  //   const [sortDir, setsortDir] = useState("asc");

  //   const sortHandler = () => {
  //     if (sortDir === "asc") {
  //       setsortDir("desc");
  //     } else {
  //       setsortDir("asc");
  //     }
  //   };
  console.log(id, val);

  return (
    <td className="td_head">
      <p>{val}</p>
      {/* <div>
          {currentSort===id ? currentDirection==='asc' ?        (<BsFillArrowDownCircleFill onClick={sortDesc} /> ?
 :         <BsFillArrowUpCircleFill onClick={sortAsc} />)
 : <><BsFillArrowDownCircleFill onClick={sortDesc} /> 
         <BsFillArrowUpCircleFill onClick={sortAsc} /></>}
      </div> */}
      <ConditionalSort id={id} />
    </td>
  );
};

export default SingleHeader;

const ConditionalSort = ({ id }) => {
  const dispatch = useDispatch();

  const sortAsc = () => {
    dispatch(getCurrentSort({ data: id }));
    dispatch(getCurrentDir({ data: "asc" }));
  };
  const sortDesc = () => {
    dispatch(getCurrentSort({ data: id }));
    dispatch(getCurrentDir({ data: "desc" }));

    // setsortType(id);

    // setsortDir("asc");
    // dispatch(sortDirStore({ data: sortDir }));
  };
  const currentSort = useSelector((state) => state.TableSlice.currentSort);
  const currentDirection = useSelector(
    (state) => state.TableSlice.currentDirection
  );
  //   console.log(currentSort, currentDirection);
  // console.log(id, currentSort);

  if (currentSort === id) {
    return (
      <>
        {currentDirection === "desc" ? (
          <BsFillArrowUpCircleFill onClick={sortAsc} />
        ) : (
          <BsFillArrowDownCircleFill onClick={sortDesc} />
        )}
      </>
    );
  } else {
    return (
      <>
        <BsFillArrowUpCircleFill onClick={sortAsc} />{" "}
        <BsFillArrowDownCircleFill onClick={sortDesc} />
      </>
    );
  }
};
