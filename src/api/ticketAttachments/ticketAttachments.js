import BaseAPI from "../base/baseApi";

class PrioritiesServiceProvider extends BaseAPI {
  constructor() {
    super({
      suffix: "priorities/",
      raiseError: true,
      raiseInfo: true,
      needsToken: true,
    });
  }

  get(id) {
    return this.httpService.get(`${id}`);
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

const PrioritiesService = new PrioritiesServiceProvider();

export default PrioritiesService;
