import { Box, Typography } from '@mui/material';
import { createLazyFileRoute } from '@tanstack/react-router';
import AddButton from '../../../../components/AddButton/index.tsx';
import { mainStyles } from '../../../../features/Dashboard/styles/index.ts';
import Table from '../../../../features/Products/Table/index.tsx';
import { headerBoxStyles } from '../../../../styles/index.ts';

export const Route = createLazyFileRoute('/_authenticated/_layout/products/')({
  component: Products,
});

function Products() {
  return (
    <Box sx={mainStyles} component={'main'}>
      <Box sx={headerBoxStyles}>
        <Typography variant="h4" fontWeight={'bold'}>
          Produtos
        </Typography>
        <AddButton link="/products/add" />
      </Box>
      <Table />
    </Box>
  );
}
