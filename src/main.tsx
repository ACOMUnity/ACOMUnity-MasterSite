import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Global } from "./styles/global.styled";
import HomeLayout from "./components/layout/home";
import App from "./pages/app";
import LandingPage from "./pages/LandingPage";
import AppLayout from "./components/layout/app";
import Phase from "./pages/app/phase";

const router = createBrowserRouter([
  {
    element: <HomeLayout />,
    path: "/",
    children: [
      {
        path: "",
        element: <LandingPage />,
      },
    ],
  },
  {
    element: <AppLayout />,
    path: "/",
    children: [
      {
        path: "app/dashboard",
        element: <App />,
      },
      {
        path: "app/dashboard/:phase",
        element: <Phase />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Global />
    <RouterProvider router={router} />
  </React.StrictMode>
);
