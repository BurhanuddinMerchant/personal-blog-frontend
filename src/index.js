import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import axios from "axios";
axios.defaults.baseURL = "https://burhanuddin-personal-blog-api.herokuapp.com/";
ReactDOM.render(<App />, document.getElementById("root"));
