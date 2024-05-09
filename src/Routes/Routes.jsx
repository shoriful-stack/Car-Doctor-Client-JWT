import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import BookingService from "../Pages/BookingService";
import Bookings from "../Pages/Bookings";
import PrivateRoute from "../Layout/PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/signUp",
                element: <SignUp></SignUp>
            },
            {
                path: "/book/:id",
                element: <BookingService></BookingService>,
                loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/bookings',
                element: <PrivateRoute>
                    <Bookings></Bookings>
                </PrivateRoute>
            }
        ],
    },
]);
export default router;