import axios from "axios";
import { Link } from "react-router-dom";
const Logout = () => {
  const handleClick = () => {
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
  return (
    <main>
      <div className="container">
        <div className="box" style={{ textAlign: "center" }}>
          <h4>Blogs Logout</h4>
          <button onClick={() => handleClick()}>Logout</button>
          <div id="submit-feedback-pos"></div>
          <div id="submit-feedback-neg"></div>
          <p>
            Don't have an account? <Link to="/register">Click Here</Link>
          </p>
          <Link to="/create">
            <button>Create Blog?</button>
          </Link>
        </div>
      </div>
    </main>
  );
};
export default Logout;
