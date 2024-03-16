import { Line } from '@antv/g2plot';
import { Box, Typography } from '@mui/material';
import { useEffect, useRef } from 'react';

interface propsLineChart {
  data: any[];
  title: string;
}

export default function LineChart(props: propsLineChart) {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      const config = {
        data: props.data.sort((a, b) => a.date - b.date),
        xField: 'date',
        yField: 'value',
        seriesField: 'month',
        yAxis: {
          grid: {
            line: {
              style: {
                lineWidth: 1,
              },
            },
          },
        },
        smooth: true,
        point: {
          shape: 'circle',
          size: 2,
          style: () => {
            return {
              fillOpacity: 1,
              stroke: 'transparent',
            };
          },
        },
        xAxis: {
          type: 'cat',
          label: {
            autoRotate: false,
          },
        },
        interactions: [{ type: 'marker-active' }, { type: 'brush' }],
      };

      const chart = new Line(chartRef.current, config);

      chart.render();

      return () => {
        chart.destroy();
      };
    }
  }, [props.data, props.title]);

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
