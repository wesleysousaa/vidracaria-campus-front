import { Box, Typography } from '@mui/material';
import { headerFormStyles } from '../../styles';
import ReturnButton from '../ReturnButton';

interface PageHeaderProps {
  backTo: string;
  title: string;
}

export default function PageHeader({ backTo, title }: PageHeaderProps) {
  return (
    <>
      <Box style={headerFormStyles}>
        <ReturnButton link={backTo} />
        <Typography variant="h4" align="center">
          {title}
        </Typography>
      </Box>
    </>
  );
}
