import React, { useState, useEffect } from "react";
import axios from "axios";
import DetailBlog from "./DetailBlog";
import BlogList from "./BlogList";
import Header from "../../header/Header";
const AllBlogs = () => {
  const [blogs, setblogs] = useState([]);
  const [currentBlog, setCurrentBlog] = useState({});
  useEffect(() => {
    const usefetch = async () => {
      axios
        .get("blog")
        .then((res) => res.data)
        .then((result) => {
          setblogs(result);
        })
        .catch((e) => {});
      // setblogs(allBlogs);
    };
    usefetch();
  }, []);
  const [isDetailBlogView, setIsDetailBlogView] = useState(false);
  const handleClick = () => {
    setIsDetailBlogView(!isDetailBlogView);
  };

  return (
    <>
      <Header navActive={{ allblogs: "active" }} />
      <main>
        {isDetailBlogView ? (
          <div style={{ textAlign: "center" }}>
            <DetailBlog blg={currentBlog} handleClick={handleClick} />
          </div>
        ) : (
          <div className="blog-list">
            <h4 style={{ margin: "1em auto", fontSize: "2em" }}>All Blogs</h4>
            {blogs.length !== 0 ? (
              blogs.map((blg) => {
                return (
                  <BlogList
                    blg={blg}
                    key={blg._id}
                    handleClick={handleClick}
                    setCurrentBlog={setCurrentBlog}
                  />
                );
              })
            ) : (
              <p style={{ width: "fit-content", margin: "auto" }}>
                Loading....
              </p>
            )}
          </div>
        )}
      </main>
    </>
  );
};

export default AllBlogs;
