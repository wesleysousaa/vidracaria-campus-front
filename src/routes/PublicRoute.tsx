import { Navigate, Outlet } from 'react-router-dom';
import { AuthContextActions } from '../states/auth/AuthContextActions';

export default function PublicRoute() {
  const { isAuthenticated, isValidToken, setIsAuthenticated } =
    AuthContextActions();

  //   useEffect(() => {
  //     if (isValidToken()) {
  //       setIsAuthenticated(true);
  //     } else {
  //       setIsAuthenticated(false);
  //     }
  //   }, []);

  return isAuthenticated ? <Navigate to="/relatorios" replace /> : <Outlet />;
}
