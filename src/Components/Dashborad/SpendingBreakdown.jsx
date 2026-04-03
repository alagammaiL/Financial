import Grid from "@mui/material/Grid";
import classes from "./Styles/BalanceOverview.module.css";
import { PieChart } from "@mui/x-charts/PieChart";
export default function SpendingBreakdown() {
  const rawdata = [
    { category: "Food", amount: 2100 },
    { category: "Transport", amount: 800 },
    { category: "Shopping", amount: 1500 },
    { category: "Bills", amount: 700 },
  ];
  const data = rawdata.map((item, index) => {
    return {
      id: index,
      value: item.amount,
      label: item.category,
    };
  });
  return (
    <Grid container gap={2}>
      <Grid size={{ xs: 12, md: 12 }}>
        <p className={classes.title}>Spending Breakdown</p>
      </Grid>
      <Grid size={{ xs: 12, md: 12 }}>
        <PieChart
          series={[
            {
              data,
              innerRadius: 60,
            },
          ]}
          height={300}
          slotProps={{
            legend: {
              direction: "column",
              position: { vertical: "middle", horizontal: "right" },
              style: { fontSize: "1.2rem" },
            },
            labels: {
              style: {
                fontSize: "1.2rem",
              },
            },
          }}
        />
      </Grid>
    </Grid>
  );
}
