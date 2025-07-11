// React
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Index from "./Index.jsx";

// React-router-dom
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// CSS Styles
import "./global.css";

// Pages
import Home from "./routes/Home.jsx";
import Modalidades from "./routes/Modalidades.jsx";
import Planos from "./routes/Planos.jsx";
import Galeria from "./routes/Galeria.jsx";
import Contato from "./routes/Contato.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/modalidades",
        element: <Modalidades />,
      },
      {
        path: "/planos",
        element: <Planos />,
      },
      {
        path: "/galeria",
        element: <Galeria />,
      },
      {
        path: "/contato",
        element: <Contato />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
