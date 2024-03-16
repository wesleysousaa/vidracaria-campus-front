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
import { useDeleteCustomerById, useGetAllCustomers } from '../services';
import { CustomerValidation } from '../types';

export default function Table() {
  const allCustomers = useGetAllCustomers();
  const deleteCustomer = useDeleteCustomerById();
  const [open, setOpen] = useState(false);

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
              dispach={handleOpen}
              idObject={options.row.original.id as string}
            />
          );
        },
      },
    ],
    [],
  );

  const handleOpen = (idItem: string) => {
    setOpen(true);
    deleteCustomer.mutate(idItem);
  };

  const handleDelete = () => {
    deleteCustomer.mutate(deleteCustomer.data);
    setOpen(false);
  };

  const table = useMaterialReactTable({
    columns,
    data: allCustomers.data ?? [],
    enableColumnOrdering: true,
    enableGlobalFilter: false,
    enableDensityToggle: false,
  });

  if (allCustomers.isLoading) return <Loader open={true} />;
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

      <MaterialReactTable table={table} />
    </>
  );
}
