import React from "react";
import SignIn from "./pages/authentication/SignIn";
import PublicRoute from "./components/route/PublicRoute";
import PrivateRoute from "./components/route/PrivateRoute";
import mainReducer from "./context/reducers/mainReducer";
import { initialState, StateContext, DispatchContext } from "./context/store";
import { Switch, Redirect } from "react-router-dom";
import SignUp from "./pages/authentication/SignUp";
import EnterConfirmationCode from "./pages/authentication/EnterConfirmationCode";
import EnterConfirmationCodeWithUserName from "./pages/authentication/EnterConfirmationCodeWithUserName";
import ForgetPassword_Step1 from "./pages/authentication/ForgetPassword_Step1";
import ForgetPassword_Step2 from "./pages/authentication/ForgetPassword_Step2";
import Dashboard from "./pages/dashboard/Dashboard";

export default function App() {
  const [state, dispatch] = React.useReducer(mainReducer, initialState);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        <Switch>
          <PublicRoute path="/signin" component={SignIn} />
          <PublicRoute path="/signup" component={SignUp} />
          <PublicRoute path="/verify-user" component={EnterConfirmationCode} />
          <PublicRoute
            path="/forget-password-step1"
            component={ForgetPassword_Step1}
          />
          <PublicRoute
            path="/forget-password-step2"
            component={ForgetPassword_Step2}
          />
          <PublicRoute
            path="/verify-user-with-identity"
            component={EnterConfirmationCodeWithUserName}
          />
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <Redirect from="/" to="/signin"></Redirect>
        </Switch>
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}
