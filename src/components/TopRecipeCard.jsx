import React from 'react';
import { Link } from 'react-router';
import { FaHeart } from "react-icons/fa";

const TopRecipeCard = ({ recipe }) => {
    const { _id, image, title, cuisine, likes } = recipe;
    return (
        <>
            <div
                key={_id}
                className="bg-black-500 border-1 border-gray-700 rounded-lg"
            >
                <img
                    src={image || 'https://via.placeholder.com/300'}
                    alt={title}
                    className="w-full h-48 object-cover rounded"
                />
                <div className='m-4'>
                    <div className='flex justify-between'>
                        <h3 className="text-xl font-semibold ">{title}</h3>
                        <p className=" flex items-center text-xl">
                            <span className='text-red-600 '><FaHeart /></span>
                            <span className='text-gray-400  '> {likes || 0}</span></p>
                    </div>

                    <p className="text-gray-400 text-sm"> <strong className='text-gray-200'>Cuisine:</strong> {cuisine}</p>

                    <Link
                        to={`/recipes/${_id}`}
                        className="flex justify-end pr-3"
                    >
                        View Details
                    </Link>
                </div>
            </div>
        </>
    );
};

export default TopRecipeCard;