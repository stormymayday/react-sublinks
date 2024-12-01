"use client";

import { FaBars } from "react-icons/fa";
import { useAppContext } from "@/context/AppContext";

function Navbar() {
    const { isSideBarOpen, setIsSidebarOpen } = useAppContext();

    return (
        <nav>
            <div className="nav-center">
                <h3>logo</h3>
                <button
                    className="toggle-btn"
                    onClick={() => setIsSidebarOpen(!isSideBarOpen)}
                >
                    <FaBars />
                </button>
                {/* nav links */}
            </div>
        </nav>
    );
}
export default Navbar;
