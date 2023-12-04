import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  SvgIconTypeMap,
} from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { NavLink, useLocation } from 'react-router-dom';
import {
  buttonStyle,
  buttonStyleActive,
  iconStyle,
  iconStyleActives,
  linkStyle,
  linkStyleActives,
} from '../menuStyles';

export default function MenuItem(props: {
  label: string;
  path: string;
  Icon: OverridableComponent<SvgIconTypeMap<object, 'svg'>> & {
    muiName: string;
  };
}) {
  const location = useLocation();

  const verifyLinkActive = (link: string) => {
    return location.pathname === link
      ? {
          linkStyle: linkStyleActives,
          iconStyle: iconStyleActives,
          buttonStyle: buttonStyleActive,
        }
      : { linkStyle, iconStyle, buttonStyle };
  };
  return (
    <NavLink to={props.path} style={verifyLinkActive(props.path).linkStyle}>
      <ListItemButton
        key={props.label}
        LinkComponent={NavLink}
        sx={verifyLinkActive(props.path).buttonStyle}
      >
        <ListItemIcon>
          <props.Icon sx={verifyLinkActive(props.path).iconStyle} />
        </ListItemIcon>
        <ListItemText primary={props.label} />
      </ListItemButton>
    </NavLink>
  );
}
