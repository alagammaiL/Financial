import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import Grid from "@mui/material/Grid";
import Header from "./Header";
import Divider from "@mui/material/Divider";
import { SharedContext } from "../Context/SharedContext";
import { useContext } from "react";
export default function RootLayout() {
  const { modeTheme } = useContext(SharedContext);
  return (
    <Grid container>
      <Grid size={{ xs: 3, md: 2 }}>
        <SideBar />
      </Grid>

      <Grid
        size={{ xs: 9, md: 10 }}
        sx={{
          marginLeft: "240px",
          width: `calc(100% - 240px)`,
        }}
      >
        <Header />
        <Divider />
        <div style={{ ...modeTheme, height: "100vh" }}>
          <Outlet />
        </div>
      </Grid>
    </Grid>
  );
}
