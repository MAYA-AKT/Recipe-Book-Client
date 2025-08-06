import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import { FaHeart } from "react-icons/fa";


const RecipeDetails = () => {
    const data = useLoaderData();
    const { image, title, likes, cuisine, prepTime, categories, user, ingredients, instructions } = data;
    const [count, setCount] = useState(likes);

    const handleLikeClick = (id) => {
        const newCount = count + 1;
        setCount(newCount);

        fetch(`https://recipe-book-server-blush.vercel.app/like-update/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ likes: newCount })
        })
            .then((res) => res.json())
            .then(data => {
                console.log(data);
            });
    };

    return (
        <>
            <div className=" w-full md:w-11/12 mx-auto my-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <div className=''>
                        <img
                            src={image}
                            alt={title}
                            className=" h-auto rounded-lg shadow-md object-cover"
                        />
                    </div>
                    <div className="">


                        <div className="flex items-center gap-3 pt-4">
                            <img
                                src={user?.photoURL}
                                alt={user?.displayName}
                                className="w-10 h-10 rounded-full"
                            />
                            <div>
                                <p className="font-medium">{user?.displayName}</p>
                                <p className="text-sm text-gray-500">{user?.email}</p>
                            </div>
                        </div>
                        <div className=" my-10 flex-1 ">
                            <h2 className="text-2xl font-bold">{title}</h2>
                            <p className="text-sm text-gray-400"><strong className="text-gray-200">Cuisine:</strong> {cuisine}</p>
                            <p className="text-sm text-gray-400"><strong className="text-gray-200">Prep Time:</strong> {prepTime} min</p>
                            <p className="text-sm text-gray-400"><strong className="text-gray-200">Categories:</strong> {categories?.join(', ')}</p>


                           
                        </div>
                        <div className="">
                            <h3 className="text-2xl font-semibold">Ingredients</h3>
                            <ul className="list-disc list-inside text-gray-300">
                                {ingredients?.split(',').map((item, idx) => (
                                    <li key={idx}>{item.trim()}</li>
                                ))}
                            </ul>

                        </div>
                        <div>

                            <h3 className="text-2xl font-semibold mt-6">Instructions</h3>
                            <ol className="list-decimal list-inside text-gray-300 space-y-1">
                                {instructions?.split(',').map((step, idx) => (
                                    <li key={idx}>{step.trim()}</li>
                                ))}
                            </ol>
                        </div>
                         <button
                                onClick={() => handleLikeClick(data._id)}
                                className="flex items-center transition my-3"
                            >
                                <span className='text-red-600 text-2xl'> <FaHeart /></span> <span className='text-xl'> {count}</span>
                            </button>
                    </div>
                </div>


            </div>

        </>
    );
};

export default RecipeDetails;