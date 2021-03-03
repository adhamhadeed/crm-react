import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/settings/Settings";
import Users from "./pages/users/Users";
import ApplicationProperties from "./pages/applicationProperties/ApplicationProperties";
import Components from "./components/Components";
import Navigation from "./navigation/Navigation";
import Companies from "./modules/companies/Companies";
import Orders from "./modules/Orders";
import Products from "./modules/Products";
import Contacts from "./modules/Contacts";
import Currencies from "./modules/Currencies";
import NotFound from "./../../components/pages/NotFound";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/studio/components/:id" component={Components} />

      <Route exact path="/studio/navigation/:id" component={Navigation} />

      <Route exact path="/studio/modules/companies" component={Companies} />
      <Route exact path="/studio/modules/currencies" component={Currencies} />
      <Route exact path="/studio/modules/orders" component={Orders} />
      <Route exact path="/studio/modules/products" component={Products} />
      <Route exact path="/studio/modules/contacts" component={Contacts} />

      <Route exact path="/studio/users" component={Users} />
      <Route
        exact
        path="/studio/applicationproperties"
        component={ApplicationProperties}
      />
      <Route exact path="/studio/settings" component={Settings} />
      <Route exact path="/studio/users" component={Users} />
      <Route exact path="/studio/notFound" component={NotFound} />
      <Route exact path="/studio" component={Dashboard} />
      <Redirect to="/studio/notFound" />
    </Switch>
  );
};

export default Router;
