interface ModalProps {
  open: boolean;
  onCloseDispach: Dispatch<SetStateAction<boolean>>;
  component: React.ReactNode;
}
import { Modal as ModalMui } from '@mui/material/';
import { modalStyles } from './modalStyles';
import { Dispatch, SetStateAction } from 'react';

export default function Modal(props: ModalProps) {
  return (
    <ModalMui open={props.open} onClose={props.onCloseDispach} sx={modalStyles}>
      <>{props.component}</>
    </ModalMui>
  );
}
