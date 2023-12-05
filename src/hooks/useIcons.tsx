import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import BuildOutlinedIcon from '@mui/icons-material/BuildOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import InfoIcon from '@mui/icons-material/Info';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

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
    ArrowBackIosIcon,
  };

  const getIcon = (iconName: keyof typeof icons) => {
    return icons[iconName];
  };

  const getIcons = () => {
    return icons;
  };

  return { getIcon, getIcons };
}
