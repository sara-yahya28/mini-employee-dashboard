//empty space change depend path
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

export default function Layout() {
    return (
        <>
            <Navbar />
            <div className="layout__container">
                <Sidebar />
                <main>
                    <Outlet />
                </main>
            </div>
        </>
    );
}
