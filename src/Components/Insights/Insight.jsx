import Grid from "@mui/material/Grid";
import InsightCard from "./InsightCard";

const textMessage = {
  highestSpendingCategory: "Highest Spending Category",
  monthlyComparison: "This Month Spending",
  savingsInsight: "Savings Insight",
};
export default function Insight() {
  const rawdata = {
    highestSpendingCategory: "Food And Dining",
    monthlyComparison: "+15% increase in expenses",
    savingsInsight: "You saved 49% of your income",
  };
  const data = Object.keys(rawdata);
  return (
    <Grid
      container
      gap={5}
      sx={{
        padding: "4rem 3rem",
        alignItems: "center",
        justifyContent: "center",
        justifyItems: "center",
        alignContent: "center",
      }}
    >
      {data.map((item, index) => {
        return (
          <Grid size={{ xs: 12, md: 12 }} key={index}>
            <InsightCard textMessage={textMessage[item]} data={rawdata[item]} />
          </Grid>
        );
      })}
    </Grid>
  );
}
