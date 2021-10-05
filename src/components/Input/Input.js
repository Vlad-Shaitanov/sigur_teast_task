import React from "react";
import TextField from "@mui/material/TextField";
import { Controller } from "react-hook-form";
import FormHelperText from "@mui/material/FormHelperText";

export const Input = ({ control, name, error, ...inputProps }) => {
  // console.log("error", error);
  return (
    <Controller
      control={control}
      name={name}
      {...inputProps}
      defaultValue=""
      render={({
        field: { onChange, onBlur, value, name, ref },
        // fieldState: { invalid, isTouched, isDirty, error },
        // formState,
      }) => (
        <>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            onChange={onChange}
            value={value}
            error={!!error[name]}
            {...inputProps}
          />
          <FormHelperText error>{error?.[name]?.message}</FormHelperText>
        </>
      )}
    />
  );
};
