import { Box, Button, Drawer, IconButton } from '@mui/material/';
import { useNavigate } from '@tanstack/react-router';
import { useState } from 'react';
import queryClient from '../../config/queryClient';
import useGetIcons from '../../hooks/useGetIcons';
import LogoItem from './LogoItem';
import MenuListItem from './MenuListItem';
import {
  colapsableButtonMenu,
  exitStyles,
  headerStyles,
  navStyles,
} from './styles';

function MenuDesktop() {
  const navigate = useNavigate();
  const { LogoutOutlinedIcon, MenuOpenRoundedIcon } = useGetIcons();
  const [colapsedMenu, setColapsedMenu] = useState(false);

  const logout = () => {
    localStorage.removeItem('token');
    queryClient.clear();
    navigate({ from: '/dashboard', to: '/' });
  };

  return (
    <Box
      component={'header'}
      style={{ ...headerStyles, width: colapsedMenu ? '60px' : '200px' }}
    >
      <nav style={{ ...navStyles, width: colapsedMenu ? '60px' : '200px' }}>
        <section>
          <LogoItem colapsed={colapsedMenu} />
          <MenuListItem colapsed={colapsedMenu} />
          <Button
            onClick={() => setColapsedMenu(!colapsedMenu)}
            variant="text"
            sx={colapsableButtonMenu}
          >
            <MenuOpenRoundedIcon />
            {!colapsedMenu && 'Amenizar Menu'}
          </Button>
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
            {!colapsedMenu && 'Sair'}
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
        <LogoItem colapsed={false} />
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
