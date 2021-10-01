import React from "react";
import { Container } from "@mui/material";
import { makeStyles, createStyles } from "@mui/styles";
import { createTheme } from "@mui/material/styles";

const theme = createTheme();

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      marginTop: theme.spacing(4),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  })
);

export const MainContainer = ({ children, ...props }) => {
  const classes = useStyles();
  return (
    <Container
      container="main"
      maxWidth="xs"
      className={classes.root}
      {...props}
    >
      {children}
    </Container>
  );
};
