import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import AuthLayout from "../../layout/AuthLayout";
import Register from "../../pages/Register/Register";
import DashboardLayout from "../../layout/DashboardLayout";
import Profile from "../../pages/Dashboard/Profile/Profile";
import MyTask from "../../pages/Dashboard/MyTask/MyTask";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element:<Main></Main>,
        children: [
            {
                path: '/',
                element:<Home></Home>
            }
        ],
    },
    {
        path: '/authentication',
        element:<AuthLayout></AuthLayout>,
        children: [
            {
                path:'login',
                element:<Login></Login>
            },
            {
                path:'register',
                element:<Register></Register>
            }
        ],
    },
    {
        path: '/dashboard',
        element:<DashboardLayout></DashboardLayout>,
        children: [
            {
                path:'profile',
                element:<PrivateRoute><Profile></Profile></PrivateRoute>
            },
            {
                path:'mytask',
                element:<PrivateRoute><MyTask></MyTask></PrivateRoute>
            }
        ],
    }
])