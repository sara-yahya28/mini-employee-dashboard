import {createContext, useState} from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage';

export const AuthContext = createContext()

export function AuthProvider({children}) {
    const [isAuthenticated, setIsAuthenticated] = useLocalStorage('isAuthenticated', false);

    const login = () => {
        setIsAuthenticated(true)
    }

    const logout = () => {
        setIsAuthenticated(false)
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}