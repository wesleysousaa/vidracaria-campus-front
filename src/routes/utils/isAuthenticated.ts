import api from '../../services';

const verifyToken = async (token: string) => {
  if (token.length > 0) {
    await api
      .post(`/auth/isValidToken?token=${token}`)
      .then((res) => res.data)
      .catch(() => localStorage.clear());
  }
};

export const isAuthenticated = () => {
  const token = localStorage.getItem('token') || '';
  verifyToken(token);
  return token !== '';
};
