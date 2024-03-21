import { Box, Typography } from '@mui/material';

interface CustomLabelProps {
  title: string;
  text: string;
}

export default function CustomLabel({ text, title }: CustomLabelProps) {
  return (
    <Box>
      <Typography variant="caption">{title}</Typography>
      <Typography variant="h5">{text}</Typography>
    </Box>
  );
}
