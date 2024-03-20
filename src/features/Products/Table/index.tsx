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

export default function Table() {
  // const allCustomers = useGetAllCustomers();
  // const deleteCustomer = useDeleteCustomerById();
  const [open, setOpen] = useState(false);

  const columns = useMemo<MRT_ColumnDef<any>[]>(
    () => [
      {
        accessorKey: 'name',
        header: 'Nome',
        enableHiding: true,
      },
      {
        accessorKey: 'value',
        header: 'Preço',
        enableHiding: true,
      },
      {
        accessorKey: 'qtd',
        header: 'Quantidade',
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
    // deleteCustomer.mutate(idItem);
  };

  const handleDelete = () => {
    // deleteCustomer.mutate(deleteCustomer.data);
    setOpen(false);
  };

  const table = useMaterialReactTable({
    columns,
    data: [
      {
        name: 'Produto 1',
        value: 'R$ 10,00',
        qtd: '10',
      },
      {
        name: 'Produto 2',
        value: 'R$ 20,00',
        qtd: '20',
      },
      {
        name: 'Produto 3',
        value: 'R$ 30,00',
        qtd: '30',
      },
    ],
    enableColumnOrdering: true,
    enableGlobalFilter: false,
    enableDensityToggle: false,
  });

  // if (allCustomers.isLoading) return <Loader open={true} />;
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
