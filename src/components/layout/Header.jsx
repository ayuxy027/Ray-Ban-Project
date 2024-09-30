// src/components/layout/Header.jsx
import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Button from '../common/Button'
import Input from '../common/Input'
import NotificationPanel from '../NotificationPanel'
import UserDropdown from '../UserDropdown'
import SettingsDropdown from '../SettingsDropdown'
import { Search, Bell, Settings, User } from 'lucide-react'

export default function Header({ sidebarOpen, setSidebarOpen }) {
  const [notificationsOpen, setNotificationsOpen] = useState(false)
  const [userDropdownOpen, setUserDropdownOpen] = useState(false)
  const [settingsDropdownOpen, setSettingsDropdownOpen] = useState(false)

  return (
    <header className="sticky top-0 z-10 flex items-center justify-between h-16 px-4 bg-white border-b border-gray-200">
      <div className="flex items-center flex-shrink-0">
        <Button 
          onClick={() => setSidebarOpen(true)} 
          className="lg:hidden"
          variant="outline"
          size="sm"
        >
          <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </Button>
      </div>
      <div className="flex items-center justify-end flex-1 px-4 space-x-4">
        <div className="relative w-full max-w-md">
          <Input
            type="search"
            placeholder="Search..."
            className="pl-10"
            icon={<Search className="w-5 h-5 text-gray-400" />}
          />
        </div>
        <div className="relative">
          <Button 
            onClick={() => setNotificationsOpen(!notificationsOpen)}
            variant="outline"
            size="sm"
          >
            <Bell className="w-5 h-5" />
          </Button>
          <AnimatePresence>
            {notificationsOpen && <NotificationPanel />}
          </AnimatePresence>
        </div>
        <div className="relative">
          <Button
            onClick={() => setSettingsDropdownOpen(!settingsDropdownOpen)}
            variant="outline"
            size="sm"
          >
            <Settings className="w-5 h-5" />
          </Button>
          <AnimatePresence>
            {settingsDropdownOpen && <SettingsDropdown />}
          </AnimatePresence>
        </div>
        <div className="relative">
          <Button
            onClick={() => setUserDropdownOpen(!userDropdownOpen)}
            variant="outline"
            size="sm"
            className="p-2 rounded-full"
          >
            <User className="w-5 h-5" />
          </Button>
          <AnimatePresence>
            {userDropdownOpen && <UserDropdown />}
          </AnimatePresence>
        </div>
      </div>
    </header>
  )
}