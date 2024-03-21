import { Box, Divider, IconButton } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import useGetIcons from '../../../hooks/useGetIcons';
import { useGetProductById } from '../services';
import { boxStyles } from '../../../styles';
import CustomLabel from '../../../components/CustomLabel/CustomLabel';

export default function ProducstInfoForm() {
  const { id } = useParams();
  const product = useGetProductById(id).data;
  const { ArrowBackIosIcon } = useGetIcons();

  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'flex-start'}
      alignItems={'center'}
      sx={{ width: '70%', marginLeft: '2em', backgroundColor: '#fff' }}
    >
      <Link
        to="/produtos"
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
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1em',
        }}
      >
        <h1>{product?.name as string}</h1>
        <Box
          sx={{
            display: 'flex',
            gap: '1em',
            justifyContent: 'space-between',
          }}
        >
          <CustomLabel title="Categoria" text={product?.category as string} />
          <CustomLabel
            title="Preço"
            text={
              product?.price?.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }) || ''
            }
          />
        </Box>
        <Divider />
        <Box
          sx={{
            display: 'flex',
            gap: '1em',
          }}
        >
          <CustomLabel
            title="Profundidade"
            text={product?.depth?.toString() as string}
          />
          <CustomLabel
            title="Largura"
            text={product?.width?.toString() as string}
          />
          <CustomLabel
            title="Altura"
            text={product?.height?.toString() as string}
          />
          <CustomLabel
            title="Unidade de medida"
            text={product?.unitOfMeasure?.toString() as string}
          />
        </Box>
      </Box>
    </Box>
  );
}
