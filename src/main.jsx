import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Router from "./Routes/Router.jsx";
import { HelmetProvider } from "react-helmet-async";
import Authorization from "./components/Authountation/Authorization.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Authorization>
      <HelmetProvider>
        <div className="max-w-screen-xl mx-auto bg-white">
          <RouterProvider router={Router}></RouterProvider>
        </div>
      </HelmetProvider>
    </Authorization>
  </StrictMode>
);
