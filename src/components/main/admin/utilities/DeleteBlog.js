import axios from "axios";

import Feedback from "./Feedback";
import React, { useState } from "react";
const DeleteBlog = () => {
  const [feedback, setFeedback] = useState({
    message: "",
    type: 1,
    show: false,
  });
  const [title, setTitle] = useState("");
  const handleDelete = (e) => {
    setFeedback({
      message: "Loading...",
      type: 1,
      show: true,
    });
    e.preventDefault();
    if (title) {
      if (!localStorage.getItem("token")) {
        setFeedback({
          message: "You Are Not Logged In!!",
          type: 3,
          show: true,
        });
        return;
      } else {
        var config = {
          method: "delete",
          url: "blog/" + title,
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
            "Content-Type": "application/json",
          },
        };
        axios(config)
          .then(function (response) {
            setFeedback({
              message: "Deleted Successfully",
              type: 2,
              show: true,
            });
            // console.log(JSON.stringify(response.data));
          })
          .catch(function (error) {
            setFeedback({ message: "Deletion Failed", type: 3, show: true });
            // console.log(error);
          });
      }
    } else {
      setFeedback({ message: "Please Enter the Title", type: 3, show: true });
    }
  };
  const handleChange = (e) => {
    const { value } = e.target;
    setTitle(value);
  };
  return (
    <main style={{ textAlign: "center" }}>
      <h4>Blogs Admin Signup</h4>
      <form className="admin-form" onSubmit={handleDelete}>
        <input
          type="title"
          id="title"
          name="title"
          placeholder="title"
          value={title}
          onChange={handleChange}
        />
        <br />
        <button type="submit">Delete</button>
      </form>
      <Feedback feedback={feedback} />
    </main>
  );
};
export default DeleteBlog;
