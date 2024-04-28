
import { useState } from "react";


export default function SnackbarComponent({
  snackbarOpen,
  snackbarMessage,
  snackbarType,
}) {
  const [open, setOpen] = useState(snackbarOpen || false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <div>
    dsfgsd
    </div>
  );
}
