import React, { useState } from 'react';
import { useLoaderData, useNavigation } from 'react-router';

const UpdateRecipe = () => {
    const data = useLoaderData();
    const navigate=useNavigation();
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


    const handleUpRecipe = (e) => {
        e.preventDefault();
       

        fetch(`https://recipe-book-server-4l7blp1bb-mayas-projects-2b22cb09.vercel.app/recipe-update/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(recipe)
        })
            .then((res) => res.json())
            .then(data => {
                alert('Update Success');
                navigate('/my-recipes')
                console.log(data);
                
                e.target.reset()
            })



    }

    return (
        <div>
            <div className="max-w-3xl mx-auto p-6 bg-orange-400 shadow-md rounded-md mt-10">
                <h2 className="text-2xl font-semibold mb-6 text-center">Update Recipe</h2>
                {/* <form onSubmit={handleUpRecipe} className="space-y-4">

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
            </form> */}
                <div className="bg-black">
                    <form onSubmit={handleUpRecipe} className="  space-y-4 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">

                        <div className='mx-10 mt-10'>
                            <label htmlFor="">Image</label>
                            <input
                                type="text"
                                name="image"
                                placeholder="Image URL"
                                value={recipe.image}
                                onChange={handleChange}
                                className="w-full border-b border-orange-400"
                            />
                        </div>


                        <div className='mx-10 md:mt-10'>
                            <label htmlFor="">Title</label>
                            <input
                                type="text"
                                name="title"
                                placeholder="Recipe Title"
                                value={recipe.title}
                                onChange={handleChange}
                                className="w-full p-2 border-b border-orange-400 "
                            />
                        </div>


                        <div className='mx-10'>
                            <label htmlFor="">Ingredents</label>
                            <textarea
                                name="ingredients"
                                placeholder="Ingredients"
                                value={recipe.ingredients}
                                onChange={handleChange}
                                className="w-full p-2 border-b border-orange-400"
                                rows="1"
                            />
                        </div>


                        <div className='mx-10'>
                            <label htmlFor="">Instructions</label>
                            <textarea
                                name="instructions"
                                placeholder="Instructions"
                                value={recipe.instructions}
                                onChange={handleChange}
                                className="w-full p-2 border-b border-orange-400"
                                rows="1"
                            />
                        </div>


                        <div className='mx-10'>
                            <label htmlFor="">Cuisine</label>
                            <select
                                name="cuisine"
                                value={recipe.cuisine}
                                onChange={handleChange}
                                className="w-full p-2 border-b border-orange-400 text-white"
                            >
                                <option value="">Select Cuisine Type</option>
                                <option value="Italian" className='text-black'>Italian</option>
                                <option value="Mexican" className='text-black'>Mexican</option>
                                <option value="Indian" className='text-black'>Indian</option>
                                <option value="Chinese" className='text-black'>Chinese</option>
                                <option value="Others" className='text-black'>Others</option>
                            </select>
                        </div>


                        <div className='mx-10'>
                            <label htmlFor="">Prepare Time</label>
                            <input
                                type="number"
                                name="prepTime"
                                placeholder="Preparation Time (in minutes)"
                                value={recipe.prepTime}
                                onChange={handleChange}
                                className="w-full p-2 border-b border-orange-400 "
                            />
                        </div>


                        <div className=" mx-10">
                            <label htmlFor="" className='mb-8'>Category</label>
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


                        <div className='mx-10'>
                            <label htmlFor="">Likes</label>
                            <input
                                type="number"
                                name="likes"
                                value={likes}
                                readOnly
                                className="w-full p-2 border-b border-orange-400  bg-gray-100 text-gray-500"
                            />
                        </div>



                    </form>
                    <button
                        type="submit"
                        className="w-full bg-orange-600 text-white py-2 rounded hover:bg-orange-700 transition"
                    >
                        Update Recipe
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UpdateRecipe;