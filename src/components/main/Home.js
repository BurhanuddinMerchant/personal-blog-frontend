import React from "react";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <main>
      <div className="container">
        <div className="box" style={{ textAlign: "center" }}>
          <h1>Welcome To Burhanuddins Personal Blog</h1>
          <Link to="/all">
            <button>All Blogs</button>
          </Link>
          <div></div>
          <Link to="/create">
            <button>Create Blog</button>
          </Link>
          <br />
          <Link to="/all">
            <button>All Blogs</button>
          </Link>
        </div>
      </div>
    </main>
  );
};
export default Login;
