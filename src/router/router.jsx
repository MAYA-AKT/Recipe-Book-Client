import { createBrowserRouter } from "react-router";
import Root from "../components/Root";


import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import MyRecipes from "../pages/MyRecipes";
import AllRecipes from "../pages/AllRecipes";
import AddRecipe from "../pages/AddRecipe";
import AuthLayout from "../authentication/AuthLayout";
import RecipeDetails from "../pages/RecipeDetails";
import UpdateRecipe from "../components/UpdateRecipe";
import ErrorPage from "../pages/ErrorPage";
import PrivateRouter from "./PrivateRouter";


export const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                Component: Home,

            },
            {
                path: 'my-recipes',
                element: (
                    <PrivateRouter>
                        <MyRecipes />
                    </PrivateRouter>
                ),
            },
            {
                path: 'all-recipes',

                Component: AllRecipes,

            },
            {
                path: 'add-recipe',
               element: (
                    <PrivateRouter>
                        <AddRecipe/>
                    </PrivateRouter>
                ),
                errorElement: <ErrorPage />,
            },
            {
                path: 'recipes/:id',
                 loader: ({ params }) => fetch(`http://localhost:3000/recipe-details/${params.id}`),
                 errorElement: <ErrorPage />,
                element: (
                    <PrivateRouter>
                        <RecipeDetails />
                    </PrivateRouter>
                ),
            },
            {
                path: 'recipe-update/:id',
                loader: ({ params }) => fetch(`http://localhost:3000/recipe-details/${params.id}`),
                 errorElement: <ErrorPage />,
                Component: UpdateRecipe

            },

        ]
    },
    {
        path: '/auth',
        Component: AuthLayout,
        children: [
            {
                path: '/auth/signup',
                Component: SignUp
            },
            {
                path: '/auth/signin',
                Component: SignIn,
            }
        ]
    }
])