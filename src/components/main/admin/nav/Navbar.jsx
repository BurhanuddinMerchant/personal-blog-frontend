import React from "react";
import { Link } from "react-router-dom";
const Navbar = (props) => {
  const { deleteBlg, create, loginOut } = props.navActive;
  return (
    <nav className="admin-nav">
      <ul className="admin-ul">
        <li className="admin-li">
          <Link to="/login-out" className={loginOut}>
            Login/out/Delete
          </Link>
        </li>
        <li>
          <Link to="/createblog" className={create}>
            Create Blogs
          </Link>
        </li>
        <li>
          <Link to="/deleteblog" className={deleteBlg}>
            Delete Blog
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
