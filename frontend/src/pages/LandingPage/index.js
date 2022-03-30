import React from 'react';
import { Link } from "react-router-dom";
import "./index.scss";

export default function LandingPage() {
  return (
    <div className="landingpage__container">
      <div className="landingpage">
        <div className="landingpage__header">
          <Link to={"/"}>Looking 4</Link>
        </div>
        <div className="landingpage__btnbox">
          <div className="landingpage__btn">
            <Link to={"/signin"}>Login</Link>
          </div>
          <div className="landingpage__btn">
            <Link to={"/signup"}>Register</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
