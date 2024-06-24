import axios from 'axios';

const API_URL = '/api';

const api = axios.create({
  baseURL: API_URL,
});

export const authApi = {
  login: async (phonenumber, pin) => {
    return api.post('/auth/login', { phonenumber, pin });
  },
  register: async (phonenumber, pin) => {
    return api.post('/auth/register', { phonenumber, pin });
  },
  logout: async () => {
    return api.post('/auth/logout');
  },
  getUsers: async () => {
    return api.get('/users');
  },
  getBets: async () => {
    return api.get('/bets');
  },
};

export default api;