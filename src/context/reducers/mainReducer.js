import { readToken } from "../../helpers/token";

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_STATUS":
      return {
        ...state,
        isLoggedIn: Boolean(readToken()),
      };
    case "LOGOUT_STATUS":
      return {
        ...state,
        isLoggedIn: action.payload,
      };
    case "DECODED_TOKEN":
      return {
        ...state,
        decodedToken: action.payload,
      };
    case "USERNAME":
      return {
        ...state,
        isUserNameEnteredCorrectly: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
