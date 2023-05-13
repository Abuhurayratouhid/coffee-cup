import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import Menu from "../pages/menu/Menu";
import Login from "../pages/login/Login";
import SignUp from "../pages/login/SignUp";
import AllMenu from "../pages/home/AllMenu";
import PrivetRoute from "./PrivetRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/menu',
                element: <PrivetRoute><Menu/></PrivetRoute>
            },
            {
                path: '/allMenu',
                element: <PrivetRoute><AllMenu/></PrivetRoute>
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/signUp',
                element: <SignUp/>
            },
        ]

    }
])

export default router;