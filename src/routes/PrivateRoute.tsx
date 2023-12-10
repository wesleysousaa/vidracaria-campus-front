import { useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContextActions } from '../states/auth/AuthContextActions';

export default function PrivateRoute() {
  const { isAuthenticated, isValidToken } = AuthContextActions();

  useEffect(() => {
    isValidToken();
  }, []);

  return isAuthenticated ? <Outlet /> : <Navigate to="/" replace />;
}
