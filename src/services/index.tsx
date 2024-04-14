import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_URL,
});

export const config = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
};

export default api;
