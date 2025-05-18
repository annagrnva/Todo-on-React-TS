import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { DeleteButton } from "../DeleteButton";

interface Task {
  id: number;
  name: string;
}

interface ToDoListProps {
  tasks: Task[];
}
export const ToDoList = ({ tasks }: ToDoListProps) => {
  return (
    <>
      <div>
        {tasks.map((task) => (
          <p key={task.id}>
            {task.name}
            <IconButton aria-label="delete" size="small">
              <DeleteIcon fontSize="inherit" />
            </IconButton>
          </p>
        ))}
      </div>
    </>
  );
};
