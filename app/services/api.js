import axios from "axios";

let api = axios.create({
  baseURL: "https://my-json-server.typicode.com/megasuartika/fe-assignment/db",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export default api;
