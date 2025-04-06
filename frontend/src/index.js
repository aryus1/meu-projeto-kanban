import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // <- Certifique-se de que o arquivo está como App.js com "A" maiúsculo

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
