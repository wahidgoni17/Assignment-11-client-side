import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Components/Routes.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="max-w-full">
    <React.StrictMode>
      <RouterProvider router={router}></RouterProvider>
    </React.StrictMode>
  </div>
);
