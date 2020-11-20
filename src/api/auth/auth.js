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
}

const AuthService = new AuthServiceProvider();

export default AuthService;
