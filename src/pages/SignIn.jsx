import React, { use } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router';
import { toast } from 'react-toastify';


const SignIn = () => {
    const { signUser, setUser } = use(AuthContext);
    
    const navigate= useNavigate();

    const handleSignIn = (e) => {
        e.preventDefault();
        const form = e.target;

        const email = form.email.value;
        const password = form.password.value;

        signUser(email, password)
            .then((res) => {
                 toast.success('User Login successfully!');
                console.log(res.user);
                setUser(res.user);
                navigate('/');
            }).catch((err) => {
                console.log(err);
                 toast.error(err.message);
            });


    }
    return (
        <div>
            <div className="card bg-base-100 mx-auto max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <h1>SIgn In</h1>
                    <form onSubmit={handleSignIn} className="fieldset">



                        <label className="label">Email</label>
                        <input type="email" className="input" name='email' placeholder="Email" />
                        <label className="label">Password</label>
                        <input type="password" name='password' className="input" placeholder="Password" />

                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button type='submit' className="btn btn-neutral mt-4">SignIn</button>
                        <div className="flex justify-between mt-3">
                            <p>Dont have an account ? </p>
                            <Link to='/auth/signup' className='underline text-blue-600'>Signup</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignIn;