import React from 'react';
import { NavLink } from 'react-router';

const Links = () => {
    return (
        <div className='space-x-4 font-bold'>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/my-recipes'>My Recipes</NavLink>
            <NavLink to='/all-recipes'>All Recipes</NavLink>
            <NavLink to='/add-recipe'>Add Recipe</NavLink>
            
          
        </div>
    );
};

export default Links;