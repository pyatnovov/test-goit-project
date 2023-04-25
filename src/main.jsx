import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Components/App/App.jsx";
import GlobalStyle from "./GlobalStyle";
import { BrowserRouter } from "react-router-dom";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/test-goit-project">
      <GlobalStyle />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
