import React, { useState } from "react";
import axios from "axios";
import Feedback from "./Feedback";
const LogInOut = () => {
  const [feedback, setFeedback] = useState({
    message: "",
    type: 1,
  });
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = user;

    if (email && password) {
      setFeedback({ message: "Loading...", type: 1 });
      if (localStorage.getItem("token")) {
        setFeedback({ message: "Already Logged In", type: 1 });
      } else {
        axios
          .post("admin/login", user)
          .then((res) => {
            localStorage.setItem("token", res.data.token);
            setFeedback({ message: "Successfully Logged In!!", type: 2 });
          })
          .catch((e) => {
            setFeedback({ message: "Login Failed!", type: 3 });
            console.log(e);
          });
      }

      setUser({
        email: "",
        password: "",
      });
    } else {
      setFeedback({ message: "Please Fill All Details!!", type: 3 });
    }
  };
  const deleteAdmin = () => {
    //logout current admin
    if (!localStorage.getItem("token")) {
      setFeedback({ message: "You Are Not Logged In!!", type: 3 });
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
          setFeedback({ message: "Deleted Successfully", type: 2 });
          console.log(JSON.stringify(response.data));
          localStorage.removeItem("token");
        })
        .catch(function (error) {
          setFeedback({ message: "Deletion Failed", type: 3 });
          console.log(error);
        });
    }
  };
  const logout = () => {
    //logout current admin
    if (!localStorage.getItem("token")) {
      setFeedback({ message: "You Are Not Logged In!!", type: 3 });
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
          setFeedback({ message: "Logged Out Successfully", type: 2 });
          // console.log(JSON.stringify(response.data));
          localStorage.removeItem("token");
        })
        .catch(function (error) {
          setFeedback({ message: "Logout Failed", type: 3 });
          console.log(error);
        });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <main style={{ textAlign: "center" }}>
      <button onClick={logout}>Logout</button>
      <button onClick={deleteAdmin}>Delete</button>
      <h4>Blogs Admin Login</h4>
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
  );
};
export default LogInOut;
