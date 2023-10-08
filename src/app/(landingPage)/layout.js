import Navbar from "@/components/Navbar";
import SideBar from "@/components/sidebar";
// import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

import { ClerkProvider } from '@clerk/nextjs'

export const metadata = {
    title: "Post Wizards",
    description: "intutive social media content creator ",
};

export default function RootLayout({ children }) {
    return (

        <main className="h-screen bg-[#ADD8E6]  overflow-auto " >
            <div className="mx-auto max-w-screen-xl h-full w-full " >
                {children}
            </div>
        </main>


    );
}



