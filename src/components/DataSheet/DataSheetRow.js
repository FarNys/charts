import React, { useEffect, useState } from "react";
import SingleCellRead from "./SingleCellRead";
import SingleCellWrite from "./SingleCellWrite";
import SingleTdInput from "./SingleTdInput";

const DataSheetRow = ({ el, checkList, id, reformData }) => {
  const [rowData, setrowData] = useState();
  const [colId, setcolId] = useState(null);
  const [rowNumber, setrowNumber] = useState(null);
  useEffect(() => {
    if (checkList.length > 0) {
      let emptyObj = {};
      for (const item in el) {
        if (checkList.includes(item)) {
          //   setrowData([...rowData, el[item]]);
          emptyObj = { ...emptyObj, [item]: el[item] };

          // console.log(el, item[el]);
        }
      }
      setrowData(emptyObj);
    }
  }, [checkList, rowNumber]);

  //   console.log(rowData);
  //   console.log(checkList);
  //   console.log(rowData);
  const editRowHandler = (e) => {
    const getRowId = e.target.getAttribute("data-row");
    setrowNumber(getRowId);
    console.log(getRowId);
    const tableEl = document.querySelectorAll(".editable_td");
    // const x = tableEl.filter(
    //   (el) => el.getAttribute("data-row-value") === getRowId
    // );
    // console.log(x);
    // console.log(tableEl);
    for (let i = 0; i < tableEl.length; i++) {
      const x = tableEl[i].getAttribute("data-row-value");
      const y = tableEl[i].getAttribute("data-row-number");
      //   console.log(y);
      if (y == getRowId && x == 1) {
        console.log(tableEl[i]);
        tableEl[i].style.color = "red";
      }
      // const elements = document.querySelectorAll(`[data-row-value=${getRowId}]`);
      // console.log(elements);
      // console.log(getTd);
      // getTd.forEach((el) => {
      //   const x = el.getAttribute("data-row-value");
      //   console.log(el, x);
      // });
    }
  };
  //   console.log(rowData);
  //   console.log(reformData);

  //   return <tr>{rowData && Object.entries(rowData)}</tr>;
  return (
    <tr>
      <td>
        <button data-row={id} onClick={editRowHandler}>
          Edit
        </button>
      </td>
      {rowData &&
        Object.entries(rowData).map(([key, val]) => (
          <SingleTdInput
            reformData={reformData}
            id={key}
            val={val}
            key={`${val}-${key}`}
            rowNumber={rowNumber}
          />
        ))}
    </tr>
  );
};

export default DataSheetRow;
