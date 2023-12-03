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
