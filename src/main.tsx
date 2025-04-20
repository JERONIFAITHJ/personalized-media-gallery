import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Sort from "../components/Sort.tsx";
import App from "./App.tsx";
import Error404Page from "../components/Error404Page.tsx";
import FileUpload from "../components/FileUpload.tsx";

const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error404Page />,
    children: [
      {
        path: "sort",
        element: <Sort />,
        errorElement: <p>Something went wrong</p>,
      },
    ],
  },
  {
    path: "/upload-files",
    element: <FileUpload />,
    errorElement: <p>Something went wrong!</p>,
  },
  {
    path: "/profile",
    element: <p>Profile</p>,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={route} />
  </StrictMode>
);
