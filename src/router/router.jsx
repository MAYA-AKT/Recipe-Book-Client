 import { createBrowserRouter } from "react-router";
import Root from "../components/Root";
import Home from "../components/Home";
import Login from "../pages/Login";


 export const router = createBrowserRouter([
    {
        path:'/',
        Component:Root,
        errorElement: <p>error</p>,
        children:[
            {
                index:true,
                Component:Home
            },
            {
                path:'login',
                Component:Login
            }
        ]
    }
 ])