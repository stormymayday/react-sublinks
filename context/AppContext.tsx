"use client";

import {
    createContext,
    useContext,
    useState,
    Dispatch,
    SetStateAction,
    ReactNode,
} from "react";

interface AppContextInterface {
    isSideBarOpen: boolean;
    setIsSidebarOpen: Dispatch<SetStateAction<boolean>>;
    pageId: string | null;
    setPageId: Dispatch<SetStateAction<null | string>>;
}

const AppContext = createContext<AppContextInterface>({
    isSideBarOpen: false,
    setIsSidebarOpen: () => {},
    pageId: null,
    setPageId: () => {},
});

interface AppProviderProps {
    children: ReactNode;
}

const AppProvider = ({ children }: AppProviderProps) => {
    const [isSideBarOpen, setIsSidebarOpen] = useState<boolean>(false);
    const [pageId, setPageId] = useState<null | string>(null);

    return (
        <AppContext.Provider
            value={{ isSideBarOpen, setIsSidebarOpen, pageId, setPageId }}
        >
            {children}
        </AppContext.Provider>
    );
};

const useAppContext = () => {
    return useContext(AppContext);
};

export { useAppContext, AppProvider };
