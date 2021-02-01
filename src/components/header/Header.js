import React, { useState } from "react";
import Navbar from "./Navbar";
import Title from "./Title";
const Header = (props) => {
  const [showNav, setShowNav] = useState(true);
  const handleClick = (e) => {
    console.log(e);
    e.preventDefault();
    if (showNav) {
      document.getElementById("main-navbar").style["display"] = "flex";
      document.getElementById("main-navbar").style["margin"] = "auto";
    } else {
      document.getElementById("main-navbar").style.display = "none";
    }
    setShowNav(!showNav);
  };
  return (
    <header>
      <div className="title-button-container">
        <Title />
        <button id="shownav" onClick={handleClick}>
          =
        </button>
      </div>
      <Navbar navActive={props.navActive} />
    </header>
  );
};
export default Header;
