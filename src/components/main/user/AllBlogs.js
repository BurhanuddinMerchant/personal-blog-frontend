import React, { useState, useEffect } from "react";
import axios from "axios";
const AllBlogs = () => {
  const [blogs, setblogs] = useState([]);
  const [currentBlog, setCurrentBlog] = useState({});
  useEffect(() => {
    const usefetch = async () => {
      axios
        .get("blog")
        .then((res) => res.data)
        .then((result) => {
          console.log("Api Call");
          // console.log(result);
          setblogs(result);
        })
        .catch((e) => {
          console.log(e);
        });
    };
    usefetch();
  }, []);
  const [isDetailBlogView, setIsDetailBlogView] = useState(false);
  const handleClick = () => {
    setIsDetailBlogView(!isDetailBlogView);
  };
  return (
    <main>
      {isDetailBlogView ? (
        <div style={{ textAlign: "center" }}>
          <BlogView blg={currentBlog} handleClick={handleClick} />
        </div>
      ) : (
        <div style={{ textAlign: "center" }}>
          <h4 className="all-blogs-header">All Blogs</h4>
          {blogs.map((blg) => {
            return (
              <Blog
                blg={blg}
                key={blg._id}
                handleClick={handleClick}
                setCurrentBlog={setCurrentBlog}
              />
            );
          })}
        </div>
      )}
    </main>
  );
};

const Blog = (props) => {
  const { _id, title, snippet, image, author } = props.blg;
  const handleClick = props.handleClick;
  const setCurrentBlog = props.setCurrentBlog;
  const changeState = (props) => {
    setCurrentBlog(props.blg);
  };
  return (
    <div className="blog-card" key={_id}>
      <h2>{title}</h2>
      <img src={image} alt={title} />
      <h4>{snippet}</h4>
      <h5>Author : {author}</h5>
      <button
        onClick={(e) => {
          handleClick(e);
          changeState(props);
        }}
      >
        Read More
      </button>
    </div>
  );
};

const BlogView = (props) => {
  const { _id, title, image, content, author, comments } = props.blg;
  const handleClick = props.handleClick;
  return (
    <div className="detail-blog" key={_id}>
      <h2>{title}</h2>
      {/* <h4>{snippet}</h4> */}
      <img src={image} alt={title} />
      <p>{content}</p>
      <h3>Author : {author}</h3>
      <CommentForm title={title} />
      <CommentSection comments={comments} title={title} />
      <button onClick={() => handleClick()}>Back</button>
    </div>
  );
};
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
    <>
      <h4>Blogs Admin Login</h4>
      <form className="admin-form" onSubmit={handleSubmit}>
        <input
          type="name"
          id="commenter"
          name="commenter"
          placeholder="name"
          value={Comment.commenter}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          placeholder="comment"
          id="comment"
          name="comment"
          value={Comment.comment}
          onChange={handleChange}
        />
        <br />
        <button type="submit">Comment</button>
      </form>
    </>
  );
};
const CommentSection = (props) => {
  const commentsArr = props.comments;
  const title = props.title;
  return (
    <>
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
          <div key={comnt._id} className="comment">
            <h3 id="commenter">{commenter}</h3>
            <p id="comment-text">{comment}</p>,
            <button onClick={handleClick} className="delete-blog">
              {" "}
              delete
            </button>
          </div>
        );
      })}
    </>
  );
};
export default AllBlogs;
