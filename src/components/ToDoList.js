import React from "react";
import {
  Paper,
  Typography,
  TextField,
  Button,
  Checkbox,
  List,
  ListItem,
  ListItemText,
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
  handleChange,
  handleCreate,
  handleDelete,
  handleToggle
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
              <ListItemText primary={title} />
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
