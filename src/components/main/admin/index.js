import React from "react";
import CreateBlog from "./utilities/CreateBlog";
import DeleteBlog from "./utilities/DeleteBlog";
import LogInOut from "./utilities/Login-out";
import Header from "./nav/Header";
import { BrowserRouter as Router, Switch } from "react-router-dom";
const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <CreateBlog exact path="/createblog" />
        <DeleteBlog exact path="/deleteblog" />
        <LogInOut exact path="/login-out" />
      </Switch>
    </Router>
  );
};
export default App;
