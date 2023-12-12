import { useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContextActions } from '../states/auth';

export default function PublicRoute() {
  const { isAuthenticated, isValidToken } = AuthContextActions();

  useEffect(() => {
    if (!isAuthenticated) {
      isValidToken();
    }
  }, [isAuthenticated]);

  return isAuthenticated ? <Navigate to="/relatorios" replace /> : <Outlet />;
}
