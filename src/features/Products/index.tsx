import { Box, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { boxStylesForm } from '../../styles/index.ts';
import { mainStyles } from '../Dashboard/styles/index.ts';
import Table from './Table/index.tsx';

export default function Products() {
  return (
    <Box sx={mainStyles} component={'main'}>
      <Box sx={boxStylesForm}>
        <Typography variant="h4" fontWeight={'bold'}>
          Produtos
        </Typography>

        <Link to="add">
          <Button variant="contained" color="success">
            Novo Produto
          </Button>
        </Link>
      </Box>
      <Table />
    </Box>
  );
}
