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
}

const AppContext = createContext<AppContextInterface>({
    isSideBarOpen: false,
    setIsSidebarOpen: () => {},
});

interface AppProviderProps {
    children: ReactNode;
}

const AppProvider = ({ children }: AppProviderProps) => {
    const [isSideBarOpen, setIsSidebarOpen] = useState<boolean>(false);

    return (
        <AppContext.Provider value={{ isSideBarOpen, setIsSidebarOpen }}>
            {children}
        </AppContext.Provider>
    );
};

const useAppContext = () => {
    return useContext(AppContext);
};

export { useAppContext, AppProvider };
