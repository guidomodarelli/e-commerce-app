import "@fontsource-variable/open-sans/wdth-italic.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./globals.css";
import { Toaster } from "sonner";

const root = document.querySelector("#root") as unknown as Element;

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <BrowserRouter>
      <Toaster richColors position="top-right" />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
