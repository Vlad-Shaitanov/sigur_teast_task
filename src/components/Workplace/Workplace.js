import React from "react";
import Box from "@mui/material/Box";
import { Input } from "../Input/Input";
import { ViewDatePicker } from "../DatePicker/DatePicker";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel/FormControlLabel";

export const Workplace = ({ control, name, error, watch }) => {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  let untilNow = watch("untilNow");
  console.log(untilNow);

  return (
    <>
      <p style={{ textAlign: "center" }}>Места работы</p>
      <Box
        style={{
          border: "1px solid #DCDCDC",
          paddingRight: 4,
          paddingLeft: 4,
          borderRadius: "5px",
        }}
      >
        <ViewDatePicker
          control={control}
          id="startWork"
          name="startWork"
          label="Начало работы"
        />
        <FormControlLabel
          control={
            <Checkbox
              control={control}
              color="primary"
              name="untilNow"
              checked={checked}
              onChange={handleChange}
              inputProps={{ "aria-label": "controlled" }}
            />
          }
          label="По настоящее время"
        />
        {!untilNow && <div>Hello</div>}
        {/*<Checkbox*/}
        {/*// control={control}*/}
        {/*color="primary"*/}
        {/*name="untilNow"*/}
        {/*label="По настоящее время"*/}
        {/*checked={checked}*/}
        {/*onChange={handleChange}*/}
        {/*inputProps={{ "aria-label": "controlled" }}*/}
        {/*/>*/}
        <Input
          control={control}
          id="company"
          type="text"
          label="Название компании"
          name="company"
          size="small"
          error={error}
        />
        <Input
          control={control}
          id="workPosition"
          type="text"
          label="Должность"
          name="workPosition"
          size="small"
          error={error}
        />
        <Input
          control={control}
          error={error}
          id="responsibilities"
          label="Обязанности"
          type="text"
          name="responsibilities"
          multiline={true}
          maxRows={4}
          placeholder="Опишите Ваши типовые обязанности на прошлом месте"
        />
      </Box>
    </>
  );
};
