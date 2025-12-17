//nextjs automatically renders landing page on the layout but it odesn't know where to render
//that's why it using children prop and and give place to render inside main 

import Navbar from '@/components/Navbar'
import { NAVBAR_HEIGHT } from '@/lib/constants'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full w-full">
      <Navbar></Navbar>
      <main
        style={{ paddingTop: `${NAVBAR_HEIGHT}px` }}
        className="h-full w-full flex flex-col"
      >
        {children}
      </main>
    </div>
  )
}

export default Layout
