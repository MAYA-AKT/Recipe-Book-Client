import React from 'react';
import { Outlet } from 'react-router';
import Header from './Header';
import Footer from './Footer';



const Root = () => {

    return (
        <>
            <div className="min-h-screen flex flex-col">

                <div className="w-11/12 md:w-10/12 mx-auto flex-1">
                    <Header />
                    <div>
                        <Outlet />
                    </div>
                </div>


                <div className=''>
                    <Footer />
                </div>
            </div>

        </>
    );
};

export default Root;