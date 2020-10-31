import React from "react";
// import Header from "./components/header/Header.js";
// import Footer from "./components/footer/Footer.js";
import Register from "./components/main/Register";
import Login from "./components/main/Login";
import CreateBlog from "./components/main/CreateBlog";
import AllBlogs from "./components/main/AllBlogs";
// import Home from "./components/main/Home";
import { BrowserRouter as Router, Switch } from "react-router-dom";
const App = () => {
  return (
    <Router>
      {/* <Header /> */}
      <Switch>
        <Home exact path="/" />
        <Register exact path="/register" />
        <Login exact path="/login" />
        <CreateBlog exact path="/create" />
        <AllBlogs exact path="/all" />
        {/* <Error path="*" /> */}
      </Switch>
      {/* <Footer /> */}
    </Router>
  );
};
export default App;
