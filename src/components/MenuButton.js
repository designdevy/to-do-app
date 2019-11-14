import React from "react";
import { useGlobalState } from "../App";
import { withStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import { IconButton } from "@material-ui/core";

function handleOpeningMenu(menuOpen) {
  window.GlobalState.set({ menuOpen: !menuOpen });
}

const styles = {
  icon: {
    paddingLeft: 10
  }
}

export default withStyles(styles)(function MenuButton({classes}) {
  const { menuOpen } = useGlobalState();

  return (
        <IconButton
          edge="start"
          aria-label="open drawer"
          onClick={() => handleOpeningMenu(menuOpen)}
        >
          <MenuIcon className={classes.icon} htmlColor="#ffffff"/>
        </IconButton>
  );
})
