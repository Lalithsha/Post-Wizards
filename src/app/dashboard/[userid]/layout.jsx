
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
    <AppProvider>
      <>

        <div className='mt-14 md:mt-16'></div>
        <div className='md:flex md:h-screen '>
          <div className='md:hidden fixed mt-5'>
            <MobileSidebar />
          </div>
          <Navbar className=" "></Navbar>

          <div className='flex '>
            <section className='hidden space-y-4 md:py-4 md:flex md:flex-col bg-[#FFDAB9] text-white md:w-1/5'>
            <SideBar className=" md:h-screen " />
            </section>
            <div className='dashboard-section-content md:w-full ml-4 lg:ml-12 mr-4 lg:mr-32 flex  '>
              {children}
            </div>
          </div>


        </div>
      </>
    </AppProvider >
  )
}

