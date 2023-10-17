import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.API_URL,
  timeout: 10_000,
  withCredentials: true,
});

export default axiosInstance;
