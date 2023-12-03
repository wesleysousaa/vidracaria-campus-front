import { Grid, List, Typography, Button } from '@mui/material/';

import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MenuItem from './MenuItem';

import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import BuildOutlinedIcon from '@mui/icons-material/BuildOutlined';

export default function Menu() {
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
        <MenuItem
          Icon={DashboardOutlinedIcon}
          label="RELATORIOS"
          path="/relatorios"
        />

        <MenuItem
          Icon={AccountCircleOutlinedIcon}
          label="CLIENTES"
          path="/clientes"
        />

        <MenuItem Icon={BuildOutlinedIcon} label="SERVÇOS" path="/servicos" />

        <MenuItem
          Icon={ShoppingCartOutlinedIcon}
          label="PRODUTOS"
          path="/produtos"
        />
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
