import { Box, Typography } from '@mui/material';
import { createLazyFileRoute } from '@tanstack/react-router';
import cartIcon from '../../../../assets/images/cart.webp';
import chartUpIcon from '../../../../assets/images/chart_up.webp';
import groupIcon from '../../../../assets/images/group.png';
import moneyIcon from '../../../../assets/images/money_icon.webp';
import Loader from '../../../../components/Loader';
import { CardChart, LineChart } from '../../../../features/Dashboard/Charts';
import { useChartsCounters } from '../../../../features/Dashboard/services';
import { boxCards, mainStyles } from '../../../../features/Dashboard/styles';
import useMask from '../../../../hooks/useMask';

function Dashboard() {
  const { data, isFetching } = useChartsCounters();
  const { realFormater, arrDateToDate, addPercent } = useMask();

  if (isFetching) return <Loader open />;

  return (
    <Box sx={mainStyles} component={'main'}>
      <Typography variant="h4" fontWeight={'bold'}>
        Relatórios
      </Typography>
      <Box sx={boxCards}>
        <CardChart
          fontColor="#fff"
          title={realFormater.format(data?.invoicing ?? 0)}
          subtitle="Faturamento Mês Atual"
          imgPath={moneyIcon}
          bgColor="#9650B9"
        />
        <CardChart
          fontColor="#fff"
          title={addPercent(data?.comparison ?? 0)}
          subtitle="Comparação com mês passado"
          imgPath={chartUpIcon}
          bgColor="#53AA6E"
        />
        <CardChart
          fontColor="#fff"
          title={String(data?.contractedServices ?? 0)}
          subtitle="Serviços contratados (esse mês)"
          imgPath={cartIcon}
          bgColor="#2196F3"
        />
        <CardChart
          fontColor="#fff"
          title={String(data?.newCustomers ?? 0)}
          subtitle="Clientes Novos (esse mês)"
          imgPath={groupIcon}
          bgColor="#EA5E0B"
        />
      </Box>
      <Box marginTop={5} display="flex">
        {data && (
          <LineChart
            data={data?.monthlyBillingDTOS.map((date) => {
              return {
                date: arrDateToDate(date.date),
                month: date.month,
                value: date.value,
              };
            })}
            title="Faturamento Mensal"
          />
        )}
      </Box>
    </Box>
  );
}

export const Route = createLazyFileRoute('/_authenticated/_layout/dashboard/')({
  component: Dashboard,
});
