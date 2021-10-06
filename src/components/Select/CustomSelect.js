import * as React from "react";
import { styled } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputBase from "@mui/material/InputBase";
import FormHelperText from "@mui/material/FormHelperText";
import Typography from "@mui/material/Typography";
import { Controller } from "react-hook-form";

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    "&:focus": {
      borderRadius: 4,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
    },
  },
}));

export const CustomSelect = ({ control, name, error }) => {
  const [sum, setSum] = React.useState("");
  const handleChange = (event) => {
    const data = {
      // [event.target.name]: event.target.value,
    };
    // setSum((prevState) => ({
    //   console.log("sum", sum);
    //   return { ...prevState, ...data };
    // }}));
    setSum((prevState) => ({
      ...prevState,
      ...{ [event.target.name]: event.target.value },
    }));
    console.log("sum", sum);
  };
  let result = sum.summary;
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
        <div style={{ width: "100%" }}>
          <Typography variant="subtitle2" align="center">
            Ожидаемая зарплата
          </Typography>

          <FormControl sx={{ m: 1 }} variant="standard">
            <InputLabel htmlFor="demo-customized-textbox">Сумма</InputLabel>
            <BootstrapInput
              id="summary"
              onChange={handleChange}
              name="summary"
              onBlur={onBlur}
              // value={result}
            />
          </FormControl>
          <FormControl sx={{ m: 1 }} variant="standard">
            <InputLabel id="demo-customized-select-label">Валюта</InputLabel>
            <Select
              labelId="demo-customized-select-label"
              id="demo-customized-select"
              value={value}
              onChange={onChange}
              onBlur={handleChange}
              input={<BootstrapInput />}
              name="demo-customized-select"
              autoWidth
            >
              <MenuItem value="$">USD</MenuItem>
              <MenuItem value="€">EURO</MenuItem>
            </Select>
            <FormHelperText error>{error?.name?.message}</FormHelperText>
          </FormControl>
        </div>
      )}
    />
  );
};
