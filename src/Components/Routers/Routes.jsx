import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import NotFound from "../ErrorRoute/NotFound";
import ErrorStatus from "../ErrorRoute/ErrorStatus";
import Home from "../Layout/HomePage/Home/Home";
import Addtoys from "../ToysRoute/Addtoys";
import MyToys from "../ToysRoute/MyToys";
import Alltoys from "../ToysRoute/Alltoys";
import Blogs from "../Blogs/Blogs";
import Login from "../Login&Signup/Login";
import Signup from "../Login&Signup/Signup";
import PrivateRoutes from "./PrivateRoutes";
import ToyDetails from "../ToysRoute/ToyDetails";
import UpdateToys from "../ToysRoute/UpdateToys";

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
        path: 'alltoys',
        element: <Alltoys></Alltoys>
      },
      {
        path: "addtoys",
        element: <PrivateRoutes><Addtoys></Addtoys></PrivateRoutes>
      },
      {
        path: "mytoys",
        element: <PrivateRoutes><MyToys></MyToys></PrivateRoutes>
      },
      {
        path: "toydetails/:id",
        element: <PrivateRoutes><ToyDetails></ToyDetails></PrivateRoutes>,
        loader: ({params})=>fetch(`http://localhost:4000/toys/${params.id}`)
      },
      {
        path: "updatetoy/:id",
        element: <UpdateToys></UpdateToys>,
        loader: ({params})=>fetch(`http://localhost:4000/toys/${params.id}`)
      },
      {
        path: "blogs",
        element: <Blogs></Blogs>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'signup',
        element: <Signup></Signup>
      },
      {
        path: '*',
        element: <NotFound></NotFound>
      },
    ],
  },
]);

export default router;
