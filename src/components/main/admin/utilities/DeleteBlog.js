import axios from "axios";

import React, { useState } from "react";
const DeleteBlog = () => {
  const [title, setTitle] = useState("");
  const handleDelete = (e) => {
    e.preventDefault();
    if (title) {
      if (!localStorage.getItem("token")) {
        document.getElementById("submit-feedback-neg").innerHTML =
          "You Are Not Logged In!!";
        document.getElementById("submit-feedback-pos").innerHTML = "";
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
            document.getElementById("submit-feedback-pos").innerHTML =
              "Deleted Successfully";
            document.getElementById("submit-feedback-neg").innerHTML = "";
            console.log(JSON.stringify(response.data));
          })
          .catch(function (error) {
            document.getElementById("submit-feedback-neg").innerHTML =
              "Deletion Failed";
            document.getElementById("submit-feedback-pos").innerHTML = "";
            // console.log(error);
          });
      }
    } else {
      document.getElementById("submit-feedback-neg").innerHTML =
        "Please Enter The Title!!";
      document.getElementById("submit-feedback-pos").innerHTML = "";
    }
  };
  const handleChange = (e) => {
    const { value } = e.target;
    setTitle(value);
  };
  return (
    <main>
      <h4>Blogs Admin Signup</h4>
      <form onSubmit={handleDelete}>
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
      <div id="submit-feedback-pos"></div>
      <div id="submit-feedback-neg"></div>
    </main>
  );
};
export default DeleteBlog;
