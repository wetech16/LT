import React from "react";
import "./App.css";
import Signup from "./pages/Signup/Signup";
import {
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import { blue, lightBlue } from "@material-ui/core/colors";
import Login from "./pages/Login/Login";
// import {
 
//   Route,
  
//   Switch,
// } from "react-router-dom";

const theme = createMuiTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: blue[500],
    },
    secondary: {
      // This is green.A700 as hex.
      main: lightBlue[500],
    },
  },
});

function App() {
  return (
  <div>
    {/* <Switch>
      <Route exact path="/Signup" component={Signup}></Route>
      <Route exact path="/Login" component={Login}></Route>
      </Switch> */}
    <ThemeProvider theme={theme}>
      <Signup className="component"></Signup>
      <Login />
    </ThemeProvider>
   
  </div>
  );
}

export default App;
