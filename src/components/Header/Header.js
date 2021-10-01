import React from "react";
import Typography from "@mui/material/Typography";
import { makeStyles, createStyles } from "@mui/styles";
import { createTheme } from "@mui/material/styles";

const theme = createTheme();

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      textAlign: "center",
      color: "#1E90FF",
      textShadow: "1px 2px #0000FF",
      // "& .MuiTypography-root": {
      //   margin: theme.spacing(3, 0, 2),
      //   fontSize: "40px",
      // },
    },
  })
);

export const Header = () => {
  const classes = useStyles();
  return (
    <Typography
      className={classes.root}
      component="h1"
      variant="h5"
      sx={{
        margin: theme.spacing(3, 0, 2),
        fontSize: "40px",
        fontFamily: "Montserrat Alternates",
      }}
      // theme={theme}
    >
      Заполните резюме:
    </Typography>
  );
};
