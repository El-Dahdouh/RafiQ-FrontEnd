import axios from "axios";
import { getDecryptedCookie, removeCookie } from "../utils/cookies";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: getDecryptedCookie("token")
      ? `Bearer ${getDecryptedCookie("token")}`
      : undefined,
  },
});

api.interceptors.request.use(
  (config) => {
    // Add authorization token to headers if available
    const token = getDecryptedCookie("token") || null;

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // Handle request errors
    return Promise.reject(error);
  }
);

// Function to handle response errors
const handleResponseError = (error, navigate) => {
  if (error.response && error.response.status === 401) {
    // Redirect to login page or refresh token logic
    removeCookie("user");
    removeCookie("token");

    navigate("/", {
      state: {
        resetToken: true,
      },
    });
  }
  return Promise.reject(error);
};

// Function to set up response interceptor with navigate
export const setupInterceptors = (navigate) => {
  api.interceptors.response.use(
    (response) => {
      // You can process the response before returning it
      return response;
    },
    (error) => handleResponseError(error, navigate)
  );
};

export default api;
