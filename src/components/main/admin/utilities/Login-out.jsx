import React, { useState } from "react";
import axios from "axios";
import Feedback from "./Feedback";
import Navbar from "../nav/Navbar";
import login from "../../../assets/login.svg";
const LogInOut = () => {
  const [feedback, setFeedback] = useState({
    message: "",
    type: 1,
    show: false,
  });
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    setFeedback({
      message: "Loading...",
      type: 1,
      show: true,
    });
    const { email, password } = user;

    if (email && password) {
      setFeedback({ message: "Loading...", type: 1, show: true });
      if (localStorage.getItem("token")) {
        setFeedback({ message: "Already Logged In", type: 1, show: true });
      } else {
        axios
          .post("admin/login", user)
          .then((res) => {
            localStorage.setItem("token", res.data.token);
            setFeedback({
              message: "Successfully Logged In!!",
              type: 2,
              show: true,
            });
          })
          .catch((e) => {
            setFeedback({ message: "Login Failed!", type: 3, show: true });
            console.log(e);
          });
      }

      setUser({
        email: "",
        password: "",
      });
    } else {
      setFeedback({
        message: "Please Fill All Details!!",
        type: 3,
        show: true,
      });
    }
  };
  const deleteAdmin = () => {
    //logout current admin
    setFeedback({
      message: "Loading...",
      type: 1,
      show: true,
    });
    if (!localStorage.getItem("token")) {
      setFeedback({ message: "You Are Not Logged In!!", type: 3, show: true });
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
          setFeedback({ message: "Deleted Successfully", type: 2, show: true });
          console.log(JSON.stringify(response.data));
          localStorage.removeItem("token");
        })
        .catch(function (error) {
          setFeedback({ message: "Deletion Failed", type: 3, show: true });
          console.log(error);
        });
    }
  };
  const logout = () => {
    //logout current admin
    setFeedback({
      message: "Loading...",
      type: 1,
      show: true,
    });
    if (!localStorage.getItem("token")) {
      setFeedback({ message: "You Are Not Logged In!!", type: 3, show: true });
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
          setFeedback({
            message: "Logged Out Successfully",
            type: 2,
            show: true,
          });
          // console.log(JSON.stringify(response.data));
          localStorage.removeItem("token");
        })
        .catch(function (error) {
          setFeedback({ message: "Logout Failed", type: 3, show: true });
          console.log(error);
        });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <>
      <Navbar navActive={{ loginOut: "active" }} />
      <main style={{ textAlign: "center" }}>
        <h4>Admin Login</h4>
        <img
          alt="login-out"
          style={{ width: "90%", marginBottom: "1em" }}
          src={login}
        />
        <button onClick={logout}>Logout</button>
        <button onClick={deleteAdmin}>Delete</button>
        <form className="admin-form" onSubmit={handleSubmit}>
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
        <Feedback feedback={feedback} />
      </main>
    </>
  );
};
export default LogInOut;
