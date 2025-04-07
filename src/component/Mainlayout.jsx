import Header from "./header";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useState } from "react";
import { Button } from 'react-bootstrap';
import { FaBars, FaArrowRightLong } from "react-icons/fa6";

export default function Mainlayout() {
    const [sideBarVisible, setSideBarVisible] = useState(false);

    const toggleMenu = () => {
        setSideBarVisible(prev => !prev);
    }
    return (
        <div className="mainpage">
            <aside className={`sidebar_main border-end ${sideBarVisible ? 'hide' : ''}`}>
                <Sidebar />
            </aside>
            <main className={`main_wrapper ${sideBarVisible ? 'hide' : ''}`}>
                <Button size="sm" onClick={toggleMenu} variant="none" className="toggle_btn">
                    {sideBarVisible ? <FaArrowRightLong /> : <FaBars />}
                </Button>
                <Header />
                <Outlet />
            </main>
        </div>
    )
}