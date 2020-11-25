import React from "react";

const BlogList = (props) => {
  const { _id, title, snippet, image, author } = props.blg;
  const handleClick = props.handleClick;
  const setCurrentBlog = props.setCurrentBlog;
  const changeState = (props) => {
    setCurrentBlog(props.blg);
  };
  return (
    <div className="blog-card" key={_id}>
      <h2>{title}</h2>
      <img src={image} alt={title} />
      <h4>{snippet}</h4>
      <h5>Author : {author}</h5>
      <button
        onClick={(e) => {
          handleClick(e);
          changeState(props);
        }}
      >
        Read More
      </button>
    </div>
  );
};
export default BlogList;
