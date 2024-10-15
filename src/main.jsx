import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { UniversalContextProvider } from "./contexts/UniversalContext.jsx";
import { ThemeContextProvider } from "./contexts/ThemeContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeContextProvider>
      <UniversalContextProvider>
        <App />
      </UniversalContextProvider>
    </ThemeContextProvider>
  </StrictMode>
);
