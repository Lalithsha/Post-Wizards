

"use client"

// import Navbar from "@/components/navbar";
// import SideBar from "@/components/sidebar";
// import SideBar from "@/components/newsidebar";
import { Textarea } from "@/components/ui/textarea";

import { useAuth } from "@clerk/nextjs";

import { useState, useEffect } from 'react';




export default function Home() {

    // const { userId } = useAuth();

    const [posts, setPosts] = useState([]);

    
    const fetchPosts = async () => {
        try {

            // if (!userId || userId === undefined || userId.length == 0) {
            //     alert("userId required.");
            //     return;
            //   }
            
            // const res = await fetch(`/api/posts?userId=${userId}`, {
            //     method: "GET",
            //     headers: {
            //         "Content-Type": "application/json",
            //     },
            // });

            // if (res.ok) {
            //     const jsonResponse = await res.json();
            //     setPosts(jsonResponse.posts);
            //     console.log(posts,"posts")
            // } else {
            //     throw new Error("Failed to fetch posts");
            // }
        } catch (error) {
            console.log(error);
        }
    }


    useEffect(() => {
        fetchPosts();
    });


    
    

    return (

        <div className="flex flex-col w-auto ">

            <div className="text-sm md:text-2xl mt-7  " >
                Saved Posts 🗒️
            </div>

            <div className=" flex flex-col m-5 p-4 w-auto h-auto gap-4 " >
                {/* <Textarea className="" /> */}

                {posts.length > 0 ? posts.map((post, idx) => (
                    <Textarea key={idx} defaultValue={post.post} />
                )) : <p>Coming Soon.</p>
                }
            </div>



        </div>


    )
}







// const handleExist = async (e) => {

//     try {
//         const res = await fetch("http://localhost:3000/api/posts", {
//           method: "GET",
//           headers: {
//             "Content-type": "application/json",
//           },
//           body: JSON.stringify({ userId }),
//         });

//         if (res.ok) {
//           // router.push("/");
//           alert("saved successfully")

//         } else {
//           throw new Error("Failed to create a topic");
//         }
//       } catch (error) {
//         console.log(error);
//       }


// }




