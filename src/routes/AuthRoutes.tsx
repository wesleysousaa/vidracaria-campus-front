import { Box } from '@mui/material';
import { Navigate, Outlet } from 'react-router-dom';
import Menu from '../features/Menu';
import { isAuthenticated } from './utils/isAuthenticated';

export function PrivateRoute() {
  return isAuthenticated() ? (
    <Box display={'flex'} flexDirection={'row'} overflow={'hidden'}>
      <Menu />
      <Outlet />
    </Box>
  ) : (
    <Navigate to="/" replace />
  );
}

export function PublicRoute() {
  return isAuthenticated() ? <Navigate to="/dashboard" replace /> : <Outlet />;
}
