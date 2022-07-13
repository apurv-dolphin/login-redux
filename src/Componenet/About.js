import React from "react";
import { Container, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import useImageExapnd from "./Imageexpamd";
import Nevbar from "./nevbar";

export default function About() {
  const [elementRef, ToggleButton] = useImageExapnd();

  return (
    <>
      <Nevbar />
      <Container>
        <div ref={elementRef}>
          <h1 className="my-5" style={{ textAlign: "center" }}>
            About us
          </h1>
          Please fill the contact form :-{" "}
          <Link to="/about/contactus/otpverification">Click here!</Link>
          <div className="about">
            <center className="my-5">{ToggleButton}</center>
            <Image
              className="inimage my-3"
              src="https://coschedule.com/_next/image?url=https%3A%2F%2Fmedia.coschedule.com%2Fuploads%2Fwrite-about-us-page.png&w=1920&q=75"
            ></Image>
          </div>
        </div>
      </Container>
    </>
  );
}
