import React from "react";
import SignIn from "./pages/authentication/SignIn";
import PublicRoute from "./components/route/PublicRoute";
import mainReducer from "./context/reducers/mainReducer";
import { initialState, StateContext, DispatchContext } from "./context/store";
import { Switch, Redirect } from "react-router-dom";
import SignUp from "./pages/authentication/SignUp";

export default function App() {
  const [state, dispatch] = React.useReducer(mainReducer, initialState);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        <Switch>
          <PublicRoute path="/signin" component={SignIn} />
          <PublicRoute path="/signup" component={SignUp} />
          <Redirect from="/" to="/signin"></Redirect>
        </Switch>
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}
