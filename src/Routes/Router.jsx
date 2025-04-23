import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/Root";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import Login from "../Share/Login";
import Register from "../Share/Register";
import ContactUs from "../Pages/ContactUs/ContactUs";
import MenuPage from "../Pages/Menu/MenuPage";
import OurShop from "../Pages/OURSHOPPage/OURSHOP";
import YourOrder from "../Dashbord/YourOrder";
import DashboardRoute from "../Dashbord/DashboardRoute";
import Payment from "../components/Payment";
import OrderHistory from "../components/orderHistory";
import AddProduct from "../Dashbord/AddProduct";
import AllProducts from "../Dashbord/AllProducts";
import UpdateProduct from "../Dashbord/UpdateProduct";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/contact",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/menu",
        element: <MenuPage></MenuPage>,
      },
      {
        path: "/shop",
        element: <OurShop></OurShop>,
      },
      {
        path: "/payment",
        element:<Payment></Payment>,
      },
    ],
  },
  {
    path: "/",
    element: <DashboardRoute></DashboardRoute>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
        { 
        path: "/yourOrder", 
        element: <YourOrder></YourOrder>
       },
       { 
        path: "/orderHistory", 
        element:<OrderHistory></OrderHistory>
       },
       { 
        path: "/addProduct", 
        element:<AddProduct></AddProduct>
       },
       { 
        path: "/allProduct", 
        element:<AllProducts></AllProducts>
       },
       {
        path: "/Product/update/:id",
        element: <UpdateProduct />,
      }
    ],
  },
]);

export default Router;
