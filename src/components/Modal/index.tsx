import { Modal as ModalMui } from '@mui/material/';
import { Dispatch, SetStateAction } from 'react';
import { modalStyles } from './styles';

interface ModalProps {
  open: boolean;
  onCloseDispach: Dispatch<SetStateAction<boolean>>;
  component: React.ReactNode;
}

export default function Modal(props: ModalProps) {
  return (
    <ModalMui open={props.open} onClose={props.onCloseDispach} sx={modalStyles}>
      <>{props.component}</>
    </ModalMui>
  );
}
