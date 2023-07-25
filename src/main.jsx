import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./pages/Main.jsx";
import Contact from "./pages/Contact.jsx";
import Portofolio from "./pages/Portofolio.jsx";


export const pages =[
  {
    path: "/",
    element: <Main/>,
    title: "Beranda",
  },
  {
    path: "/portofolio",
    element: <Portofolio />,
    title: "portofolio"
  },
  {
    path: "/Contact",
    element: <Contact />,
    title: "Contact",
  },
];

const router = createBrowserRouter([
  {element: <App/>,
  children: pages,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
