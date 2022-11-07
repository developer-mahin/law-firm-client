import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";

const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            {
                path:"/",
                element: <Home></Home>
            }, 
            {
                path:'/home', 
                element:<Home></Home>
            }
        ]
    }
])

export default router;