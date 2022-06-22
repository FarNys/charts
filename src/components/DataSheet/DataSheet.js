import axios from "axios";
import React, { useEffect, useState } from "react";
import { baseUrl } from "../../App";
import DataSheetRow from "./DataSheetRow";

const defaultData = {
  c1: 1,
  c2: 2,
  c3: 1,
  c4: 0,
  c5: 1,
  c6: 0,
  c7: 2,
};

const DataSheet = () => {
  const [reformData, setreformData] = useState(null);
  const [workData, setworkData] = useState([]);
  const [checkList, setcheckList] = useState([]);
  useEffect(() => {
    let x = { ...defaultData };
    for (const key in x) {
      if (x[key] == 0) {
        delete x[key];
      }
    }

    setreformData(x);
    let check = [];
    for (const item in x) {
      check.push(item);
    }
    setcheckList(check);
  }, []);

  useEffect(() => {
    axios({
      method: "get",
      url: `${baseUrl}/api/v1/workflow/table-row/?work=2`,
      //   url: `${baseUrl}/api/v1/customer/customer-list/table/`,
      headers: {
        Authorization: `Token 8ea1b50f96ada3519099bd385643de428dd09678`,
      },
    })
      .then((res) => {
        // console.log(res);
        const wfResponse = res.data.results;
        setworkData(wfResponse);
        // console.log(wfResponse);
      })
      .catch((err) => console.log(err));
  }, []);
  //   console.log(reformData);
  //   console.log(workData);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Edit</th>
            {checkList.map((el, index) => (
              <th style={{ width: "200px" }} key={index}>
                {el}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {workData.map((el, index) => (
            <DataSheetRow
              key={index}
              el={el}
              checkList={checkList}
              id={index}
              reformData={reformData}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default DataSheet;
