import React, { useEffect, useState } from "react";
import { useTable, usePagination, useSortBy } from "react-table";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  changeItemPerPage,
  getDataTable,
  clearDataTable,
  getHeaderTable,
  clearTable,
} from "./store/slice/TableSlice";
import TableComponent from "./TableComponent";

function App() {
  const dispatch = useDispatch();
  const getItemPerPage = useSelector(
    (state) => state.TableSlice.storeItemPerPage
  );
  const storeDataTable = useSelector((state) => state.TableSlice.dataTable);
  const storeHeaderTable = useSelector((state) => state.TableSlice.headerTable);
  const storeStorName = useSelector((state) => state.TableSlice.sortName);
  const storeStorDirection = useSelector(
    (state) => state.TableSlice.sortDirection
  );
  console.log(getItemPerPage, storeHeaderTable, storeDataTable);

  const [numbPage, setnumbPage] = useState(0);
  const [currNumPage, setcurrNumPage] = useState(0);
  const [totalCount, settotalCount] = useState();
  // const [currPageSize, setcurrPageSize] = useState(10);
  const [loading, setloading] = useState(false);

  const token = localStorage.getItem("token");

  const baseUrl = "http://192.168.1.118:8000";
  let url = `${baseUrl}/api/v1/monitoring/stock/table-sales-stock-product/?limit=${getItemPerPage}&offset=${
    numbPage * getItemPerPage
  }&sort_value=${storeStorName}&sort_ascending=${storeStorDirection}`;

  useEffect(() => {
    dispatch(clearTable());
    setloading(true);
    axios({
      method: "get",
      url: url,
      headers: {
        Authorization: `Token ${token}`,
      },
    })
      .then((res) => {
        setloading(false);
        console.log(res);
        const getTotalCount = res.data.table.body.count;
        settotalCount(getTotalCount);
        const heading = res.data.table.header;
        const dataing = res.data.table.body.results;
        dispatch(getHeaderTable({ tableHeader: heading }));
        dispatch(getDataTable({ tableData: dataing }));
      })
      .catch((err) => console.log(err));
    console.log(url);
    // setloading(false);
  }, [numbPage, getItemPerPage, url, storeStorName, storeStorDirection]);

  return (
    <div className="table_react_table">
      {storeDataTable.length > 0 ? (
        <TableComponent
          columns={[
            {
              Header: "MyHeadeR",
              columns: storeHeaderTable,
            },
          ]}
          data={storeDataTable}
          numbPage={numbPage}
          setnumbPage={setnumbPage}
          currNumPage={currNumPage}
          setcurrNumPage={setcurrNumPage}
          totalCount={totalCount}
          getItemPerPage={getItemPerPage}
          // setcurrPageSize={setcurrPageSize}
          // currPageSize={currPageSize}
        />
      ) : (
        <div class="lds-dual-ring"></div>
      )}
    </div>
  );
}

export default App;
