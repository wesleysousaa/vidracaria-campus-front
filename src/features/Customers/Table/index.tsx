import { Box } from '@mui/material';
import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from 'material-react-table';
import { useMemo, useState } from 'react';
import Loader from '../../../components/Loader';
import TableCellActions from '../../../components/TableCellActions';
import CustomerInfoForm from '../CustomerInfoForm';
import { useDeleteCustomerById, useGetAllCustomers } from '../services';
import { CustomerValidation } from '../types';

export default function Table() {
  const { data, isLoading } = useGetAllCustomers();
  const deleteCustomer = useDeleteCustomerById();
  const [open, setOpen] = useState(false);
  const [currentCustomer, setCurrentCustomer] = useState<
    CustomerValidation | undefined
  >();

  const handleClick = (id: string) => {
    setOpen(true);
    setCurrentCustomer(data?.find((customer) => customer.id === id));
  };

  const columns = useMemo<MRT_ColumnDef<CustomerValidation>[]>(
    () => [
      {
        accessorKey: 'name',
        header: 'Nome',
        enableHiding: true,
      },
      {
        accessorKey: 'email',
        header: 'Email',
        enableHiding: true,
      },
      {
        accessorKey: 'phone',
        header: 'Telefone',
        enableHiding: true,
      },
      {
        accessorKey: 'cpfcnpj',
        header: 'CPF/CNPJ (Se tiver)',
        enableHiding: true,
        Cell: (options) => {
          return <>{options.row.original.cpfcnpj}</>;
        },
      },
      {
        accessorKey: 'customerType',
        header: 'Tipo da Pessoa',
        enableHiding: true,
      },
      {
        accessorKey: 'address.address',
        header: 'Endereço',
        enableHiding: true,
      },
      {
        accessorKey: 'actions',
        header: 'Ações',
        enableHiding: false,
        Cell: (options) => {
          return (
            <TableCellActions
              idObject={options.row.original.id as string}
              type="customer"
              dispach={handleDelete}
              handleClick={handleClick}
            />
          );
        },
      },
    ],
    [],
  );

  const handleDelete = (idItem: string) => {
    deleteCustomer.mutate(idItem);
  };

  const table = useMaterialReactTable({
    columns,
    data: data || [],
    enableColumnOrdering: true,
    enableGlobalFilter: true,
    enableDensityToggle: false,
  });

  if (isLoading) return <Loader open={true} />;
  return (
    <>
      <CustomerInfoForm
        open={open}
        onClose={() => setOpen(false)}
        customer={currentCustomer}
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
