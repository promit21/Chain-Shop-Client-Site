import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order";
import LogIn from "../Pages/LogIn/LogIn";
import Register from "../Pages/Register/Register";
import Dashboard from "../Layout/Dashboard";
import Card from "../Pages/Dashboard/Card/Card";
import PrivateRouter from "./PrivateRouter";
import AllUser from "../Pages/Dashboard/AllUser/AllUser";
import AddItem from "../Pages/Dashboard/AddItem/AddItem";
import AdminRouter from "./AdminRouter";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/menu",
        element: <Menu></Menu>,
      },
      {
        path: "/order/:category",
        element: <Order></Order>,
      },
      {
        path: "/logIn",
        element: <LogIn></LogIn>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRouter>
        <Dashboard></Dashboard>
      </PrivateRouter>
    ),
    children: [
      // Normal User Route
      {
        path: "card",
        element: <Card></Card>,
      },

      // Admin only Route
      {
        path: "addItems",
        element: (
          <AdminRouter>
            <AddItem></AddItem>
          </AdminRouter>
        ),
      },
      {
        path: "allUser",
        element: (
          <AdminRouter>
            <AllUser></AllUser>
          </AdminRouter>
        ),
      },
    ],
  },
]);
