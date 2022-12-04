import React from 'react'
import { useContext, useState, useEffect } from 'react'
import { auth } from '../firebase-config'

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export default function AuthProvider({ children }) {

    const [user, setUser] = useState()

    function signUp(email, passsword) {
        return auth.createUserWithEmailAndPassword(email, passsword)
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(currUser => {
            setUser(currUser)
        })
        return unsubscribe
    }, [])



    const value = {
        user,
        signUp
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
