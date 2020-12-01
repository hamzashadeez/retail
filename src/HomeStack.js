import React, {useEffect, useContext} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Electronics from "./Screens/Categories/Electronics";
import Fashion from "./Screens/Categories/Fashion";
import Groceries from "./Screens/Categories/Groceries";
import Health from "./Screens/Categories/Health";
import Home from "./Screens/Home";
import Cart from "./Screens/Cart";
import {DataContext} from './Context/DataContext'
import Category from "./Screens/Categories/Category";

function HomeStack() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/category">
            <Category />
          </Route>
          <Route path="/fashion">
            <Fashion />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/health">
            <Health />
          </Route>
          <Route path="/electronics">
            <Electronics />
          </Route>
          <Route path="/groceries">
            <Groceries />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default HomeStack;
