import { Box, Typography } from '@mui/material';
import { mainStyles, boxCards, secondBox } from './DashboardStyles';
import CardChart from '../../components/CardChart';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);
export default function Dashboard() {
  const data = {
    labels: ['Produto A', 'Produto B', 'Produto C', 'Produto D'],
    datasets: [
      {
        label: 'Vendas',
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(75,192,192,0.6)',
        hoverBorderColor: 'rgba(75,192,192,1)',
        data: [50, 30, 25, 20],
      },
    ],
  };

  const options = {
    indexAxis: 'y' as const,
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: 'right' as const,
      },
      title: {
        display: true,
        text: 'Produtos mais vendidos',
      },
    },
  };
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
      <Box
        sx={{
          display: 'flex',
          height: '400px',
          justifyContent: 'center',
        }}
      >
        <Bar data={data} options={options} />
      </Box>
      <Box sx={secondBox}>
        <Bar data={data} options={options} style={{ height: '20em' }} />
        <Bar data={data} options={options} style={{ height: '20em' }} />
      </Box>
    </Box>
  );
}
