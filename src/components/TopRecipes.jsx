import React from 'react';
import { use } from 'react';
import { AuthContext } from '../context/AuthContext';
import TopRecipeCard from './TopRecipeCard';
import { Link } from 'react-router';



const TopRecipes = () => {
    const { topRecipes } = use(AuthContext);
    console.log(topRecipes);

    if (topRecipes.length == 0) {
        return <p>Please Add Recipes </p>
    }

    return (
        <div className=" w-full md:w-11/12 mx-auto my-10">
            <h2 className="text-3xl font-bold mb-6 ">Top Recipes</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {topRecipes.map(recipe => <TopRecipeCard key={recipe._id} recipe={recipe} />)}
            </div>
            <div>
                <Link
                    to={`/all-recipes`}
                    className="flex items-center justify-end text-xl underline"
                >
                    See All Recipes
                   
                </Link>
            </div>
        </div>
    );
};

export default TopRecipes;