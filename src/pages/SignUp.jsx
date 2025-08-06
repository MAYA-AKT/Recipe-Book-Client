import React, { use } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router';
import { FcGoogle } from "react-icons/fc";

import { toast } from 'react-toastify';

const SignUp = () => {

    const { setUser, createUser, userUp, signInWithGoogle } = use(AuthContext);
    const navigate = useNavigate();



    const handleSignUp = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const { email, password, photo, name } = Object.fromEntries(formData.entries());

        createUser(email, password)
            .then((res) => {
                const user = res.user;
                userUp({ displayName: name, photoURL: photo })
                    .then(() => {
                        setUser({ ...user, displayName: name, photoURL: photo });
                        console.log(user);


                    }).catch((err) => {
                        console.log(err);

                    })
                toast.success('Account created successfully!');
                navigate('/');
            }).catch(err => {
                console.log(err.message);
                toast.error(err.message);
            })

    }


    const googleSignin = (e) => {
        e.preventDefault();
        signInWithGoogle()
            .then((res) => {
                setUser(res.user);
                navigate('/');
            }).catch(error => {

                const errorMessage = error.message;
                console.log(errorMessage);

            })

    }

    return (
        <>

            <div className=" flex mx-auto mt-10 items-center justify-center">
                <div className="shadow-2xl  p-8 rounded-lg w-full max-w-sm">
                    <form onSubmit={handleSignUp} className="space-y-4">
                        <input
                            type="text"
                            className="input w-full border-0 border-b outline-none focus:outline-none"
                            name="name"
                            placeholder="Name"
                        />

                        <input
                            type="email"
                            className="input w-full border-0 border-b outline-none focus:outline-none"
                            name="email"
                            placeholder="Email"
                        />

                        <input
                            type="password"
                            className="input w-full border-0 border-b outline-none focus:outline-none"
                            name="password"
                            placeholder="Password"
                        />

                        <input
                            type="text"
                            className="input w-full border-0 border-b outline-none focus:outline-none"
                            name="photo"
                            placeholder="Photo URL"
                        />

                        <button type="submit" className="btn btn-neutral w-full mt-4">
                            Sign Up
                        </button>

                        <button
                            onClick={googleSignin}
                            type="button"
                            className="flex items-center py-3 justify-center gap-3 w-full border border-gray-300 rounded-md bg-white shadow hover:shadow-md transition"
                        >
                            <FcGoogle className="text-xl" />
                            <span className="text-sm font-medium text-gray-700">
                                Sign in with Google
                            </span>
                        </button>

                        <div className="flex justify-between items-center text-sm pt-2">
                            <p>Already have an account?</p>
                            <Link to="/auth/signin" className="text-blue-600 underline">
                                Sign In
                            </Link>
                        </div>
                    </form>
                </div>
            </div>

        </>
    );
};

export default SignUp;