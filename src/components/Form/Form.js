import React from "react";
import { makeStyles, createStyles } from "@mui/styles";
import { createTheme } from "@mui/material/styles";

const theme = createTheme();

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width: "100%",
      marginTop: theme.spacing(1),
    },
  })
);
export const Form = ({ children, ...props }) => {
  const classes = useStyles();

  //проп noValidate для отключения обычной валидации
  return (
    <form noValidate {...props} className={classes.root}>
      {children}
    </form>
  );
};
