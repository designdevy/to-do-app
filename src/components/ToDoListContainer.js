import React from "react";
import { useGlobalState } from "../App";
import TopMenu from "./TopMenu";
import LeftMenu from "./LeftMenu";
import ToDoList from "./ToDoList";
import { Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import BottomBar from "./BottomBar";

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

const handleEdit = (id, toDos, editedTitle)=> e => {
  e.preventDefault();
  const newToDos = toDos.map(toDo => {
    if (toDo.id === id) {
      return {title: editedTitle, id}
    } else {
      return toDo
    }
  }) 
  window.GlobalState.set({
      toDos: newToDos,
      titleEdited: {title: "", id: ""}
    });
}

const handleEditChange = (id) => ({ target: { value } }) => {
  window.GlobalState.set({ titleEdited: {title: value, id} });
}

const handleStartEditing = (id, title) => {
  window.GlobalState.set({titleEdited: {title, id}})
}

export default withStyles(styles)(function ToDoListContainer(props) {
  const { title, toDos, checked, titleEdited, menuOpen } = useGlobalState();
  const { classes } = props;
  const matches = useMediaQuery("(min-width:600px)");

  return (
    <div>
      <TopMenu />
      <Grid container className={matches ? classes.root : classes.mobile} spacing={2}>
        {(menuOpen || matches) ? < LeftMenu /> : <p/>}
        <ToDoList
          title={title}
          toDos={toDos}
          checked={checked}
          titleEdited={titleEdited}
          handleChange={handleChange}
          handleCreate={handleCreate}
          handleDelete={handleDelete}
          handleToggle={handleToggle}
          handleEdit={handleEdit}
          handleEditChange={handleEditChange}
          handleStartEditing={handleStartEditing}
        />
      </Grid>
      <BottomBar />
    </div>
  );
});
