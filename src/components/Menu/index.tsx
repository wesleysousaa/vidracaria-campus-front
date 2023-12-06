import { Button, Grid, List, Typography } from '@mui/material/';
import { NavLink, useLocation } from 'react-router-dom';
import useIcons from '../../hooks/useIcons';
import MenuItem from './MenuItem';
import { navListStyles, navStyles } from './menuStyles';

export default function Menu() {
  const location = useLocation();
  const { getIcons } = useIcons();
  const {
    AccountCircleOutlinedIcon,
    BuildOutlinedIcon,
    DashboardOutlinedIcon,
    LogoutOutlinedIcon,
    ShoppingCartOutlinedIcon,
  } = getIcons();

  const showMenu = () => {
    return location.pathname !== '/';
  };

  // Ao criar um novo item no menu, adicionar aqui.
  const menuItems = [
    {
      Icon: DashboardOutlinedIcon,
      label: 'RELATÓRIOS',
      path: '/relatorios',
    },
    {
      Icon: AccountCircleOutlinedIcon,
      label: 'CLIENTES',
      path: '/clientes',
    },
    {
      Icon: BuildOutlinedIcon,
      label: 'SERVIÇOS',
      path: '/servicos',
    },
    {
      Icon: ShoppingCartOutlinedIcon,
      label: 'PRODUTOS',
      path: '/produtos',
    },
  ];

  return (
    <>
      {showMenu() && (
        <nav style={navStyles}>
          <Grid
            container
            spacing={2}
            alignItems={'center'}
            justifyContent={'center'}
            borderBottom={'1px solid #ccc'}
            boxShadow={'0px 4px 15px 0px rgba(0,0,0,0.1)'}
            padding={'2em'}
          >
            <Grid item>
              <img
                src="/images/logo-icon.png"
                alt="logo"
                style={{ maxWidth: '3em' }}
              />
            </Grid>

            <Grid item>
              <Typography variant="h5" textAlign={'center'}>
                Campos
              </Typography>
            </Grid>
          </Grid>

          <List sx={navListStyles}>
            {menuItems.map((item, index) => (
              <MenuItem
                key={index}
                Icon={item.Icon}
                label={item.label}
                path={item.path}
              />
            ))}
          </List>
          <NavLink to={'/'}>
            <Grid
              container
              spacing={2}
              alignItems={'center'}
              justifyContent={'center'}
              justifySelf={'flex-end'}
              alignSelf={'flex-end'}
              padding={'1em'}
            >
              <Grid item>
                <Typography variant="button" textAlign={'center'}>
                  <Button
                    variant="text"
                    startIcon={<LogoutOutlinedIcon />}
                    sx={{
                      fontSize: '1.2em',
                    }}
                  >
                    SAIR
                  </Button>
                </Typography>
              </Grid>
            </Grid>
          </NavLink>
        </nav>
      )}
    </>
  );
}
