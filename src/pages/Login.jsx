import React, { use } from 'react';
import { AuthContext } from '../context/AuthContext';

const Login = () => {
    const {name} = use(AuthContext);
    return (
        <div>
            {name}
        </div>
    );
};

export default Login;