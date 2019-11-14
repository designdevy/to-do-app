import React from "react";
import LeftMenu from "./LeftMenu";
import MenuButton from "./MenuButton";
import { Drawer, Grow, Button } from "@material-ui/core";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useGlobalState } from "../App";
import Chart from "./Chart";
import { Link } from "react-router-dom";

import { withStyles } from "@material-ui/core/styles";

import { styles } from "./MockStyles";

export default withStyles(styles)(function Mock2({ classes }) {
  const { menuOpen, toDos, checked } = useGlobalState();
  const matches = useMediaQuery("(min-width:600px)");

  return (
    <div className={classes.mobileFirst}>
      <Drawer open={menuOpen || matches}>
        <LeftMenu pressed="2" />
      </Drawer>
      <header className={classes.headerMobile}>
        <div className={classes.headerBg}></div>
        <MenuButton className={classes.menuMobileFirst} />
      </header>
      <Chart toDos={toDos} checked={checked} window="mobile" />
      <Grow
        in={!matches}
        style={{ transformOrigin: "0 0 0" }}
        {...(!matches ? { timeout: 3000 } : {})}
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
});
