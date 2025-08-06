import React, { use } from 'react';
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from '../context/AuthContext';

const PrivateRouter = ({ children }) => {
    const location = useLocation();
    const { user ,loading} = use(AuthContext);
    if (loading) {
        return <div className='flex justify-center my-20'><span className="loading loading-dots loading-xl"></span></div>
    }
    if (user && user.email) {
        return children;
    }

    return <Navigate state={location?.pathname} to='/auth/signin' ></Navigate>
};

export default PrivateRouter;