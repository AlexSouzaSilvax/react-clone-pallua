import axios from "axios";

const api = axios.create({
  baseURL: "https://alex-api-cobranca.herokuapp.com"
});

export default api;