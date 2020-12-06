import BaseAPI from "../base/baseApi";

class ConversationServiceProvider extends BaseAPI {
  constructor() {
    super({
      suffix: "conversations/",
      raiseError: true,
      raiseInfo: true,
      needsToken: true,
    });
  }

  getAll(data) {
    return this.httpService.get("", { params: data });
  }

  post(data) {
    return this.httpService.post("", data);
  }

  put(id) {
    return this.httpService.put(`${id}`);
  }
  delete(id) {
    return this.httpService.delete(`${id}`);
  }

  filter(phrase) {
    return this.httpService.post(`${phrase}/filter`);
  }
}

const ConversationService = new ConversationServiceProvider();

export default ConversationService;
