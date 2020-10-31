import React, { useState } from "react";
import { Link } from "react-router-dom";
const Register = () => {
  const [user, setUser] = useState({
    id: new Date().getTime(),
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    personalInfo: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, personalInfo, password, confirmPassword } = user;
    if (name && email && personalInfo && password && confirmPassword) {
      if (password !== confirmPassword) {
        document.getElementById("submit-feedback-neg").innerHTML =
          "Passwords Don't match!!";
        document.getElementById("submit-feedback-pos").innerHTML = "";
        setUser({
          ...user,
          password: "",
          confirmPassword: "",
        });
      } else {
        document.getElementById("submit-feedback-neg").innerHTML = "";
        document.getElementById("submit-feedback-pos").innerHTML =
          "Successfully Submitted!!";
        setUser({
          id: new Date().getTime(),
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
          personalInfo: "",
        });
      }
    } else {
      document.getElementById("submit-feedback-neg").innerHTML =
        "Please Fill out all details!!";
      document.getElementById("submit-feedback-pos").innerHTML = "";
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  return (
    <main>
      <div className="container">
        <div className="box" style={{ textAlign: "center" }}>
          <h4>Blogs Admin Signup</h4>
          <form onSubmit={handleSubmit}>
            <input
              type="name"
              id="name"
              name="name"
              placeholder="name"
              value={user.name}
              onChange={handleChange}
            />
            <br />
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
            <input
              type="password"
              placeholder="confirm password"
              id="confirmPassword"
              name="confirmPassword"
              value={user.confirmPassword}
              onChange={handleChange}
            />
            <br />
            <input
              type="phone number"
              placeholder="phone number"
              id="personalInfo"
              name="personalInfo"
              value={user.personalInfo}
              onChange={handleChange}
            />
            <br />
            <button type="submit">Sign-Up</button>
          </form>

          <div id="submit-feedback-pos"></div>
          <div id="submit-feedback-neg"></div>
          <p>
            already have an account? <Link to="/login">Click Here</Link>
          </p>
          <Link to="/create">
            <button>Create Blog?</button>
          </Link>
        </div>
      </div>
    </main>
  );
};
export default Register;
