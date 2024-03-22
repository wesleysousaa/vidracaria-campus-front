import { Box, Divider, Modal, Typography } from '@mui/material';
import CloseButton from '../../../components/CloseButton';
import CustomLabel from '../../../components/CustomLabel';
import { modalStyles } from '../../../styles';
import Loader from '../../Loader';
import useProductSelectState from '../hooks/useProductSelectStates';
import { useGetProductById } from '../services';
import { modalHeaderStyles, productBoxInfoStyles } from './styles';

export interface ProductInfoFormProps {
  open: boolean;
  onClose: () => void;
  id: string;
}

export default function ProducstInfoForm({
  onClose,
  open,
  id,
}: ProductInfoFormProps) {
  const product = useGetProductById(id).data;
  const { translateUnitOfMeasure, translateCategory } = useProductSelectState();

  if (product === undefined) return <Loader open={true} />;

  return (
    <Modal open={open} onClose={onClose} sx={modalStyles}>
      <Box sx={productBoxInfoStyles}>
        <Box>
          <Box sx={modalHeaderStyles}>
            <CloseButton onClose={onClose} />
            <Typography variant="h5">{product.name}</Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              gap: '1em',
              justifyContent: 'space-between',
            }}
          >
            <CustomLabel
              title="Categoria"
              text={translateCategory(product.category)}
            />
            <CustomLabel
              title="Preço"
              text={
                product.price?.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }) || 'R$ 0,00'
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
              text={product.depth == 0 ? 'Não informada' : product.depth + ''}
            />
            <CustomLabel
              title="Largura"
              text={product.width == 0 ? 'Não informada' : product.width + ''}
            />
            <CustomLabel
              title="Altura"
              text={product.height == 0 ? 'Não informada' : product.height + ''}
            />
            <CustomLabel
              title="Unidade de medida"
              text={translateUnitOfMeasure(
                product?.unitOfMeasure?.toString() as string,
              )}
            />
          </Box>
        </Box>
      </Box>
    </Modal>
  );
}
