import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Sort from "../components/Sort.tsx";
import App from "./App.tsx";

const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/login",
        element: <p>Log In</p>,
      },
      {
        path: "sort",
        element: <Sort />,
        loader: () => ({ name: "jero" }),
        errorElement: <p>Something went wrong</p>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={route} />
  </StrictMode>
);
