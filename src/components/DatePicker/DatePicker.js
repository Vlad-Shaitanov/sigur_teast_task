import * as React from "react";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import { Controller } from "react-hook-form";
import Stack from "@mui/material/Stack";

export const ViewDatePicker = ({ control, name, error, ...inputProps }) => {
  const [value, setValue] = React.useState(new Date());

  return (
    <Controller
      control={control}
      name={name}
      {...inputProps}
      defaultValue=""
      render={({
        // field,
        field: { onChange, onBlur, value, name, ref },
        // fieldState: { invalid, isTouched, isDirty, error },
        // formState,
      }) => (
        <div>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              disablemaskedinput="false"
              control={control}
              error={error}
              {...inputProps}
              views={["year", "month"]}
              // label="Начало работы"
              minDate={new Date("1946-01-01")}
              maxDate={new Date("2021-12-31")}
              value={value}
              onBlur={(newValue) => {
                setValue(newValue);
              }}
              onChange={onChange}
              renderInput={(params) => (
                <TextField {...params} helperText={null} />
              )}
            />
          </LocalizationProvider>
          {/*<FormHelperText error>{error?.[name]?.message}</FormHelperText>*/}
        </div>
      )}
    />
  );
};
