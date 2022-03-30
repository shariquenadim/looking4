import React, {useState} from 'react';
import { Link, useHistory } from "react-router-dom";
import axios from '../../axios';
import './index.scss';

export default function SignIn() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = function(e) {
    e.preventDefault();

    const userDetails = {
      email: email,
      password: password
    }

    axios.post("/signin", userDetails)
    .then((res) => {
      console.log(res);
      history.push("/dashboard");
    })
    .catch(err => {
      console.log(err.response.data.message);
    })
  }

  return (
    <div className="signin__container">
      <div className="signin__form--container">
        <div className="signin__form">
          <div className="signin__form--header">
            <h1>Wellity Management System</h1>
          </div>

          <div className="signin__form--body">
            <form action="#" className="signin__form--form" onSubmit={handleSubmit}>
              <div className="signin__form--title">
                <h2>Login</h2>
              </div>
              <div className="signin__form--item">
                <label htmlFor="">Email</label>
                <input 
                  type="email" 
                  required 
                  value={email} 
                  onChange={(e) => {
                    setEmail(e.target.value)
                  }}
                />
              </div>
              <div className="signin__form--item">
                <label htmlFor="">Password</label>
                <input 
                  type="password" 
                  required 
                  value={password} 
                  onChange={(e) => {
                    setPassword(e.target.value)
                  }}
                />
              </div>
              <div className="signin__form--item">
                <input type="submit" value="Login" />
              </div>
              <div className="signin__form--footer">
                Don't have an account ? &nbsp;
                <Link to="/signup">create one</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
