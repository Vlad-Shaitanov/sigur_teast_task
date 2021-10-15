import React from "react";
import { Input } from "../Input/Input";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Controller } from "react-hook-form";

export const ForeignLanguages = ({ control, name, error, index }) => {
  return (
    <Box>
      <Controller
        control={control}
        name={name}
        defaultValue=""
        render={({
          field: { onChange, onBlur, value, name, ref },
          // fieldState: { invalid, isTouched, isDirty, error },
          // formState,
        }) => (
          <Box style={{ display: "flex" }}>
            <Input
              control={control}
              error={error}
              fullWidth={false}
              id={`language${index}`}
              label={`Ин.язык №${index + 1}`}
              name={`language${index}`}
            />
            <FormControl style={{ width: "40%" }}>
              <InputLabel id="langSelect">Уровень:</InputLabel>
              <Select
                labelId="langSelect"
                value={value}
                onChange={onChange}
                id={`langGrade${index}`}
                name={`langGrade${index}`}
                // error={!!error.name}
              >
                <MenuItem value="a1">A1</MenuItem>
                <MenuItem value="a2">A2</MenuItem>
                {/*<MenuItem value="B1">B1</MenuItem>*/}
                {/*<MenuItem value="B2">B2</MenuItem>*/}
                {/*<MenuItem value="C1">C1</MenuItem>*/}
                {/*<MenuItem value="C2">C2</MenuItem>*/}
              </Select>
            </FormControl>
          </Box>
        )}
      />
    </Box>
  );
};

// todo в data приходит undefined, как ключ селекта
