import {useContext} from 'react'
import {Navigate , Outlet} from 'react-router-dom'
import {AuthContext} from '../context/AuthContext'

export default function ProtectedRoutes() {
    const { isAuthenticated } = useContext(AuthContext);

    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }

    return <Outlet />;
}