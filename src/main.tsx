import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.js";
import { BrowserRouter } from "react-router-dom";
import React from "react";
// Import i18n configuration
import "./i18n.js";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <React.Suspense fallback="loading">
        <App />
      </React.Suspense>
    </BrowserRouter>
  </StrictMode>
);
