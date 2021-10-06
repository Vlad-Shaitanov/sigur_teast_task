import * as React from "react";
import Typography from "@mui/material/Typography";
import { Controller } from "react-hook-form";
import { Input } from "../Input/Input";
import { makeStyles, createStyles } from "@mui/styles";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: "flex",
      justifyContent: "space-between",
    },
    sum: { width: "50%" },
    currency: { width: "30%" },
  })
);

export const CustomSelect = ({ control, name, error }) => {
  const classes = useStyles();
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
        <div>
          <Typography variant="subtitle2" align="center">
            Ожидаемая зарплата
          </Typography>
          <div className={classes.root}>
            <div className={classes.sum}>
              <Input
                control={control}
                error={error}
                fullWidth={false}
                id="sum"
                label="Сумма"
                name="sum"
              />
            </div>
            <div className={classes.currency}>
              <Input
                control={control}
                error={error}
                fullWidth={false}
                id="currency"
                label="Валюта"
                name="currency"
              />
            </div>
          </div>
        </div>
      )}
    />
  );
};
