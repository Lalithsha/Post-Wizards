import Image from "next/image";
import Link from "next/link";
import { Film, LayoutDashboard,Save } from "lucide-react";

const SideBar = () => {
  return (

    

    <aside className="px-10 bg-pink-500 shadow-md bg-blur bg-opacity-30 backdrop-blur-lg backdrop-filter hidden lg:block border-r-[#E1E1E1]">
      <div className="h-full">
      <Link className="block ml-24 mr-2 py-3" href="/dashboard">
        
          Home
        
      </Link>
      <Link className="block ml-24 mr-2 py-3" href="/dashboard/vid">
        <span className="flex items-center whitespace-nowrap ">
            <Film/>
          {" "}
          For Video Content
        </span>
      </Link>
      <Link className="block ml-24 mr-2 py-3" href="/dashboard/smm">
        <span className="flex items-center whitespace-nowrap">
            <Save className="bg-blue-500" />
         {" "}
          For SM Content
        </span>
      </Link>
      </div>
    </aside>
  );
};

export default SideBar;
