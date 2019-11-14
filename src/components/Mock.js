import React from "react";
import LeftMenu from "./LeftMenu";
import MenuButton from "./MenuButton";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import Chart from "./Chart";
import { Link } from "react-router-dom";
import { Typography, Drawer, Zoom, Grow, Button } from "@material-ui/core";
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
        <div className={classes.topBarMain}>
          <Link to="/" className={classes.link}>
            <Button
              color="primary"
              variant="outlined"
              className={classes.button}
            >
              Main page
            </Button>
          </Link>
          <Link to="/mock2" className={classes.link}>
            <Button
              color="primary"
              variant="outlined"
              className={classes.button}
            >
              Empty Page
            </Button>
          </Link>
          <Link to="/todo" className={classes.link}>
            <Button
              color="primary"
              variant="outlined"
              className={classes.button}
            >
              TO DO app
            </Button>
          </Link>
          <Link to="/mock3" className={classes.link}>
            <Button
              color="primary"
              variant="outlined"
              className={classes.button}
            >
              Empty Page
            </Button>
          </Link>
        </div>
        <Zoom
          in={matches}
          style={{ transformOrigin: "0 0 0" }}
          {...(matches ? { timeout: 1000 } : {})}
        >
          <Typography variant="h1" align="center" className={classes.mainTitle}>
            Do your tasks together <br /> with ToDo App
          </Typography>
        </Zoom>
        <Link to="/todo" className={classes.link}>
          <Button
            variant="contained"
            position="center"
            size="medium"
            className={classes.gradientButtonDesktop}
          >
            Get Started
          </Button>
        </Link>
        <img
          src="https://i.etsystatic.com/isla/ce1028/31086850/isla_500x500.31086850_edi78g3d.jpg?version=0"
          alt="violet"
          className={classes.testImage}
        />
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
