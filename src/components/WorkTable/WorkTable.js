import React, { useState } from "react";
import ReactDataSheet from "react-datasheet";
import "react-datasheet/lib/react-datasheet.css";
const WorkTable = () => {
  const [dataGrid, setdataGrid] = useState([
    [
      { value: "title1", readOnly: true },
      { value: "title2", readOnly: true },
    ],
    [{ value: 1 }, { value: 3 }],
    [{ value: 2 }, { value: 4, readOnly: true }],
  ]);

  const cellChangeHandler = (changes) => {
    console.log(changes);
    const grid = dataGrid.map((row) => [...row]);
    changes.forEach(({ cell, row, col, value }) => {
      grid[row][col] = { ...grid[row][col], value };
    });
    setdataGrid(grid);
  };

  console.log(dataGrid);

  const addHandler = () => {
    setdataGrid([
      ...dataGrid,
      [{ value: "" }, { value: "", readOnly: true }],
      // [{ value: "" }, { value: "" }],
    ]);
  };

  return (
    <div className="work_table_container">
      <ReactDataSheet
        className="work_table_box"
        data={dataGrid}
        valueRenderer={(cell) => cell.value}
        onCellsChanged={cellChangeHandler}
      />
      <div>
        <button onClick={addHandler}>Add</button>
      </div>
    </div>
  );
};

export default WorkTable;
