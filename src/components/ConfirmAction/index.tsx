import { Box, Button, Typography } from '@mui/material';

export function ConfirmAction(props: {
  confirmDispach: () => void;
  denyDispach: () => void;
}) {
  return (
    <Box
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
      width={'fit-content'}
      padding={'1em'}
      flexDirection={'column'}
      borderRadius={'0.3em'}
      sx={{
        backgroundColor: '#fff',
      }}
    >
      <Typography variant="h4">Tem certeza que deseja prossegir?</Typography>
      <Box
        display={'flex'}
        justifyContent={'center'}
        width={'100%'}
        margin={'1em'}
      >
        <Button
          variant="contained"
          onClick={props.confirmDispach}
          sx={{ marginRight: '1em' }}
          color="error"
        >
          Sim
        </Button>
        <Button
          variant="contained"
          onClick={props.denyDispach}
          sx={{ marginLeft: '1em' }}
          color="success"
        >
          Não
        </Button>
      </Box>
    </Box>
  );
}
