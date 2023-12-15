import { List } from '@mui/material';
import useIcons from '../../../hooks/useIcons';
import { navListStyles } from '../menuStyles';
import MenuItem from './MenuItem';

export default function MenuListItem() {
  const { getIcons } = useIcons();
  const {
    AccountCircleOutlinedIcon,
    BuildOutlinedIcon,
    DashboardOutlinedIcon,
    ShoppingCartOutlinedIcon,
  } = getIcons();

  // Ao criar um novo item no menu, adicionar aqui.
  const menuItems = [
    {
      Icon: DashboardOutlinedIcon,
      label: 'RELATÓRIOS',
      path: '/relatorios',
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
      path: '/produtos',
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
