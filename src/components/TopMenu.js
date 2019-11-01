import React from "react";
import MenuIcon from '@material-ui/icons/Menu';
import {
  Typography,
  IconButton,
  AppBar,
  Toolbar
} from "@material-ui/core";

export default function TopMenu() {
 return (
 <AppBar position="static">
 <Toolbar>
   <IconButton
     edge="start"
     color="inherit"
     aria-label="menu"
   >
     <MenuIcon />
   </IconButton>
   <Typography variant="h6" >
     Application for DUODEKA
   </Typography>
 </Toolbar>
</AppBar>
 )
}