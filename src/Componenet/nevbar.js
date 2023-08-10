import React from "react";
import { Container, Nav, Navbar, Dropdown } from "react-bootstrap";
import { isLoggingStatus, logout } from "../redux/action/action";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import SwitchExample from "./Toggle";

export default function Nevbar() {
  let navigate = useNavigate();
  const them = SwitchExample();
  const singleName = JSON.parse(localStorage.getItem("token"));

  const dispatch = useDispatch();

  const logouts = () => {
    localStorage.removeItem("token");

    // eslint-disable-next-line no-restricted-globals
    let log = confirm("Are you sure?");
    if (log) {
      navigate("/login");
      dispatch(logout());
      dispatch(isLoggingStatus(false));
    }
  };
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <img
              src="https://1757140519.rsc.cdn77.org/blog/wp-content/uploads/2019/04/2.-A-by-Nick-Matey.jpg"
              width="50"
              height="50"
              style={{ marginLeft: "25px" }}
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Brand>Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/dashboard">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/info">
              Info
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
          </Nav>

          {them}

          <Dropdown>
            <Dropdown.Toggle
              variant="dark"
              className="bsPrefix"
              id="dropdown-basic"
              style={{ marginTop: "1px" }}
            >
              {singleName !== null &&
                singleName.name.charAt(0).toUpperCase() +
                  singleName.name.slice(1)}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={logouts}>logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Container>
      </Navbar>
    </>
  );
}
