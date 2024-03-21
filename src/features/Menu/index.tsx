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
  const { ArrowBackIosRoundedIcon, ArrowForwardIosRoundedIcon } = useGetIcons();
  const [open, setOpen] = useState(false);

  return (
    <>
      <Drawer open={open} onClose={() => setOpen(!open)}>
        <MenuDesktop />
      </Drawer>
      <IconButton onClick={() => setOpen(!open)}>
        <IconButton>
          {open ? <ArrowBackIosRoundedIcon /> : <ArrowForwardIosRoundedIcon />}
        </IconButton>
      </IconButton>
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
