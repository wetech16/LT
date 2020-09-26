import React from "react";
import "./App.css";
import Signup from "./pages/Signup";
import {
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import { blue, lightBlue } from "@material-ui/core/colors";

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
    <ThemeProvider theme={theme}>
      <Signup className="component"></Signup>
    </ThemeProvider>
  );
}

export default App;
