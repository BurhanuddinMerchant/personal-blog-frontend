import React from "react";
import Navbar from "./Navbar";
import Title from "./Title";
const Header = (props) => {
  return (
    <header>
      <Title />
      <Navbar navActive={props.navActive} />
    </header>
  );
};
export default Header;
