import AirdropCheck from '@/components/AirdropCheck'
import Footer from '@/components/Footer'
import Logo from '@/components/Logo'
import Navbar from '@/components/Navbar'
import { NotificationProvider } from '@/contexts/NotificationContext'
import Image from 'next/image'

export default function Home() {
  return (

    <main className='flex flex-col min-h-screen w-full'>
      <NotificationProvider>
        <div className='flex-grow'>
            <Navbar/>
            <Logo/>
            <AirdropCheck/>
          </div>
          <Footer/>
      </NotificationProvider>
    </main>
  )
}
