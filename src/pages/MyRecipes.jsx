import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';

const MyRecipes = () => {
    const {user} = use(AuthContext);
    const [myRecipes, setMyRecipes] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3000/my-recipes?email=${user.email}`)
            .then((res) => res.json())
            .then(data => {
                setMyRecipes(data);
            })
    }, [user.email]);

    console.log(myRecipes);
    return (
        <div>

        </div>
    );
};

export default MyRecipes;