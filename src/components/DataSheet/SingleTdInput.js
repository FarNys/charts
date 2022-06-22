import React, { useEffect, useState } from "react";

const SingleTdInput = ({ id, val, reformData, rowNumber }) => {
  const [colId, setcolId] = useState(null);
  useEffect(() => {
    for (const key in reformData) {
      if (key === id) {
        setcolId({ item: key, val: reformData[key] });
      }
    }
  }, [rowNumber]);
  //   console.log(colId, id);

  const onKeyPressHandler = (e) => {
    if (e.code === "ArrowRight") {
      console.log(99);
      const getRow = rowNumber;
      const getCol = colId.item;
      console.log(rowNumber, getCol);
    }
  };
  return (
    <td style={{ width: "200px" }}>
      {colId && (
        <input
          className="editable_td"
          data-row-td={colId.item}
          data-row-value={colId.val}
          defaultValue={val}
          data-row-number={rowNumber}
          // onKeyPress={onKeyPressHandler}
          onKeyUpCapture={onKeyPressHandler}
        />
      )}
    </td>
  );
};

export default SingleTdInput;
