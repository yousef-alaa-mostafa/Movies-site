import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
/* ================= React router ================== */
import { BrowserRouter } from "react-router-dom";

/* ================= Bootstrab ===================== */
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "popper.js/dist/umd/popper.min.js";
import "bootstrap/dist/js/bootstrap.min.js";

/* ================= fontawsome ===================== */
import "@fortawesome/fontawesome-free/css/all.min.css";
/* ================= index Style ===================== */
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
