import React from "react";
import LayoutHeader from "./LayoutHeader";
import history from "../../utils/history"
import HomeRoute from "../../features/Home/HomeRoute";
import { Redirect, Route, Router, Switch } from "react-router-dom";
import { Bags } from "../../features/Bags/Bags";

const Layout = (props) => {
  return (
    <Router history={history}>
      <LayoutHeader {...props} />
      <div >
        <Switch>
          <Route
            path="/home"
            key="home"
            component={HomeRoute}
          />

          <Route
            path="/bag"
            key="bag"
            component={Bags}
          />
          <Redirect from="*" to="/home" />
        </Switch>
      </div>
    </Router>
  )
}

export default Layout