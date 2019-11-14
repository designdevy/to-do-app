import React from "react";
import { Typography, AppBar, Toolbar } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  topBar: {
    backgroundImage: "linear-gradient(#6675D5, #133FAC)"
  },
  text: {
    // fontFamily: "'Bebas Neue', cursive",
  }
}

export default withStyles(styles)(function TopMenu({ classes }) {
    return (
    <AppBar position="static" className={classes.topBar}>
      <Toolbar>
        <Typography variant="h6" className={classes.text}>Application for DUODEKA</Typography>
      </Toolbar>
    </AppBar>
  );
})
