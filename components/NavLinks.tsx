"use client";

import sublinks from "@/data";
import { useAppContext } from "@/context/AppContext";

function NavLinks() {
    const { setPageId } = useAppContext();
    return (
        <div className="nav-links">
            {sublinks.map((item) => {
                const { pageId, page } = item;
                return (
                    <button
                        key={pageId}
                        className="nav-link"
                        onMouseEnter={() => {
                            setPageId(pageId);
                        }}
                    >
                        {page}
                    </button>
                );
            })}
        </div>
    );
}
export default NavLinks;
