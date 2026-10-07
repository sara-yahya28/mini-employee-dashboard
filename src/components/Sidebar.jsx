import { Link } from "react-router-dom"
import './css/Sidebar.css';

export default function Sidebar() {
    return (
        <aside className="sidebar">
            <h3>القائمة</h3>
            <ul>
                <li><Link to='/'> الرئيسية</Link></li>
                <li><Link to='/employees'> الموظفين</Link></li>
            </ul>
        </aside>
    )
}