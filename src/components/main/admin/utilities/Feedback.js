import React from "react";
const Feedback = (props) => {
  const { message, type } = props.feedback;
  const stylePos = {
    background: "#ffffcc",
    color: "#10520B",
  };
  const styleNeg = {
    background: "#f5eded",
    color: "#ff0000",
  };
  const styleNeut = {
    background: "#8cd3ff",
    color: "#03254c",
  };
  let style;
  switch (type) {
    case 1: {
      style = styleNeut;
      break;
    }
    case 2: {
      style = stylePos;
      break;
    }
    default: {
      style = styleNeg;
    }
  }
  return <div style={style}>{message}</div>;
};
export default Feedback;
