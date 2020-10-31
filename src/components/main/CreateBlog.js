import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
const CreateBlog = () => {
  const [blog, setblog] = useState({
    id: new Date().getTime(),
    title: "",
    snippet: "",
    content: "",
    author: "",
    image: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const { title, snippet, image, content, author } = blog;
    if (title && snippet && image && content && author) {
      document.getElementById("submit-feedback-neg").innerHTML = "";
      document.getElementById("submit-feedback-pos").innerHTML =
        "Successfully Submitted!!";
      var data = JSON.stringify(blog);

      var config = {
        method: "post",
        url: "blog",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
          "Content-Type": "application/json",
        },
        data: data,
      };

      axios(config)
        .then(function (response) {
          document.getElementById("submit-feedback-pos").innerHTML =
            "Created Successfully!!";
          console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
          document.getElementById("submit-feedback-neg").innerHTML =
            "Please Authenticate";
          document.getElementById("submit-feedback-pos").innerHTML = "";
          console.log(error);
        });

      setblog({
        id: new Date().getTime(),
        title: "",
        snippet: "",
        content: "",
        author: "",
        image: "",
      });
    } else {
      document.getElementById("submit-feedback-neg").innerHTML =
        "Please Fill out all details!!";
      document.getElementById("submit-feedback-pos").innerHTML = "";
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setblog({ ...blog, [name]: value });
  };
  return (
    <main>
      <div className="container">
        <div className="box" style={{ textAlign: "center" }}>
          <h4>Create Blog</h4>
          <form onSubmit={handleSubmit}>
            <input
              type="name"
              id="title"
              name="title"
              placeholder="title"
              value={blog.title}
              onChange={handleChange}
            />
            <br />
            <input
              type="text"
              id="snippet"
              name="snippet"
              placeholder="snippet"
              value={blog.snippet}
              onChange={handleChange}
            />
            <br />
            <input
              type="content"
              placeholder="content"
              id="content"
              name="content"
              value={blog.content}
              onChange={handleChange}
            />
            <br />
            <input
              type="text area"
              placeholder="author"
              id="author"
              name="author"
              value={blog.author}
              onChange={handleChange}
            />
            <br />
            <input
              type="url"
              placeholder="image url"
              id="image"
              name="image"
              value={blog.image}
              onChange={handleChange}
            />
            <br />
            <button type="submit">Sign-Up</button>
            <br />
          </form>

          <div id="submit-feedback-pos"></div>
          <div id="submit-feedback-neg"></div>
          <p>
            already have an account? <Link to="/login">Click Here</Link>
          </p>
          <p>
            Don't have an account? <Link to="/register">Click Here</Link>
          </p>
        </div>
      </div>
    </main>
  );
};
export default CreateBlog;
