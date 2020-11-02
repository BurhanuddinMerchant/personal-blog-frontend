import React from "react";
import Header from "./components/header/Header.js";
import Footer from "./components/footer/Footer.js";
import Home from "./components/main/Home";
import Admin from "./components/main/admin";
import Blogs from "./components/main/user/AllBlogs";
import About from "./components/main/About";
import { BrowserRouter as Router, Switch } from "react-router-dom";
const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Home exact path="/" />
        <Admin exact path="/admin" />
        <Blogs exact path="/blogs" />
        <About exact path="/about" />
      </Switch>
      <Footer />
    </Router>
  );
};
export default App;
