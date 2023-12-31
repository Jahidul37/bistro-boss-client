import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Secret from "../Shared/Secret/Secret";
import DashBoard from "../LayOut/DashBoard";
import Mycart from "../pages/DashBoard/Mycart/Mycart";
import AllUsers from "../pages/DashBoard/AllUsers/AllUsers";
// import ShopingCard from "../pages/ShopingCard/ShopingCard";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,

            },
            {
                path: 'menu',
                element: <Menu></Menu>,

            },
            {
                path: 'order/:category',
                element: <Order></Order>,
            },
            // {
            //     path: '/',
            //     element: <ShopingCard></ShopingCard>
            // },
            {
                path: 'login',
                element: <Login></Login>,
            },
            {
                path: 'signup',
                element: <SignUp></SignUp>,
            },
            {
                path: 'secret',
                element: <PrivateRoute><Secret></Secret></PrivateRoute>,
            },
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
        children: [
            {
                path: 'mycart',
                element: <Mycart></Mycart>
            },
            {
                path: 'users',
                element: <AllUsers></AllUsers>
            },
        ]
    },
]);