import React, { useState } from "react";
import axios from "axios";
const CommentForm = (props) => {
  const { setFeedback, title } = props;
  const [Comment, setComment] = useState({
    commenter: "",
    comment: "",
    title: title,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setComment({ ...Comment, [name]: value });
  };
  const handleSubmit = (e) => {
    setFeedback({ message: "Loading....", type: 1, show: true });
    e.preventDefault();
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
          setFeedback({
            message: "Comment Posted Successfully",
            type: 2,
            show: true,
          });
        })
        .catch(function (error) {
          setFeedback({
            message: "Comment Post Failed!!",
            type: 3,
            show: true,
          });
        });
    }
  };
  return (
    <form className="comment-form" onSubmit={handleSubmit}>
      <input
        className="comment-form-name"
        type="text"
        id="commenter"
        name="commenter"
        placeholder="name"
        value={Comment.commenter}
        onChange={handleChange}
      />
      <input
        className="comment-form-comment"
        type="text"
        placeholder="comment"
        id="comment"
        name="comment"
        value={Comment.comment}
        onChange={handleChange}
      />
      <button type="submit" className="comment-form-submit">
        Comment
      </button>
    </form>
  );
};

export default CommentForm;
