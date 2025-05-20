import TextField from "@mui/material/TextField";
import { useState } from "react";
import Paper from "@mui/material/Paper";
import styles from "./styles.module.scss";
import { AddButton } from "../../components";
import { ToDoList } from "../../components";

export const Panel = () => {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState<{ id: number; name: string }[]>([]);
  const [nextId, setNextId] = useState(0);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const addTask = () => {
    if (inputValue === "") {
      return;
    }

    setInputValue("");
    const newTask = { id: nextId, name: inputValue };
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    setNextId(nextId + 1);
  };

  const deleteTask = (num: number) => {
    setTasks(tasks.filter((task) => task.id !== num));
  };

  return (
    <Paper elevation={2} className={styles.paper}>
      <TextField
        id="outlined-basic"
        label="todo container"
        variant="outlined"
        value={inputValue}
        onChange={onChange}
      />
      <AddButton onClick={addTask} />
      <ToDoList tasks={tasks} onDeleteTask={deleteTask} />
    </Paper>
  );
};
