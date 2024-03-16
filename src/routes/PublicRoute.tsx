import { Navigate, Outlet } from 'react-router-dom';
import isAuthenticated from './hooks/useIsAuthenticated';

export default function PublicRoute() {
  return isAuthenticated() ? <Navigate to="/relatorios" replace /> : <Outlet />;
}
