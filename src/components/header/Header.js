import React, { useState } from "react";
import Navbar from "./Navbar";
import Title from "./Title";
import hamburger from "./hamburger.png";
import hamburgerActive from "./hamburger_active.png";
const Header = (props) => {
  const [showNav, setShowNav] = useState(true);
  const handleClick = (e) => {
    e.preventDefault();
    if (showNav) {
      document.getElementById("main-navbar").style["display"] = "flex";
      document.getElementById("main-navbar").style["margin"] = "auto";
      document.getElementById("shownav").src = hamburgerActive;
    } else {
      document.getElementById("main-navbar").style.display = "none";
      document.getElementById("shownav").src = hamburger;
    }
    setShowNav(!showNav);
  };
  return (
    <header>
      <div className="title-button-container">
        <Title />
        <img
          id="shownav"
          src={hamburger}
          alt="hamburger"
          onClick={handleClick}
        ></img>
      </div>
      <Navbar navActive={props.navActive} />
    </header>
  );
};
export default Header;
