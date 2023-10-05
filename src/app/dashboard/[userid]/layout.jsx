
import Navbar from '@/components/navbar'
import SideBar from '@/components/sidebar'
import { AppProvider } from '@/contexts/dashboardContext';
import MobileSidebar from '@/components/Mobile-sidebar';

export const metadata = {
  title: 'Dashboard',
  description: 'Dashboard for Give us a topic, and we will create the best content for your different social media platform',
}

export default function RootLayout({ children }) {
  return (
    <AppProvider> {/* Wrap your application with the AppProvider */}
      <>


        <div className='mt-14 md:mt-16'></div>
        <div className='md:flex md:h-screen w-full'>
          
          <div className='md:hidden fixed mt-5'>
            <MobileSidebar />
          </div>

          

          <Navbar className=" "></Navbar>
          <div className='flex flex-col md:w-auto'>

          <div className='hidden md:h-screen md:flex md:w-full md:mt-[-4]  md:flex-col md:fixed '>
            <SideBar />
          </div>
            
            <div className='dashboard-section-content w-full ml-4 lg:ml-12 mr-4 lg:mr-32 flex justify-center'  >
            {children}
            </div>
          </div>
        </div>


      </>
    </AppProvider>
  )
}


{/* <div className='hidden h-screen md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-[80]'> */ }

{/* <div className='mt-14 md:mt-16'></div>
        <div className='md:flex md:h-screen'>
          <SideBar />
          <Navbar></Navbar>
          <div className='dashboard-section-content w-full ml-4 lg:ml-12 mr-4 lg:mr-32 flex justify-center'>
            {children}
          </div>
        </div> */}

{/* <div className='mt-14 md:mt-16'></div>
        <div className='md:flex md:h-screen'>
         
          <div className='sm:hidden md:flex md:h-screen md:inset-y-0 z-[80]'>
            <SideBar />
          </div>
          
          <MobileSidebar className='md:hidden fixed' />
          <Navbar></Navbar>
          <div className='dashboard-section-content w-full ml-4 lg:ml-12 mr-4 lg:mr-32 flex justify-center'>
            {children}
          </div>
        </div> */}







