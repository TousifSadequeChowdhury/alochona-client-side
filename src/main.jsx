import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import AppRoutes from "./assets/routes/AppRoutes";
import { BrowserRouter } from "react-router";
import './index.css'
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter>
    <AppRoutes></AppRoutes>
  </BrowserRouter>
</React.StrictMode>,
document.getElementById("root")
)
