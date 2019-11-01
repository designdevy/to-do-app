import React from "react";
import { useGlobalState } from "../App";
import TopMenu from "./TopMenu";
import LeftMenu from "./LeftMenu";
import ToDoList from "./ToDoList";
import { Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  root: {
    flexGrow: 1,
    padding: 25
  }
};

function handleChange({ target: { name, value } }) {
  window.GlobalState.set({ [name]: value });
}

const handleCreate = toDos => e => {
  e.preventDefault();
  if (e.target.title.value) {
    window.GlobalState.set({
      toDos: [...toDos, { title: e.target.title.value, id: Date.now() }],
      title: ""
    });
  }
};

const handleToggle = (id, checked) => () => {
  const currentIndex = checked.indexOf(id);
  const newChecked = [...checked];

  if (currentIndex === -1) {
    newChecked.push(id);
  } else {
    newChecked.splice(currentIndex, 1);
  }
  window.GlobalState.set({ checked: newChecked });
};

function handleDelete(id, toDos) {
  const newToDos = toDos.filter(toDo => toDo.id !== id);
  window.GlobalState.set({ toDos: newToDos });
}

export default withStyles(styles)(function ToDoListContainer(props) {
  const { title, toDos, checked } = useGlobalState();
  const { classes } = props;

  return (
    <div>
      <TopMenu />
      <Grid container className={classes.root} spacing={2}>
        <LeftMenu />
        <ToDoList
          title={title}
          toDos={toDos}
          checked={checked}
          handleChange={handleChange}
          handleCreate={handleCreate}
          handleDelete={handleDelete}
          handleToggle={handleToggle}
        />
      </Grid>
    </div>
  );
});
