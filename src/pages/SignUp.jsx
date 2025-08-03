import React, { use } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router';

const SignUp = () => {

    const { setUser, createUser, userUp } = use(AuthContext);
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
                alert('User Create Success');
                navigate('/');
            }).catch(err => {
                console.log(err.message);

            })

    }
    return (
        <div>
            <div className="card bg-base-100 mx-auto max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">

                    <form onSubmit={handleSignUp} className="fieldset">

                        <label className="label">name</label>
                        <input type="text" className="input" name='name' placeholder="name" />

                        <label className="label">Email</label>
                        <input type="email" className="input" name='email' placeholder="Email" />
                        <label className="label">Password</label>
                        <input type="password" className="input" name='password' placeholder="Email" />

                        <label className="label">Photo</label>
                        <input type="text" className="input" name='photo' placeholder="photo" />

                        <button type='submit' className="btn btn-neutral mt-4">Sign Up</button>
                        <div className="flex justify-between mt-3">
                            <p>Already have an account ? </p>
                            <Link to='/auth/signin' className='underline text-blue-600'>SignIn</Link>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default SignUp;