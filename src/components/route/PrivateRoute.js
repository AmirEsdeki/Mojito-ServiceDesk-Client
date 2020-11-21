import * as React from "react";
import { Route, Redirect } from "react-router-dom";
import { useStore } from "../../context/store";

const PrivateRoute = ({ component: Component, isLoggedIn, props, ...rest }) => {
  const state = useStore();
  isLoggedIn = state.isLoggedIn;
  // Show the component only when the user is logged in
  // Otherwise, redirect the user to signin page
  return (
    <Route
      {...rest}
      render={(props) => {
        // @ts-ignore
        //If user is logged in, it pass true. So the component will show ,else user will
        //be redirected to login page.
        if (isLoggedIn) {
          return <Component {...props} />;
        } else {
          return <Redirect to="/signin" />;
        }
      }}
    />
  );
};

export default PrivateRoute;
