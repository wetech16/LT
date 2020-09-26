import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "./signup.css";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "10ch",
    },
  },
}));

function Signup() {
  const classes = useStyles();
  return (
    <div className="class">
      <form className={classes.root} noValidate autoComplete="off">
        <TextField id="standard-basic" label="hello" />
      </form>
      <Button variant="contained" color="primary" className="button">
        Primary
      </Button>
      <img src="" />
    </div>
  );
}

export default Signup;

// import React from 'react';

// export default function BasicTextFields() {

//   return (

//   );
// }
