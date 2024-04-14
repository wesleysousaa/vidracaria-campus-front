import { Box, Button, Typography } from '@mui/material';
import { Link, createLazyFileRoute } from '@tanstack/react-router';
import Table from '../../../../features/Customers/Table';
import { boxStylesForm } from '../../../../features/Customers/styles';
import { mainStyles } from '../../../../features/Dashboard/styles';

function Customers() {
  return (
    <Box sx={mainStyles} component={'main'}>
      <Box sx={boxStylesForm}>
        <Typography variant="h4" fontWeight={'bold'}>
          Clientes
        </Typography>

        <Link to="/customers/add">
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
