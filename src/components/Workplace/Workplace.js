import React from "react";
import Box from "@mui/material/Box";
import { Input } from "../Input/Input";
import { ViewDatePicker } from "../DatePicker/DatePicker";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel/FormControlLabel";
import { makeStyles, createStyles } from "@mui/styles";
import FormHelperText from "@mui/material/FormHelperText";
import { SerializedInput } from "../Input/SerializedInput";

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

  let untilNow = watch(`job.${index}.untilNow`);
  // console.log("untilNow", untilNow);
  // console.log("ERRORS", error);
  return (
    <>
      <Box className={classes.root}>
        <ViewDatePicker
          control={control}
          /*{...register(`startWork${index}`, { required: true })}*/
          id={`job.${index}.startWork`}
          name={`job.${index}.startWork`}
          label="Начало работы"
          required
        />
        <FormControlLabel
          control={
            <Checkbox
              {...register(`job.${index}.untilNow`)}
              name={`job.${index}.untilNow`}
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
            id={`job.${index}.endWork`}
            name={`job.${index}.endWork`}
            label="Окончание работы"
            required
          />
        )}

        <SerializedInput
          control={control}
          /*{...register(`company${index}`, { required: true })}*/
          id={`job.${index}.company`}
          type="text"
          label="Название компании"
          name={`job.${index}.company`}
          size="small"
          required
          error={error}
        />
        <SerializedInput
          control={control}
          /*{...register(`workPosition${index}`, { required: true })}*/
          id={`job.${index}.workPosition`}
          type="text"
          label="Должность"
          name={`job.${index}.workPosition`}
          size="small"
          required
          error={error}
          // error={!!error.workPosition}
        />
        {/*<FormHelperText error>{error?.workPosition?.message}</FormHelperText>*/}
        <SerializedInput
          control={control}
          /*{...register(`responsibilities${index}`)}*/
          error={error}
          id={`job.${index}.responsibilities`}
          label="Обязанности"
          type="text"
          name={`job.${index}.responsibilities`}
          multiline={true}
          maxRows={4}
          placeholder="Опишите Ваши типовые обязанности на прошлом месте"
        />
      </Box>
    </>
  );
};
