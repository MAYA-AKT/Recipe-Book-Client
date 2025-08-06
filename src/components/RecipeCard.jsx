import React from 'react';
import { Link } from 'react-router';
import { FaHeart } from "react-icons/fa";



const RecipeCard = ({ recipe }) => {
    const { _id, title, image, likes, cuisine, prepTime, categories } = recipe;
    return (
        <div key={_id} className="bg-black-500 border-1 border-gray-700 overflow-hidden flex flex-col">
            <img src={image} alt={title} className="w-full h-48 object-cover" />

            <div className="m-4 flex flex-col flex-grow">
                <div className='flex justify-between my-3'>
                    <h3 className="text-xl font-semibold ">{title}</h3>
                    <p className=" flex items-center text-xl" title='Like'>
                        <span className='text-red-600 '><FaHeart /></span>
                        <span className='text-gray-400  '> {likes || 0}</span></p>
                </div>
                <p className="text-sm text-gray-400"><strong className="text-gray-200">Cuisine:</strong> {cuisine}</p>
                <p className="text-sm text-gray-400"><strong className="text-gray-200">Prep Time:</strong> {prepTime} min</p>
                <p className="text-sm text-gray-400"><strong className="text-gray-200">Categories:</strong> {categories?.join(', ')}</p>

                <div className="flex justify-end">
                    <Link to={`/recipes/${_id}`} className=''>

                        See Details

                    </Link>
                </div>
            </div>
        </div>
    );
};

export default RecipeCard;