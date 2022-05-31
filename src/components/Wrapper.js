import React from "react";

const Wrapper = (props) => {
  console.log(props);
  return <div>{props.children}</div>;
};

export default Wrapper;
