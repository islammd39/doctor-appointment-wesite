import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Appointment from "../../Pages/Appointment/Appointment";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Log/Login";
import SignUp from "../../Pages/Log/SignUp";
import PageNotFound from "../../Pages/PageNotFound/PageNotFound";
import PrivateRouter from "../Private/PrivateRouter";

export const router = createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/appointment",
                element:<Appointment></Appointment>
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/signup",
                element:<SignUp></SignUp>
            },
            {
                path:"*",
                element:<PageNotFound></PageNotFound>
            }
        ]
    },
    {
        path:"/dashboard",
        element:<PrivateRouter><Dashboard></Dashboard></PrivateRouter>
    }
])