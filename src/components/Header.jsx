import React, { use } from 'react';
import Links from './Links';
import { Link } from 'react-router';
import { AuthContext } from '../context/AuthContext';

const Header = () => {
    const { user ,logOut} = use(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {
                console.log('successfully logout');

            }).catch((error) => {
                console.log(error);

            });

    }

    return (
        <div>
            <div className="navbar ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow ">
                            <Links />
                        </ul>
                    </div>
                    <p className=" ">TastyBook</p>
                    <p>{user?.displayName}</p>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <Links />
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <button onClick={handleLogOut}>Logout</button> :
                            <button>
                                <Link to='/auth/signup'>SignUp</Link>
                            </button>
                    }


                </div>
            </div>
        </div>
    );
};

export default Header;