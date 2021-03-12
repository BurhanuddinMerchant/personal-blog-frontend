import React from "react";
import CreateBlog from "./utilities/CreateBlog";
import DeleteBlog from "./utilities/DeleteBlog";
import LogInOut from "./utilities/Login-out";
import Navbar from "./nav/Navbar";
import Header from "../../header/Header";
import AdminSVG from "../../assets/admin.svg";
import { BrowserRouter as Router, Switch } from "react-router-dom";
const App = () => {
  return (
    <>
      <Header navActive={{ admin: "active" }} />
      <Router>
        <div className="admin">
          <h1>Welcome to the Admin section!</h1>
          <Switch>
            <CreateBlog exact path="/admin/createblog" />
            <DeleteBlog exact path="/admin/deleteblog" />
            <LogInOut exact path="/admin/login-out" />
            <div>
              <Navbar navActive={{}} />
              <div className="admin-hero">
                <p>Manage all your content from this section</p>
                <img src={AdminSVG} alt="admin"></img>
              </div>
            </div>
          </Switch>
        </div>
      </Router>
    </>
  );
};
export default App;
