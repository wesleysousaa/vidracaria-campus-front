import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from 'material-react-table';
import { useMemo, useState } from 'react';
import ConfirmAction from '../../../components/ConfirmAction';
import Modal from '../../../components/Modal';
import TableCellActions from '../../../components/TableCellActions';
import Loader from '../../Loader';
import { useGetAllProducts, useDeleteProductById } from '../services';
import { Box } from '@mui/material';
import { boxStyles } from '../../../styles';

export default function Table() {
  const allProducts = useGetAllProducts();
  const deleteProducts = useDeleteProductById();

  const [open, setOpen] = useState(false);

  const columns = useMemo<MRT_ColumnDef<any>[]>(
    () => [
      {
        accessorKey: 'name',
        header: 'Nome',
        enableHiding: true,
      },
      {
        accessorKey: 'unitOfMeasure',
        header: 'Unidade de Medida',
        enableHiding: true,
      },
      {
        accessorKey: 'category',
        header: 'Categoria',
        enableHiding: true,
      },
      {
        accessorKey: 'height',
        header: 'Altura',
        enableHiding: true,
      },
      {
        accessorKey: 'width',
        header: 'Largura',
        enableHiding: true,
      },
      {
        accessorKey: 'depth',
        header: 'Profundidade',
        enableHiding: true,
      },
      {
        accessorKey: 'price',
        header: 'Preço',
        enableHiding: true,
      },
      {
        accessorKey: 'actions',
        header: 'Ações',
        enableHiding: false,
        Cell: (options) => {
          return (
            <TableCellActions
              dispach={handleOpen}
              idObject={options.row.original.id as string}
            />
          );
        },
      },
    ],
    [],
  );

  const handleOpen = () => {
    setOpen(true);
    // deleteCustomer.mutate(idItem);
  };

  const handleDelete = () => {
    deleteProducts.mutate(deleteProducts.data);
    setOpen(false);
  };

  const table = useMaterialReactTable({
    columns,
    data: allProducts.data ?? [],
    enableColumnOrdering: true,
    enableGlobalFilter: false,
    enableDensityToggle: false,
  });

  if (allProducts.isLoading) return <Loader open={true} />;
  return (
    <>
      <Modal
        open={open}
        onCloseDispach={() => setOpen(false)}
        component={
          <ConfirmAction
            confirmDispach={handleDelete}
            denyDispach={() => setOpen(false)}
            text="A ação de exclusão não poderá ser desfeita."
          />
        }
      />
      <Box
        sx={{
          width: '100%',
        }}
      >
        <MaterialReactTable table={table} />
      </Box>
    </>
  );
}
