import { CSSProperties as CSSPropertiesMui } from '@mui/styled-engine';
import { CSSProperties } from 'react';

export const linkStyle: CSSProperties = {
  textDecoration: 'none',
  color: '#000',
};

export const linkStyleActives: CSSProperties = {
  textDecoration: 'none',
  color: '#2196F3',
  fontWeight: 'bold',
};

export const iconStyle: CSSPropertiesMui = {
  textDecoration: 'none',
  color: '#000',
};

export const iconStyleActives: CSSPropertiesMui = {
  textDecoration: 'none',
  color: '#2196F3',
  fontWeight: 'bold',
};

export const buttonStyle: CSSPropertiesMui = {
  borderLeft: 'none',
};

export const buttonStyleActive: CSSPropertiesMui = {
  borderLeft: 'solid 5px #2196F3',
};

export const navStyles: CSSProperties = {
  width: '15%',
  boxShadow: '0px 4px 15px 0px rgba(0,0,0,0.1)',
  overflow: 'auto',
  height: '100vh',
};

export const navListStyles: CSSPropertiesMui = {
  width: '100%',
  height: '75%',
  boxShadow: '0px 4px 15px 0px rgba(0,0,0,0.1)',
  borderBottom: '1px solid #ccc',
  marginTop: '1em',
};
