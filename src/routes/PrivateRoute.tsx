import { useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContextActions } from '../states/auth';

export default function PrivateRoute() {
  const { isAuthenticated, isValidToken } = AuthContextActions();

  useEffect(() => {
    if (isAuthenticated) {
      isValidToken();
    }
  }, [isAuthenticated]);

  return isAuthenticated ? <Outlet /> : <Navigate to="/" replace />;
}
