import BaseAPI from "../base/baseApi";

class AuthServiceProvider extends BaseAPI {
  constructor() {
    super({
      suffix: "users/",
      raiseError: true,
      raiseInfo: true,
      needsToken: false,
    });
  }

  signIn(data) {
    return this.httpService.post("signin", data);
  }

  signUp(data) {
    return this.httpService.post("register", data);
  }

  verifyUser(data) {
    return this.httpService.post("verify-user", data);
  }

  confirmCode(data) {
    return this.httpService.post("confirm-code", data);
  }

  resendCode(data) {
    return this.httpService.post("resend-code", data);
  }

  changePassword(data) {
    return this.httpService.post("change-password", data);
  }
}

const AuthService = new AuthServiceProvider();

export default AuthService;
