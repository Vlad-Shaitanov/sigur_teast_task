import React from "react";
import Box from "@mui/material/Box";
import { Input } from "../Input/Input";
import { ViewDatePicker } from "../DatePicker/DatePicker";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel/FormControlLabel";
import { makeStyles, createStyles } from "@mui/styles";
import FormHelperText from "@mui/material/FormHelperText";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      border: "1px solid #87CEFA",
      paddingRight: 4,
      paddingLeft: 4,
      paddingTop: 5,
      borderRadius: "5px",
      marginBottom: "20px",
    },
  })
);

export const Workplace = ({ control, name, error, watch, register, index }) => {
  const classes = useStyles();

  let untilNow = watch(`untilNow${index}`);
  // console.log("untilNow", untilNow);
  // console.log("ERRORS", error);
  return (
    <>
      <Box className={classes.root}>
        <ViewDatePicker
          control={control}
          /*{...register(`startWork${index}`, { required: true })}*/
          id={`startWork${index}`}
          name={`startWork${index}`}
          label="Начало работы"
          required
        />
        <FormControlLabel
          control={
            <Checkbox
              {...register(`untilNow${index}`)}
              name={`untilNow${index}`}
              color="primary"
              defaultChecked={true}
              defaultValue={false}
            />
          }
          label="По настоящее время"
        />
        {untilNow !== undefined && !untilNow && (
          <ViewDatePicker
            control={control}
            /*{...register(`endWork${index}`, { required: true })}*/
            id={`endWork${index}`}
            name={`endWork${index}`}
            label="Окончание работы"
            required
          />
        )}

        <Input
          control={control}
          /*{...register(`company${index}`, { required: true })}*/
          id={`company${index}`}
          type="text"
          label="Название компании"
          name={`company${index}`}
          size="small"
          required
          error={error}
        />
        <Input
          control={control}
          /*{...register(`workPosition${index}`, { required: true })}*/
          id={`workPosition${index}`}
          type="text"
          label="Должность"
          name={`workPosition${index}`}
          size="small"
          required
          error={error}
          // error={!!error.workPosition}
        />
        {/*<FormHelperText error>{error?.workPosition?.message}</FormHelperText>*/}
        <Input
          control={control}
          /*{...register(`responsibilities${index}`)}*/
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
