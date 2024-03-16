import { CSSProperties } from 'react';

export const boxStyles: CSSProperties = {
  width: '80vw',
  height: 'max-content',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  backgroundColor: '#fff',
  boxShadow: '0px 4px 15px 0px rgba(0,0,0,0.1)',
  borderRadius: '0.4em',
  alignSelf: 'center',
  marginLeft: '2em',
  padding: '1em',
};

export const boxStylesForm: CSSProperties = {
  display: 'flex',
  width: '100%',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: '3em',
};

export const formStyles: CSSProperties = {
  display: 'flex',
  width: '25em',
  height: '4em',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
};
