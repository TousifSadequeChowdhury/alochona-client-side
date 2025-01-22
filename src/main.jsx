import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import AppRoutes from "./assets/routes/AppRoutes";
import { BrowserRouter } from "react-router";
import './index.css'
import AuthProvider from "../AuthProvider";
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);
