import React from "react";
import { Link } from "react-router-dom";
const Navbar = (props) => {
  console.log(props.navActive);
  const { home, allblogs, about, admin } = props.navActive;
  return (
    <nav>
      <ul id="nav-ul">
        <li>
          <Link to="/" className={home}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/blogs" className={allblogs}>
            All Blogs
          </Link>
        </li>
        <li>
          <Link to="/about" className={about}>
            About
          </Link>
        </li>
        <li>
          <Link to="/admin" className={admin}>
            Admin
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
