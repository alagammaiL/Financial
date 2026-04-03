import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import classes from "./Styles/ErrorComponent.module.css";
export default function ErrorComponent() {
  const navigate = useNavigate();
  return (
    <Grid container className={classes.errorContainer} sx={{ height: "100vh" }}>
      <Grid size={{ xs: 12, md: 12 }}>
        <div className={classes.alignmentFix}>
          <div>
            <p className={classes.notFoundText}>404 Page Not Found</p>
          </div>
          <div>
            <Button
              variant="contained"
              onClick={() => navigate("/")}
              sx={{
                backgroundColor: "#FF2E90",
                padding: "1.2rem",
                fontSize: "1.2rem ",
              }}
            >
              Back To Home
            </Button>
          </div>
        </div>
      </Grid>
    </Grid>
  );
}
