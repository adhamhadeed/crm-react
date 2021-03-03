import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import NotFound from "./../components/pages/NotFound";
import Layout from "../layout/Layout";
import StudioRouter from "./../components/studio/Router";
import SiteRouter from "./../components/site/Router";

const AppRouter = ({ component: Component, layout: Layout, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout>
          <Component {...props}></Component>
        </Layout>
      )}
    ></Route>
  );
};
const Router = (props) => {
  return (
    // <Switch>
    //   <AppRouter exact path="/" layout={SiteLayout} component={SiteRouter} />
    //   <AppRouter
    //     exact
    //     path="/studio"
    //     layout={StudioLayout}
    //     component={StudioRouter}
    //   />
    // </Switch>
    <Switch>
      <Route path="/studio">
        <Layout>
          <StudioRouter />
        </Layout>
      </Route>
      <Route exact path="/notFound" component={NotFound} />
      <Route path="/">
        <Layout isSiteView>
          <SiteRouter />
        </Layout>
      </Route>
      <Redirect to="/notFound" />
    </Switch>
  );
};

export default Router;
