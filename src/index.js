import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme.js";
import reportWebVitals from './reportWebVitals';
import './index.css';

// src/index.js or App.js
if (process.env.NODE_ENV === 'development') {
  const suppressedWarnings = ['ResizeObserver loop completed with undelivered notifications'];

  const realConsoleWarn = console.warn;
  console.warn = (message, ...args) => {
    if (suppressedWarnings.some(entry => message.includes(entry))) {
      return;
    }
    realConsoleWarn(message, ...args);
  };
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);

reportWebVitals();
