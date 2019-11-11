import React from "react";
import ListWithItems from './ListWithItems'
import { styles } from './StylesForToDo'
import {
  Paper,
  Typography,
  TextField,
  Button,
  IconButton,
  Grid,
  AppBar,
  Toolbar,
  Fab,
  Grow,
  Switch,
  FormControlLabel,
  FormControl,
  Drawer
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import CloseIcon from "@material-ui/icons/Close";
import SearchIcon from "@material-ui/icons/Search";
import MoreIcon from "@material-ui/icons/MoreVert";
import { withStyles } from "@material-ui/core/styles";
import LeftMenu from "./LeftMenu";
import Chart from './Chart'
import useMediaQuery from "@material-ui/core/useMediaQuery";

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
      <Grid container>
        <LeftMenu />
        <Grid item sm={6}>
          <Paper className={classes.paper}>
            <Typography variant="h4" align="center" gutterBottom>
              Tasks for today
            </Typography>
            <form onSubmit={handleCreate(toDos)} className={classes.form}>
              <TextField
                name="title"
                label="Task"
                value={title}
                onChange={handleChange}
                margin="normal"
              />
              <Button type="submit" color="primary" variant="contained">
                Add
              </Button>
            </form>
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
          </Paper>
        </Grid>
        <Grid item sm={4}>
          <Typography variant="h4" align="left" gutterBottom>You statistics for today</Typography>
          <Chart toDos={toDos} checked={checked} />
        </Grid>
      </Grid>
    );
  } else {
    return (
      <Grid container>
        <Drawer open={menuOpen}>
          <LeftMenu />
        </Drawer>
        <Grid item xs={12} sm={10}>
          <Typography
            variant="h5"
            align="center"
            className={classes.titleMobile}
            gutterBottom
          >
            Hello, User!
          </Typography>
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
            <Grow in={formOpen}>
              <form
                onSubmit={handleCreate(toDos, priority)}
                className={classes.form}
              >
                <TextField
                  name="title"
                  label="New task"
                  value={title}
                  onChange={handleChange}
                  margin="normal"
                  className={classes.textField}
                />

                <FormControl component="fieldset" className={classes.textField}>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={priority}
                        onChange={() => togglePriority(priority)}
                      />
                    }
                    label="High priority"
                    labelPlacement="end"
                  />
                </FormControl>
                <Grow
                  in={formOpen}
                  style={{ transformOrigin: "0 0 0" }}
                  {...(formOpen ? { timeout: 1000 } : {})}
                >
                  <Button
                    type="submit"
                    color="primary"
                    variant="contained"
                    className={classes.button}
                  >
                    Add
                  </Button>
                </Grow>
              </form>
            </Grow>
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
