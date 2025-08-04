import { Link } from "react-router";



const MyRecipeCard = ({ recipe }) => {
    const {_id, title, image, cuisine, prepTime, ingredients, instructions, likes, categories } = recipe;





    return (
        <div>
            <div key={recipe._id} className="bg-white rounded-xl shadow p-4 flex flex-col">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-48 object-cover rounded mb-3"
                />
                <h3 className="text-xl font-semibold mb-1">{title}</h3>
                <p className="text-sm text-gray-700"><strong>Cuisine:</strong> {cuisine}</p>
                <p className="text-sm text-gray-700"><strong>Prep Time:</strong> {prepTime} min</p>
                <p className="text-sm text-gray-700"><strong>Categories:</strong> {categories?.join(', ')}</p>
                <p className="text-sm mt-2"><strong>Ingredients:</strong></p>
                <ul className="text-sm list-disc list-inside text-gray-600">
                    {ingredients?.split(',').map((item, idx) => (
                        <li key={idx}>{item.trim()}</li>
                    ))}
                </ul>
                <p className="text-sm mt-2"><strong>Instructions:</strong></p>
                <ol className="text-sm list-decimal list-inside text-gray-600">
                    {instructions?.split(',').map((step, idx) => (
                        <li key={idx}>{step.trim()}</li>
                    ))}
                </ol>
                <p className="text-sm mt-2"><strong>Likes:</strong> {likes}</p>


                <div>
                    <Link to={`/recipe-update/${_id}`}>
                        <button className="btn btn-primary">Update</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default MyRecipeCard;