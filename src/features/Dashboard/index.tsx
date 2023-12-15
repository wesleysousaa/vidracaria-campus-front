import { Box, Typography } from '@mui/material';
import { mainStyles, boxCards, secondBox } from './DashboardStyles';
import CardChart from '../../components/CardChart';

import BarChart from '../../components/BarChart';
import LineChart from '../../components/LineChart';

export default function Dashboard() {
  const dataBar = [
    { item: 'Vidro Temperado 300cm x 300cm', value: 30 },
    { item: 'Vidro 400cm x 800cm', value: 25 },
    { item: 'Kit para banheiro', value: 20 },
    { item: 'Box de banheiro', value: 40 },
  ];

  const lineChartData = [
    { date: '2023-01-01', month: 'Janeiro', value: 1500 },
    { date: '2023-02-01', month: 'Fevereiro', value: 1200 },
    { date: '2023-03-01', month: 'Março', value: 2100 },
    { date: '2023-04-01', month: 'Maio', value: 2100 },
    { date: '2023-05-01', month: 'Abril', value: 1100 },
    { date: '2023-06-01', month: 'Junho', value: 1600 },
    { date: '2023-07-01', month: 'Julho', value: 2000 },
  ];

  return (
    <Box sx={mainStyles} component={'main'}>
      <Typography variant="h4" fontWeight={'bold'}>
        Relatórios
      </Typography>
      <Box sx={boxCards}>
        <CardChart
          fontColor="#fff"
          title="R$ 2.300,25"
          subtitle="Faturamento Mês Atual"
          imgPath="/images/money_icon.png"
          bgColor="#9650B9"
        />
        <CardChart
          fontColor="#fff"
          title="+ 4.5%"
          subtitle="Comparação com mês passado"
          imgPath="/images/chart_up.png"
          bgColor="#53AA6E"
        />
        <CardChart
          fontColor="#fff"
          title="38"
          subtitle="Serviços contratados (esse mês)"
          imgPath="/images/cart.png"
          bgColor="#2196F3"
        />
        <CardChart
          fontColor="#fff"
          title="R$ 1.800,00"
          subtitle="Ganhos Líquidos"
          imgPath="/images/coin.png"
          bgColor="#EA5E0B"
        />
      </Box>
      {/* <Box
        sx={{
          display: 'flex',
          height: '400px',
          justifyContent: 'center',
        }}
      >
        <Bar data={data} options={options} />
      </Box> */}
      <Box>
        <LineChart data={lineChartData} title="Faturamento (durante messes)" />
      </Box>
      <Box sx={secondBox}>
        <Box
          sx={{
            width: '47%',
          }}
        >
          <BarChart data={dataBar} title="Produtos mais vendidos" />
        </Box>
        <Box
          sx={{
            width: '47%',
          }}
        >
          <BarChart data={dataBar} title="Produtos com baixa no estoque" />
        </Box>
      </Box>
    </Box>
  );
}
