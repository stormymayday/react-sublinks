export type PageType = {
    pageId: string;
    page: string;
    links: {
        id: string;
        label: string;
        icon: JSX.Element;
        url: string;
    }[];
};
