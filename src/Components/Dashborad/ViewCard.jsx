import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
export default function ViewCard() {
  const cards = [
    {
      title: "Total Balance",
      amount: "$12,500",
      id: 1,
      color: "rgba(0, 0, 0, 0.6)",
    },
    {
      title: "Total Income",
      amount: "$12,500",
      id: 2,
      color: "#449d90",
    },
    {
      title: "Total Expenses",
      amount: "$12,500",
      id: 3,
      color: "#c33824",
    },
  ];

  return (
    <Grid container>
      <Grid size={{ xs: 12, md: 12 }}>
        <Box
          sx={{
            width: "100%",
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fill, minmax(min(200px, 100%), 1fr))",
            gap: 9,
          }}
        >
          {cards.map((card) => (
            <Card key={card.id}>
              <CardContent sx={{ height: "100%" }}>
                <Typography
                  variant="h5"
                  component="div"
                  sx={{ fontSize: "1.3rem" }}
                >
                  {card.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ fontSize: "2.3rem", color: `${card.color}` }}
                >
                  {card.amount}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Grid>
    </Grid>
  );
}
