import React, { useState } from "react";
import axios from "axios";
const LogInOut = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = user;

    if (email && password) {
      document.getElementById("submit-feedback-neg").innerHTML = "";
      document.getElementById("submit-feedback-pos").innerHTML = "Loading.....";
      if (localStorage.getItem("token")) {
        document.getElementById("submit-feedback-neg").innerHTML = "";
        document.getElementById("submit-feedback-pos").innerHTML =
          "Already Logged In";
      } else {
        axios
          .post("admin/login", user)
          .then((res) => {
            localStorage.setItem("token", res.data.token);
            document.getElementById("submit-feedback-neg").innerHTML = "";
            document.getElementById("submit-feedback-pos").innerHTML =
              "Successfully Logged In!!";
          })
          .catch((e) => {
            document.getElementById("submit-feedback-neg").innerHTML =
              "Login Failed";
            document.getElementById("submit-feedback-pos").innerHTML = "";
            console.log(e);
          });
      }

      setUser({
        email: "",
        password: "",
      });
    } else {
      document.getElementById("submit-feedback-neg").innerHTML =
        "Please Fill All Details!!";
      document.getElementById("submit-feedback-pos").innerHTML = "";
    }
  };
  const deleteAdmin = () => {
    //logout current admin
    if (!localStorage.getItem("token")) {
      document.getElementById("submit-feedback-neg").innerHTML =
        "You Are Not Logged In!!";
      document.getElementById("submit-feedback-pos").innerHTML = "";
      return;
    } else {
      var config = {
        method: "delete",
        url: "admin",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
          "Content-Type": "application/json",
        },
      };
      axios(config)
        .then(function (response) {
          document.getElementById("submit-feedback-pos").innerHTML =
            "Deleted Successfully";
          document.getElementById("submit-feedback-neg").innerHTML = "";
          console.log(JSON.stringify(response.data));
          localStorage.removeItem("token");
        })
        .catch(function (error) {
          document.getElementById("submit-feedback-neg").innerHTML =
            "Deletion Failed";
          document.getElementById("submit-feedback-pos").innerHTML = "";
          console.log(error);
        });
    }
  };
  const logout = () => {
    //logout current admin
    if (!localStorage.getItem("token")) {
      document.getElementById("submit-feedback-neg").innerHTML =
        "You Are Not Logged In!!";
      document.getElementById("submit-feedback-pos").innerHTML = "";
      return;
    } else {
      var config = {
        method: "post",
        url: "admin/logout",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
          "Content-Type": "application/json",
        },
      };
      axios(config)
        .then(function (response) {
          document.getElementById("submit-feedback-pos").innerHTML =
            "Logged Out Successfully";
          document.getElementById("submit-feedback-neg").innerHTML = "";
          console.log(JSON.stringify(response.data));
          localStorage.removeItem("token");
        })
        .catch(function (error) {
          document.getElementById("submit-feedback-neg").innerHTML =
            "Logout Failed";
          document.getElementById("submit-feedback-pos").innerHTML = "";
          console.log(error);
        });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <main>
      <button onClick={logout}>Logout</button>
      <button onClick={deleteAdmin}>Delete</button>
      <h4>Blogs Admin Login</h4>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="enter email"
          value={user.email}
          onChange={handleChange}
        />
        <br />
        <input
          type="password"
          placeholder="password"
          id="password"
          name="password"
          value={user.password}
          onChange={handleChange}
        />
        <br />
        <button type="submit">Login</button>
      </form>
      <div id="submit-feedback-pos"></div>
      <div id="submit-feedback-neg"></div>
    </main>
  );
};
export default LogInOut;
