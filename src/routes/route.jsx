import { createBrowserRouter, Route } from "react-router-dom";
import Layout from "../Layout";
import Home from "../component/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);
