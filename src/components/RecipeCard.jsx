import React from 'react';
import { Link } from 'react-router';

const RecipeCard = ({recipe}) => {
    return (
        <div key={recipe?._id} className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col">
            <img src={recipe?.image} alt={recipe?.title} className="w-full h-48 object-cover" />

            <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-2">{recipe?.title}</h3>
                <p className="text-sm text-gray-600 mb-1"><strong>Cuisine:</strong> {recipe?.cuisine}</p>
                <p className="text-sm text-gray-600 mb-1"><strong>Prep Time:</strong> {recipe?.prepTime} min</p>
                <p className="text-sm text-gray-600 mb-3">
                    <strong>Categories:</strong> {recipe?.categories?.join(', ')}
                </p>

                <div className="mt-auto">
                    <Link to={`/recipes/${recipe?._id}`}>
                        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition">
                            See Details
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default RecipeCard;