import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ForgetPassword from "./Screens/ForgetPassword";
import Login from "./Screens/Login";
import SignUp from "./Screens/SignUp";

function AuthStack() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/forgot_password">
            <ForgetPassword />
          </Route>
          <Route exact path="/">
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default AuthStack;
