import React, {useState} from 'react';
import { Link, useHistory } from "react-router-dom";
import axios from '../../axios';
import './index.scss';

export default function SignUp() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassoword, setConfirmPassoword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = function(e) {
    e.preventDefault();

    const userDetails = {
      name: name,
      password: password,
      role: "admin",
      email: email
    }

    axios.post("/signup", userDetails)
    .then((res) => {
      console.log(res)
      history.push("/dashboard");
    })
    .catch(err => {
      console.log(err.response.data.message);
    })
  }

  return (
    <div className="signup__container">
      <div className="signup__form--container">
        <div className="signup__form">
          <div className="signup__form--header">
            <h1>Wellity Management System</h1>
          </div>

          <div className="signup__form--body">
            <form action="#" className="signup__form--form" onSubmit={handleSubmit}>
              <div className="signup__form--item">
                <div className="signup__form--title">
                  <h2>Register</h2>
                </div>
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
              <div className="signup__form--item">
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
              <div className="signup__form--item">
                <label htmlFor="">Confirm password</label>
                <input 
                  type="password" 
                  required 
                  value={confirmPassoword} 
                  onChange={(e) => {
                    setConfirmPassoword(e.target.value)
                  }}
                />
              </div>
              <div className="signup__form--item">
                <label htmlFor="">Name</label>
                <input 
                  type="text" 
                  required 
                  value={name} 
                  onChange={(e) => {
                    setName(e.target.value)
                  }}
                />
              </div>
              <div className="signup__form--item">
                <input type="submit" value="Register" />
              </div>
              <div className="signup__form--footer">
                Already have an account ? &nbsp;
                <Link to="/signin">login</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
