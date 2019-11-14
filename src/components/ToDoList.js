import React from "react";
import ListWithItems from "./ListWithItems";
import { styles } from "./StylesForToDo";
import {
  Paper,
  Typography,
  IconButton,
  Grid,
  AppBar,
  Toolbar,
  Fab,
  Grow,
  Drawer
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import MenuButton from "./MenuButton";
import CloseIcon from "@material-ui/icons/Close";
import SearchIcon from "@material-ui/icons/Search";
import MoreIcon from "@material-ui/icons/MoreVert";
import { withStyles } from "@material-ui/core/styles";
import LeftMenu from "./LeftMenu";
import Chart from "./Chart";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import AddForm from "./AddForm";

function getCounterText(toDos, checked) {
  const counter = toDos.length - checked.length;

  if (counter === 1) {
    return `You have ${counter} task`;
  } else if (counter === 0) {
    return `You don't have tasks`;
  } else {
    return `You have ${counter} tasks`;
  }
}

export default withStyles(styles)(function ToDoList({
  classes,
  title,
  toDos,
  checked,
  formOpen,
  menuOpen,
  priority,
  titleEdited,
  handleChange,
  handleCreate,
  handleDelete,
  handleToggle,
  handleEdit,
  handleEditChange,
  handleStartEditing,
  handleOpenForm,
  togglePriority
}) {
  const matches = useMediaQuery("(min-width:600px)");
  if (matches) {
    return (
      <Grid container spacing={2} className={classes.todoGrid}>
        <LeftMenu pressed="4" />
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <Typography
              variant="h4"
              align="center"
              className={classes.headerText}
              gutterBottom
            >
              Tasks for today
            </Typography>

            <ListWithItems
              toDos={toDos}
              checked={checked}
              titleEdited={titleEdited}
              handleDelete={handleDelete}
              handleToggle={handleToggle}
              handleEdit={handleEdit}
              handleEditChange={handleEditChange}
              handleStartEditing={handleStartEditing}
            />

            {formOpen ? (<AddForm
              toDos={toDos}
              handleCreate={handleCreate}
              handleChange={handleChange}
              togglePriority={togglePriority}
              formOpen={formOpen}
              title={title}
              priority={priority}
            />) : (
              <Grow in={!formOpen}>
                <Fab
                  variant="extended"
                  color="primary"
                  aria-label="add"
                  className={classes.fabButtonWeb}
                  onClick={() => handleOpenForm(formOpen)}
                >
                  <AddIcon />
                  Add new task
                </Fab>
              </Grow>
            )}
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Chart toDos={toDos} checked={checked} window="desktop" />
        </Grid>
      </Grid>
    );
  } else {
    return (
      <Grid container>
        <Drawer open={menuOpen}>
          <LeftMenu pressed="4" />
        </Drawer>
        <Grid item xs={12} sm={10}>
          <header className={classes.headerMobile}>
            <div className={classes.headerBg}></div>
            <MenuButton className={classes.menuMobileFirst} />
          </header>
          <Paper className={classes.paperMobile}>
            <Typography
              variant="h6"
              align="center"
              className={classes.counterMobile}
            >
              {getCounterText(toDos, checked)}
            </Typography>
            <ListWithItems
              toDos={toDos}
              checked={checked}
              titleEdited={titleEdited}
              handleDelete={handleDelete}
              handleToggle={handleToggle}
              handleEdit={handleEdit}
              handleEditChange={handleEditChange}
              handleStartEditing={handleStartEditing}
            />
            <AddForm
              toDos={toDos}
              handleCreate={handleCreate}
              handleChange={handleChange}
              togglePriority={togglePriority}
              formOpen={formOpen}
              title={title}
              priority={priority}
            />
            <AppBar position="fixed" color="primary" className={classes.appBar}>
              <Toolbar>
                <Fab
                  color="secondary"
                  aria-label="add"
                  className={classes.fabButton}
                  onClick={() => handleOpenForm(formOpen)}
                >
                  {formOpen ? <CloseIcon /> : <AddIcon />}
                </Fab>
                <div className={classes.grow} />
                <IconButton edge="end" color="inherit">
                  <SearchIcon />
                </IconButton>
                <IconButton edge="end" color="inherit">
                  <MoreIcon />
                </IconButton>
              </Toolbar>
            </AppBar>
          </Paper>
        </Grid>
      </Grid>
    );
  }
});
