import TextField from "@mui/material/TextField";
import { useState } from "react";
import Paper from "@mui/material/Paper";
import styles from "./styles.module.scss";
import { AddButton } from "../../components";
import { DeleteButton } from "../../components";

export const Panel = () => {
  const [inputValue, setUnputValue] = useState("");

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUnputValue(event.target.value);
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
      <AddButton />
      <DeleteButton />
    </Paper>
  );
};
