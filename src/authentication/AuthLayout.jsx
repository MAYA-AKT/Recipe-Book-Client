import React from 'react';
import SignUp from '../pages/SignUp';
import Header from '../components/Header';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    );
};

export default AuthLayout;