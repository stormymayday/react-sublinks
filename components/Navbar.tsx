"use client";

import { FaBars } from "react-icons/fa";
import { useAppContext } from "@/context/AppContext";
import NavLinks from "./NavLinks";
import { MouseEvent } from "react";

function Navbar() {
    const { isSideBarOpen, setIsSidebarOpen, setPageId } = useAppContext();

    const hideSubmenu = (e: MouseEvent<HTMLElement>) => {
        if (!(e.target as HTMLElement).classList.contains("nav-link")) {
            setPageId(null);
        }
    };

    return (
        <nav onMouseOver={hideSubmenu}>
            <div className="nav-center">
                <h3 className="logo">logo</h3>
                <button
                    className="toggle-btn"
                    onClick={() => setIsSidebarOpen(!isSideBarOpen)}
                >
                    <FaBars />
                </button>
                {/* nav links */}
                <NavLinks />
            </div>
        </nav>
    );
}
export default Navbar;
