import { Avatar, Box, Typography } from '@mui/material';
import { green } from '@mui/material/colors';
import { Status } from '../../types';
import { converterStatus } from '../../utils/converterStatus';

interface UserInfoProps {
  data: {
    client: string;
    deliveryForecast: string;
    address: string;
    status: Status;
  };
}

export default function UserInfo({ data }: UserInfoProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: '1rem',
      }}
    >
      <Avatar
        sx={{
          minWidth: 150,
          minHeight: 150,
          fontSize: '2rem',
          fontWeight: 'bold',
        }}
      >
        USER
      </Avatar>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '.5rem',
        }}
      >
        <Typography variant="h4">{data.client}</Typography>
        <Typography variant="h6">
          Previsão de entrega: {data.deliveryForecast}
        </Typography>
        <Typography variant="h6">Endereço: {data.address}</Typography>
        <Box
          sx={{
            bgcolor: green[500],
            color: 'white',
            padding: '0.5rem',
            width: '150px',
            textAlign: 'center',
            fontSize: '1.5rem',
            borderRadius: '0.5rem',
            fontWeight: 'bold',
          }}
        >
          {converterStatus(data.status).toUpperCase()}
        </Box>
      </Box>
    </Box>
  );
}
