import { Bar } from '@antv/g2plot';
import { Box, Typography } from '@mui/material';
import { useEffect, useRef } from 'react';

interface propsBarChart {
  data: any[];
  title: string;
}

export default function BarChart(props: propsBarChart) {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      const config = {
        data: props.data,
        yField: 'item',
        xField: 'value',
        autoFit: true,
      };

      const chart = new Bar(chartRef.current, config);

      chart.render();

      return () => {
        chart.destroy();
      };
    }
  }, [props.data]);

  return (
    <Box
      sx={{
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        padding: '1em',
        borderRadius: '0.3em',
      }}
    >
      <Typography variant="h6" textAlign={'center'}>
        {props.title}
      </Typography>
      <div ref={chartRef}></div>
    </Box>
  );
}
