// Configuração da API
import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_URL,
});

export const config = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')?.split('"')[1]}`,
  },
};

export default api;
