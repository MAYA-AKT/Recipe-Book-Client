import React from 'react';

const CookingInstraction = () => {
    return (
        <div className='my-10'>
            <h2 className="text-3xl font-bold  mb-10">Cooking Instructions</h2>
            <section className="my-12  bg-gray-800  ">


                <div className="flex flex-col-reverse md:flex-row justify-between gap-6">

                    <div className="flex-1 space-y-6">
                        {[
                            "Gather all ingredients and wash vegetables thoroughly.",
                            "Heat oil in a pan and sauté onions until golden.",
                            "Add tomatoes, spices, and cook until the oil separates.",
                            "Add vegetables/meat and cook until tender.",
                            "Garnish with coriander leaves and serve hot.",
                        ].map((step, index) => (
                            <div
                                key={index}
                                className="border-l-4 border-orange-500 relative"
                            >
                                <span className="absolute -left-6 top-2 bg-orange-500  rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold">
                                    {index + 1}
                                </span>
                                <p className=" ml-6 mb-7 md:my-10">{step}</p>
                            </div>
                        ))}
                    </div>


                    <div className="flex-1 ">
                        <img
                            src="https://i.ibb.co.com/MkLL1HDk/images-q-tbn-ANd9-Gc-Sy-N4-Vszcp-FBd-Jj-Q01v-YXd-SRTt-Xf-Xt-Y-MVO4w-s.jpg"
                            alt="Cooking process"
                            className="rounded-lg shadow-md w-[600px] h-80 object-cover my-7"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CookingInstraction;