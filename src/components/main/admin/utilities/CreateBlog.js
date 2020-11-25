import axios from "axios";
import React, { useState } from "react";
import Feedback from "./Feedback";
const CreateBlog = () => {
  const [feedback, setFeedback] = useState({
    message: "",
    type: 1,
    show: false,
  });
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
      // document.getElementById("feedback-neg").innerHTML = "";
      // document.getElementById("feedback-pos").innerHTML =
      //   "Successfully Submitted!!";
      setFeedback({ message: "Loading...", type: 1, show: true });
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
          // document.getElementById("feedback-pos").innerHTML =
          //   "Created Successfully!!";
          setFeedback({
            message: "Created Successfully!!",
            type: 2,
            show: true,
          });
          // console.log("Api Call");
          console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
          // document.getElementById("feedback-neg").innerHTML =
          //   "Please Authenticate";
          // document.getElementById("feedback-pos").innerHTML = "";
          setFeedback({
            message: "Please Authenticate!!",
            type: 3,
            show: true,
          });
          // console.log(error);
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
      // document.getElementById("feedback-neg").innerHTML =
      //   "Please Fill out all details!!";
      // document.getElementById("feedback-pos").innerHTML = "";
      setFeedback({
        message: "Please Fill out all details!!",
        type: 3,
        show: true,
      });
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setblog({ ...blog, [name]: value });
  };
  return (
    <main style={{ textAlign: "center" }}>
      <h4>Create Blog</h4>
      <form className="admin-form" onSubmit={handleSubmit}>
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
        <br />
        <textarea
          rows="10"
          cols="30"
          type="content"
          placeholder="content"
          id="content"
          name="content"
          value={blog.content}
          onChange={handleChange}
        />

        <br />

        <button type="submit">Create</button>
        <br />
      </form>

      <Feedback feedback={feedback} />
      <br />
    </main>
  );
};

export default CreateBlog;
