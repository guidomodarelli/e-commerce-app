import "@fontsource-variable/open-sans/wdth-italic.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "sonner";
import App from "./App";
import "./globals.css";
import Providers from "./providers/Providers";

const root = document.querySelector("#root") as unknown as Element;

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <BrowserRouter>
      <Toaster closeButton richColors />
      <Providers>
        <App />
      </Providers>
    </BrowserRouter>
  </React.StrictMode>,
);
