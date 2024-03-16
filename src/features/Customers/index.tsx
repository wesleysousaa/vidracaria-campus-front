import { Box, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import Table from './Table/index.tsx';
import { boxStyles, boxStylesForm } from './styles/index.ts';

export default function Customers() {
  return (
    <Box sx={boxStyles} component={'main'}>
      <Box sx={boxStylesForm}>
        <Typography variant="h4" fontWeight={'bold'}>
          Clientes
        </Typography>

        <Link to="add">
          <Button variant="contained" color="success">
            Novo Cliente
          </Button>
        </Link>
      </Box>
      <Table />
    </Box>
  );
}
