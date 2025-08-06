import { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { FaHeart } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { MdSystemUpdateAlt } from "react-icons/md";





const MyRecipeCard = ({ recipe }) => {
    const { myRecipes, setMyRecipes } = use(AuthContext);
    const { _id, title, image, cuisine, prepTime, ingredients, instructions, likes, categories } = recipe;


    const handleDeleteRecipe = (id) => {
        fetch(`http://localhost:3000/recipe-delete/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    const remainigRecipe = myRecipes.filter(recipe => recipe._id !== id);
                    setMyRecipes(remainigRecipe);
                    alert('recipe delete');
                }
            })

    }


    return (
        <div className="flex">
            <div key={recipe._id} className="w-110 bg-black-500 border-1 border-gray-700 rounded-xl  flex flex-col">
                <div>
                    {image ? (
                        <img
                            src={image}
                            alt={title}
                            className="w-full h-48 object-cover rounded mb-3"
                        />
                    ) : (
                        <div className="w-full h-48 bg-gray-200 rounded mb-3 flex items-center justify-center text-gray-500 text-sm">
                            No Image Available
                        </div>
                    )}
                </div>

                <div className="flex-1 m-4 ml-7">
                    <div className="flex justify-between">
                        <h3 className="text-xl font-semibold mb-4">{title}</h3>
                        <p className="flex items-center text-xl">
                            <span className="text-red-600"><FaHeart /></span>
                            <span className="text-gray-400"> {likes || 0}</span>
                        </p>
                    </div>

                    <p className="text-sm text-gray-400"><strong className="text-gray-200">Cuisine:</strong> {cuisine}</p>
                    <p className="text-sm text-gray-400"><strong className="text-gray-200">Prep Time:</strong> {prepTime} min</p>
                    <p className="text-sm text-gray-400"><strong className="text-gray-200">Categories:</strong> {categories?.join(', ')}</p>

                    <div className="mt-4">
                        <p className="text-sm mt-2"><strong>Ingredients:</strong></p>
                        <ul className="text-sm text-gray-400 list-disc list-inside ">
                            {ingredients?.split(',').map((item, idx) => (
                                <li key={idx}>{item.trim()}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="pl-4">
                        <p className="text-sm mt-2"><strong>Instructions:</strong></p>
                        <ol className="text-sm  list-decimal list-inside text-gray-400">
                            {instructions?.split(',').map((step, idx) => (
                                <li key={idx}>{step.trim()}</li>
                            ))}
                        </ol>
                    </div>


                </div>
                <div className="flex-0 flex justify-between  my-3 mx-4">
                    <Link to={`/recipe-update/${_id}`}>
                        <button className="text-blue-500 text-2xl" title="Update">
                            <MdSystemUpdateAlt />
                        </button>
                    </Link>
                    <button
                        onClick={() => handleDeleteRecipe(_id)}
                        className="text-gray-400 text-3xl"
                        title="Delete"
                    >
                        <MdDelete />
                    </button>
                </div>
            </div>
        </div>

    );
};

export default MyRecipeCard;