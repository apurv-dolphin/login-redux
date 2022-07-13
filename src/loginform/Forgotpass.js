import React from "react";
import { Link } from "react-router-dom";
import "./forgotpass.css";

export default function Forgotpass() {
  return (
    <>
      <div className="background">
        <div className="box"></div>
        <div className="box"></div>
      </div>
      <form style={{ backgroundColor: "#080710" }} className="form">
        <h3>Change Password</h3>

        <label form="email">Email</label>
        <input type="email" placeholder="Email " name="Email" />
        <label form="password">New Password</label>
        <input type="password" placeholder="Password" name="Newpassword" />

        <label form="newpassword">Confirm Password</label>
        <input
          type="password"
          placeholder="New password"
          name="Confirmpassword"
        />

        <Link to="/login">
          <button style={{ marginTop: "13px" }}>Submit</button>
        </Link>
      </form>
    </>
  );
}
