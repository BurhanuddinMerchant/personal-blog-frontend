import React from "react";
import Footer from "./components/footer/Footer";
import Home from "./components/main/Home";
import Admin from "./components/main/admin";
import Blogs from "./components/main/user/Blogs";
import About from "./components/main/About";
import Error from "./components/main/Error";
import { BrowserRouter as Router, Switch } from "react-router-dom";
const App = () => {
  return (
    <Router>
      <Switch>
        <Home exact path="/" navActive={{ home: "active" }} />
        <Admin exact path="/admin" navActive={{ home: "active" }} />
        <Blogs exact path="/blogs" navActive={{ home: "active" }} />
        <About exact path="/about" navActive={{ home: "active" }} />
        <Error path="*" />
      </Switch>
      <Footer />
    </Router>
  );
};
export default App;
