import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

export const DeleteButton = () => {
  return (
    <Button variant="outlined" startIcon={<DeleteIcon />}>
      Delete
    </Button>
  );
};
