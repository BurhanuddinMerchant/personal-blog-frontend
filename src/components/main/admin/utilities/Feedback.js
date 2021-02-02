import React from "react";
const Feedback = (props) => {
  const { message, type, show } = props.feedback;
  let display;
  if (show) {
    display = "block";
  } else {
    display = "none";
  }
  const stylePos = {
    background: "#4CAF50",
    color: "#ffffff",
    padding: "0.5em",
    margin: "auto",
    marginBottom: "2em",
    width: "95%%",
    maxWidth: "500px",
    display,
  };
  const styleNeg = {
    background: "#f44336",
    color: "#ffffff",
    padding: "0.5em",
    margin: "auto",
    marginBottom: "2em",
    width: "95%%",
    maxWidth: "500px",
    display,
  };
  const styleNeut = {
    background: "#3581d8",
    color: "#ffffff",
    padding: "0.5em",
    margin: "auto",
    marginBottom: "2em",
    width: "95%%",
    maxWidth: "500px",
    display,
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
