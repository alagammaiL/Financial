import Grid from "@mui/material/Grid";
import SearchTransaction from "./SearchTransaction";
export default function Transaction() {
  return (
    <Grid container style={{ padding: "4rem" }}>
      <Grid size={{ xs: 12, md: 12 }}>
        <SearchTransaction />
      </Grid>
    </Grid>
  );
}
