import { createBrowserRouter, Route } from "react-router-dom";
import Layout from "../Layout";
import Home from "../component/Home/Home";
import SignIn from "../component/signIn/SignIn";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/signIn",
        element: <SignIn />,
      },
    ],
  },
]);
