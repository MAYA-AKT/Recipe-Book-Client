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


export const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        errorElement: <p>error</p>,
        children: [
            {
                index: true,
                Component: Home,

            },
            {
                path: 'my-recipes',
                Component: MyRecipes
            },
            {
                path: 'all-recipes',
               
                Component: AllRecipes,

            },
            {
                path: 'add-recipe',
                Component: AddRecipe,
                ErrorBoundary: <p>error</p>
            },
            {
                path:'recipes/:id',
                loader:({params})=>fetch(`http://localhost:3000/recipe-details/${params.id}`),
                hydrateFallbackElement:<p>error</p>,
                Component:RecipeDetails
            }

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