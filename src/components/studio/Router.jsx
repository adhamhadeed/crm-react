import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import NotFound from "./../../components/pages/NotFound";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";
import Users from "./pages/Users";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/studio/Settings" component={Settings} />
      <Route exact path="/studio/Users" component={Users} />
      <Route exact path="/studio/notFound" component={NotFound} />
      <Route exact path="/studio" component={Dashboard} />
      <Redirect to="/studio/notFound" />
    </Switch>
  );
};

export default Router;
