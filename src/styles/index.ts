import { CSSProperties } from 'react';

export const boxStyles: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '80%',
  padding: '1em',
};

export const headerBoxStyles: CSSProperties = {
  display: 'flex',
  gap: '1em',
  padding: '10px',
  marginBottom: '1em',
};

export const headerTablePageStyles: CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  gap: '1em',
  padding: '10px',
  marginBottom: '1em',
};

export const headerFormStyles: CSSProperties = {
  display: 'flex',
  gap: '30%',
  marginBottom: '1rem',
};

export const formStyles: CSSProperties = {
  display: 'flex',
  background: 'white',
  padding: '1rem',
  borderRadius: '.5rem',
  flexDirection: 'column',
  // boxShadow: '0px 4px 15px 0px rgba(0,0,0,0.1)',
  margin: '1em',
  width: '80vw',
};

export const modalStyles: CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};
