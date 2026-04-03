import Grid from "@mui/material/Grid";
import classes from "./Styles/SideBar.module.css";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ReceiptIcon from "@mui/icons-material/Receipt";
import InsightsIcon from "@mui/icons-material/Insights";
import { Link } from "react-router-dom";
export default function SideBar() {
  return (
    <Grid container className={classes.sideBarContainer}>
      <Grid size={{ xs: 12, md: 12 }}>
        <div className={classes.flexContainer}>
          <h2 className={classes.nameText}>ZORVYN</h2>
          <p className={classes.titleText}>Finance Dashboard</p>
        </div>
        <div>
          <nav>
            <List>
              <ListItem disablePadding>
                <ListItemButton component={Link} to="/">
                  <ListItemIcon>
                    <DashboardIcon sx={{ color: "white", minWidth: 50 }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Dashboard"
                    slotProps={{
                      primary: {
                        sx: { color: "white", fontSize: "1.2rem" },
                      },
                    }}
                  />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component={Link} to="/insight">
                  <ListItemIcon>
                    <InsightsIcon sx={{ color: "white", minWidth: 50 }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Insights"
                    slotProps={{
                      primary: {
                        sx: { color: "white", fontSize: "1.2rem" },
                      },
                    }}
                  />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component={Link} to="/transaction">
                  <ListItemIcon>
                    <ReceiptIcon sx={{ color: "white", minWidth: 50 }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Transactions"
                    slotProps={{
                      primary: {
                        sx: { color: "white", fontSize: "1.2rem" },
                      },
                    }}
                  />
                </ListItemButton>
              </ListItem>
            </List>
          </nav>
        </div>
      </Grid>
    </Grid>
  );
}
