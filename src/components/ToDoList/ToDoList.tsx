import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

interface Task {
  id: number;
  name: string;
}

interface ToDoListProps {
  tasks: Task[];
  onDeleteTask: (id: number) => void;
}

export const ToDoList = ({ tasks, onDeleteTask }: ToDoListProps) => {
  return (
    <>
      <div>
        {tasks.map((task) => (
          <p key={task.id}>
            {task.name}
            <IconButton
              onClick={() => onDeleteTask(task.id)}
              aria-label="delete"
              size="small"
            >
              <DeleteIcon fontSize="inherit" />
            </IconButton>
          </p>
        ))}
      </div>
    </>
  );
};
