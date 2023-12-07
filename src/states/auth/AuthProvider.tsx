// AuthProvider.js
import { useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { useAuthUser } from '../../services/hooks/user';
import { UserValidation } from '../../types';
import { isAuthenticatedState, userState } from './authState';

export const AuthContextActions = () => {
  const [isAuthenticated, setIsAuthenticated] =
    useRecoilState(isAuthenticatedState);
  const [user, setUser] = useRecoilState(userState);
  const authUser = useAuthUser();

  const login = useCallback((userData: UserValidation) => {
    // Lógica de autenticação aqui
    authUser.mutate(userData);
    console.log(authUser.isSuccess);
    if (authUser.isSuccess) {
      localStorage.setItem('token', authUser.data);
      setIsAuthenticated(true);
      setUser(userData);
      alert('Deu bom');
    } else {
      setIsAuthenticated(false);
      alert('Error');
    }
    // setUser(userData);
  }, []);

  const logout = () => {
    // Lógica de logout aqui
    localStorage.setItem('token', '');
    setIsAuthenticated(false);
    setUser(null);
  };

  return { isAuthenticated, user, login, logout };
};
