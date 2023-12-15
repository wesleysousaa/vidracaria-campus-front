import { Box, IconButton, Typography } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import useGetIcons from '../../../hooks/useGetIcons';
import { useGetCustomerById } from '../../../services/hooks/Customer/customersv2';

export default function CustomerInfoForm() {
  const { id } = useParams();
  const customer = useGetCustomerById(id);
  const { EmailOutlinedIcon, LocalPhoneOutlinedIcon, ArrowBackIosIcon } =
    useGetIcons();

  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'flex-start'}
      alignItems={'center'}
      sx={{ width: '70%', marginLeft: '2em', backgroundColor: '#fff' }}
    >
      <Link
        to="/customers"
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
        <img
          src="/images/user-icon.webp"
          alt="user"
          style={{ width: '11em' }}
          loading="lazy"
        />
        <Typography variant="h5" fontWeight={'bold'}>
          {customer.data?.name}
        </Typography>
        <Typography variant="body2" fontWeight={'bold'} color={'GrayText'}>
          Pessoa {customer.data?.customerType}
        </Typography>
        <Typography variant="body2" fontWeight={'bold'} color={'GrayText'}>
          {customer.data?.cpfcnpj}
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
            <LocalPhoneOutlinedIcon /> {customer.data?.phone}
          </Typography>
          <Typography
            variant="body2"
            fontWeight={'bold'}
            color={'GrayText'}
            display={'flex'}
            alignItems={'center'}
            margin={'1em'}
          >
            <EmailOutlinedIcon /> {customer.data?.email}
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
            {customer.data?.address.address}{' '}
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
            {customer.data?.address.zipCode}{' '}
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
            {customer.data?.address.state}{' '}
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
            {customer.data?.address.landmark}{' '}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
