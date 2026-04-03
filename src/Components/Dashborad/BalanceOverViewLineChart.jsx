import Grid from "@mui/material/Grid";
import classes from "./Styles/BalanceOverview.module.css";
import { LineChart } from "@mui/x-charts/LineChart";
export default function BalanceOverViewLineChart() {
  const chartData = [
    { date: "Apr 1", balance: 5000 },
    { date: "Apr 2", balance: 3800 },
    { date: "Apr 3", balance: 3000 },
    { date: "Apr 4", balance: 5000 },
    { date: "Apr 5", balance: 3500 },
    { date: "Apr 6", balance: 2800 },
    { date: "Apr 7", balance: 5800 },
    { date: "Apr 8", balance: 4900 },
  ];
  const date = chartData.map((item) => item.date);
  const balance = chartData.map((item) => item.balance);

  return (
    <Grid container>
      <Grid size={{ xs: 12, md: 12 }}>
        <p className={classes.title}>Balance Overview</p>
      </Grid>
      <Grid size={{ xs: 12, md: 12 }}>
        <LineChart
          xAxis={[{ scaleType: "point", data: date }]}
          series={[
            {
              data: balance,
              label: "Balance",
              area: true,
            },
          ]}
          height={300}
          grid={{ vertical: true, horizontal: true }}
        />
      </Grid>
    </Grid>
  );
}
