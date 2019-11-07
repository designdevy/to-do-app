import React from "react";
import { Button, Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { useGlobalState } from "../App";
import useMediaQuery from '@material-ui/core/useMediaQuery';

const styles = {
  button: {
    margin: 10,
    width: "100%"
  },
  menu: {
    display: "flex",
    flexDirection: "column"
  },
  link: {
    textDecoration: "none",
    color: "white"
  }
};

export default withStyles(styles)(function LeftMenu(props) {
  const { classes } = props;
  const { menuOpen } = useGlobalState();
  const matches = useMediaQuery('(min-width:600px)');

  if (menuOpen || matches) {
    return (
      <Grid item xs={12} sm={2} className={classes.menu}>
        <Link to="/" className={classes.link}>
          <Button
            color="primary"
            variant="contained"
            className={classes.button}
          >
            Page 1
          </Button>
        </Link>
        <Link to="/mock2" className={classes.link}>
          <Button
            color="primary"
            variant="contained"
            className={classes.button}
          >
            Page 2
          </Button>
        </Link>
        <Link to="/mock3" className={classes.link}>
          <Button
            color="primary"
            variant="contained"
            className={classes.button}
          >
            Page 3
          </Button>
        </Link>
        <Link to="/todo" className={classes.link}>
          <Button
            color="primary"
            variant="contained"
            className={classes.button}
          >
            TODO
          </Button>
        </Link>
      </Grid>
    );
  } else {
    return <p/>
  }
});
