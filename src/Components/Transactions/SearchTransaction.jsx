import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import Grid from "@mui/material/Grid";
export default function SearchTransaction() {
  const [filterOptions, setFilterOptions] = useState(null);
  function handleChange(e) {
    setFilterOptions(e.target.value);
  }
  return (
    <Grid container>
      <Grid size={{ xs: 12, md: 4 }}>
        <TextField
          placeholder="Search..."
          variant="outlined"
          fullWidth
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            },
          }}
        />
      </Grid>
      <Grid size={{ xs: 12, md: 2 }}>
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Filter</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={filterOptions}
              label="Filter"
              onChange={(e) => handleChange(e)}
            >
              <MenuItem value={"all"}>All</MenuItem>
              <MenuItem value={"income"}>Income</MenuItem>
              <MenuItem value={"expense"}>Expense</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>hello</Grid>
    </Grid>
  );
}
