import React, { useState } from "react";
import CommentSection from "./CommentSection";
import CommentForm from "./CommentForm";
import Feedback from "../admin/utilities/Feedback";
const BlogView = (props) => {
  const [feedback, setFeedback] = useState({
    message: "",
    type: 1,
    show: false,
  });
  const { _id, title, image, content, author, comments } = props.blg;
  const handleClick = props.handleClick;
  return (
    <div className="blog-detail" key={_id}>
      <img className="blog-detail-image" src={image} alt={title} />
      <h2 className="blog-detail-title">{title}</h2>
      {/* <h4>{snippet}</h4> */}

      <p className="blog-detail-content">
        {content}
        <p className="blog-detail-author">
          <span>Author : </span>
          {author}
        </p>
      </p>
      <h4>Comment Section</h4>
      <Feedback feedback={feedback} />
      <CommentForm setFeedback={setFeedback} title={title} />
      <CommentSection
        setFeedback={setFeedback}
        comments={comments}
        title={title}
      />
      <button className="blog-detail-button" onClick={() => handleClick()}>
        Back
      </button>
    </div>
  );
};

export default BlogView;
