import { Button, Grid, Typography } from '@mui/material/';
import { useEffect } from 'react';
import useIcons from '../../hooks/useIcons';
import { AuthContextActions } from '../../states/auth';
import LogoItem from './LogoItem';
import MenuListItem from './MenuListItem';
import { navStyles } from './menuStyles';

export default function Menu() {
  const { logout } = AuthContextActions();
  const { getIcons } = useIcons();
  const { LogoutOutlinedIcon } = getIcons();

  useEffect(() => console.log('OI'), []);

  return (
    <nav style={navStyles}>
      <LogoItem />
      <MenuListItem />
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
              onClick={() => logout()}
            >
              SAIR
            </Button>
          </Typography>
        </Grid>
      </Grid>
    </nav>
  );
}
