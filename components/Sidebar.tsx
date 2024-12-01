"use client";

import { FaTimes } from "react-icons/fa";
import sublinks from "@/data";
import { useAppContext } from "@/context/AppContext";

function Sidebar() {
    const { isSideBarOpen, setIsSidebarOpen } = useAppContext();
    return (
        <aside className="sidebar">
            <div className="sidebar-container">
                <button
                    className="close-btn"
                    onClick={() => setIsSidebarOpen(!isSideBarOpen)}
                >
                    <FaTimes />
                </button>
                <div className="sidebar-links">
                    {sublinks.map((item) => {
                        const { pageId, links, page } = item;
                        return (
                            <article key={pageId}>
                                <h4>{page}</h4>
                                <div className="sidebar-sublinks">
                                    {links.map((link) => {
                                        const { id, url, icon, label } = link;
                                        return (
                                            <a key={id} href={url}>
                                                {icon}
                                                {label}
                                            </a>
                                        );
                                    })}
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </aside>
    );
}
export default Sidebar;
