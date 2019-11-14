import React from "react";
import { styles } from './StylesForToDo'
import {
  TextField,
  Button,
  Grow,
  Switch,
  FormControlLabel,
  FormControl
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

export default withStyles(styles)(function AddForm({
  classes,
  toDos,
  handleCreate,
  handleChange,
  togglePriority,
  formOpen,
  title,
  priority
}) {

  return ( <Grow in={formOpen}>
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
  </Grow>)
})