/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className="page-wrap d-flex flex-row align-items-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12 text-center">
            <span className="display-1 d-block">404</span>
            <div className="mb-4 lead">
              The page you are looking for was not found.
            </div>
            <div>
              <img src="https://i.pinimg.com/originals/01/1c/5c/011c5c52159dce4199715369eab07d6a.gif" />
            </div>
            <Link to="/login">Back to Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
