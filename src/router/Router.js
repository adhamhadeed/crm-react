import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import NotFound from "./../components/pages/NotFound";
import StudioLayout from "./../layout/StudioLayout";
import SiteLayout from "./../layout/SiteLayout";
import StudioRouter from "./../components/studio/Router";
import SiteRouter from "./../components/site/Router";

const Router = (props) => {
  return (
    <Switch>
      <Route path="/studio">
        <StudioLayout>
          <StudioRouter />
        </StudioLayout>
      </Route>
      <Route exact path="/notFound" component={NotFound} />
      <Route path="/">
        <SiteLayout>
          <SiteRouter />
        </SiteLayout>
      </Route>
      <Redirect to="/notFound" />
    </Switch>
  );
};

export default Router;
