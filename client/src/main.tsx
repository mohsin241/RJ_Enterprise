import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { Helmet, HelmetProvider } from 'react-helmet-async';

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <Helmet defaultTitle=">R J Enterprise | Trusted Steel Supplier in India" />
    <App />
  </HelmetProvider>
);
