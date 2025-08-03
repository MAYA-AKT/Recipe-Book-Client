import React, { Children, useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    onAuthStateChanged,
    signOut
} from "firebase/auth";


import { auth } from '../firebase/firebase.init';
const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [recipes, setRecipes] = useState([]);

    //    fetch all recipe data
    useEffect(() => {
        fetch('http://localhost:3000/all-recipe')
            .then(res => res.json())
            .then(data => setRecipes(data))
            .catch(err => console.error('Failed to fetch recipes:', err));
    }, [])






    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const userUp = (upUser) => {

        return updateProfile(auth.currentUser, upUser)
    };

    const logOut = () => {
        return signOut(auth);
    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currUser) => {
            setUser(currUser);

        })
        return () => {
            unSubscribe();
        }
    }, [])



    const info = {
        user,
        setUser,
        createUser,
        signUser,
        userUp,
        logOut,
        setRecipes,
        recipes
    }



    return <AuthContext value={info}>{children}</AuthContext>
};

export default AuthProvider;