const urlApi = "http://localhost:1337/api";

export default class Api {
  static getAllTasks() {
    return fetch(`${urlApi}/v1/tasks`, {
      mode: "cors",
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  }
  static generateRandomTask() {
    return fetch(`${urlApi}/v1/tasks/random-task-generator`, {
      mode: "cors",
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  }
}
