import React from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import smoothscroll from "smoothscroll-polyfill";

smoothscroll.polyfill();

const container = document.getElementById("root");
const app = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If the page was prerendered, attach to the existing HTML.
// In dev (`npm run dev`) the root is empty, so render normally.
if (container.hasChildNodes()) {
  hydrateRoot(container, app);
} else {
  createRoot(container).render(app);
}