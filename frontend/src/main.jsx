import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./global.css";
import Index from "./Index.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "../routes/Home.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
    children: [
      {
        path: "/",
        element: <Home />
      }
    ]
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
);
