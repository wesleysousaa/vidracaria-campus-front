import { Button } from '@mui/material';
import { Link } from '@tanstack/react-router';
import useGetIcons from '../../hooks/useGetIcons';

interface ReturnButtonProps {
  link: string;
}

export default function ReturnButton({ link }: ReturnButtonProps) {
  const { ArrowBackIosIcon } = useGetIcons();

  return (
    <Link to={link}>
      <Button
        aria-label="Voltar"
        color="inherit"
        sx={{ color: '#000', fontSize: '1rem' }}
      >
        <ArrowBackIosIcon />
        Voltar
      </Button>
    </Link>
  );
}
