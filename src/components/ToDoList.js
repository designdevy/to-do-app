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
  Grid
} from "@material-ui/core";
import Delete from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  paper: { margin: "auto", padding: 20, maxWidth: 550 },
  form: {
    display: "flex",
    alignItems: "baseline",
    justifyContent: "space-evenly"
  },
  image: { width: "100%", marginBottom: 15 }
};

export default withStyles(styles)(function ToDoList({
  classes,
  title,
  toDos,
  checked,
  titleEdited,
  handleChange,
  handleCreate,
  handleDelete,
  handleToggle,
  handleEdit,
  handleEditChange,
  handleStartEditing
}) {
  return (
    <Grid item xs={12} sm={10}>
      <Paper className={classes.paper}>
        <img className={classes.image} src="https://cdn.pixabay.com/photo/2017/06/05/10/15/landscape-2373649_960_720.jpg" alt="mountains" />
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
            <ListItem key={id} dense button onClick={handleToggle(id, checked)}>
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
                  onClick={() => handleDelete(id, toDos)}
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
});
