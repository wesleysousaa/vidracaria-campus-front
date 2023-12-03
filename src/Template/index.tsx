import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Menu from '../components/Menu';

export default function Layout() {
  return (
    <Box display={'flex'} flexDirection={'row'}>
      <Menu />
      <Outlet />
    </Box>
  );
}
