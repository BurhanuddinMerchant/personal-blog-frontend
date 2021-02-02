import React from "react";

const BlogList = (props) => {
  const { _id, title, snippet, image, author } = props.blg;
  const handleClick = props.handleClick;
  const setCurrentBlog = props.setCurrentBlog;
  const changeState = (props) => {
    setCurrentBlog(props.blg);
  };
  return (
    <div className="blog-list-item" key={_id}>
      <img className="blog-list-image" src={image} alt={title} />
      <div className="blog-list-content">
        <div className="blog-list-upper">
          <h2 className="blog-list-title">{title}</h2>

          <button
            className="blog-list-button"
            onClick={(e) => {
              handleClick(e);
              changeState(props);
            }}
          >
            Read More
          </button>
        </div>
        <div className="blog-list-lower">
          <p className="blog-list-snippet">
            <span>Snippet : </span>
            {snippet}
          </p>
          <p className="blog-list-author">
            <span>Author : </span>
            {author}
          </p>
        </div>
      </div>
    </div>
  );
};
export default BlogList;
