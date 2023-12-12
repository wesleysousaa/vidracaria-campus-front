import { Box, IconButton, Typography } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import useIcons from '../../../hooks/useIcons';
import { useClient } from '../../../hooks/useClient';
import { useEffect, useState } from 'react';
import { ClientValidation } from '../../../types';

export default function InfoClient() {
  const location = useLocation();
  const [item, setItem] = useState<ClientValidation>();
  const id = location.pathname.split('/')[3];
  const { getOne } = useClient();
  const { getIcons } = useIcons();
  const { EmailOutlinedIcon, LocalPhoneOutlinedIcon, ArrowBackIosIcon } =
    getIcons();

  useEffect(() => {
    async function fetch() {
      setItem(await getOne(id));
    }

    fetch();
  }, []);

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
          {item?.name}
        </Typography>
        <Typography variant="body2" fontWeight={'bold'} color={'GrayText'}>
          Pessoa {item?.customerType}
        </Typography>
        <Typography variant="body2" fontWeight={'bold'} color={'GrayText'}>
          {item?.cpf_cnpj}
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
            <LocalPhoneOutlinedIcon /> {item?.phone}{' '}
          </Typography>
          <Typography
            variant="body2"
            fontWeight={'bold'}
            color={'GrayText'}
            display={'flex'}
            alignItems={'center'}
            margin={'1em'}
          >
            <EmailOutlinedIcon /> {item?.email}
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
            {item?.address}{' '}
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
            {item?.zipCode}{' '}
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
            {item?.state}{' '}
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
            {item?.landmark}{' '}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
