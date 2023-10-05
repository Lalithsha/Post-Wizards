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



        <div className={inter.className}>
            <div className=' mt-16 '></div>

            <div className='flex h-screen'>
                <SideBar className="" />
                <Navbar />
                <div className='dashboard-section-content w-full ml-4 lg:ml-12 mr-4 lg:mr-32 flex justify-center'>
                    {children}
                </div>
            </div>
        </div>


    );
}


// <html lang="en">
//     <body className={inter.className}>
//         <div className=' mt-16 '></div>

//         <div className='flex h-screen'>
//             <SideBar className="" />
//             <Navbar />
//             <div className='dashboard-section-content w-full ml-4 lg:ml-12 mr-4 lg:mr-32 flex justify-center'>
//                 {children}
//             </div>
//         </div>


//     </body>
// </html>
