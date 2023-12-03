import { NavLink, useLocation } from 'react-router-dom';
import {
  Grid,
  List,
  ListItemIcon,
  ListItemText,
  Typography,
  ListItemButton,
} from '@mui/material/';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import BuildOutlinedIcon from '@mui/icons-material/BuildOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {
  linkStyle,
  linkStyleActives,
  iconStyle,
  iconStyleActives,
  buttonStyle,
  buttonStyleActive,
} from './menuStyles';
import Button from '@mui/material/Button';
export default function Menu() {
  const location = useLocation();

  const verifyLinkActive = (link: string) => {
    return location.pathname === link
      ? {
          linkStyle: linkStyleActives,
          iconStyle: iconStyleActives,
          buttonStyle: buttonStyleActive,
        }
      : { linkStyle, iconStyle, buttonStyle };
  };

  return (
    <nav
      style={{
        width: '15%',
        height: '100vh',
        boxShadow: '6px 0px 15px -3px rgba(0,0,0,0.1)',
        overflow: 'auto',
      }}
    >
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
          <img src="logo-icon.png" alt="logo" style={{ maxWidth: '3em' }} />
        </Grid>

        <Grid item>
          <Typography variant="h5" textAlign={'center'}>
            Campos
          </Typography>
        </Grid>
      </Grid>

      <List
        sx={{
          width: '100%',
          height: '75%',
          boxShadow: '0px 4px 15px 0px rgba(0,0,0,0.1)',
          borderBottom: '1px solid #ccc',
          marginTop: '1em',
        }}
      >
        <NavLink
          to="/relatorios"
          style={verifyLinkActive('/relatorios').linkStyle}
        >
          <ListItemButton
            key="RELATÓRIOS"
            LinkComponent={NavLink}
            sx={verifyLinkActive('/relatorios').buttonStyle}
          >
            <ListItemIcon>
              <DashboardOutlinedIcon
                sx={verifyLinkActive('/relatorios').iconStyle}
              />
            </ListItemIcon>
            <ListItemText
              primary="
                  RELATÓRIOS"
            />
          </ListItemButton>
        </NavLink>
        <NavLink to="/clientes" style={verifyLinkActive('/clientes').linkStyle}>
          <ListItemButton
            key="CLIENTES"
            LinkComponent={NavLink}
            sx={verifyLinkActive('/clientes').buttonStyle}
          >
            <ListItemIcon>
              <AccountCircleOutlinedIcon
                sx={verifyLinkActive('/clientes').iconStyle}
              />
            </ListItemIcon>
            <ListItemText primary="CLIENTES" />
          </ListItemButton>
        </NavLink>
        <NavLink to="/servicos" style={verifyLinkActive('/servicos').linkStyle}>
          <ListItemButton
            key="SERVIÇOS"
            LinkComponent={NavLink}
            sx={verifyLinkActive('/servicos').buttonStyle}
          >
            <ListItemIcon>
              <BuildOutlinedIcon sx={verifyLinkActive('/servicos').iconStyle} />
            </ListItemIcon>
            <ListItemText
              primary="
                SERVIÇOS
              "
            />
          </ListItemButton>
        </NavLink>
        <NavLink to="/produtos" style={verifyLinkActive('/produtos').linkStyle}>
          <ListItemButton
            key="PRODUTOS"
            LinkComponent={NavLink}
            sx={verifyLinkActive('/produtos').buttonStyle}
          >
            <ListItemIcon>
              <ShoppingCartOutlinedIcon
                sx={verifyLinkActive('/produtos').iconStyle}
              />
            </ListItemIcon>
            <ListItemText primary="PRODUTOS" />
          </ListItemButton>
        </NavLink>
      </List>
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
    </nav>
  );
}
