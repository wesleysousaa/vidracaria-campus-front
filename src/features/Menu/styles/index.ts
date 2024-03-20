import { CSSProperties as CSSPropertiesMui } from '@mui/styled-engine';
import { CSSProperties } from 'react';

export const linkStyle: CSSProperties = {
  textDecoration: 'none',
  color: 'var(--color-text)',
};

export const linkStyleActives: CSSProperties = {
  textDecoration: 'none',
  color: 'var(--primary)',
  fontWeight: 'bold',
};

export const iconStyle: CSSPropertiesMui = {
  textDecoration: 'none',
  color: 'var(--color-text)',
};

export const iconStyleActives: CSSPropertiesMui = {
  textDecoration: 'none',
  color: 'var(--primary)',
  fontWeight: 'bold',
};

export const buttonStyle: CSSPropertiesMui = {
  borderLeft: 'none',
};

export const buttonStyleActive: CSSPropertiesMui = {
  borderLeft: 'solid 5px #2196F3',
  backgroundColor: '#f5f5f5',
};

export const exitStyles: CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  minWidth: '100%',
  marginBottom: '20px',
};

export const navStyles: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  overflow: 'auto',
  minHeight: '100vh',
  position: 'fixed',
  boxShadow: '0px 4px 15px 0px rgba(0,0,0,0.1)',
  width: '250px',
};

export const headerStyles: CSSProperties = {
  minWidth: '250px',
  overflow: 'auto',
  minHeight: '100vh',
  position: 'relative',
};

export const navListStyles: CSSPropertiesMui = {
  width: '100%',
};
