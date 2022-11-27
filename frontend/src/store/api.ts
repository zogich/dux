import axios from "axios";

const BASE_URL = (process.env.NODE_ENV === "production")
  ? process.env.APPLICATION_URL : "http://localhost:8000";

axios.defaults.baseURL = BASE_URL;
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.xsrfCookieName = 'csrftoken';

const api = axios.create({
  headers: { "Content-Type": "application/json" }
});

export default api