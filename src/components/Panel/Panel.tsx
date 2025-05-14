import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";

export const Panel = () => {
  const [inputValue, setUnputValue] = useState("");

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUnputValue(event.target.value);
  };
  return (
    <Box
      component="form"
      sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-basic"
        label="todo container"
        variant="outlined"
        value={inputValue}
        onChange={onChange}
      />
    </Box>
  );
};
