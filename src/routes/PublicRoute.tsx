import { Navigate, Outlet } from 'react-router-dom';
import { AuthContextActions } from '../states/auth/AuthContextActions';

export default function PublicRoute() {
  const { isAuthenticated } = AuthContextActions();

  return isAuthenticated ? <Navigate to="/relatorios" replace /> : <Outlet />;
}
