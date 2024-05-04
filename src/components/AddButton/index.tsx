import { Button } from '@mui/material';
import { Link, useNavigate } from '@tanstack/react-router';

interface AddButtonProps {
  link: string;
}

export default function AddButton({ link }: AddButtonProps) {
  const navigate = useNavigate();

  return (
    <Link to={link}>
      <Button
        aria-label="adicionar"
        variant="contained"
        color="success"
        sx={{ fontSize: '1.5rem' }}
        onClick={() => navigate({ to: link })}
      >
        Adicionar
      </Button>
    </Link>
  );
}
