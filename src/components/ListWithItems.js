import React from "react";
import { styles } from './StylesForToDo'
import {
  Typography,
  TextField,
  List,
  ListItem,
  ListItemSecondaryAction,
  IconButton,
  Divider,
} from "@material-ui/core";
import Delete from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { withStyles } from "@material-ui/core/styles";

export default withStyles(styles)(function ListWithItems({
  classes,
  toDos,
  checked,
  titleEdited,
  handleDelete,
  handleToggle,
  handleEdit,
  handleEditChange,
  handleStartEditing
}) {
  return (
    <List>
      {toDos.map(({ id, title, importance }) => (
        <div key={id}>
          <ListItem dense button onClick={handleToggle(id, checked)}>
            {titleEdited.id === id ? (
              <form
                onSubmit={handleEdit(id, toDos, titleEdited.title, checked)}
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
                variant="h6"
                className={checked.includes(id) ? classes.done : classes.toDo}
                gutterBottom
              >
                <span
                  className={importance ? classes.redDot : classes.greenDot}
                ></span>
                {title.length > 26 ? (title.slice(0, 27) + '...') : title}
              </Typography>
            )}
            <ListItemSecondaryAction>
              <IconButton
                className={classes.editIcon}
                edge="end"
                onClick={() => handleStartEditing(id, title)}
              >
                <EditIcon />
              </IconButton>
              <IconButton
                color="primary"
                edge="end"
                className={classes.deleteIcon}
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
  );
});
