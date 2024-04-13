import { Box, Button, Typography } from '@mui/material';
import { Link, createLazyFileRoute } from '@tanstack/react-router';
import { mainStyles } from '../../../features/Dashboard/styles/index.ts';
import Table from '../../../features/Products/Table/index.tsx';
import { boxStylesForm } from '../../../styles/index.ts';

export const Route = createLazyFileRoute('/_authenticated/_layout/products/')({
  component: Products,
});

function Products() {
  return (
    <Box sx={mainStyles} component={'main'}>
      <Box sx={boxStylesForm}>
        <Typography variant="h4" fontWeight={'bold'}>
          Produtos
        </Typography>

        <Link to="">
          <Button variant="contained" color="success">
            Novo Produto
          </Button>
        </Link>
      </Box>
      <Table />
    </Box>
  );
}
