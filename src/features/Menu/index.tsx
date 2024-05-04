import { Box, Button, Drawer, IconButton } from '@mui/material/';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import queryClient from '../../config/queryClient';
import useGetIcons from '../../hooks/useGetIcons';
import LogoItem from './LogoItem';
import MenuListItem from './MenuListItem';
import { exitStyles, headerStyles, navStyles } from './styles';

function MenuDesktop() {
  const navigate = useNavigate();
  const { LogoutOutlinedIcon } = useGetIcons();

  const logout = () => {
    localStorage.removeItem('token');
    queryClient.clear();
    navigate('/');
  };

  return (
    <Box component={'header'} style={headerStyles}>
      <nav style={navStyles}>
        <section>
          <LogoItem />
          <MenuListItem />
        </section>
        <Box sx={exitStyles}>
          <Button
            variant="text"
            startIcon={<LogoutOutlinedIcon />}
            sx={{
              fontSize: '1.2em',
              textTransform: 'capitalize',
            }}
            onClick={() => logout()}
          >
            Sair
          </Button>
        </Box>
      </nav>
    </Box>
  );
}

function MenuMobile() {
  const { MenuOutlinedIcon } = useGetIcons();
  const [open, setOpen] = useState(false);

  return (
    <>
      <Drawer open={open} onClose={() => setOpen(!open)}>
        <MenuDesktop />
      </Drawer>
      <Box
        sx={{
          position: 'fixed',
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          height: '80px',
          borderBottom: '1px solid #ccc',
          backgroundColor: 'var(--background)',
        }}
      >
        <LogoItem />
        <IconButton onClick={() => setOpen(!open)}>
          {!open && <MenuOutlinedIcon />}
        </IconButton>
      </Box>
    </>
  );
}

export default function Menu() {
  return (
    <>
      <Box className="desktop">
        <MenuDesktop />
      </Box>
      <Box className="mobile">
        <MenuMobile />
      </Box>
    </>
  );
}
