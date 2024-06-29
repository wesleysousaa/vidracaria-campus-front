import { Box, Breadcrumbs, Link, Typography } from '@mui/material';

function GetLocationBreadcrumb() {
  const locationArr = window.location.pathname
    .split('/')
    .filter((location) => location.length > 0);

  return (
    <Breadcrumbs
      aria-label="breadcrumb"
      separator=">"
      sx={{
        fontSize: '1rem',
        marginBottom: '5rem',
        marginTop: '1rem',
      }}
    >
      {locationArr.map((location, key) =>
        locationArr.length - 1 === key ? (
          <Typography
            key={key}
            sx={{
              fontWeight: 'bold',
              fontSize: '1rem',
            }}
            color={'black'}
          >{`${location[0].toUpperCase()}${location.slice(1, location.length)}`}</Typography>
        ) : (
          <Box key={key}>
            {location === 'edit' || location === 'add' ? (
              <Typography
                key={key}
                sx={{
                  fontSize: '1rem',
                }}
                color="grey"
              >{`${location[0].toUpperCase()}${location.slice(1, location.length)}`}</Typography>
            ) : (
              <Link
                key={key}
                href={`/${location}`}
                underline="hover"
                color="grey"
              >{`${location[0].toUpperCase()}${location.slice(1, location.length)}`}</Link>
            )}
          </Box>
        ),
      )}
    </Breadcrumbs>
  );
}

export default GetLocationBreadcrumb;
