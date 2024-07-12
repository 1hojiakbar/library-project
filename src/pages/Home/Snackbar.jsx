import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import BookContext from "../../context/BookContext";
import { useContext, useEffect, useState } from "react";

function CustomSnackbar() {
  const { data } = useContext(BookContext);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (data.length === 2) {
      setOpen(true);
    }
  }, [data]);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
      <Alert
        onClose={handleClose}
        severity="success"
        variant="filled"
        sx={{ width: "100%" }}
      >
        Item 3 has been deleted, Lorem, ipsum dolor sit amet consectetur
        adipisicing elit.
      </Alert>
    </Snackbar>
  );
}

export default CustomSnackbar;
