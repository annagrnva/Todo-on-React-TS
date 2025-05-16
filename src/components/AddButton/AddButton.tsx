import Button from "@mui/material/Button";

interface AddButtonProps {
  onClick: () => void;
}

export const AddButton = ({ onClick }: AddButtonProps) => {
  return (
    <Button variant="outlined" onClick={onClick}>
      Add
    </Button>
  );
};
