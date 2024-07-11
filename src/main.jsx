import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./root";
import "./index.css";
import { RegisterProvider } from "./context/RegisterContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RegisterProvider>
      <Root />
    </RegisterProvider>
  </React.StrictMode>
);
