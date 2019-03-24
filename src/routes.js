import React from "react";
import Layout from "./Hoc/Layout";
import { Switch, Route } from "react-router-dom";
import MainDashboard from "./Components/MainDashboard";
import UserPage from "./Components/UserPage";
import SignIn from "./Components/SignIn";
import Register from "./Components/Register";
import CreateEventPage from "./Components/CreateEventPage";
import EventPage from "./Components/EventPage";

const Routes = () => {
  return (
    <div className="app_container">
      <Layout>
        <Switch>
          <Route exact component={UserPage} path="/users/:id" />
          <Route exact component={EventPage} path="/event" />
          <Route exact component={CreateEventPage} path="/create_event" />
          <Route exact component={Register} path="/register" />
          <Route exact component={SignIn} path="/signin" />
          <Route exact component={MainDashboard} path="/" />
        </Switch>
      </Layout>
    </div>
  );
};

export default Routes;
