import { Button } from '@mui/material';
import { Link, useNavigate } from '@tanstack/react-router';

interface AddButtonProps {
  link: string;
}

export default function AddButton({ link }: AddButtonProps) {
  const navigate = useNavigate();

  return (
    <Link
      to={link}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textDecoration: 'none',
      }}
    >
      <Button
        aria-label="adicionar"
        variant="contained"
        color="success"
        sx={{
          height: '40px',
        }}
        onClick={() => navigate({ to: link })}
      >
        Adicionar
      </Button>
    </Link>
  );
}
