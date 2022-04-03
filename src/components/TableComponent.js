import React from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  usePagination,
  useSortBy,
  useTable,
} from "react-table/dist/react-table.development";
import {
  changeItemPerPage,
  getSortData,
  sortAsc,
  sortDesc,
} from "./store/slice/TableSlice";

const TableComponent = ({
  columns,
  data,
  setnumbPage,
  numbPage,
  currNumPage,
  setcurrNumPage,
  totalCount,
  setcurrPageSize,
  currPageSize,
  getItemPerPage,
}) => {
  // Use the state and functions returned from useTable to build your UI
  const dispatch = useDispatch();
  const getItemsPP = useSelector((state) => state.TableSlice.storeItemPerPage);
  const storeDataTable = useSelector((state) => state.TableSlice.dataTable);
  const storHeaderTable = useSelector((state) => state.TableSlice.headerTable);
  const storeSortName = useSelector((state) => state.TableSlice.sortName);
  const storeSortDirection = useSelector(
    (state) => state.TableSlice.sortDirection
  );
  console.log(storeDataTable, storHeaderTable);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page, // Instead of using 'rows', we'll use page,
    // which has only the rows for the active page

    // The rest of these things are super handy, too ;)
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      manualSorting: true,
      manualPagination: true,

      //   initialState: { pageIndex: 0 },
    },
    useSortBy,
    usePagination
  );
  const handler = () => {
    console.log(Math.ceil(totalCount / getItemPerPage));
    if (currNumPage > Math.ceil(totalCount / getItemPerPage)) {
      setcurrNumPage(Math.ceil(totalCount / getItemPerPage) - 1);
      setnumbPage(Math.ceil(totalCount / getItemPerPage) - 1);
      console.log("CURR >>>>>> TOTAL");
    } else if (currNumPage < 0) {
      setcurrNumPage(0);
      setnumbPage(0);
      console.log("CURR <<<< TOTAL");
    } else {
      setnumbPage(currNumPage);
    }
    console.log(currNumPage);
    console.log(numbPage);
    // gotoPage(numbPage);
  };
  //HANDLER FOR SERVER SIDE SORTING
  const onHeaderClick = (x) => {
    console.log(storeSortName);
    if (storeSortName === undefined) {
      console.log("IS UNDEFINED");
      dispatch(getSortData({ data: x.id }));
    }
    if (storeSortName === x.id) {
      console.log(storeSortName + "is Eq");
      if (storeSortDirection === "asc") {
        dispatch(sortDesc());
      } else {
        dispatch(sortAsc());
      }
    } else {
      dispatch(getSortData({ data: x.id }));
      dispatch(sortAsc());
    }
    console.log(x);
  };
  const prevPageHandler = () => {
    if (numbPage - 1 < 1) {
      setnumbPage(0);
      console.log("NUMPAGE 00");
    } else {
      setnumbPage(numbPage - 1);
      console.log("NUMPAGE IS NOT 00");
    }
  };
  const nextPageHandler = () => {
    if (numbPage > Math.ceil(totalCount / getItemPerPage) - 2) {
      setnumbPage(Math.ceil(totalCount / getItemPerPage) - 1);
      console.log("NEXT LIMIT");
    } else {
      setnumbPage(numbPage + 1);
      console.log("NEXT +++++1");
    }
    console.log(numbPage);
  };

  // Render the UI for your table
  return (
    <>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  onClick={() => onHeaderClick(column)}
                >
                  {column.render("Header")}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? " 🔽"
                        : " 🔼"
                      : ""}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* 
          Pagination can be built however you'd like. 
          This is just a very basic UI implementation:
        */}
      <div className="pagination">
        <button onClick={() => setnumbPage(0)}>{"<<"}</button>{" "}
        <button onClick={prevPageHandler}>{"<"}</button>{" "}
        <button onClick={nextPageHandler}>{">"}</button>{" "}
        <button
          onClick={() =>
            setnumbPage(Math.ceil(totalCount / getItemPerPage) - 1)
          }
          // disabled={!canNextPage}
        >
          {">>"}
        </button>{" "}
        <span>
          Page{" "}
          <strong>
            {numbPage + 1} of {Math.ceil(totalCount / getItemPerPage)} from{" "}
            {+totalCount} items
          </strong>{" "}
        </span>
        <span>
          | Go to page:{" "}
          <input
            type="number"
            defaultValue={numbPage + 1}
            onChange={(e) => {
              setcurrNumPage(e.target.value ? Number(e.target.value) - 1 : 0);
            }}
            style={{ width: "100px" }}
          />
          <button onClick={handler}>Go</button>
        </span>{" "}
        <select
          value={getItemPerPage}
          onChange={(e) => {
            dispatch(changeItemPerPage({ data: Number(e.target.value) }));
          }}
        >
          {[10, 15, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default TableComponent;
