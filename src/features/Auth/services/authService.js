import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const authService = {
  login: async ({ email, password }) => {
    const response = await axios.post(`${API_URL}/auth/login`, {
      email,
      password,
    });
    const { token } = response.data;
    localStorage.setItem("access_token", token);
    return response.data;
  },

  register: async ({ name, email, password }) => {
    const response = await axios.post(`${API_URL}/auth/register`, {
      name,
      email,
      password,
    });
    return response.data;
  },

  logout: () => {
    localStorage.removeItem("access_token");
  },
};

export default authService;
