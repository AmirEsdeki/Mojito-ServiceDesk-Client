import { read, store, remove } from "./localStorage";

export const readToken = () => {
  return read("token") || read("token", window.sessionStorage);
};
export const storeToken = (token, rememberMe) => {
  if (!rememberMe) {
    store("token", `${token}`, window.sessionStorage);
    return;
  }
  store("token", `${token}`);
};
export const removeToken = () => {
  remove("token") || remove("token", window.sessionStorage);
};
