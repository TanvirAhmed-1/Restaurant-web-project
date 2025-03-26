import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/Root";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import Login from "../Share/Login";
import Register from "../Share/Register";
import ContactUs from "../Pages/ContactUs/ContactUs";
import MenuPage from "../Pages/Menu/MenuPage";

const Router = createBrowserRouter([
{
    path:"/",
    element:<Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
        {
            path:"/",
            element:<Home></Home>,
        },
        {
            path:"/login",
            element:<Login></Login>
        },
        {
            path:"/register",
            element:<Register></Register>
        },
        {
            path:"/contact",
            element:<ContactUs></ContactUs>
        },
        {
            path:"/menu",
            element:<MenuPage></MenuPage>
        }
    ]
},
])


export default Router;