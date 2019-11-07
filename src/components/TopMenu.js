import React from "react";
import { useGlobalState } from "../App";
import MenuIcon from "@material-ui/icons/Menu";
import { Typography, IconButton, AppBar, Toolbar } from "@material-ui/core";
import useMediaQuery from '@material-ui/core/useMediaQuery';

function handleOpeningMenu(menuOpen) {
  window.GlobalState.set({ menuOpen: !menuOpen });
}

export default function TopMenu() {
  const { menuOpen } = useGlobalState();
  const matches = useMediaQuery('(min-width:600px)');

  return (
    <AppBar position="static">
      <Toolbar>
        {!matches ? <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={() => handleOpeningMenu(menuOpen)}
        > 
          <MenuIcon />
        </IconButton> : <p/>}
        <Typography variant="h6">Application for DUODEKA</Typography>
      </Toolbar>
    </AppBar>
  );
}
