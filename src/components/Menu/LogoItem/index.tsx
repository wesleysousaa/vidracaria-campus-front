import { Grid, Typography } from '@mui/material';
import { memo } from 'react';

function LogoItem() {
  return (
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
          loading="lazy"
        />
      </Grid>

      <Grid item>
        <Typography variant="h5" textAlign={'center'}>
          Campos
        </Typography>
      </Grid>
    </Grid>
  );
}

export default memo(LogoItem);
