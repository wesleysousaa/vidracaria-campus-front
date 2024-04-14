import { Box } from '@mui/material';
import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from 'material-react-table';
import { useMemo, useState } from 'react';
import Loader from '../../../components/Loader';
import TableCellActions from '../../../components/TableCellActions';
import ProducstInfoForm from '../ProductInfoForm';
import { useDeleteProductById, useGetAllProducts } from '../services';
import { ProductValidation } from '../types';

export default function Table() {
  const allProducts = useGetAllProducts();
  const deleteProducts = useDeleteProductById();
  const [open, setOpen] = useState(false);
  const [currentProduct, setCurrenProduct] = useState<
    ProductValidation | undefined
  >();

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
          return <>{options.row.original.unitOfMeasure}</>;
        },
      },
      {
        accessorKey: 'category',
        header: 'Categoria',
        enableHiding: true,
        Cell: (options) => {
          return <>{options.row.original.category}</>;
        },
      },
      {
        header: 'Dimensão A x L x P',
        enableHiding: true,
        Cell: (options) => {
          const item = options.row.original;
          return (
            <>
              {item.height} x {item.width} x {item.depth}
            </>
          );
        },
      },
      {
        accessorKey: 'price',
        header: 'Preço',
        enableHiding: true,
        Cell: (options) => {
          return (
            <>
              {options.row.original.price
                ? options.row.original.price?.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  })
                : 'Não informado'}
            </>
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
              idObject={options.row.original.id}
              type="product"
              dispach={handleDelete}
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

  const handleClick = (id: string) => {
    setOpen(true);
    setCurrenProduct(allProducts.data?.find((product) => product.id === id));
  };

  const table = useMaterialReactTable({
    columns,
    data: allProducts.data ?? [],
    enableGlobalFilter: true,
    enableDensityToggle: false,
    muiTableContainerProps: {
      sx: {
        width: '100%',
      },
    },
  });

  if (allProducts.isLoading) return <Loader open={true} />;
  return (
    <>
      <ProducstInfoForm
        open={open}
        onClose={() => setOpen(false)}
        product={currentProduct}
      />
      <Box>
        <MaterialReactTable table={table} />
      </Box>
    </>
  );
}
