import React from "react";
const Feedback = (props) => {
  const { message, type, show } = props.feedback;

  let display;
  if (show) {
    display = "flex";
    document.getElementsByClassName("feedback")[0].style.display = display;
  } else {
    display = "none";
  }
  const handleClick = (e) => {
    e.preventDefault();
    e.target.parentElement.style.display = "none";
  };
  let feedbackType;
  switch (type) {
    case 1: {
      feedbackType = "neutral";
      break;
    }
    case 2: {
      feedbackType = "positive";
      break;
    }
    default: {
      feedbackType = "negative";
    }
  }
  return (
    <div className="feedback" id={feedbackType} style={{ display }}>
      <span>{message}</span>
      <span id="feedback-close" onClick={handleClick}>
        close
      </span>
    </div>
  );
};
export default Feedback;
