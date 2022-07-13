import React, { useState } from "react";
import OTPInput from "otp-input-react";
import { Button, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { otpstore, otpstoredelete } from "../redux/action/action";
import Nevbar from "./nevbar";
import { useNavigate } from "react-router-dom";

export default function Otp() {
  const [otp, setOtp] = useState("");
  let navigate = useNavigate();

  const nums = useSelector((state) => state.otpReducer);
  console.log(nums);
  console.log(otp);
  const dispatch = useDispatch();

  const varify = () => {
    if (otp === nums.OTP && otp.length === 6) {
      console.log("__ak match");
      alert("Successfully Match");
      navigate("/about/contactus");
      return dispatch(otpstoredelete());
    } else {
      console.log("__ak notmatch");
      setOtp("");
      alert("OTP is not match");
    }
  };
  // genrate the otp 
  const GenOtp = () => {
    var digits = "01234567489";
    let genotp = "";
    for (let i = 0; i < 6; i++) {
      genotp += digits[Math.ceil(Math.random() * 10)];
    }
    return dispatch(otpstore(genotp)).OTP;
  };

  return (
    <>
      <Nevbar />
      <Container>
        <center>
          <h1 style={{ margin: "100px" }}>OTP Verification</h1>
        </center>
        <OTPInput
          className="otpinupt"
          value={otp}
          onChange={setOtp}
          autoFocus
          OTPLength={6}
          otpType="number"
        />
        <div style={{ marginTop: "-150px" }}>
          <center>
            <Button
              className="optbtn"
              onClick={() => alert("Your OTP is " + GenOtp())}
            >
              Get OTP
            </Button>
            <Button
              variant="danger"
              className="optbtn"
              onClick={() => setOtp("")}
            >
              clear
            </Button>
            <Button
              variant="success"
              className="optbtn"
              onClick={(e) => varify()}
            >
              verify OTP
            </Button>
          </center>
        </div>
      </Container>
    </>
  );
}
