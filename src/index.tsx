import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import App from "./App";
import "./index.css";

const Root = () => {
  const { currentTheme } = useTheme();
  return (
    <StyledThemeProvider theme={currentTheme}>
      <App />
    </StyledThemeProvider>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider>
        <Root />
      </ThemeProvider>
    </Router>
  </React.StrictMode>
);
