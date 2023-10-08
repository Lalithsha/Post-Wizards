
"use client";

import { Montserrat } from "next/font/google";

import { useAuth } from "@clerk/nextjs";

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button";

import dynamic from 'next/dynamic'

const Link = dynamic(() => import("next/link"));
const Image  = dynamic(()=> import("next/image"));


const font = Montserrat({
    weight: "600",
    subsets: ["latin"]
})

export const LandingNavbar = () => {
    const { isSignedIn } = useAuth();
    const { userId } = useAuth();

    return (
        <nav className="p-4 transparent flex items-center justify-between mx-9" >
            <Link href="/" className="flex items-center"  >
                <div className="md:text-lg  relative h-8 " >
                    ✨ 
                </div>
                <h1 className={cn("md:text-2xl font-bold text-white", font.className)} >
                    Post Wizards
                </h1>
            </Link>

            <div className="flex items-center gap-x-2" >
                <Link href={isSignedIn ? `/dashboard/${userId}` :"/sign-up" } >
                <Button variant="outline"className="rounded-full"  >
                    Get started
                </Button>
                </Link>
            </div>
            
        </nav>
    )

} 



































