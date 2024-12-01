"use client";

// import { useAppContext } from "@/context/AppContext";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Submenu from "@/components/Submenu";
import Sidebar from "@/components/Sidebar";

export default function Home() {
    // const { isSideBarOpen, setIsSidebarOpen } = useAppContext();

    return (
        <main>
            <Navbar />
            <Hero />
            <Sidebar />
            <Submenu />
        </main>
    );
}
