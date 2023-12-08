import { Navigate, Outlet } from 'react-router-dom';
import { AuthContextActions } from '../states/auth/AuthContextActions';

export default function PrivateRoute() {
  const { isAuthenticated, isValidToken, setIsAuthenticated } =
    AuthContextActions();

  // useEffect(() => {
  //   if (isValidToken()) {
  //     setIsAuthenticated(true);
  //   } else {
  //     setIsAuthenticated(false);
  //   }
  // }, []);

  return isAuthenticated ? <Outlet /> : <Navigate to="/" replace />;
}
