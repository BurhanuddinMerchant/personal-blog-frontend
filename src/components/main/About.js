import React from "react";
import svg from "./undraw_Content_re_33px.svg";
import Header from "../header/Header";
const Login = () => {
  console.log("about");
  return (
    <>
      <Header navActive={{ about: "active" }} />
      <main>
        <div style={{ textAlign: "center" }}>
          <h1>Welcome To About</h1>
          <img className="home-image" alt="home" src={svg} />
        </div>
      </main>
    </>
  );
};
export default Login;
