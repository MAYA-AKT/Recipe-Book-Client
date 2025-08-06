import React from 'react';

const Banner = () => {
    return (
        <div className=''>
            <div className="relative bg-cover bg-center h-[400px]" >
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center px-4">
                    <h1 className="text-3xl md:text-5xl font-bold mb-4">🍽️ Discover, Share & Savor Recipes!</h1>
                    <p className="text-lg md:text-xl mb-6">Add your own, like others’, and keep your kitchen organized.</p>
                    <button className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition">
                        Get Started
                    </button>
                </div>
            </div>

        </div>
    );
};

export default Banner;