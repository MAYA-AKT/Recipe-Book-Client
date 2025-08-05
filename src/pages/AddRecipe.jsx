import React, { use, useState } from 'react';
import { AuthContext } from '../context/AuthContext';

const AddRecipe = () => {
    const { user } = use(AuthContext);
    const [recipe, setRecipe] = useState({
        image: '',
        title: '',
        ingredients: '',
        instructions: '',
        cuisine: '',
        prepTime: '',
        categories: [],
        likes: 0,
    });
    if (!user) {
        return <p className="text-center mt-10">Please log in to add a recipe.</p>;
    }

    const { displayName, email, photoURL, uid } = user;




    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setRecipe({ ...recipe, [name]: value });
    };

    const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;
        let newCategories = [...recipe.categories];
        if (checked) {
            newCategories.push(value);
        } else {
            newCategories = newCategories.filter(cat => cat !== value);
        }
        setRecipe({ ...recipe, categories: newCategories });
    };


    const handleAddRecipe = (e) => {
        e.preventDefault();
        console.log("Submitted Recipe:", recipe);
        const user = {
            displayName, email, photoURL, uid
        }
        const recipeInfo = {
            ...recipe,
            user
        }
        fetch('http://localhost:3000/recipe', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(recipeInfo),
        }).then(res => res.json())
            .then(data => {
                // sweet alart
                console.log('after postdb', data);

            })





    }

    return (
        <>
            <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-md mt-10">
                <h2 className="text-2xl font-semibold mb-6 text-center">Add New Recipe</h2>
                <form onSubmit={handleAddRecipe} className="space-y-4">

                    <input
                        type="text"
                        name="image"
                        placeholder="Image URL"
                        value={recipe.image}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                    />


                    <input
                        type="text"
                        name="title"
                        placeholder="Recipe Title"
                        value={recipe.title}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                    />


                    <textarea
                        name="ingredients"
                        placeholder="Ingredients"
                        value={recipe.ingredients}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        rows="3"
                    />


                    <textarea
                        name="instructions"
                        placeholder="Instructions"
                        value={recipe.instructions}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        rows="4"
                    />


                    <select
                        name="cuisine"
                        value={recipe.cuisine}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                    >
                        <option value="">Select Cuisine Type</option>
                        <option value="Italian">Italian</option>
                        <option value="Mexican">Mexican</option>
                        <option value="Indian">Indian</option>
                        <option value="Chinese">Chinese</option>
                        <option value="Others">Others</option>
                    </select>


                    <input
                        type="number"
                        name="prepTime"
                        placeholder="Preparation Time (in minutes)"
                        value={recipe.prepTime}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                    />


                    <div className="grid grid-cols-2 gap-2">
                        {["Breakfast", "Lunch", "Dinner", "Dessert", "Vegan"].map(cate => (
                            <label key={cate} className="flex items-center space-x-2">
                                <input
                                    type="checkbox"
                                    value={cate}
                                    checked={recipe.categories.includes(cate)}
                                    onChange={handleCheckboxChange}
                                />
                                <span>{cate}</span>
                            </label>
                        ))}
                    </div>


                    <input
                        type="number"
                        name="likes"
                        value={recipe.likes}
                        readOnly
                        className="w-full p-2 border rounded bg-gray-100 text-gray-500"
                    />


                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                    >
                        Add Recipe
                    </button>
                </form>
            </div>
        </>


    );
};

export default AddRecipe;