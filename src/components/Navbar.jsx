import { useContext } from 'react'
import './css/Navbar.css'
import { Link } from "react-router-dom"
import { ThemeContext } from '../context/ThemeContext'
import { AuthContext } from '../context/AuthContext'
export default function Navbar() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const { isAuthenticated, logout } = useContext(AuthContext);

    const handleLogout = () => {
        logout();
        navigate('/Login');
    };
    return (
        <nav className='navbar'>
            {/* Link to is used so not whole page is reloaded */}
            <ul>
                <li><Link to='/' className='navbar__brand'> الرئيسية</Link></li>
                <li><Link to='/employees' className='navbar__brand'> الموظفين</Link></li>
                {isAuthenticated ? (
                    <li><button onClick={handleLogout} className='theme-toggle-btn'>تسجيل الخروج</button></li>
                ) : (
                    <li><Link to='/Login' className='navbar__brand'>تسجيل الدخول </Link></li>
                )}
                <li>
                 <button onClick={toggleTheme} className='theme-toggle-btn'>
                {theme === 'light' ? 'Light' : 'Dark'}
            </button>
                </li>
            </ul>
           
        </nav>
    )
}