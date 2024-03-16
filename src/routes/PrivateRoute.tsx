import { Box } from '@mui/material';
import { Navigate, Outlet } from 'react-router-dom';
import Menu from '../components/Menu';
import isAuthenticated from './hooks/useIsAuthenticated';

export default function PrivateRoute() {
  return isAuthenticated() ? (
    <Box display={'flex'} flexDirection={'row'}>
      <Menu />
      <Outlet />
    </Box>
  ) : (
    <Navigate to="/" replace />
  );
}
