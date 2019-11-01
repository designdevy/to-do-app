import React from "react";
import { Button, Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  button: {
    margin: 10
  },
  menu: {
    display: "flex",
    flexDirection: "column"
  }
};

export default withStyles(styles)(function LeftMenu(props) {
  const { classes } = props;

  return (
    <Grid item xs={2} className={classes.menu}>
      <Button color="primary" variant="contained" className={classes.button}>
        Page 1
      </Button>
      <Button color="primary" variant="contained" className={classes.button}>
        Page 2
      </Button>
      <Button color="primary" variant="contained" className={classes.button}>
        Page 3
      </Button>
      <Button color="primary" variant="contained" className={classes.button}>
        ToDos
      </Button>
    </Grid>
  );
});
