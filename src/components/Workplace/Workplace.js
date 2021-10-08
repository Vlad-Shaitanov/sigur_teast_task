import React from "react";
import Box from "@mui/material/Box";
import { Input } from "../Input/Input";
import { ViewDatePicker } from "../DatePicker/DatePicker";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel/FormControlLabel";

export const Workplace = ({ control, name, error, watch, register, index }) => {
  let untilNow = watch("untilNow");
  // console.log("untilNow", untilNow);
  console.log("INDEX", index);
  return (
    <>
      <Box
        style={{
          border: "1px solid #DCDCDC",
          paddingRight: 4,
          paddingLeft: 4,
          borderRadius: "5px",
          marginBottom: "20px",
        }}
      >
        <ViewDatePicker
          control={control}
          id={`startWork${index}`}
          name={`startWork${index}`}
          label="Начало работы"
        />
        <FormControlLabel
          control={
            <Checkbox
              {...register("untilNow")}
              name="untilNow"
              color="primary"
              defaultChecked={true}
            />
          }
          label="По настоящее время"
        />
        {!untilNow && (
          <ViewDatePicker
            control={control}
            id="endWork"
            name="endWork"
            label="Окончание работы"
          />
        )}

        <Input
          control={control}
          id={`company${index}`}
          type="text"
          label="Название компании"
          name={`company${index}`}
          size="small"
          error={error}
        />
        <Input
          control={control}
          id={`workPosition${index}`}
          type="text"
          label="Должность"
          name={`workPosition${index}`}
          size="small"
          error={error}
        />
        <Input
          control={control}
          error={error}
          id={`responsibilities${index}`}
          label="Обязанности"
          type="text"
          name={`responsibilities${index}`}
          multiline={true}
          maxRows={4}
          placeholder="Опишите Ваши типовые обязанности на прошлом месте"
        />
      </Box>
    </>
  );
};
