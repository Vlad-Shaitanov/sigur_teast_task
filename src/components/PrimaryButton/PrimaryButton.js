import React from "react";
import Button from "@mui/material/Button";
import { makeStyles, createStyles } from "@mui/styles";
import { createTheme } from "@mui/material/styles";

const theme = createTheme();

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      margin: theme.spacing(3, 0, 2),
    },
  })
);

export const PrimaryButton = ({ children, ...props }) => {
  const classes = useStyles();
  return (
    <Button
      type="submit"
      className={classes.root}
      variant="contained"
      color="primary"
      fullWidth
      sx={{
        margin: theme.spacing(3, 0, 2),
      }}
      {...props}
    >
      {children}
    </Button>
  );
};
