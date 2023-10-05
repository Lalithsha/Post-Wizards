"use client"
// import Image from "next/image";
import Link from "next/link";



import { Montserrat } from "next/font/google"

// import Link from "next/link";
// import Image from "next/image";
import { Film, LayoutDashboard, Save } from "lucide-react";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

// const montserrat = Montserrat({ weight: "600", subsets: ["latin"] })
import { useAuth } from "@clerk/nextjs";



const routes = [
    {
        label: "Social Media",
        icon: LayoutDashboard,
        color: "text-sky-500",
    },
    {
        label: "Saved Posts",
        icon: Save,
        color: "text-blue-500",
    }


]


const SideBar = () => {


    const pathname = usePathname();
    const userId = useAuth().userId;

    // Function to generate hrefs dynamically based on the label
    const generateHref = (label) => {
        if (label === "Social Media") {
            return `/dashboard/${userId}`;
        } else if (label === "Saved Posts") {
            return `/saved/${userId}`;
        }
    };


    // 191970

    return (
        // <div className="space-y-4 py-4 flex flex-col h-full bg-[#FFDAB9] text-white w-1/5 " >
        <div className="space-y-4 py-4 flex flex-col h-full bg-[#FFDAB9] text-white md:w-1/5 md:mt-[-4]">

            <div className="px-3 py-2 flex-1"  >

                <div className="space-y-1" >


                    {routes.map((route) => (
                        <Link href={generateHref(route.label)} key={route.label}>
                            <div className={cn(
                                `text-sm group flex p-3 w-full justify-start font-medium cursor-pointer 
                                hover:text-white hover:bg-white/10 rounded-lg transition`,
                                pathname.startsWith(generateHref(route.label))
                                    ? "text-white bg-white/10"
                                    : "text-zinc-400"
                            )}>
                                <div className="flex items-center flex-1">
                                    <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                                    {route.label}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

            </div>
        </div>





    )
}


export default SideBar;


// {
//     lable: "Reels & Shorts",
//     icon: Film,
//     // href: "/conversation",
//     color: "text-violet-500",
// },