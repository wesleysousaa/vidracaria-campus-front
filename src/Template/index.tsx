import { Box } from '@mui/material';
import { lazy } from 'react';
import { Outlet } from 'react-router-dom';

const Menu = lazy(() => import('../components/Menu'));

export default function Layout() {
  return (
    <Box display={'flex'} flexDirection={'row'}>
      <Menu />
      <Outlet />
    </Box>
  );
}
