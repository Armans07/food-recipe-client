import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/layout/Main/Main";
import Home from "../../Pages/Home/Home";
import ChefsDetails from "../../layouts/layout/ChefsDetails/ChefsDetails";
import Recipe from "../../layouts/Recipe/Recipe";
 


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
    {
        path: 'chefs',
        element: <ChefsDetails></ChefsDetails>,
        children: [
            {
                path: ':id',
                element:<Recipe></Recipe>,
                loader: ({params}) => fetch(`http://localhost:5000/chefs/${params.id}`)
            }
        ]
    }
])

export default router;