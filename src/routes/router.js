import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import AddService from "../pages/AddService/AddService";
import Blog from "../pages/Blog/Blog";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import ProfileDetails from "../pages/Home/Profile/ProfileDetails";
import Login from "../pages/Login/Login";
import MyReviewPage from "../pages/MyReview/MyReviewPage";
import Register from "../pages/Register/Register";
import Reviews from "../pages/Reviews/Reviews";
import ServiceDetails from "../pages/ServicesPage/ServiceDetails/ServiceDetails";
import ServicesPage from "../pages/ServicesPage/ServicesPage";
import PrivateRouter from "./PrivateRouter/PrivateRouter";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: "/services",
                element: <ServicesPage></ServicesPage>
            },
            {
                path: "/services/:id",
                loader: ({ params }) => {
                    return fetch(`https://law-firm-server.vercel.app/allServices/${params.id}`)
                },
                element: <ServiceDetails></ServiceDetails>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/my_review",
                element: <PrivateRouter> <MyReviewPage></MyReviewPage> </PrivateRouter>
                // element: <MyReviewPage></MyReviewPage>
            },
            {
                path: '/add_services',
                element: <PrivateRouter><AddService></AddService></PrivateRouter>
                // element: <AddService></AddService>
            },
            {
                path: '/add_review/:id',
                loader: ({ params }) => {
                    return fetch(`https://law-firm-server.vercel.app/allServices/${params.id}`)
                },
                element: <PrivateRouter><Reviews></Reviews></PrivateRouter>
                // element: <Reviews></Reviews>
            },
            {
                path: "/blog",
                element: <Blog></Blog>
            },
            {
                path: "/profile_details/:id",
                element: <PrivateRouter><ProfileDetails></ProfileDetails></PrivateRouter>,
                loader: ({ params }) => {
                    return fetch(`https://law-firm-server.vercel.app/profile_details/${params.id}`)
                }
            }

        ]
    }
])

export default router;