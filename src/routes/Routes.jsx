import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import Home from '../Pages/Home/Home/Home'
import Login from '../login/Login';
import Blog from '../Pages/Blog/Blog';
const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [{
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
          path:'/blog',
          element: <Blog></Blog>
        }
    ]}
])
export default router;