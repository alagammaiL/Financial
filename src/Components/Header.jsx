import { useLocation } from "react-router-dom";
import classes from "./Styles/Header.module.css";
import Grid from "@mui/material/Grid";
import NativeSelect from "@mui/material/NativeSelect";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { SharedContext } from "../Context/SharedContext";
import { useContext } from "react";
export default function Header() {
  const location = useLocation();
  const { role, handleRole } = useContext(SharedContext);

  return (
    <Grid container>
      <Grid size={{ xs: 12, md: 12 }}>
        <div className={classes.headerflexContainer}>
          <div className={classes.titleSize}>
            {location.pathname === "/"
              ? "Dashboard"
              : location.pathname.slice(1)}
          </div>
          <div className={classes.toggleflexContainer}>
            <div>
              <FormControl fullWidth>
                <InputLabel
                  variant="standard"
                  htmlFor="uncontrolled-native"
                  sx={{ fontSize: "1.5rem" }}
                >
                  Role
                </InputLabel>
                <NativeSelect
                  defaultValue={role}
                  inputProps={{
                    name: "user",
                    id: "uncontrolled-native",
                  }}
                  onChange={(e) => handleRole(e.target.value)}
                  sx={{ fontSize: "1.5rem" }}
                >
                  <option value={"admin"}>Admin</option>
                  <option value={"viewer"}>Viewer</option>
                </NativeSelect>
              </FormControl>
            </div>
            {/* <div>
              <FormControlLabel
                control={
                  <Switch
                    checked={mode === "light"}
                    onChange={(e) => handleMode(e.target.checked)}
                  />
                }
                color="primary"
              />
            </div> */}
          </div>
        </div>
      </Grid>
    </Grid>
  );
}
