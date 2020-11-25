import React, { useState } from "react";
import axios from "axios";

const CommentForm = (props) => {
  const title = props.title;
  const [Comment, setComment] = useState({
    commenter: "",
    comment: "",
    title: title,
  });
  console.log(title);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setComment({ ...Comment, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(Comment);
    if (Comment.comment && Comment.commenter) {
      var data = JSON.stringify(Comment);

      var config = {
        method: "post",
        url: "blog/comment",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };
      axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };
  return (
    <div>
      <h4>Comment Section</h4>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="commenter"
          name="commenter"
          placeholder="name"
          value={Comment.commenter}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="comment"
          id="comment"
          name="comment"
          value={Comment.comment}
          onChange={handleChange}
        />
        <button type="submit" id="comment-submit">
          Comment
        </button>
      </form>
    </div>
  );
};

export default CommentForm;
