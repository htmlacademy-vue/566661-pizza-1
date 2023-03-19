import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "/api",
});

axiosInstance.interceptors.response.use(
  (res) => res,
  (error) => {
    return Promise.resolve(error);
  }
);

export default axiosInstance;
