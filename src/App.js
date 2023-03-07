import React, { useState } from "react";
import "./App.css";
import ButtonAppBar from "./components/AppBar";
import MultiActionAreaCard from "./components/Card";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import SimpleCard from "./components/SimpleCard";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const theme = createTheme({
    palette: {
      type: darkMode ? "dark" : "light",
    },
  });

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Paper style={{ height: "100vh" }}>
          <div className="App transform duration-100 ">
            <ButtonAppBar
              check={darkMode}
              change={() => setDarkMode(!darkMode)}
            />
            <h1 className="text-center font-bold text-[50px]"> Ehson codes </h1>
            <div className="flex justify-evenly  items-center">
              <div>
                <SimpleCard />
              </div>
              <div>
                <MultiActionAreaCard />
              </div>
            </div>
          </div>
        </Paper>
      </ThemeProvider>
    </div>
  );
}
export default App;
