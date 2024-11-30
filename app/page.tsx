"use client";

import { useAppContext } from "@/context/AppContext";

export default function Home() {
    const { isSideBarOpen, setIsSidebarOpen } = useAppContext();

    return (
        <div>
            <h1>Sidebar is open: {isSideBarOpen ? "true" : "false"}</h1>
            <button
                className="btn"
                onClick={() => {
                    setIsSidebarOpen(!isSideBarOpen);
                }}
            >
                toggle
            </button>
        </div>
    );
}
