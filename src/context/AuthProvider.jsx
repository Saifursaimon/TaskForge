import React, { createContext, useEffect, useState } from 'react'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, updateCurrentUser, updateProfile, signOut } from "firebase/auth";
import { app } from '../firebase/firebas.config';

const auth = getAuth(app)


export const AuthContext = createContext()

const AuthProvider = ({children}) => {

    const [user,setUser] = useState()
    const [loading,setLoading] = useState(true)

    const googleProvider = new GoogleAuthProvider()


    const createUser = (email,password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const updateUser = userInfo  =>{
        return updateProfile(auth.currentUser,userInfo)
    }

    const logIn = (email,password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const googleLogin = ()=>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }

    const LogOut = ()=>{
        return signOut(auth)
    }


    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => unsubscribe()
    },[])

    const authInfo = {createUser, updateUser, logIn, googleLogin,LogOut,user,loading}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider