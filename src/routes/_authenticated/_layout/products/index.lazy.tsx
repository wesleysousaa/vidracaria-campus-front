import { Box, Typography } from '@mui/material';
import { createLazyFileRoute } from '@tanstack/react-router';
import AddButton from '../../../../components/AddButton/index.tsx';
import { mainStyles } from '../../../../features/Dashboard/styles/index.ts';
import Table from '../../../../features/Products/Table/index.tsx';
import { headerBoxStyles } from '../../../../styles/index.ts';
import TableHeader from '../../../../components/TableHeader/TableHeader.tsx';

export const Route = createLazyFileRoute('/_authenticated/_layout/products/')({
  component: Products,
});

function Products() {
  return (
    <TableHeader
      title="Produtos"
      table={<Table />}
      rightActionComponent={<AddButton link="/products/add" />}
    />
  );
}
