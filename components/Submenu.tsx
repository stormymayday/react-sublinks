"use client";

import sublinks from "@/data";
import { PageType } from "@/types";
import { useAppContext } from "@/context/AppContext";

function Submenu() {
    const { pageId } = useAppContext();

    const currentPage: PageType | undefined = sublinks.find(
        (item) => item.pageId === pageId
    );

    console.log(currentPage);

    if (!currentPage) {
        return;
    }

    return (
        <div className="submenu">
            <h5>{currentPage?.page}</h5>
            <div
                className="submenu-link"
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
