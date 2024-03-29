import { List } from '@mui/material';
import useGetIcons from '../../../hooks/useGetIcons';
import { navListStyles } from '../styles';
import MenuItem from './MenuItem';

export default function MenuListItem() {
  const {
    AccountCircleOutlinedIcon,
    BuildOutlinedIcon,
    DashboardOutlinedIcon,
    ShoppingCartOutlinedIcon,
  } = useGetIcons();

  const menuItems = [
    {
      Icon: DashboardOutlinedIcon,
      label: 'RELATÓRIOS',
      path: '/dashboard',
    },
    {
      Icon: AccountCircleOutlinedIcon,
      label: 'CLIENTES',
      path: '/customers',
    },
    {
      Icon: BuildOutlinedIcon,
      label: 'SERVIÇOS',
      path: '/servicos',
    },
    {
      Icon: ShoppingCartOutlinedIcon,
      label: 'PRODUTOS',
      path: '/products',
    },
  ];

  return (
    <List sx={navListStyles}>
      {menuItems.map((item, index) => (
        <MenuItem
          key={index}
          Icon={item.Icon}
          label={item.label}
          path={item.path}
        />
      ))}
    </List>
  );
}
