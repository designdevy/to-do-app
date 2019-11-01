import React from "react";
import { useGlobalState } from "../App";
import MenuIcon from "@material-ui/icons/Menu";
import { Typography, IconButton, AppBar, Toolbar } from "@material-ui/core";

function handleOpeningMenu(menuOpen) {
  window.GlobalState.set({ menuOpen: !menuOpen });
}

export default function TopMenu() {
  const { menuOpen } = useGlobalState();

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={() => handleOpeningMenu(menuOpen)}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6">Application for DUODEKA</Typography>
      </Toolbar>
    </AppBar>
  );
}
