import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../Pages/Blog/Blog";
import FAQ from "../../Pages/FAQ/FAQ";
import Categories from "../../Pages/Categories/Categories";
import Home from "../../Pages/Home/Home";
import AboutUs from "../../Pages/AboutUs/AboutUs";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import TermsAndConditions from "../../Pages/Others/TermsAndConditions/TermsAndConditions";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Profile from "../../Pages/Others/Profile/Profile";
import FourZeroFour from "../../Pages/Others/FourZeroFour/FourZeroFour";
import CourseDetail from "../../Pages/CourseDetails/CourseDetail";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                loader: async () => {
                    return fetch('http://localhost:5000/courseCategories');
                },
                element: <Home></Home>
            },
            {
                path: '/home',
                loader: async () => {
                    return fetch('http://localhost:5000/courseCategories');
                },
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            // {
            //     path: '/category:id',
            //     element: <Home></Home>
            // },
            {
                path: '/courseCategories',
                loader: async () => {
                    return fetch('http://localhost:5000/courseCategories');
                },
                element: <Categories></Categories>
            },

            {
                path: '/courseCategories/:id',
                // element: <Categories></Categories>,
                element: <CourseDetail></CourseDetail>,
                loader: ({ params }) => fetch(`http://localhost:5000/courseCategories/${params.id}`)
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>
            },
            {
                path: '/about',
                element: <AboutUs></AboutUs>
            },
            {
                path: '/terms',
                element: <TermsAndConditions></TermsAndConditions>
            },
            {
                path: '/profile',
                element: <PrivateRoute><Profile></Profile></PrivateRoute>
            }
        ]

    },
    { path: '*', element: <FourZeroFour></FourZeroFour> }
    // <div><h2 className='mt-5'>404 Route Not Found</h2></div>
])