import React from 'react';
import './HomePage.scss';
import axios from '../axios';

export default function HomePage() {

  const handleSubmit = function(e) {
    e.preventDefault();

    const userDetails = {
      name: "name",
      password: "password",
      role: "admin",
      email: "email@email.com"
    }

    axios.post("/signup", userDetails)
    .then((res) => {
      console.log(res)
    })
    .catch(err => {
      console.log(err);
    })
  }

  return (
    <div className="homepage__container">
      <div className="nav__container">
        <nav className="nav">
          <div className="nav__left">
            <h1><a href="#">Looking 4</a></h1>
          </div>
          <div className="nav__right">
            <a href="#">Help</a>
            <a href="#">Feedback</a>
          </div>
        </nav>
      </div>

      <div className="form__container">
        <div className="form">
          <div className="form__header">
            <h1>Wellity Management System</h1>
          </div>

          <div className="form__body">
            <div className="form__notice">
              Notice
            </div>
            <form action="#" className="form__form" onSubmit={handleSubmit}>
              <div className="form__item">
                <label htmlFor="">ID</label>
                <input type="text" required />
              </div>
              <div className="form__item">
                <label htmlFor="">Password</label>
                <input type="password" required />
              </div>
              <div className="form__item">
                <input type="submit" value="Submit" />
              </div>
            </form>
          </div>
        </div>
      </div>

    </div>
  )
}
