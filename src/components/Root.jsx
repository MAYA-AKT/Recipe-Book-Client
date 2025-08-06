import React from 'react';
import { Outlet } from 'react-router';
import Header from './Header';
import Footer from './Footer';



const Root = () => {
   
    return (
        <div className=' w-11/12 md:w-10/12 mx-auto'>
                 <Header/>
                 <Outlet />
                 <Footer/>
                
        </div>
    );
};

export default Root;