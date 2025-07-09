import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Layout from "./Layout.jsx";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/route.jsx";
import AuthProvider from "./sharecomponent/authContext/AuthProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}>
        <Layout />
      </RouterProvider>
    </AuthProvider>
  </StrictMode>
);
