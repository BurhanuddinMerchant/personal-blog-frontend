import React, { useState, useEffect } from "react";
import axios from "axios";
const AllBlogs = () => {
  const [blogs, setblogs] = useState([]);
  const [currentBlog, setCurrentBlog] = useState({});
  useEffect(() => {
    const usefetch = async () => {
      axios
        .get("blog")
        .then((res) => res.data)
        .then((result) => {
          console.log("Api Call");
          // console.log(result);
          setblogs(result);
        })
        .catch((e) => {
          console.log(e);
        });
    };
    usefetch();
  }, []);
  const [isDetailBlogView, setIsDetailBlogView] = useState(false);
  const handleClick = () => {
    setIsDetailBlogView(!isDetailBlogView);
  };
  return (
    <main>
      {isDetailBlogView ? (
        <div style={{ textAlign: "center" }}>
          <BlogView blg={currentBlog} handleClick={handleClick} />
        </div>
      ) : (
        <div style={{ textAlign: "center" }}>
          <h4 className="all-blogs-header">All Blogs</h4>
          {blogs.map((blg) => {
            return (
              <Blog
                blg={blg}
                key={blg._id}
                handleClick={handleClick}
                setCurrentBlog={setCurrentBlog}
              />
            );
          })}
        </div>
      )}
    </main>
  );
};

const Blog = (props) => {
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

const BlogView = (props) => {
  const { _id, title, image, content, author } = props.blg;
  const handleClick = props.handleClick;
  return (
    <div className="detail-blog" key={_id}>
      <h2>{title}</h2>
      {/* <h4>{snippet}</h4> */}
      <img src={image} alt={title} />
      <p>{content}</p>
      <h3>Author : {author}</h3>
      <button onClick={() => handleClick()}>Back</button>
    </div>
  );
};

export default AllBlogs;
