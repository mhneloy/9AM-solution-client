import { createBrowserRouter, Route } from "react-router-dom";
import Layout from "../Layout";
import Home from "../component/Home/Home";
import SignIn from "../component/signIn/SignIn";
import Dashboard from "../component/Dashboard/Dashboard";
import ProtfolioLogin from "../component/ProtfolioLogin/ProtfolioLogin";
import TaskForm from "../component/Dashboard/TaskForm";

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
        path: "/protfolio",
      },
      {
        path: "/signIn",
        element: <ProtfolioLogin />,
      },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "taskform",
        element: <TaskForm />,
      },
    ],
  },
]);
