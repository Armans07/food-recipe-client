import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/layout/Main/Main";
import Home from "../../Pages/Home/Home";
import ChefsDetails from "../../layouts/layout/ChefsDetails/ChefsDetails";
import Recipe from "../../layouts/Recipe/Recipe";
import Login from "../../Pages/Login/Login/Login";
import ErrorPage from "../../Errorpage/ErrorPage";
import Blog from "../../Blog/Blog";
import Register from "../../Pages/Login/Register/Register";



const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    },
    ,
    {
        path: '/login',
        element: <Login></Login>
    },

    {
        path: '/register',
        element: <Register></Register>
    },
    {
        path: '/blog',
        element: <Blog></Blog>
    },
    {
        path: 'chefs',
        element: <ChefsDetails></ChefsDetails>,
        children: [
            {
                path: ':id',
                element: <Recipe></Recipe>,
                loader: ({ params }) => fetch(`http://localhost:5000/chefs/${params.id}`)
            }
        ]
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }
])

export default router;