import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ServicesPage from "../pages/ServicesPage/ServicesPage";
import ServiceDetails from "../pages/Shared/ServiceDetails/ServiceDetails";

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
            }, 
            {
                path:"/services", 
                loader: ()=>{
                    return fetch("http://localhost:5000/allServices")
                },
                element: <ServicesPage></ServicesPage>
            }, 
            {
                path:"/services/:id", 
                loader: ({params}) =>{
                    return fetch(`http://localhost:5000/allServices/${params.id}`)
                }, 
                element: <ServiceDetails></ServiceDetails>
            }, 
            {
                path:"/login",
                element: <Login></Login>
            }, 
            {
                path:"/register", 
                element: <Register></Register>
            }
        ]
    }
])

export default router;