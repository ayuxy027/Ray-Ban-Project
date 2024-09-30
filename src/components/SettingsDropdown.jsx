// src/components/SettingsDropdown.jsx
import { motion } from 'framer-motion'
import Card from './common/Card'
import { Sun, Moon, Globe, Bell } from 'lucide-react'

const settingsMenuItems = [
  { icon: <Sun className="w-4 h-4" />, label: 'Light Mode', action: () => console.log('Light Mode clicked') },
  { icon: <Moon className="w-4 h-4" />, label: 'Dark Mode', action: () => console.log('Dark Mode clicked') },
  { icon: <Globe className="w-4 h-4" />, label: 'Language', action: () => console.log('Language clicked') },
  { icon: <Bell className="w-4 h-4" />, label: 'Notifications', action: () => console.log('Notifications clicked') },
]

const SettingsDropdown = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="absolute right-0 z-10 w-56 mt-2">
        <div className="p-2">
          {settingsMenuItems.map((item, index) => (
            <motion.div
              key={index}
              className="flex items-center p-2 transition-colors duration-200 rounded-lg cursor-pointer hover:bg-gray-100"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={item.action}
            >
              <div className="mr-3 text-gray-500">{item.icon}</div>
              <span className="text-sm font-medium text-gray-700">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </Card>
    </motion.div>
  )
}

export default SettingsDropdown