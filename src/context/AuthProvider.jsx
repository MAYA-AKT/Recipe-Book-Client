import React, { Children, useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    onAuthStateChanged,
    signOut,
    signInWithPopup,
    GoogleAuthProvider
} from "firebase/auth";
import { auth } from '../firebase/firebase.init';







const AuthProvider = ({ children }) => {

    const provider = new GoogleAuthProvider();


    const [user, setUser] = useState(null);
    const [recipes, setRecipes] = useState([]);
    const [myRecipes, setMyRecipes] = useState([]);
    const [topRecipes, setTopRecipes] = useState([]);






    //    fetch top Products 
    useEffect(() => {
        fetch(`https://recipe-book-server-4l7blp1bb-mayas-projects-2b22cb09.vercel.app/top-recipes`)
            .then((res) => res.json())
            .then((data) => {
                setTopRecipes(data);
            })
    }, [])



    //    fetch all recipe data
    useEffect(() => {
        fetch('https://recipe-book-server-4l7blp1bb-mayas-projects-2b22cb09.vercel.app/all-recipe')
            .then(res => res.json())
            .then(data => setRecipes(data))
            .catch(err => console.error('Failed to fetch recipes:', err));
    }, [])




   const signInWithGoogle=()=>{
    return signInWithPopup(auth,provider);
   }

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
        signInWithGoogle,
        createUser,
        signUser,
        userUp,
        logOut,
        setRecipes,
        recipes,
        myRecipes,
        setMyRecipes,
        topRecipes,
        setTopRecipes
    }



    return <AuthContext value={info}>{children}</AuthContext>
};

export default AuthProvider;