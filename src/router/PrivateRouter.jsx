import React, { use } from 'react';
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from '../context/AuthContext';

const PrivateRouter = ({children}) => {
    const location = useLocation();
    const {user} = use(AuthContext);
    if(user && user.email){
        return children;
    }
    
    return <Navigate state={location?.pathname} to='/auth/signin' ></Navigate>
};

export default PrivateRouter;