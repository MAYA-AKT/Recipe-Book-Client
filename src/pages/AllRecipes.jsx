import { use  } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router";
import RecipeCard from "../components/RecipeCard";

const AllRecipes = () => {
    const { recipes } = use(AuthContext);
   
   

    return (
        <div>
            <div className="md:w-11/12 mx-auto my-10 px-4 py-8">
                <h2 className="text-2xl font-bold mb-6">All Recipes</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    
                     {
                        recipes?.map((recipe)=> <RecipeCard key={recipe._id} recipe={recipe} /> )
                     }
                </div> 
            </div>
        </div>
    );
};

export default AllRecipes;



