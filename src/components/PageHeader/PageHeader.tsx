import { Box, Typography } from '@mui/material';
import { headerFormStyles } from '../../styles';
import ReturnButton from '../ReturnButton';
import GetLocationBreadcrumb from '../GetLocationBreadcrumb/GetLocationBreadcrumb';

interface PageHeaderProps {
  backTo: string;
  title: string;
}

export default function PageHeader({ backTo, title }: PageHeaderProps) {
  return (
    <>
      <GetLocationBreadcrumb />
      <Box style={headerFormStyles}>
        <ReturnButton link={backTo} />
        <Typography variant="h4" align="center">
          {title}
        </Typography>
      </Box>
    </>
  );
}
