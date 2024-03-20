import { Box, IconButton } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import useGetIcons from '../../../hooks/useGetIcons';
import { useGetProductById } from '../services';

export default function ProducstInfoForm() {
  const { id } = useParams();
  const product = useGetProductById(id);
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
        to="/products"
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
    </Box>
  );
}
