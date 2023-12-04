import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import BuildOutlinedIcon from '@mui/icons-material/BuildOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchIcon from '@mui/icons-material/Search';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import InfoIcon from '@mui/icons-material/Info';
export default function useIcons() {
  const icons = {
    LogoutOutlinedIcon,
    DashboardOutlinedIcon,
    AccountCircleOutlinedIcon,
    BuildOutlinedIcon,
    ShoppingCartOutlinedIcon,
    SearchIcon,
    DeleteIcon,
    EditIcon,
    InfoIcon,
  };

  const getIcon = (iconName: keyof typeof icons) => {
    return icons[iconName];
  };

  const getIcons = () => {
    return icons;
  };

  return { getIcon, getIcons };
}
