import React from 'react';
import SignUp from '../pages/SignUp';
import Header from '../components/Header';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';

const AuthLayout = () => {
    return (
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
        
    );
};

export default AuthLayout;