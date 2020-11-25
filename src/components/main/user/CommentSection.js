import React from "react";
import axios from "axios";
const CommentSection = (props) => {
  const commentsArr = props.comments;
  const title = props.title;
  return (
    <div className="comment-section">
      {commentsArr.map((comnt) => {
        const { comment, commenter } = comnt;
        const handleClick = () => {
          const data = {
            comment: comment,
            title: title,
          };
          var config = {
            method: "delete",
            url: "blog/comment",
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
              "Content-Type": "application/json",
            },
            data: data,
          };
          axios(config)
            .then(function (response) {
              console.log(response);
            })
            .catch(function (error) {
              console.log(error);
            });
        };
        return (
          <div key={comnt._id}>
            <div>
              <h3>{commenter}</h3>
              <button onClick={handleClick}>delete</button>
            </div>
            <p>{comment}</p>
          </div>
        );
      })}
    </div>
  );
};
export default CommentSection;
