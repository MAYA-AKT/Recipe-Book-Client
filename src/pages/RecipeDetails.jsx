import React, { useState } from 'react';
import { useLoaderData } from 'react-router';

const RecipeDetails = () => {
    const data = useLoaderData();
 const { image, title, cuisine, prepTime, categories, user, ingredients, instructions } = data;
 const [likes,setLikes] = useState(0);
    return (
        <>
            <div className="max-w-5xl mx-auto p-6">
                <div className="flex flex-col md:flex-row gap-6">
                    <img
                        src={image}
                        alt={title}
                        className="w-full md:w-1/2 h-auto rounded-lg shadow-md object-cover"
                    />
                    <div className="flex-1 space-y-4">
                        <h2 className="text-3xl font-bold">{title}</h2>
                        <p><strong>Cuisine:</strong> {cuisine}</p>
                        <p><strong>Prep Time:</strong> {prepTime} min</p>
                        <p><strong>Categories:</strong> {categories.join(', ')}</p>

                        <div className="flex items-center gap-3 pt-4">
                            <img
                                src={user.photoURL}
                                alt={user.displayName}
                                className="w-10 h-10 rounded-full"
                            />
                            <div>
                                <p className="font-medium">{user.displayName}</p>
                                <p className="text-sm text-gray-500">{user.email}</p>
                            </div>
                        </div>
                        <button
                            onClick={()=>setLikes(likes+1)}
                            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                        >
                            ❤️ Like ({likes})
                        </button>
                    </div>
                </div>

                <div className="mt-8 space-y-4">
                    <h3 className="text-2xl font-semibold">Ingredients</h3>
                    <ul className="list-disc list-inside text-gray-700">
                        {ingredients.split(',').map((item, idx) => (
                            <li key={idx}>{item.trim()}</li>
                        ))}
                    </ul>

                    <h3 className="text-2xl font-semibold mt-6">Instructions</h3>
                    <ol className="list-decimal list-inside text-gray-700 space-y-1">
                        {instructions.split(',').map((step, idx) => (
                            <li key={idx}>{step.trim()}</li>
                        ))}
                    </ol>
                </div>
            </div>
        </>
    );
};

export default RecipeDetails;