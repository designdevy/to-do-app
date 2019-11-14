import React from "react";
import { useGlobalState } from "../App";
import TopMenu from "./TopMenu";

import ToDoList from "./ToDoList";

import { withStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import BottomBar from "./BottomBar";

const styles = {
  root: {
    flexGrow: 1,
    padding: 25,
    backgroundColor: "white",
    minHeight: "100vh"
  },
  mobile: { backgroundImage: "white", padding: 0 }
};

function handleChange({ target: { name, value } }) {
  window.GlobalState.set({ [name]: value });
}

const handleCreate = (toDos, priority) => e => {
  e.preventDefault();
  if (e.target.title.value) {
    window.GlobalState.set({
      toDos: [
        ...toDos,
        { title: e.target.title.value, id: Date.now(), importance: priority }
      ],
      title: "",
      formOpen: false,
      priority: false
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

function handleDelete(id, toDos, checked) {
  const newToDos = toDos.filter(toDo => toDo.id !== id);
  const newChecked = checked.filter(done => done !== id);
  window.GlobalState.set({ toDos: newToDos, checked: newChecked });
}

const handleEdit = (id, toDos, editedTitle, checked) => e => {
  e.preventDefault();
  const newToDos = toDos.map(toDo => {
    if (toDo.id === id) {
      return { title: editedTitle, id, importance: toDo.importance };
    } else {
      return toDo;
    }
  });

  const currentIndex = checked.indexOf(id);
  const newChecked = [...checked];

  if (currentIndex !== -1) {
    newChecked.splice(currentIndex, 1);
  }

  window.GlobalState.set({
    toDos: newToDos,
    titleEdited: { title: "", id: "" },
    checked: newChecked
  });
};

const handleEditChange = id => ({ target: { value } }) => {
  window.GlobalState.set({ titleEdited: { title: value, id } });
};

const handleStartEditing = (id, title) => {
  window.GlobalState.set({ titleEdited: { title, id } });
};

const handleOpenForm = formOpen => {
  window.GlobalState.set({ formOpen: !formOpen });
};

const togglePriority = priority => {
  window.GlobalState.set({ priority: !priority });
};

export default withStyles(styles)(function ToDoListContainer(props) {
  const {
    title,
    toDos,
    checked,
    titleEdited,
    menuOpen,
    formOpen,
    priority
  } = useGlobalState();
  const { classes } = props;
  const matches = useMediaQuery("(min-width:600px)");

  return (
    <div className={matches ? classes.root : classes.mobile}>
      {matches ? <TopMenu /> : <span />}
      
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
          handleOpenForm={handleOpenForm}
          formOpen={formOpen}
          menuOpen={menuOpen}
          priority={priority}
          togglePriority={togglePriority}
        />
      
      {matches ? <BottomBar /> : <span/>}
    </div>
  );
});
