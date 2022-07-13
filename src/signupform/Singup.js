import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./signup.css";

export default function Singup() {
  const date = new Date();
  const time = date.getTime();

  const localRegisterData = JSON.parse(localStorage.getItem("registerData"));

  const [registerdata, setRegisterdata] = useState({
    id: time,
    Firstname: "",
    Lastname: "",
    Email: "",
    Password: "",
  });

  const handleInput = (e) => {
    let { name, value } = e.target;
    setRegisterdata({
      ...registerdata,
      [name]: value,
    });
  };

  const validate = () => {
    if (registerdata.Firstname === "") {
      alert("first name is required");
      return false;
    } else if (registerdata.Lastname === "") {
      alert("Last name is required");
      return false;
    } else if (registerdata.Email === "") {
      alert("Email is required");
      return false;
    } else if (registerdata.Password === "") {
      alert("Password is required");
      return false;
    }
    return true;
  };

  let storeData = () => {
    const data = [];
    const result = data.concat(localRegisterData || [], [registerdata]);
    localStorage.setItem("registerData", JSON.stringify(result));
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    if (localRegisterData !== null) {
      const matchmail = localRegisterData.filter((em) => {
        return em.Email === registerdata.Email;
      });
      if (matchmail.length !== 0) {
        alert("this email is already registered");
      } else {
        if (validate()) {
          console.log(registerdata);
          e.target.reset();
          storeData();
          setRegisterdata({
            id: time,
            Firstname: "",
            Lastname: "",
            Email: "",
            Password: "",
          });
        }
      }
    } else {
      if (validate()) {
        console.log(registerdata);
        e.target.reset();
        storeData();
        setRegisterdata({
          id: time,
          Firstname: "",
          Lastname: "",
          Email: "",
          Password: "",
        });
      }
    }
  };

  return (
    <>
      <div className="bgimage">
        <div className="background">
          <div className="shapes"></div>
          <div className="shapes"></div>
        </div>
        <form onSubmit={handlesubmit} style={{ backgroundColor: "#080710" }}>
          <h3>Register Here</h3>

          <label form="firstname">Firstname</label>
          <input
            type="text"
            placeholder="Firstname"
            name="Firstname"
            onChange={handleInput}
          />

          <label form="lastname">Lastname</label>
          <input
            type="text"
            placeholder="Lastname"
            name="Lastname"
            onChange={handleInput}
          />

          <label form="email">Email</label>
          <input
            type="email"
            placeholder="Email "
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
          <button style={{ marginTop: "13px" }}>Register</button>
          <p style={{ textAlign: "center" }}>
            Already have an Account! <Link to="/login">Login here!</Link>
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

// if (localRegisterData !== null) {
//   console.log("__ap");
//   const match = localRegisterData.filter((em) => {
//     return em.Email === registerdata.Email;
//   });
//   console.log(match);
//   if (match) {
//     alert("this email is already registered");
//   }
// } else {
//   if (validate()) {
//     console.log("__ak");
//     e.target.reset();
//     storeData();
//     setRegisterdata({
//       id: time,
//       Firstname: "",
//       Lastname: "",
//       Email: "",
//       Password: "",
//     });
//   }
// }
