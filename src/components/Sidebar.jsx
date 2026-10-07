import { Link } from "react-router-dom"
export default function Sidebar() {
    return (
        <aside>
            <ul>
                <li><Link to='/'> الرئيسية</Link></li>
                <li><Link to='/employees'> الموظفين</Link></li>
            </ul>
        </aside>
    )
}