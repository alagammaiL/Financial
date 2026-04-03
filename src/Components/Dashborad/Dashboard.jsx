import Grid from "@mui/material/Grid";
import ViewCard from "./ViewCard";
import BalanceOverViewLineChart from "./BalanceOverViewLineChart";
import SpendingBreakdown from "./SpendingBreakdown";
export default function Dashboard() {
  return (
    <Grid container style={{ width: "100%", padding: "3rem" }} gap={4}>
      <Grid size={{ xs: 12, md: 12 }}>
        <ViewCard />
      </Grid>
      <Grid size={{ xs: 12, md: 12 }}>
        <BalanceOverViewLineChart />
      </Grid>
      <Grid size={{ xs: 12, md: 12 }}>
        <SpendingBreakdown />
      </Grid>
    </Grid>
  );
}
