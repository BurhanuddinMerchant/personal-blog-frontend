import React from "react";
import svg from "./undraw_Content_re_33px.svg";
import Header from "../header/Header";
const Login = (props) => {
  console.log(props);
  return (
    <>
      <Header navActive={{ home: "active" }} />
      <main>
        <div className="home">
          <h1>Welcome To The Blog!</h1>
          <div className="home-content">
            <p>
              This is the gateway to mindblowing articles , analysis and
              important information coming from various domains and fields. From
              latest releases in the tech world, to information related to
              current affairs ,music and much more.
            </p>
            <img className="home-image" alt="home" src={svg} />
          </div>
        </div>
      </main>
    </>
  );
};
export default Login;
