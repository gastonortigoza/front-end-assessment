import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { CardProvider } from "./context/index.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CardProvider>
      <App />
    </CardProvider>
  </StrictMode>
);
