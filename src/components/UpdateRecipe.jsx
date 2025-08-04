import React, { useState } from 'react';
import { useLoaderData } from 'react-router';

const UpdateRecipe = () => {
    const data = useLoaderData();
    const { _id, image, title, cuisine, prepTime, categories, likes, ingredients, instructions } = data;


    const [recipe, setRecipe] = useState({
        image,
        title,
        ingredients,
        instructions,
        cuisine,
        prepTime,
        categories,
        likes: 0,
    });

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
        console.log('after update ', recipe);

        fetch(`http://localhost:3000/recipe-update/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(recipe)
        })
            .then((res) => res.json())
            .then(data => {
                console.log('update response data',data);
                e.target.reset()
            })
  


}

return (
    <div>
        <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-md mt-10">
            <h2 className="text-2xl font-semibold mb-6 text-center">Add New Recipe</h2>
            <form onSubmit={handleAddRecipe} className="space-y-4">

                <input
                    type="text"
                    name="image"
                    placeholder="Image URL"
                    defaultValue={image}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                />


                <input
                    type="text"
                    name="title"
                    placeholder="Recipe Title"
                    defaultValue={title}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                />


                <textarea
                    name="ingredients"
                    placeholder="Ingredients"
                    defaultValue={ingredients}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    rows="3"
                />


                <textarea
                    name="instructions"
                    placeholder="Instructions"
                    defaultValue={instructions}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    rows="4"
                />


                <select
                    name="cuisine"
                    defaultValue={cuisine}
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
                    defaultValue={prepTime}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                />


                <div className="grid grid-cols-2 gap-2">
                    {["Breakfast", "Lunch", "Dinner", "Dessert", "Vegan"].map(cate => (
                        <label key={cate} className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                defaultValue={cate}
                                defaultChecked={categories.includes(cate)}
                                onChange={handleCheckboxChange}
                            />
                            <span>{cate}</span>
                        </label>
                    ))}
                </div>


                <input
                    type="number"
                    name="likes"
                    defaultValue={likes}
                    readOnly
                    className="w-full p-2 border rounded bg-gray-100 text-gray-500"
                />


                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                >
                   Update Recipe
                </button>
            </form>
        </div>
    </div>
);
};

export default UpdateRecipe;