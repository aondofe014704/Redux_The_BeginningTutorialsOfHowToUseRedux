
import NowPlayingMovies from "../components/NowPlayMovies";
import Layout from "../layout/Layout";
import SignUp from "../app/auth/SignUp";
import Login from "../app/auth/Login";


const ROUTES = [
        { path: '/', 
            element :  <Layout/>,
            children: [
                { path: '/', 
                    element: <NowPlayingMovies />

                }
            ]
            
        },

        {
            path: "/signup",
            element: <SignUp />
        },

        {
            path : "/login",
            element : <Login />
        }
]

export default ROUTES;











// { path: 'about', element: <About /> },
                // { path: 'contact', element: <Contact /> },
                // { path: '', element: <Redirect to="/home" /> 