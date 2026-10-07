import { Link } from "react-router-dom"
export default function Navbar() {
    return (
        <nav>
            {/* Link to is used so not whole page is reloaded */}
            <Link to='/'> الرئيسية</Link>
            <br />
            <Link to='/employees'> الموظفين</Link>
            <br />
            <Link to='/login'>تسجيل الدخول </Link>
        </nav>
    )
}