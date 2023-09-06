import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LandingPageLayout from "./components/layout/index";
import { Global } from "./styles/global.styled";
import LandingPage from "./pages/LandingPage";
import AppLayout from "./components/layout/app";
import App from "./pages/app";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPageLayout />,
    children: [
      {
        index: true,
        path: "",
        element: <LandingPage />,
      },
      {
        path: "/app",
        element: <App />,
      },
    ],
  },
  // {
  //   path: "/",
  //   element: <AppLayout />,
  //   children: [
  //     {
  //       index: true,
  //       path: "",
  //       element: <App />,
  //     },
  //   ],
  // },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Global />
    <RouterProvider router={router} />
  </React.StrictMode>
);
