import React from "react";
import ReactDOM from "react-dom/client";
import { UserProvider } from "./context/UserContext";
import {
AuthProvider
} from "./context/AuthContext";

import { BrowserRouter } from "react-router-dom";

import App from "./App.jsx";

import { ThemeProvider } from "./context/ThemeContext.jsx";

import "./index.css";

import {
TimeEntryProvider
} from "./context/TimeEntryContext.jsx";

import { ProjectProvider } from "./context/ProjectContext";


ReactDOM.createRoot(
  document.getElementById("root")
).render(

  <BrowserRouter>

<ThemeProvider>

  <ProjectProvider>

  <AuthProvider>

<TimeEntryProvider>

<App />


</TimeEntryProvider>

</AuthProvider>

</ProjectProvider>

</ThemeProvider>

</BrowserRouter>

);