import { createLazyFileRoute } from '@tanstack/react-router';
import AddButton from '../../../../components/AddButton';
import Table from '../../../../features/Customers/Table';
import TableHeader from '../../../../components/TableHeader/TableHeader';

function Customers() {
  return (
    <TableHeader
      rightActionComponent={<AddButton link="/customers/add" />}
      table={<Table />}
      title="Clientes"
    />
  );
}

export const Route = createLazyFileRoute('/_authenticated/_layout/customers/')({
  component: Customers,
});
