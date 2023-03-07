import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Switch from '@material-ui/core/Switch';

export default function ButtonAppBar({change, check}) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar color="secondary" position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Dark Mode
          </Typography>
          <Switch
            defaultChecked
            color="default"
            inputProps={{ "aria-label": "checkbox with default color" }}
            onChange={change}
            checked={check}
          />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
