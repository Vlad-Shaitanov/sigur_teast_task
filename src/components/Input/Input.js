import React, { forwardRef } from "react";
import TextField from "@mui/material/TextField";

//Мы используем метод forwardRef, чтобы пробрасывать ref в финальный элемент
export const Input = forwardRef((props, ref) => {
  return (
    <TextField
      variant="outlined"
      margin="normal"
      inputRef={ref}
      fullWidth
      {...props}
    />
  );
});
