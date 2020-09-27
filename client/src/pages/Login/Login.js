import React from 'react'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function Login() {
  const classes = useStyles();
  const [name, setName] = React.useState('');
  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
      <div>   
        <form className={classes.root} noValidate autoComplete="off">
        <div>
            <TextField id="standard-name" label="Name" value={name} onChange={handleChange} />
            <TextField id="standard-uncontrolled" label="Password" defaultValue="" />
        </div>
        <div>
            {/* <TextField
            id="filled-name"
            label="Name"
            value={name}
            onChange={handleChange}
            variant="filled"
            /> */}
            {/* <TextField
            id="filled-uncontrolled"
            label="Password"
            defaultValue=""
            variant="filled"
            /> */}
        </div>
        </form>
        <Button variant="contained" color="primary" className="button">
        Log in
      </Button>
    </div>
  );
}


