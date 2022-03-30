import React from 'react';
import { Link } from "react-router-dom";
import "./index.scss";

export default function Navbar() {
  return (
    <div className="nav__container">
        <nav className="nav">
          <div className="nav__left">
            <Link className="nav__heading" to={"/"}>Looking 4</Link>
          </div>
          <div className="nav__right">
            <a href="#">Help</a>
            <a href="#">Feedback</a>
          </div>
        </nav>
    </div>
  )
}
