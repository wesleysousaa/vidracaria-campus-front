import { Box } from '@mui/material';
import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from 'material-react-table';
import { useMemo } from 'react';
import TableCellActions from '../../../components/TableCellActions';
import { useDeleteServiceById, useGetAllServices } from '../services';
import { ServiceValidation, Status } from '../types';

const statusDictionary: { [key in Status]: string } = {
  ORCADO: 'Orçado',
  CONTRATADO_A_VISTA: 'Contratado à vista',
  CONTRATADO_A_PRAZO: 'Contratado a prazo',
  FINALIZADO: 'Finalizado',
};

function converterStatus(status: Status): string {
  return statusDictionary[status];
}

export default function Table() {
  const { data, isLoading } = useGetAllServices();
  const deleteServices = useDeleteServiceById();

  const columns = useMemo<MRT_ColumnDef<ServiceValidation>[]>(
    () => [
      {
        id: 'client',
        accessorKey: 'client',
        header: 'Cliente',
        enableHiding: true,
      },
      {
        id: 'deliveryForecast',
        accessorKey: 'deliveryForecast',
        header: 'Previsão de Entrega',
        enableHiding: true,
        Cell: ({ row }) => <>{row.original.deliveryForecast}</>,
      },
      {
        id: 'price',
        accessorKey: 'price',
        header: 'Preço',
        enableHiding: true,
        Cell: ({ row }) => (
          <>
            {row.original.price
              ? row.original.price.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })
              : 'Não informado'}
          </>
        ),
      },
      {
        id: 'status',
        accessorKey: 'status',
        header: 'Status',
        enableHiding: true,
        Cell: ({ row }) => <>{converterStatus(row.original.status)}</>,
      },
      {
        accessorKey: 'actions',
        header: 'Ações',
        enableHiding: false,
        Cell: ({ row }) => (
          <TableCellActions
            idObject={row.original.id as string}
            type="service"
            dispach={handleDelete}
            handleClick={() => {}}
          />
        ),
      },
    ],
    [],
  );

  const handleDelete = (id: string) => {
    deleteServices.mutate(id);
  };

  const table = useMaterialReactTable({
    columns,
    data: data ?? [],
    enableGlobalFilter: true,
    enableDensityToggle: false,
    muiTableContainerProps: {
      sx: {
        width: '100%',
      },
    },
    state: {
      isLoading,
    },
  });
  return (
    <Box>
      <MaterialReactTable table={table} />
    </Box>
  );
}
