import axios from 'axios';
import { getAuthToken } from "../session";

const apiClient = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/api`,
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use((config) => {
  const token = getAuthToken();
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

apiClient.interceptors.response.use(undefined, (error) => {
  if (error.response?.status === 401 && typeof window !== "undefined" && window.location.pathname !== "/login" && window.location.pathname !== "/register") {
    localStorage.removeItem("leadflow_token");
    sessionStorage.removeItem("leadflow_token");
    window.location.assign("/login");
  }
  return Promise.reject(error);
});

export default apiClient;
