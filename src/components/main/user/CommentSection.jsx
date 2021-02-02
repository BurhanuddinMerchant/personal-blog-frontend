import React from "react";
import axios from "axios";
const CommentSection = (props) => {
  const commentsArr = props.comments;
  const setFeedback = props.setFeedback;
  const title = props.title;
  return (
    <div className="comment-section">
      {commentsArr.map((comnt) => {
        const { comment, commenter } = comnt;
        const handleClick = () => {
          setFeedback({
            message: "Loading....",
            type: 1,
            show: true,
          });
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
              setFeedback({
                message: "Comment Deleted Successfully!!",
                type: 2,
                show: true,
              });
              console.log(response);
            })
            .catch(function (error) {
              console.log(error);
              setFeedback({
                message: "Deletion Failed (Not Logged In)!!",
                type: 3,
                show: true,
              });
            });
        };
        return (
          <div className="comment-card" key={comnt._id}>
            <div className="comment-card-upper">
              <p className="comment-card-name">{commenter}</p>
              <button className="comment-card-delete" onClick={handleClick}>
                delete
              </button>
            </div>
            <p className="comment-card-comment">{comment}</p>
          </div>
        );
      })}
    </div>
  );
};
export default CommentSection;
