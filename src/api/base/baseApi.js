import axios from "axios";
import { readToken } from "../../helpers/token";
import showNotify from "../../helpers/notify";
import * as R from "ramda";

let requestNeedsToken;

/**
 * A HTTP service which created by Axios instance creator
 *
 * @abstract
 */
class BaseAPI {
  httpService;

  constructor({
    suffix = "",
    baseURL = "http://localhost:49579",
    raiseError = true,
    raiseInfo = true,
    needsToken = true,
  }) {
    // create a new instance of axios with custom config.
    this.httpService = axios.create({
      baseURL: `${baseURL}${suffix ? `/${suffix}` : ""}`,
    });
    requestNeedsToken = needsToken;
    this.requestInterceptors();
    this.responseInterceptors(raiseError, raiseInfo);
  }

  responseInterceptors(raiseError, raiseInfo) {
    // Intercept responses before they are handled by then or catch.
    this.httpService.interceptors.response.use(
      (response) => {
        if (response.data.statusCode && response.data.statusCode != 200)
          console.log(response.data);

        if (raiseInfo && response.data.message)
          showNotify({
            backgroundColor: "#109a0f",
            showAction: false,
            text: response.data.message,
          });
        else if (raiseInfo && !response.data)
          showNotify({
            backgroundColor: "#109a0f",
            showAction: false,
            text: "عملیات با موفقیت انجام شد.",
          });
        return R.pathOr(response, ["data"])(response);
      },
      (error) => {
        if (error.response && error.response.data) {
          console.log("err in baseAPI", error.response.data);
          if (raiseError)
            showNotify({
              text:
                error.response.data.responseException.exceptionMessage ||
                "خطایی در عملیات پیش آمده است، لطفا دوباره تلاش کنید",
            });
          let errorBody = error.response.data;
          return errorBody;
        }

        return Promise.reject(error);
      }
    );
  }

  requestInterceptors() {
    this.httpService.interceptors.request.use(
      (config) => {
        if (!config.headers.authorization && requestNeedsToken) {
          const token = readToken();
          if (token) {
            config.headers.authorization = `berear ${token}`;
          }
        }
        return config;
      },
      (error) => Promise.reject(error)
    );
  }
}

export default BaseAPI;
