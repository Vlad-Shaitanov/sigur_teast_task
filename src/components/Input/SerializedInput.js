import React from "react";
import TextField from "@mui/material/TextField";
import { Controller } from "react-hook-form";
import FormHelperText from "@mui/material/FormHelperText";

export const SerializedInput = ({ control, name, error, ...inputProps }) => {
  // console.log("error", error);
  return (
    <Controller
      control={control}
      name={name}
      {...inputProps}
      defaultValue=""
      render={({
        field: { onChange, value, name, ref },
        // fieldState: { invalid, isTouched, isDirty, error },
        formState,
      }) => {
        const test = name.split(".");
        return (
          <>
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              onChange={onChange}
              value={value}
              error={
                test[0] in formState.errors &&
                !!formState.errors[test[0]][test[1]][test[2]]
              }
              {...inputProps}
            />
            <FormHelperText error>
              {test[0] in formState.errors &&
                !!formState.errors[test[0]][test[1]][test[2]] &&
                formState.errors[test[0]][test[1]][test[2]].message}
            </FormHelperText>
          </>
        );
      }}
    />
  );
};
