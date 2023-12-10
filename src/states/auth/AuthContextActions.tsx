// AuthProvider.js
import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { useAuthUser, useValidatedToken } from '../../services/hooks/user';
import { UserValidation } from '../../types';
import { isAuthenticatedState } from './authState';

export const AuthContextActions = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] =
    useRecoilState(isAuthenticatedState);
  const authUser = useAuthUser();
  const authToken = useValidatedToken();
  const [isErrorMessage, setIsErrorMessage] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }
    if (authUser.isSuccess) {
      navigate('/relatorios');
    }
    if (authUser.isError) {
      setIsErrorMessage(true);
    }
  }, [authUser]);

  const login = useCallback((userData: UserValidation) => {
    authUser.mutate(userData);
  }, []);

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
    isAuthenticated,
    isErrorMessage,
    setIsAuthenticated,
    login,
    isValidToken,
    logout,
  };
};
