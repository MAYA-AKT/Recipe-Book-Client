import React from 'react';
import { Outlet } from 'react-router';
import Header from './Header';



const Root = () => {
   
    return (
        <div className='w-10/12 mx-auto'>
                 <Header/>
                 <Outlet />
                
        </div>
    );
};

export default Root;