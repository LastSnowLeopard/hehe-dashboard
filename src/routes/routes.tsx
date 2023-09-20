import { RouteObject, createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";
import Home from "@/pages/Home";
import { NotFound } from "@/pages/Errors";
import Boost from "@/pages/Boost";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "*", element: <Navigate to="/404" /> },
      { path: "/", element: <Home /> },
      { path: "/boost", element: <Boost /> },
      { path: "404", element: <NotFound /> },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
