import React from "react";
import CommentSection from "./CommentSection";
import CommentForm from "./CommentForm";
const BlogView = (props) => {
  const { _id, title, image, content, author, comments } = props.blg;
  const handleClick = props.handleClick;
  return (
    <div key={_id}>
      <h2>{title}</h2>
      {/* <h4>{snippet}</h4> */}
      <img src={image} alt={title} />
      <p>{content}</p>
      <h3>Author : {author}</h3>
      <CommentForm title={title} />
      <CommentSection comments={comments} title={title} />
      <button onClick={() => handleClick()}>Back</button>
    </div>
  );
};

export default BlogView;
