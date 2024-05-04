import { Box, Typography } from '@mui/material';
import { createLazyFileRoute } from '@tanstack/react-router';
import AddButton from '../../../../components/AddButton';
import Table from '../../../../features/Customers/Table';
import { mainStyles } from '../../../../features/Dashboard/styles';
import { headerBoxStyles } from '../../../../styles';

function Customers() {
  return (
    <Box sx={mainStyles} component={'main'}>
      <Box sx={headerBoxStyles}>
        <Typography variant="h3" fontWeight={'bold'}>
          Clientes
        </Typography>

        <AddButton link="/customers/add" />
      </Box>
      <Table />
    </Box>
  );
}

export const Route = createLazyFileRoute('/_authenticated/_layout/customers/')({
  component: Customers,
});
