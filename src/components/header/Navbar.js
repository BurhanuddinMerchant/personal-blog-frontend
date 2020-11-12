import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  let showNav = true;
  const onClickShow = () => {
    if (showNav) {
      document.getElementById("nav-ul").style.display = "flex";
    } else {
      document.getElementById("nav-ul").style.display = "none";
    }
    showNav = !showNav;
  };
  return (
    <nav>
      <button id="show-nav" onClick={onClickShow}>
        =
      </button>
      <ul id="nav-ul">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/blogs">All Blogs</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/admin">Admin</Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
