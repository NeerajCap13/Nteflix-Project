import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import EmailProvider from "./Components/Context/EmailProvider.jsx";
import EmailContext from "./Components/Context/EmailProvider.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>

      <App />

  </BrowserRouter>
);
