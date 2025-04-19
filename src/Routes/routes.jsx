import { createBrowserRouter }  from "react-router";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import PhoneDetails from "../Pages/PhoneDetails/PhoneDetails";
import Favorites from "../Pages/Favorites/Favorites";
import Errorpage from "../Pages/ErrorPage/Errorpage";


export const router = createBrowserRouter([
    {
        path:"/",
        Component: Root,
        children:[
            {index:true, Component:Home},
            {
                path:"about",
                Component:About
            },
            {
                path:"phone-details",
                Component:PhoneDetails
            },
            {
                path:"favorites",
                Component:Favorites
            }
        ],
        errorElement:<Errorpage></Errorpage>
    }
])

