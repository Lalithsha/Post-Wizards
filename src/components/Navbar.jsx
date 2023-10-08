"use client";

import React from "react";
import { Montserrat } from "next/font/google";
// import Image from "next/image";
import { cn } from "@/lib/utils"
import dynamic from 'next/dynamic'
import { UserButton } from "@clerk/nextjs";

import { useAuth } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";
import MobileSidebar from "./Mobile-sidebar";

// Lazy Loading
const Link = dynamic(() => import("next/link"));

const font = Montserrat({
  weight: "600",
  subsets: ["latin"]
})

const Navbar = () => {

  const { user } = useUser();

  const { userId } = useAuth();
  
  console.log(userId,"from navbar")
  console.log(user,"from navbar")
  
  return (
    <>

      
    
    {/* // <nav className="bg-blur bg-opacity-30 backdrop-blur-lg backdrop-filter fixed top-0 w-full z-50 shadow-md bg-[#F5DEB3] "> */}
    <nav className="bg-blur bg-opacity-30 backdrop-blur-lg backdrop-filter fixed top-0 w-full  z-50 shadow-md bg-[#F5DEB3] mb-[-4]">
      <div className="container mx-auto p-4 md:px-28 flex justify-between items-center">
        <div className="img-logo">
          <Link href={`/dashboard/${userId}`} aria-label="logo">
            <h1 className={cn(" text-sm md:text-2xl font-bold",font.className)} >✨ Post Wizards </h1>
          </Link>
        </div>

        <div className="flex flex-row justify-center items-center ">
          {/* here is a issue */}
        <div className="text-xs md:text-base mx-4" > {user && user.fullName ? `Welcome, ${user.fullName}` : 'Loading... 🤔'}</div>
        <UserButton className="" afterSignOutUrl="/"/>
        </div>

      </div>
    </nav>

    </>
  );
};

export default Navbar;



