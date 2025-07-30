import React, { Children } from 'react';
import { AuthContext } from './AuthContext';

const AuthProvider = ({children}) => {
    
   const info={
    name:'maya'
   }



    return <AuthContext value={info}>{children}</AuthContext>
};

export default AuthProvider;