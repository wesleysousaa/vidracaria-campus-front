import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import BuildOutlinedIcon from '@mui/icons-material/BuildOutlined';

export default function useIcons() {
  const icons = {
    LogoutOutlinedIcon,
    DashboardOutlinedIcon,
    AccountCircleOutlinedIcon,
    BuildOutlinedIcon,
  };

  const getIcon = (iconName: keyof typeof icons) => {
    return icons[iconName];
  };

  const getIcons = () => {
    return icons;
  };

  return { getIcon, getIcons };
}
