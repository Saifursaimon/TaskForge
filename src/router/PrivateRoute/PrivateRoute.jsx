import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'
import { Navigate, useLocation } from 'react-router-dom'

const PrivateRoute = ({children}) => {

    const location = useLocation()

    const {user,loading} = useContext(AuthContext)

    if(loading){
        return <span className="loading loading-bars loading-lg"></span>
    }
    if(user){
        return children
    }

    return <Navigate to='/authentication/login' state={{from:location}} replace ></Navigate>
}

export default PrivateRoute