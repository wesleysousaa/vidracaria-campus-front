import { Navigate, Outlet } from 'react-router-dom';
import isAuthenticated from '../hooks/useIsAuthenticated';

export default function PrivateRoute() {
  return isAuthenticated() ? <Outlet /> : <Navigate to="/" replace />;
}
