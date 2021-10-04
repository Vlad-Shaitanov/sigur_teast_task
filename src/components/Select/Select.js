import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Controller } from "react-hook-form";
import FormHelperText from "@mui/material/FormHelperText";

export const SelectBlock = ({ control, name, error }) => {
  console.log("error", error);
  return (
    <Controller
      control={control}
      name={name}
      defaultValue=""
      render={({
        field: { onChange, onBlur, value, name, ref },
        // fieldState: { invalid, isTouched, isDirty, error },
        // formState,
      }) => (
        <FormControl fullWidth>
          <InputLabel id="genderSelect">Пол</InputLabel>
          <Select
            labelId="genderSelect"
            value={value}
            onChange={onChange}
            error={!!error.gender}
          >
            <MenuItem value="Мужской">Мужской</MenuItem>
            <MenuItem value="Женский">Женский</MenuItem>
          </Select>
          <FormHelperText error>{error?.gender?.message}</FormHelperText>
        </FormControl>
      )}
    />
  );
};
