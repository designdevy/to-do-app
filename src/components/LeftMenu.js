import React from "react";
import { Button, Grid, IconButton } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import useMediaQuery from "@material-ui/core/useMediaQuery";

function handleClosingMenu() {
  window.GlobalState.set({ menuOpen: false });
}

const styles = {
  button: {
    margin: "5%",
    width: "90%"
  },
  menu: {
    display: "flex",
    flexDirection: "column",
    width: 250
  },
  link: {
    textDecoration: "none",
    color: "white"
  },
  icon: {
    justifyContent: "left"
  }
};

export default withStyles(styles)(function LeftMenu(props) {
  const { classes, pressed } = props;
  const matches = useMediaQuery("(min-width:600px)");

  return (
    <Grid item sm={2} className={classes.menu}>
      {!matches ? (
        <IconButton
          className={classes.icon}
          edge="end"
          aria-label="open drawer"
          onClick={() => handleClosingMenu()}
        >
          <ArrowBackIosIcon />
        </IconButton>
      ) : (
        <span />
      )}
      <Link to="/" className={classes.link}>
        <Button
          color="primary"
          variant={pressed === "1" ? "outlined" : "contained"}
          className={classes.button}
          onClick={() => handleClosingMenu()}
        >
          Page 1
        </Button>
      </Link>
      <Link to="/mock2" className={classes.link}>
        <Button
          color="primary"
          variant={pressed === "2" ? "outlined" : "contained"}
          className={classes.button}
          onClick={() => handleClosingMenu()}
        >
          Page 2
        </Button>
      </Link>
      <Link to="/todo" className={classes.link}>
        <Button
          color="primary"
          variant={pressed === "4" ? "outlined" : "contained"}
          className={classes.button}
          onClick={() => handleClosingMenu()}
        >
          TODO
        </Button>
      </Link>
      <Link to="/mock3" className={classes.link}>
        <Button
          color="primary"
          variant={pressed === "3" ? "outlined" : "contained"}
          className={classes.button}
          onClick={() => handleClosingMenu()}
        >
          Page 3
        </Button>
      </Link>
    </Grid>
  );
});
