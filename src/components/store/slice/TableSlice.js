import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  test: "its test 999",
  storeItemPerPage: 10,
  sortName: undefined,
  sortDirection: "desc",
  headerTable: [],
  dataTable: [],
};

export const TableSlice = createSlice({
  name: "TableSlice",
  initialState,
  reducers: {
    getHeaderTable: (state, action) => {
      Object.entries(action.payload.tableHeader).forEach(([key, value]) => {
        const x = {
          accessor: key,

          Header: value,
        };
        state.headerTable.push(x);
      });
    },
    getDataTable: (state, action) => {
      state.dataTable = action.payload.tableData;
    },
    clearTable: (state, action) => {
      state.headerTable = [];
      state.dataTable = [];
    },
    changeItemPerPage: (state, action) => {
      state.storeItemPerPage = action.payload.data;
    },
    getSortData: (state, action) => {
      state.sortName = action.payload.data;
    },
    sortDesc: (state, action) => {
      state.sortDirection = "desc";
    },
    sortAsc: (state, action) => {
      state.sortDirection = "asc";
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  changeItemPerPage,
  getHeaderTable,
  clearTable,
  getDataTable,
  getSortData,
  sortDesc,
  sortAsc,
} = TableSlice.actions;

export default TableSlice.reducer;
