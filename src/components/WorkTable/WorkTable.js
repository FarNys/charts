import React, { useState } from "react";
import ReactDataSheet from "react-datasheet";
import "react-datasheet/lib/react-datasheet.css";
const WorkTable = () => {
  const [dataGrid, setdataGrid] = useState([
    [
      { value: "title1", readOnly: true },
      { value: "title2", readOnly: true },
    ],
    [{ value: 1 }, { value: 2 }],
    [{ value: "A" }, { value: "b", readOnly: true }],
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

  //LAST SELECTED DATA CELL
  const [selectedCell, setselectedCell] = useState(null);

  const selectHandler = (e) => {
    const targetEl = dataGrid[e.start.i][e.start.j];
    if (selectedCell !== null) {
      dataGrid[e.start.i][e.start.j] = { ...selectedCell, readOnly: true };
    }
    dataGrid[e.start.i][e.start.j] = { ...targetEl, readOnly: false };

    // setdataGrid([...dataGrid,[{ value: "" }, { value: "", readOnly: true }],])
    console.log(targetEl, selectedCell);
    setselectedCell(targetEl);
  };

  return (
    <div className="work_table_container">
      <ReactDataSheet
        className="work_table_box"
        data={dataGrid}
        valueRenderer={(cell) => cell.value}
        onCellsChanged={cellChangeHandler}
        onSelect={selectHandler}
      />
      <div>
        <button onClick={addHandler}>Add</button>
      </div>
    </div>
  );
};

export default WorkTable;
