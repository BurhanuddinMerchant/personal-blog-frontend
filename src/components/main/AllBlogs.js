import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const AllBlogs = () => {
  const [blogs, setblogs] = useState([]);
  useEffect(() => {
    const usefetch = async () => {
      axios
        .get("blog")
        .then((res) => res.data)
        .then((result) => {
          console.log(result);
          setblogs(result);
        })
        .catch((e) => {
          console.log(e);
        });
    };
    usefetch();
  }, []);
  return (
    <main>
      <div className="container">
        <div className="box" style={{ textAlign: "center" }}>
          <h4>All Blogs</h4>
          {blogs.map((blg) => {
            return (
              <div className="blog" key={blg._id}>
                <h2 className="blog-title">{blg.title}</h2>
                <h4 className="snippet">{blg.snippet}</h4>
                <img src={blg.image} alt="blog" />
                <p className="mainContent">{blg.content}</p>
                <h3 className="author">BY : {blg.author}</h3>
              </div>
            );
          })}
          <div id="submit-feedback-pos"></div>
          <div id="submit-feedback-neg"></div>
          <p>
            Don't have an account? <Link to="/register">Click Here</Link>
          </p>
          <Link to="/create">
            <button>Create Blog?</button>
          </Link>
        </div>
      </div>
    </main>
  );
};
export default AllBlogs;
