"use client";

import sublinks from "@/data";
import { PageType } from "@/types";
import { useAppContext } from "@/context/AppContext";
import { MouseEvent, useRef } from "react";

function Submenu() {
    const { pageId, setPageId } = useAppContext();

    const currentPage: PageType | undefined = sublinks.find(
        (item) => item.pageId === pageId
    );

    const submenuContainer = useRef<HTMLDivElement>(null);

    const handleMouseLeave = (e: MouseEvent<HTMLElement>) => {
        const submenu = submenuContainer.current;

        if (!submenu) return;

        const { left, right, bottom } = submenu.getBoundingClientRect();

        const { clientX, clientY } = e;

        if (clientX < left || clientX > right - 1 || clientY > bottom - 1) {
            setPageId(null);
        }
    };

    if (!currentPage) {
        return null;
    }

    return (
        <div
            onMouseMove={handleMouseLeave}
            className={currentPage ? "submenu show-submenu" : "submenu"}
            ref={submenuContainer}
        >
            <h5>{currentPage?.page}</h5>
            <div
                className="submenu-links"
                style={{
                    gridTemplateColumns:
                        currentPage?.links?.length > 3 ? "1fr 1fr" : "1fr",
                }}
            >
                {currentPage?.links?.map((link) => {
                    const { id, url, label, icon } = link;
                    return (
                        <a key={id} href={url}>
                            {icon} {label}
                        </a>
                    );
                })}
            </div>
        </div>
    );
}
export default Submenu;
