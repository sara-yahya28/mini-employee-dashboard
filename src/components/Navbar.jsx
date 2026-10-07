import './css/Navbar.css'
import { Link } from "react-router-dom"
export default function Navbar() {
    return (
        <nav className='navbar'>
            {/* Link to is used so not whole page is reloaded */}
            <ul>
                <li><Link to='/' className='navbar__brand'> الرئيسية</Link></li>
                <li><Link to='/employees' className='navbar__brand'> الموظفين</Link></li>
                <li><Link to='/login' className='navbar__brand'>تسجيل الدخول </Link></li>
            </ul>
        </nav>
    )
}