import React from "react";
import {
  Paper,
  Typography,
  TextField,
  Button,
  Checkbox,
  List,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  IconButton,
  Grid,
  AppBar,
  Toolbar,
  Fab,
  Divider,
  Grow,
  Switch,
  FormControlLabel,
  FormControl
} from "@material-ui/core";
import Delete from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import AddIcon from "@material-ui/icons/Add";
import CloseIcon from "@material-ui/icons/Close";
import SearchIcon from "@material-ui/icons/Search";
import MoreIcon from "@material-ui/icons/MoreVert";
import { withStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const styles = {
  paper: { margin: "auto", padding: 20, maxWidth: 550 },
  paperMobile: {
    width: "100%",
    minHeight: "90vh",
    borderTopLeftRadius: 30,
    backgroundColor: "white"
  },
  titleMobile: {
    color: "white"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "baseline",
    justifyContent: "space-evenly"
  },
  image: { width: "100%" },
  grow: {
    flexGrow: 1
  },
  appBar: {
    top: "auto",
    bottom: 0
  },
  fabButton: {
    position: "absolute",
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: "0 auto"
  },
  done: {
    textDecoration: "line-through",
    color: "gray"
  },
  greenDot: {
    height: 15,
    width: 15,
    backgroundColor: "green",
    borderRadius: "50%",
    display: "inline-block",
    marginRight: 10
  },
  orangeDot: {
    height: 15,
    width: 15,
    backgroundColor: "orange",
    borderRadius: "50%",
    display: "inline-block",
    marginRight: 10
  },
  button: {
    width: "80%",
    margin: "10px auto"
  },
  textField: {
    marginLeft: "10%"
  }
};

function getCounterText(toDos, checked) {
  const counter = toDos.length - checked.length;

  if (counter === 1) {
    return `You have ${counter} task for today`;
  } else if (counter === 0) {
    return `You don't have tasks for today`;
  } else {
    return `You have ${counter} tasks for today`;
  }
}

export default withStyles(styles)(function ToDoList({
  classes,
  title,
  toDos,
  checked,
  formOpen,
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
      <Grid item xs={12} sm={10}>
        <Paper className={classes.paper}>
          <img
            className={classes.image}
            src="https://cdn.pixabay.com/photo/2017/06/05/10/15/landscape-2373649_960_720.jpg"
            alt="mountains"
          />
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
          <List>
            {toDos.map(({ id, title }) => (
              <ListItem
                key={id}
                dense
                button
                onClick={handleToggle(id, checked)}
              >
                <ListItemIcon>
                  <Checkbox edge="start" tabIndex={-1} disableRipple />
                </ListItemIcon>
                {titleEdited.id === id ? (
                  <form
                    onSubmit={handleEdit(id, toDos, titleEdited.title)}
                    className={classes.form}
                  >
                    <TextField
                      name="title"
                      value={titleEdited.title}
                      onChange={handleEditChange(id)}
                    />
                  </form>
                ) : (
                  <Typography variant="subtitle1" gutterBottom>
                    {title}
                  </Typography>
                )}
                <ListItemSecondaryAction>
                  <IconButton
                    color="primary"
                    edge="end"
                    onClick={() => handleStartEditing(id, title)}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    color="primary"
                    edge="end"
                    onClick={() => handleDelete(id, toDos, checked)}
                  >
                    <Delete />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
        </Paper>
      </Grid>
    );
  } else {
    return (
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
          <Typography variant="h6" align="center">
            {getCounterText(toDos, checked)}
          </Typography>
          <List>
            {toDos.map(({ id, title, importance }) => (
              <div key={id}>
                <ListItem dense button onClick={handleToggle(id, checked)}>
                  {titleEdited.id === id ? (
                    <form
                      onSubmit={handleEdit(id, toDos, titleEdited.title)}
                      className={classes.form}
                    >
                      <TextField
                        name="title"
                        value={titleEdited.title}
                        onChange={handleEditChange(id)}
                      />
                    </form>
                  ) : (
                    <Typography
                      variant="subtitle1"
                      className={
                        checked.includes(id) ? classes.done : classes.toDo
                      }
                      gutterBottom
                    >
                      <span
                        className={
                          importance ? classes.orangeDot : classes.greenDot
                        }
                      ></span>
                      {title}
                    </Typography>
                  )}
                  <ListItemSecondaryAction>
                    <IconButton
                      color="primary"
                      edge="end"
                      onClick={() => handleStartEditing(id, title)}
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      color="primary"
                      edge="end"
                      onClick={() => handleDelete(id, toDos, checked)}
                    >
                      <Delete />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
                <Divider />
              </div>
            ))}
          </List>
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
                <Button type="submit" color="primary" variant="contained" className={classes.button}>
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
    );
  }
});
