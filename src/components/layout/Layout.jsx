import { useState } from 'react'
import Sidebar from './Sidebar'
import Header from './Header'

export default function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
      <div className="flex flex-col flex-1 w-0 overflow-hidden">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main className="relative flex-1 overflow-y-auto focus:outline-none">
          <div className="py-6">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
              {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}