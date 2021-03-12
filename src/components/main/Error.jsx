import React from "react";
import { Link } from "react-router-dom";
import Header from "../header/Header";
import "../../App.css";
import errorSvg from "../assets/error.svg";
const Error = () => {
  return (
    <>
      <Header navActive={{}} />
      <main>
        <div class="error" style={{ textAlign: "center" }}>
          <h1>404 Page Not found!</h1>
          <img src={errorSvg} alt="404 Page Not Found Error " />
          <Link to="/">
            <button className="home-btn">Navigate Back Home</button>
          </Link>
        </div>
      </main>
    </>
  );
};
export default Error;
