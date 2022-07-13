import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../redux/action/action";
import "./login.css";

export default function LoginForm() {
  let nevigate = useNavigate();

  const match = JSON.parse(localStorage.getItem("registerData"));
  const [loginData, setLoginData] = useState({
    Email: "",
    Password: "",
  });
  const clear = () => {
    setLoginData({
      Email: "",
      Password: "",
    });
  };

  const dispatch = useDispatch();

  const handleInput = (e) => {
    let { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handlesubmit = (e) => {
    e.preventDefault();

    if (match !== null) {
      console.log(match);
      const userData = match.filter((rd) => {
        return (
          rd.Email === loginData.Email && rd.Password === loginData.Password
        );
      });
      if (userData && userData.length !== 0) {
        console.log("__ak");
        if (loginData.Email !== "" && loginData.Password !== "") {
          alert("Login success");
          nevigate("/dashboard");
          const token = {
            authtok: "dcsdhgvdsjcvd#jcgd$sjhcdshjgdsfhds@glhz",
            name: userData[0].Firstname,
            username: userData[0].Email,
          };
          localStorage.setItem("token", JSON.stringify(token));
          e.target.reset();
          clear();
          dispatch(login(loginData, token));
        }
      } else {
        if (loginData.Email === "") {
          alert("email is required");
        } else if (loginData.Password === "") {
          alert("password is required");
        } else {
          alert("username and password is not match");
        }
      }
    } else {
      alert("please Registered");
    }
  };

  return (
    <>
      <div className="bgimage">
        <div className="background">
          <div className="shape"></div>
          <div className="shape"></div>
        </div>
        <form
          onSubmit={handlesubmit}
          style={{ backgroundColor: "#080710" }}
          className="form"
        >
          <h3>Login Here</h3>

          <label form="username">Username</label>
          <input
            type="email"
            placeholder="Email or Phone"
            name="Email"
            onChange={handleInput}
          />

          <label form="password">Password</label>
          <input
            type="password"
            placeholder="Password"
            name="Password"
            onChange={handleInput}
          />

          <button style={{ marginTop: "13px" }}>Log In</button>

          <p style={{ textAlign: "right" }}>
            <Link to="/forgotpass">Forgot password? </Link>
          </p>
          <p style={{ textAlign: "center" }}>
            Don't have an Account! <Link to="/">Register here!</Link>
          </p>
          <div className="social">
            <div className="go">
              <i className="fab fa-google"></i> Google
            </div>
            <div className="fb">
              <i className="fab fa-facebook"></i> Facebook
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
