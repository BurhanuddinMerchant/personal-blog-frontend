import React from "react";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <main>
      <div className="container">
        <div className="box" style={{ textAlign: "center" }}>
          <h1>Welcome To Pulzion 20 Online Judge</h1>
          <Link to="/register">
            <button>Register For Contest Here</button>
          </Link>
          <div></div>
          <Link to="/login">
            <button>Login For Contest Here</button>
          </Link>
        </div>
      </div>
    </main>
  );
};
export default Login;
