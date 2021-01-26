import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { Home } from "./Home";
import { DetailHome } from "./View/Detail/DetailHome";

const HomeRoute = () => {
  
  const { url } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={`${url}/`} component={Home} />
      <Route exact path={`${url}/detail`} component={DetailHome} />
    </Switch>
  );
}

export default HomeRoute;