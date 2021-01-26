import api from "../../services/api";

export const getData = () => {
  return api.get();
};