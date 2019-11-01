import React from "react";
import {
  Paper,
  Typography,
  TextField,
  Button,
  Checkbox,
  List,
  ListItem,
  InputBase,
  ListItemIcon,
  ListItemSecondaryAction,
  IconButton,
  Grid
} from "@material-ui/core";
import Delete from "@material-ui/icons/Delete";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  paper: { margin: "auto", padding: 20, maxWidth: 450 },
  form: {
    display: "flex",
    alignItems: "baseline",
    justifyContent: "space-evenly"
  }
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
  handleEditChange
}) {
  return (
    <Grid item xs={10}>
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
            Add task
          </Button>
        </form>
        <List>
          {toDos.map(({ id, title }) => (
            <ListItem key={id} dense button onClick={handleToggle(id, checked)}>
              <ListItemIcon>
                <Checkbox edge="start" tabIndex={-1} disableRipple />
              </ListItemIcon>
              <form
                onSubmit={handleEdit(id, toDos, titleEdited.title)}
                className={classes.form}
              >
                <InputBase
                  name="title"
                  value={titleEdited.id === id ? titleEdited.title : title}
                  onChange={handleEditChange(id)}
                />
                {titleEdited.id === id ? <Button type="submit" color="primary" variant="outlined">
                  Edit
                </Button> : <p/>}
              </form>
              <ListItemSecondaryAction>
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
