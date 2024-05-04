import { Box, Typography } from '@mui/material';
import cartIcon from '../../assets/images/cart.webp';
import chartUpIcon from '../../assets/images/chart_up.webp';
import groupIcon from '../../assets/images/group.png';
import moneyIcon from '../../assets/images/money_icon.webp';
import { CardChart, LineChart } from './Charts';
import { boxCards, mainStyles } from './styles';

export default function Dashboard() {
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
          imgPath={moneyIcon}
          bgColor="#9650B9"
        />
        <CardChart
          fontColor="#fff"
          title="+ 4.5%"
          subtitle="Comparação com mês passado"
          imgPath={chartUpIcon}
          bgColor="#53AA6E"
        />
        <CardChart
          fontColor="#fff"
          title="38"
          subtitle="Serviços contratados (esse mês)"
          imgPath={cartIcon}
          bgColor="#2196F3"
        />
        <CardChart
          fontColor="#fff"
          title="55"
          subtitle="Clientes Novos (esse mês)"
          imgPath={groupIcon}
          bgColor="#EA5E0B"
        />
      </Box>
      <Box marginTop={5} display="flex">
        <LineChart data={lineChartData} title="Faturamento Mensal" />
      </Box>
    </Box>
  );
}
