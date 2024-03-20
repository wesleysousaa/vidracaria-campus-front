import { Box, Button, IconButton, Typography } from '@mui/material';
import useGetIcons from '../../hooks/useGetIcons';

export default function ConfirmAction(props: {
  confirmDispach: () => void;
  denyDispach: () => void;
  text: string;
}) {
  const { CloseIcon } = useGetIcons();
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
      <Box
        display={'flex'}
        flexDirection={'row'}
        justifyContent={'space-between'}
        alignItems={'center'}
        width={'100%'}
        borderBottom={'1px solid #ccc'}
      >
        <Typography variant="h6">Confirmação de ação</Typography>
        <IconButton onClick={props.denyDispach}>
          <CloseIcon />
        </IconButton>
      </Box>
      <Typography
        variant="body1"
        sx={{
          marginTop: '1em',
          padding: '1em',
          borderRadius: '0.3em',
          backgroundColor: '#f5d9dd',
          color: 'red',
        }}
      >
        {props.text}
      </Typography>
      <Box
        display={'flex'}
        justifyContent={'flex-end'}
        width={'100%'}
        margin={'1em'}
        paddingTop={'1em'}
        sx={{
          borderTop: '1px solid #ccc',
        }}
      >
        <Button
          variant="text"
          onClick={props.denyDispach}
          sx={{ marginLeft: '1em' }}
          color="success"
        >
          Não
        </Button>
        <Button
          variant="contained"
          onClick={props.confirmDispach}
          sx={{ marginRight: '0.3em' }}
          color="error"
        >
          Sim
        </Button>
      </Box>
    </Box>
  );
}
