import React from "react";
import CreateBlog from "./utilities/CreateBlog";
import DeleteBlog from "./utilities/DeleteBlog";
import LogInOut from "./utilities/Login-out";
import Navbar from "./nav/Navbar";
import { BrowserRouter as Router, Switch } from "react-router-dom";
const App = () => {
  return (
    <Router>
      <div className="admin" style={{ background: "white" }}>
        <Navbar />
        <Switch>
          <CreateBlog exact path="/createblog" />
          <DeleteBlog exact path="/deleteblog" />
          <LogInOut exact path="/login-out" />
        </Switch>
      </div>
    </Router>
  );
};
export default App;
