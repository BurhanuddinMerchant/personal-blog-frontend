import React from "react";
import Header from "./components/header/Header.js";
import Footer from "./components/footer/Footer.js";
import Home from "./components/main/Home";
import Admin from "./components/main/admin";
import Blogs from "./components/main/user/Blogs";
import About from "./components/main/About";
import { BrowserRouter as Router, Switch } from "react-router-dom";
const App = () => {
  return (
    <Router>
      <Switch>
        <Home exact path="/" navActive={{ home: "active" }} />
        <Admin exact path="/admin" navActive={{ home: "active" }} />
        <Blogs exact path="/blogs" navActive={{ home: "active" }} />
        <About exact path="/about" navActive={{ home: "active" }} />
      </Switch>
      <Footer />
    </Router>
  );
};
export default App;
