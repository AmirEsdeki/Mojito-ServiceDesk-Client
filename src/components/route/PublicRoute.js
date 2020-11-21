import * as React from "react";
import { Route, Redirect } from "react-router-dom";
import { useStore } from "../../context/store";

const PublicRoute = ({ component: Component, props, ...rest }) => {
  const state = useStore();
  const isLoggedIn = state.isLoggedIn;

  return (
    <Route
      {...rest}
      render={(props) => {
        return isLoggedIn ? (
          <Redirect to="/dashboard" />
        ) : (
          <Component {...props} />
        );
      }}
    />
  );
};

export default PublicRoute;
