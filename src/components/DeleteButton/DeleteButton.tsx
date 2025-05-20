import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

interface DeleteButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}
export const DeleteButton = ({ children }: DeleteButtonProps) => {
  return (
    <Button variant="outlined" startIcon={<DeleteIcon />}>
      {children}
    </Button>
  );
};
