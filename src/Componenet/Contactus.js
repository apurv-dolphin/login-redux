import React, { useState } from "react";

import { Link } from "react-router-dom";
import Nevbar from "./nevbar";

export default function Contactus() {
  const [data, setData] = useState(true);

  const handleclick = () => {
    if (data) {
      alert("Thankyou for your suggestion ");
      setData(false);
    } else {
      setData(true);
    }
  };

  return (
    <>
      <Nevbar />
      <form style={{ backgroundColor: "#080710" }}>
        <h3>Contect Us</h3>
        <label form="Name">Name</label>
        <input type="text" placeholder="Name" name="Name" />

        <label form="email">Email</label>
        <input type="email" placeholder="Email " name="Email" />

        <label form="phone">Contact No.</label>
        <input type="number" placeholder="Contact No." name="Contact No." />

        <label form="txtarea">Suggestion </label>
        <textarea placeholder="Write your Suggestion"></textarea>

        <button style={{ marginTop: "13px" }} onClick={() => handleclick()}>
          Submit
        </button>

        <Link to="/dashboard">
          <button style={{ marginTop: "13px" }}>Back to Home</button>
        </Link>
      </form>
    </>
  );
}
