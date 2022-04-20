import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.1.19:9006",
});
export { api };
