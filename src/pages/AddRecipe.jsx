import React, { use, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { IoMdAdd } from "react-icons/io";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';

const AddRecipe = () => {
    const { user } = use(AuthContext);
    const navigate = useNavigate();
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
        console.log("Submitted Recipe:", recipe);
        e.preventDefault();

        const user = {
            displayName, email, photoURL, uid
        }
        const recipeInfo = {
            ...recipe,
            user
        }
        fetch('https://recipe-book-server-blush.vercel.app/recipe', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(recipeInfo),
        }).then(res => res.json())
            .then(data => {
                toast.success('User Login successfully!');
                console.log('after postdb', data);
                navigate('/');
            })





    }

    return (
        <div className="max-w-6xl mx-auto p-6  shadow-md rounded-md my-10">
            <h2 className=" flex items-center justify-end text-2xl font-semibold my-10"><span><IoMdAdd /></span> Add New Recipe </h2>
            <div className=" bg-black">

                <form onSubmit={handleAddRecipe} className="  space-y-4 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">

                    <div className='mx-10 mt-10'>
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
                        <input
                            type="number"
                            name="likes"
                            value={recipe.likes}
                            readOnly
                            className="w-full p-2 border-b border-orange-400  bg-gray-100 text-gray-500"
                        />
                    </div>

                    <button
                        type="submit"

                        className="m-5  btn inline-block bg-orange-600 text-white py-2 px-7 rounded hover:bg-orange-700 transition"
                    >
                        Add Recipe
                    </button>

                </form>

            </div>
        </div>


    );
};

export default AddRecipe;