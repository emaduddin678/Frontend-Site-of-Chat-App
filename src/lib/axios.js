import axios from "axios";
import { serverApi } from "../../secretData.js";

const axiosInstance = axios.create({
  baseURL: `${serverApi}/api`,
  withCredentials: true,
});

export { axiosInstance };
