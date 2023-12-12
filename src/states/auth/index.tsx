// AuthProvider.js
import { useRecoilState } from 'recoil';
import { useAuthUser, useValidatedToken } from '../../services/hooks/user';
import { UserValidation } from '../../types';
import { isAuthenticatedState } from './authState';

export const AuthContextActions = () => {
  const [isAuthenticated, setIsAuthenticated] =
    useRecoilState(isAuthenticatedState);
  const authUser = useAuthUser(setIsAuthenticated);
  const authToken = useValidatedToken(setIsAuthenticated);

  const login = (userData: UserValidation) => {
    authUser.mutate(userData);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
  };

  const isValidToken = () => {
    const token = localStorage.getItem('token');
    if (token) {
      authToken.mutate(JSON.parse(token));
    }
  };

  return {
    error: authUser.error,
    isAuthenticated,
    login,
    isValidToken,
    logout,
  };
};
