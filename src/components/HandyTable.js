import React from "react";
import { useDispatch, useSelector } from "react-redux";

const HandyTable = () => {
  const dispatch = useDispatch();
  const getItemsPP = useSelector((state) => state.TableSlice.storeItemPerPage);
  const storeDataTable = useSelector((state) => state.TableSlice.dataTable);
  const storHeaderTable = useSelector((state) => state.TableSlice.headerTable);
  console.log(getItemsPP);
  return <div>HandyTable</div>;
};

export default HandyTable;
