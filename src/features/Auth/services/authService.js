import api from "../../../server/api";

const authService = {
  login: async ({ email, password }) => {
    const response = await api.post(`/auth/login`, {
      email,
      password,
    });
    const { token } = response.data;
    localStorage.setItem("access_token", token);
    return response.data;
  },

  register: async ({ name, email, password }) => {
    const response = await api.post(`/auth/register`, {
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
