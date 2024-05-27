import { Box, Typography } from '@mui/material';
import { mainStyles } from '../../features/Dashboard/styles';
import { headerTablePageStyles } from '../../styles';
import { ReactNode } from '@tanstack/react-router';

interface TableHeaderProps {
  title: string;
  rightActionComponent: ReactNode;
  table: ReactNode;
}

export default function TableHeader({
  rightActionComponent,
  table,
  title,
}: TableHeaderProps) {
  return (
    <Box sx={mainStyles} component={'main'}>
      <Box sx={headerTablePageStyles}>
        <Typography variant="h4" fontWeight={'bold'}>
          {title}
        </Typography>
        {rightActionComponent}
      </Box>
      {table}
    </Box>
  );
}
