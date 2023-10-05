"use client"
import { Button } from '@/components/ui/button'
// import Image from 'next/image'
import dynamic from 'next/dynamic'

import { useRouter } from 'next/navigation'

import { useAuth } from "@clerk/nextjs";

// Lazy Loading
const Link = dynamic(() => import("next/link"));

export default function Home() {

  const router = useRouter()
  const { userId } = useAuth();
  const { isSignedIn } = useAuth();

  console.log(userId, " from user id")


  return (

    <div>

      <div>
        Welcome to post wizards
      </div>

      <div>
        <Link href={isSignedIn ? `/dashboard/${userId}` : "sign-up"} >
          <Button className=" bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 text-white border-0  
                        md:text-lg p-4 md:p-6 rounded-full font-semibold" >
            Start Generating For Free
          </Button>
        </Link>
      </div>

      <Button onClick={() => router.push(`/dashboard/${userId}`)} >Go to dashboard</Button>

    </div>

  )
}
