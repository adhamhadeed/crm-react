import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import NotFound from "./../../components/pages/NotFound";
import Dashboard from "./pages/Dashboard";
import Reports from "./pages/Reports";

const Router = (props) => {
  return (
    <Switch>
      <Route exact path="/reports" component={Reports} />
      <Route exact path="/notFound" component={NotFound} />
      <Route exact path="/" component={Dashboard} />
      <Redirect to="/notFound" />
    </Switch>
  );
};

export default Router;
