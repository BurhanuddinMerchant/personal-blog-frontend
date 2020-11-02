import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="admin-nav">
      <ul className="admin-ul">
        <li className="admin-li">
          <Link to="/login-out">Login/out/Delete</Link>
        </li>
        <li>
          <Link to="/createblog">Create Blogs</Link>
        </li>
        <li>
          <Link to="/deleteblog">Delete Blog</Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
