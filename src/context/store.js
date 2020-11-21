import * as React from "react";
import { readToken } from "../helpers/token";

export const initialState = {
  isLoggedIn: Boolean(readToken()),
  decodedToken: {
    FullName: "",
    IsVerified: "false",
    role: "",
    exp: 0,
    iat: 0,
    nbf: 0,
    unique_name: "0",
  },
};
export const StateContext = React.createContext(initialState);
export const DispatchContext = React.createContext(() => {});

export const useStore = () => React.useContext(StateContext);
export const useDispatch = () => React.useContext(DispatchContext);
