import { Button, Grid, Typography } from '@mui/material/';
import { useNavigate } from 'react-router-dom';
import useIcons from '../../hooks/useIcons';
import LogoItem from './LogoItem';
import MenuListItem from './MenuListItem';
import { navStyles } from './menuStyles';

export default function Menu() {
  const { getIcons } = useIcons();
  const navigate = useNavigate();
  const { LogoutOutlinedIcon } = getIcons();

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

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
