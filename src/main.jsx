import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Layout from "./Layout.jsx";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/route.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}>
      <Layout />
    </RouterProvider>
  </StrictMode>
);
