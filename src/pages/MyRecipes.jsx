import React, { use, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';
import MyRecipeCard from '../components/MyRecipeCard';


const MyRecipes = () => {
    const { user,myRecipes, setMyRecipes } = use(AuthContext);
  

    useEffect(() => {
        fetch(`http://localhost:3000/my-recipes?email=${user?.email}`)
            .then((res) => res.json())
            .then(data => {
                setMyRecipes(data);
            })
    }, [user?.email]);





    return (
        <div className="w-full md:w-11/12 mx-auto p-6 my-10">
            <h2 className="text-2xl font-bold mb-6 ">My Recipes</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {myRecipes?.map(recipe => <MyRecipeCard key={recipe._id} recipe={recipe} />)}
            </div>





        </div>
    );
};

export default MyRecipes;