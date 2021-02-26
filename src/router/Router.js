import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import NotFound from "./../components/pages/NotFound";
import StudioLayout from "./../layout/StudioLayout";
import SiteLayout from "./../layout/SiteLayout";
import StudioRouter from "./../components/studio/Router";
import SiteRouter from "./../components/site/Router";

const AppRouter = ({ component: Component, layout: Layout, ...rest }) => {
  <Route
    {...rest}
    render={(props) => (
      <Layout>
        <Component {...props}></Component>
      </Layout>
    )}
  ></Route>;
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
