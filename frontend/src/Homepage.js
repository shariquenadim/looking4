import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SignIn from "./pages/Signin";
import SignUp from "./pages/Signup";
import Navbar from './components/Navbar';
import Dashboard from "./pages/Dashboard";

export default function Homepage() {
  return (
    <div className="main__container">
      <Router>
        <Switch>
          <Route exact path="/">
            <Navbar />
            <LandingPage />
          </Route>
          <Route exact path="/signin">
            <Navbar />
            <SignIn />
          </Route>
          <Route exact path="/signup">
            <Navbar />
            <SignUp />
          </Route>
          <Route exact path="/dashboard">
            <Navbar />
            <Dashboard />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}