import { Box, Button, Typography } from '@mui/material';
import { Link, createLazyFileRoute } from '@tanstack/react-router';
import { boxStylesForm } from '../../../../features/Customers/CustomerCreateForm/styles';
import { mainStyles } from '../../../../features/Dashboard/styles';
import Table from '../../../../features/Products/Table';

function Customers() {
  return (
    <Box sx={mainStyles} component={'main'}>
      <Box sx={boxStylesForm}>
        <Typography variant="h4" fontWeight={'bold'}>
          Clientes
        </Typography>

        <Link to="">
          <Button variant="contained" color="success">
            Novo Cliente
          </Button>
        </Link>
      </Box>
      <Table />
    </Box>
  );
}

export const Route = createLazyFileRoute('/_authenticated/_layout/customers/')({
  component: Customers,
});
