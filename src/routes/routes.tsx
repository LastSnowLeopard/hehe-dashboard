import { RouteObject, createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";
import Home from "@/pages/Home";
import { NotFound } from "@/pages/Errors";
import Boost from "@/pages/Boost";
import BoostDetail from "@/pages/BoostDetail";
import Partners from "@/pages/Partners";
import Links from "@/pages/Links";
import Stats from "@/pages/Stats";
import Achievements from "@/pages/Achievements";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "*", element: <Navigate to="/404" /> },
      { path: "/", element: <Home /> },
      { path: "/boost", element: <Boost /> },
      { path: "/boost/:id", element: <BoostDetail /> },
      { path: "/partners", element: <Partners /> },
      { path: "/links", element: <Links /> },
      { path: "/stats", element: <Stats /> },
      { path: "/achievements", element: <Achievements /> },
      { path: "404", element: <NotFound /> },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
