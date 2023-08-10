import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./signup.css";
import { toast } from "react-toastify";

export default function Singup() {
  const date = new Date();
  const time = date.getTime();

  const localRegisterData = JSON.parse(localStorage.getItem("registerData"));

  const navigate = useNavigate();

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
      toast("First-name is required.", {
        position: "top-right",
        type: "error",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return false;
    } else if (registerdata.Lastname === "") {
      toast("Last-name is required.", {
        position: "top-right",
        type: "error",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return false;
    } else if (registerdata.Email === "") {
      toast("Email is required.", {
        position: "top-right",
        type: "error",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return false;
    } else if (registerdata.Password === "") {
      toast("Password is required.", {
        position: "top-right",
        type: "error",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
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
        toast("This email is already registered.", {
          position: "top-right",
          type: "error",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else {
        if (validate()) {
          navigate("/login");
          storeData();
          setRegisterdata({
            id: time,
            Firstname: "",
            Lastname: "",
            Email: "",
            Password: "",
          });
          toast("Successfully Register.", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
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
