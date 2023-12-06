import { Box, IconButton, Typography } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import useIcons from '../../../hooks/useIcons';

export default function InfoClient() {
  const location = useLocation();
  const { getIcons } = useIcons();
  const { EmailOutlinedIcon, LocalPhoneOutlinedIcon, ArrowBackIosIcon } =
    getIcons();
  const mockData = [
    {
      id: '1',
      cep: '12345-678',
      city: 'Cidade Fictícia',
      cpfCnpj: '000.000.000-00',
      email: 'email@example.com',
      name: 'Nome Fictício',
      number: '123',
      phone: '(00) 00000-0000',
      state: 'PB',
      people: 'FÍSICA',
      street: 'Rua Fictícia',
      pointReference: 'Referência Fictícia',
    },
    {
      id: '2',
      cep: '12345-679',
      city: 'Cidade Fictícia 2',
      cpfCnpj: '111.111.111-11',
      email: 'email2@example.com',
      name: 'Nome Fictício 2',
      number: '456',
      phone: '(11) 11111-1111',
      state: 'PB',
      people: 'FÍSICA',
      street: 'Rua Fictícia 2',
      pointReference: 'Referência Fictícia 2',
    },
    {
      id: '3',
      cep: '12345-680',
      city: 'Cidade Fictícia 3',
      cpfCnpj: '222.222.222-22',
      email: 'email3@example.com',
      name: 'Nome Fictício 3',
      number: '789',
      phone: '(22) 22222-2222',
      state: 'PB',
      people: 'FÍSICA',
      street: 'Rua Fictícia 3',
      pointReference: 'Referência Fictícia 3',
    },
    {
      id: '4',
      cep: '12345-681',
      city: 'Cidade Fictícia 4',
      cpfCnpj: '333.333.333-33',
      email: 'email4@example.com',
      name: 'Nome Fictício 4',
      number: '987',
      phone: '(33) 33333-3333',
      state: 'PB',
      people: 'FÍSICA',
      street: 'Rua Fictícia 4',
      pointReference: 'Referência Fictícia 4',
    },
    {
      id: '5',
      cep: '12345-682',
      city: 'Cidade Fictícia 5',
      cpfCnpj: '444.444.444-44',
      email: 'email5@example.com',
      name: 'Nome Fictício 5',
      number: '654',
      phone: '(44) 44444-4444',
      state: 'PB',
      people: 'FÍSICA',
      street: 'Rua Fictícia 5',
      pointReference: 'Referência Fictícia 5',
    },
    {
      id: '6',
      cep: '12345-683',
      city: 'Cidade Fictícia 6',
      cpfCnpj: '555.555.555-55',
      email: 'email6@example.com',
      name: 'Nome Fictício 6',
      number: '321',
      phone: '(55) 55555-5555',
      state: 'PB',
      people: 'FÍSICA',
      street: 'Rua Fictícia 6',
      pointReference: 'Referência Fictícia 6',
    },
  ];

  const client = mockData.find(
    (item) => item.id === location.pathname.split('/')[3],
  );

  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'flex-start'}
      alignItems={'center'}
      sx={{ width: '70%', marginLeft: '2em', backgroundColor: '#fff' }}
    >
      <Link
        to="/clientes"
        style={{
          color: '#000',
          justifySelf: 'flex-start',
          alignSelf: 'flex-start',
          marginTop: '1em',
        }}
      >
        <IconButton aria-label="Voltar" color="inherit">
          <ArrowBackIosIcon />
          Voltar
        </IconButton>
      </Link>

      <Box
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'center'}
        alignItems={'center'}
        width={'50%'}
        marginTop={'3em'}
      >
        <img src="/images/user-icon.png" alt="user" style={{ width: '11em' }} />
        <Typography variant="h5" fontWeight={'bold'}>
          {client?.name}
        </Typography>
        <Typography variant="body2" fontWeight={'bold'} color={'GrayText'}>
          Pessoa {client?.people}
        </Typography>
        <Typography variant="body2" fontWeight={'bold'} color={'GrayText'}>
          {client?.cpfCnpj}
        </Typography>
      </Box>

      <Box
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'center'}
        alignItems={'center'}
        width={'30%'}
        borderTop={'1px solid #000'}
        marginTop={'1em'}
        padding={'0.5em'}
      >
        <Typography variant="body2" fontWeight={'bold'} color={'GrayText'}>
          Informações de Contato
        </Typography>
        <Box display={'flex'}>
          <Typography
            variant="body2"
            fontWeight={'bold'}
            color={'GrayText'}
            display={'flex'}
            alignItems={'center'}
            margin={'1em'}
          >
            <LocalPhoneOutlinedIcon /> {client?.phone}{' '}
          </Typography>
          <Typography
            variant="body2"
            fontWeight={'bold'}
            color={'GrayText'}
            display={'flex'}
            alignItems={'center'}
            margin={'1em'}
          >
            <EmailOutlinedIcon /> {client?.email}
          </Typography>
        </Box>
      </Box>

      <Box
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'center'}
        alignItems={'center'}
        width={'30%'}
        borderTop={'1px solid #000'}
        marginTop={'1em'}
        padding={'0.5em'}
      >
        <Typography variant="body2" fontWeight={'bold'} color={'GrayText'}>
          Endereço
        </Typography>
        <Box display={'flex'} flexDirection={'row'}>
          <Typography
            variant="body2"
            fontWeight={'bold'}
            color={'GrayText'}
            display={'flex'}
            textAlign={'center'}
            flexDirection={'column'}
            alignItems={'center'}
            margin={'1em'}
          >
            <span style={{ fontWeight: 'bold', color: '#000' }}>Rua</span>
            {client?.street}{' '}
          </Typography>
          <Typography
            variant="body2"
            fontWeight={'bold'}
            color={'GrayText'}
            display={'flex'}
            flexDirection={'column'}
            alignItems={'center'}
            textAlign={'center'}
            margin={'1em'}
          >
            <span style={{ fontWeight: 'bold', color: '#000' }}>CEP</span>
            {client?.cep}{' '}
          </Typography>
          <Typography
            variant="body2"
            fontWeight={'bold'}
            color={'GrayText'}
            display={'flex'}
            textAlign={'center'}
            flexDirection={'column'}
            alignItems={'center'}
            margin={'1em'}
          >
            <span style={{ fontWeight: 'bold', color: '#000' }}>Estado</span>
            {client?.state}{' '}
          </Typography>
          <Typography
            variant="body2"
            fontWeight={'bold'}
            color={'GrayText'}
            display={'flex'}
            textAlign={'center'}
            flexDirection={'column'}
            alignItems={'center'}
            justifyContent={'center'}
            margin={'1em'}
          >
            <span style={{ fontWeight: 'bold', color: '#000' }}>
              Referência
            </span>
            {client?.pointReference}{' '}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
