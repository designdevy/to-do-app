import React from "react";
import LeftMenu from "./LeftMenu";
import BottomBar from "./BottomBar";
import MenuButton from "./MenuButton";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Chart from "./Chart";
import { Link } from "react-router-dom";
import {
  Grid,
  Paper,
  Typography,
  Drawer,
  Zoom,
  Grow,
  Button
} from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useGlobalState } from "../App";
import { styles } from "./MockStyles";

import { withStyles } from "@material-ui/core/styles";

export default withStyles(styles)(function Mock({ classes }) {
  const { menuOpen, toDos, checked } = useGlobalState();
  const matches = useMediaQuery("(min-width:600px)");

  if (matches) {
    return (
      <div className={classes.root}>
        <header className={classes.header}>
          <div className={classes.headerBg}></div>
          <Zoom
            in={matches}
            style={{ transformOrigin: "0 0 0" }}
            {...(matches ? { timeout: 1000 } : {})}
          >
            <Typography
              variant="h2"
              align="left"
              className={classes.headerText}
            >
              Application for DUODEKA
            </Typography>
          </Zoom>
        </header>
        <Grid container>
          <LeftMenu pressed="1" />
          <Grid item xs={12} sm={10}>
            <Typography variant="h2" align="right" gutterBottom>
              Welkom to the application!
            </Typography>
            <Paper className={classes.paper}>
              <Typography
                variant="h4"
                align="center"
                color="primary"
                gutterBottom
              >
                Cras mattis consectetur purus!
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                Cras mattis consectetur purus sit amet fermentum. Cras justo
                odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                risus, porta ac consectetur ac, vestibulum at eros. Praesent
                commodo cursus magna, vel scelerisque nisl consectetur et. Cras
                mattis consectetur purus sit amet fermentum. Cras justo odio,
                dapibus ac facilisis in, egestas eget quam. Morbi leo risus,
                porta ac consectetur ac, vestibulum at eros. Praesent commodo
                cursus magna, vel scelerisque nisl consectetur et. Cras mattis
                consectetur purus sit amet fermentum.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
        <BottomBar />
      </div>
    );
  } else {
    return (
      <div className={classes.mobileFirst}>
        <Drawer open={menuOpen || matches}>
          <LeftMenu pressed="1" />
        </Drawer>
        <header className={classes.headerMobile}>
          <div className={classes.headerBg}></div>
          <MenuButton className={classes.menuMobileFirst} />
        </header>
        <Chart toDos={toDos} checked={checked} window="mobile" />
        <Grow
          in={!matches}
          style={{ transformOrigin: "0 0 0" }}
          {...(!matches ? { timeout: 5000 } : {})}
        >
          <Link to="/todo" className={classes.link}>
            <Button
              variant="contained"
              position="right"
              size="medium"
              className={classes.gradientButton}
            >
              Tasks
              <ArrowForwardIcon />
            </Button>
          </Link>
        </Grow>
      </div>
    );
  }
});
