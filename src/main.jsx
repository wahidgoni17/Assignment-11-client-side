import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Components/Routers/Routes";
import AuthProvider from "./Components/Routers/AuthProvider";
import 'react-tabs/style/react-tabs.css';

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="max-w-full">
    <React.StrictMode>
      <AuthProvider>
        <RouterProvider router={router}></RouterProvider>
      </AuthProvider>
    </React.StrictMode>
  </div>
);
