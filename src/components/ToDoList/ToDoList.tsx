// import IconButton from "@mui/material/IconButton";
// import DeleteIcon from "@mui/icons-material/Delete";

type TodoList = {
  id: string;
  checked: boolean;
};

export const ToDoList: React.FC<TodoList> = () => {
  return TodoList.map((list) => ({ list }));

  //      <div>
  //     {tasks.map((task, index) => (
  //       <p key={index}>{task}</p>
  //     ))}

  //     <IconButton aria-label="delete" size="small">
  //       <DeleteIcon fontSize="inherit" />
  //     </IconButton>
  //   </div>
};
