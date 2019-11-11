import React from "react";
import TopMenu from "./TopMenu";
import LeftMenu from "./LeftMenu";
import BottomBar from "./BottomBar";
import MenuButton from "./MenuButton";
import { Grid, Paper, Typography, Drawer } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useGlobalState } from "../App";

import { withStyles } from "@material-ui/core/styles";

const styles = {
  paper: { margin: "auto", padding: 20, maxWidth: 550 },
  root: {
    flexGrow: 1,
    padding: 25
  }
};

export default withStyles(styles)(function Mock3({ classes }) {
  const {
    menuOpen
  } = useGlobalState();
  const matches = useMediaQuery("(min-width:600px)");

  return (
    <div className={matches ? classes.root : classes.mobile}>
      {matches ? <TopMenu /> : <MenuButton />}
      <Grid container>
        <Drawer open={menuOpen || matches}>
          <LeftMenu />
        </Drawer>
        <Grid item xs={12} sm={10}>
          <Paper className={classes.paper}>
            <Typography variant="h4" align="center" gutterBottom>
              That is also not the page with ToDos!
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
              ac consectetur ac, vestibulum at eros. Praesent commodo cursus
              magna, vel scelerisque nisl consectetur et. Cras mattis
              consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
              facilisis in, egestas eget quam. Morbi leo risus, porta ac
              consectetur ac, vestibulum at eros. Praesent commodo cursus magna,
              vel scelerisque nisl consectetur et. Cras mattis consectetur purus
              sit amet fermentum.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
      <BottomBar />
    </div>
  );
});
