import { Box, Button, FormControl, Typography } from '@mui/material';
export default function DeleteClient(props: { name: string }) {
  return (
    <FormControl
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: 'fit-content',
        height: 'fit-content',
        backgroundColor: '#fff',
        padding: '1em',
        borderRadius: '0.3em',
      }}
    >
      <Typography variant="h4" marginBottom="1em">
        Tem certeza que deseja excuir{' '}
        <span style={{ color: '#4369e2' }}>{props.name}</span>?
      </Typography>
      <Box
        display={'flex'}
        flexDirection={'row'}
        justifyContent={'space-around'}
        width={'100%'}
      >
        <Button variant="contained" color="success">
          Não
        </Button>
        <Button variant="contained" color="error">
          Sim
        </Button>
      </Box>
    </FormControl>
  );
}
