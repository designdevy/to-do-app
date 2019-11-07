import React from "react";
import { useGlobalState } from "../App";
import MenuIcon from "@material-ui/icons/Menu";
import { IconButton } from "@material-ui/core";

function handleOpeningMenu(menuOpen) {
  window.GlobalState.set({ menuOpen: !menuOpen });
}

export default function TopMenu() {
  const { menuOpen } = useGlobalState();

    return (<IconButton
      edge="start"
      color="inherit"
      aria-label="menu"
      onClick={() => handleOpeningMenu(menuOpen)}
    > 
      <MenuIcon />
    </IconButton>)
  }