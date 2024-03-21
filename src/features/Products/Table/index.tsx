import { Box } from '@mui/material';
import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from 'material-react-table';
import { useMemo } from 'react';
import TableCellActions from '../../../components/TableCellActions';
import Loader from '../../Loader';
import { useDeleteProductById, useGetAllProducts } from '../services';

export default function Table() {
  const allProducts = useGetAllProducts();
  const deleteProducts = useDeleteProductById();

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
        Cell: (options) => {
          return (
            <strong>
              {options.row.original.price
                ? options.row.original.price?.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  })
                : 'Não informado'}
            </strong>
          );
        },
      },
      {
        accessorKey: 'actions',
        header: 'Ações',
        enableHiding: false,
        Cell: (options) => {
          return (
            <TableCellActions
              dispach={handleDelete}
              idObject={options.row.original.id as string}
            />
          );
        },
      },
    ],
    [],
  );

  const handleDelete = (id: string) => {
    deleteProducts.mutate(id);
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
    <Box
      sx={{
        width: '100%',
      }}
    >
      <MaterialReactTable table={table} />
    </Box>
  );
}
