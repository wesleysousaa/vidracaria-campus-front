import { Box } from '@mui/material';
import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from 'material-react-table';
import { useMemo, useState } from 'react';
import TableCellActions from '../../../components/TableCellActions';
import Loader from '../../Loader';
import ProducstInfoForm from '../ProductInfoForm';
import useProductSelectState from '../hooks/useProductSelectStates';
import { useDeleteProductById, useGetAllProducts } from '../services';

export default function Table() {
  const allProducts = useGetAllProducts();
  const deleteProducts = useDeleteProductById();
  const { translateCategory, translateUnitOfMeasure } = useProductSelectState();
  const [open, setOpen] = useState(false);
  const [currentId, setCurrentId] = useState<string>('' as string);

  const handleClick = (id: string) => {
    setOpen(true);
    setCurrentId(id);
  };

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
        Cell: (options) => {
          return (
            <>{translateUnitOfMeasure(options.row.original.unitOfMeasure)}</>
          );
        },
      },
      {
        accessorKey: 'category',
        header: 'Categoria',
        enableHiding: true,
        Cell: (options) => {
          return <>{translateCategory(options.row.original.category)}</>;
        },
      },
      {
        accessorKey: 'height',
        header: 'Altura',
        enableHiding: true,
        Cell: (options) => {
          return (
            <strong>
              {options.row.original.height == 0
                ? 'Não informada'
                : options.row.original.height}
            </strong>
          );
        },
      },
      {
        accessorKey: 'width',
        header: 'Largura',
        enableHiding: true,
        Cell: (options) => {
          return (
            <strong>
              {options.row.original.width == 0
                ? 'Não informada'
                : options.row.original.width}
            </strong>
          );
        },
      },
      {
        accessorKey: 'depth',
        header: 'Profundidade',
        enableHiding: true,
        Cell: (options) => {
          return (
            <strong>
              {options.row.original.depth == 0
                ? 'Não informada'
                : options.row.original.depth}
            </strong>
          );
        },
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
              idObject={options.row.original.id}
              handleClick={handleClick}
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
    <>
      <ProducstInfoForm
        open={open}
        onClose={() => setOpen(false)}
        id={currentId}
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
