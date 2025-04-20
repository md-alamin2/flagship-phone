import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import PhoneDetails from "../Pages/PhoneDetails/PhoneDetails";
import Favorites from "../Pages/Favorites/Favorites";
import Errorpage from "../Pages/ErrorPage/Errorpage";
import Carts from "../Pages/Carts/Carts";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
        hydrateFallbackElement: (
          <div className="flex w-52 flex-col gap-4 relative top-[500px] left-[600px]">
            <div className="skeleton h-32 w-full"></div>
            <div className="skeleton h-4 w-28"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
          </div>
        ),
        loader: () => fetch("../phones.json"),
      },
      {
        path: "about",
        Component: About,
      },
      {
        path: "phone-details/:id",
        Component: PhoneDetails,
        loader:()=>fetch("../phones.json")
      },
      {path:"carts",
        Component: Carts
      },
      {
        path: "favorites",
        Component: Favorites,
      },
    ],
    errorElement: <Errorpage></Errorpage>,
  },
]);
