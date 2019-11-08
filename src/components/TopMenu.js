import React from "react";
import { Typography, AppBar, Toolbar } from "@material-ui/core";

export default function TopMenu() {
    return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">Application for DUODEKA</Typography>
      </Toolbar>
    </AppBar>
  );
}
