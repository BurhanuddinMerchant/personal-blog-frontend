import React from "react";
import svg from "./undraw_Content_re_33px.svg";
import Header from "../header/Header";
const Login = (props) => {
  console.log(props);
  return (
    <>
      <Header navActive={{ home: "active" }} />
      <main>
        <div style={{ textAlign: "center" }} className="home">
          <h1>Welcome To The Blog</h1>
          <img className="home-image" alt="home" src={svg} />
        </div>
      </main>
    </>
  );
};
export default Login;
