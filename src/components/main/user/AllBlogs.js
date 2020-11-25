import React, { useState, useEffect } from "react";
import allBlogs from "../test_data/pseudoApiCall";
import axios from "axios";
import DetailBlog from "./DetailBlog";
import BlogList from "./BlogList";
const AllBlogs = () => {
  const [blogs, setblogs] = useState([]);
  const [currentBlog, setCurrentBlog] = useState({});
  useEffect(() => {
    const usefetch = async () => {
      // axios
      //   .get("blog")
      //   .then((res) => res.data)
      //   .then((result) => {
      //     console.log("Api Call");
      //     console.log(result);
      //     setblogs(result);
      //   })
      //   .catch((e) => {
      //     console.log(e);
      //   });
      setblogs(allBlogs);
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
          <DetailBlog blg={currentBlog} handleClick={handleClick} />
        </div>
      ) : (
        <div style={{ textAlign: "center" }}>
          <h4 className="all-blogs-header">All Blogs</h4>
          {blogs.map((blg) => {
            return (
              <BlogList
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

export default AllBlogs;
