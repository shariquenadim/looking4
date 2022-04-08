import React from 'react';
import { Link } from "react-router-dom";
import axios from '../../axios';
import { useHistory } from 'react-router-dom';
import "./index.scss";

export default function Navbar() {
  const history = useHistory();
  
  const logout = function(e) {
    e.preventDefault();

    axios.get('/logout')
    .then(res => {
      history.push("/");
    })
    .catch(err => {
      console.log(err);
    })
  }

  return (
    <div className="nav__container">
        <nav className="nav">
          <div className="nav__left">
            <Link className="nav__heading" to={"/"}>Looking 4</Link>
          </div>
          <div className="nav__right">
            <a href="#">Help</a>
            <a href="#">Feedback</a>
            <a href="#" onClick={logout}>Logout</a>
          </div>
        </nav>
    </div>
  )
}
