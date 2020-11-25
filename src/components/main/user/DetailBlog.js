import React from "react";
import CommentSection from "./CommentSection";
import CommentForm from "./CommentForm";
const BlogView = (props) => {
  const { _id, title, image, content, author, comments } = props.blg;
  const handleClick = props.handleClick;
  return (
    <div className="blog-detail" key={_id}>
      <img className="blog-detail-image" src={image} alt={title} />
      <h2 className="blog-detail-title">{title}</h2>
      {/* <h4>{snippet}</h4> */}

      <p className="blog-detail-content">{content}</p>
      <p className="blog-detail-author">Author : {author}</p>
      <h4>Comment Section</h4>
      <CommentForm title={title} />
      <CommentSection comments={comments} title={title} />
      <button className="blog-detail-button" onClick={() => handleClick()}>
        Back
      </button>
    </div>
  );
};

export default BlogView;
