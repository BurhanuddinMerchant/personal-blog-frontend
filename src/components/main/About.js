import React from "react";
import svg from "./about.svg";
import Header from "../header/Header";
const Login = () => {
  return (
    <>
      <Header navActive={{ about: "active" }} />
      <main>
        <div className="about-container" style={{ textAlign: "center" }}>
          <h1>About Me</h1>
          <div className="about-content">
            <img className="home-image" alt="home" src={svg} />
            <p>
              I am Burhanuddin Merchant, a Second Year Computer Engineering
              undergraduate student at 'Pune Institute of Computer Technology'.
              My key areas of interest are Web Development, The Cloud, DevOps
              and Machine Learning. I love exploring technologies and building
              projects using them. I usually work with MERN Stack for web
              development. Thank You for checking this project out. You can
              check out more about me by clicking the links below.
              <div>
                <a
                  href="https://github.com/BurhanuddinMerchant"
                  className="github"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
                <a
                  className="linkedin"
                  href="https://www.linkedin.com/in/burhanuddin-merchant-89b14a198/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIN
                </a>
              </div>
            </p>
          </div>
        </div>
      </main>
    </>
  );
};
export default Login;
