import { createBrowserRouter } from "react-router-dom";
import Main from "./Layout/Main/Main";
import NotFound from "./ErrorRoute/NotFound";
import ErrorStatus from "./ErrorRoute/ErrorStatus";
import Home from "./Layout/HomePage/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorStatus></ErrorStatus>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: '*',
        element: <NotFound></NotFound>
      },
    ],
  },
]);

export default router;
