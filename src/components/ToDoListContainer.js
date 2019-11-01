import React from "react";
import { useGlobalState } from "../App";

export default function ToDoListContainer() {
  const { title, toDos, checked } = useGlobalState();

  return (
    <div><p>{title}</p></div>
  )
}