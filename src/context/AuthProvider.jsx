import React, { createContext, useEffect, useState } from 'react';
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';
import app from '../firebase/firebase.config';


export const AuthContext = createContext()
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);

    //sign in with google
    const googleLogin = ()=>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    // Create new user
    const userCreate = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // user Sign up with email & password
    const userLogin = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // log out
    const userLogOut = ()=>{
        return signOut(auth)
    }

    // observer
    useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, currentUser=>{
            // console.log('observing')
            setUser(currentUser)
            setLoading(false)
        });
        return ()=> unSubscribe;
    },[])

    const authInfo = {
        googleLogin,
        userCreate,
        userLogin,
        loading,
        user,
        userLogOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;