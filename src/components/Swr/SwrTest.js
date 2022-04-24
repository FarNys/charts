import React, { useEffect } from "react";
import axios from "axios";
import useSWR from "swr";
import { baseUrl } from "../../App";

const SwrTest = () => {
  const fetcher = (url) =>
    axios
      .get(url, {
        headers: {
          Authorization: "Token 20cbeb0cdaab80e56244ffd303550cb049ba1927",
        },
      })
      .then((res) => res.data);
  const { data, error } = useSWR(
    `${baseUrl}/api/v1/workflow/workflow/`,
    fetcher,
    { refreshInterval: 5000 }
  );
  console.log(data, error);

  //   useEffect(() => {
  //     axios({
  //       method: "get",
  //       url: `${baseUrl}/api/v1/workflow/workflow/`,
  //       headers: {
  //         Authorization: "Token 20cbeb0cdaab80e56244ffd303550cb049ba1927",
  //       },
  //     })
  //       .then((res) => console.log(res))
  //       .catch((err) => console.log(err));
  //   }, []);

  return (
    <div>
      <h1>HEADING One</h1>
      <h2>Heading Two</h2>
      {data && data.results.map((el) => <p key={el.id}>{el.name}</p>)}
    </div>
  );
};

export default SwrTest;
