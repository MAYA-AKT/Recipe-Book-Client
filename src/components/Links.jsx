import React from 'react';
import { NavLink } from 'react-router';

const Links = () => {
    return (
        <>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/my-recipes'>My Recipes</NavLink>
            <NavLink to='/all-recipes'>All Recipes</NavLink>
            <NavLink to='/add-recipe'>Add Recipe</NavLink>
            
          
        </>
    );
};

export default Links;