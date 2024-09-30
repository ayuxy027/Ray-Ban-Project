import { motion } from 'framer-motion'
import Card from './common/Card'

const notifications = [
  { id: 1, title: 'New report submitted', time: '2 hours ago', type: 'report' },
  { id: 2, title: 'Meeting reminder', time: 'Tomorrow at 10 AM', type: 'meeting' },
  { id: 3, title: 'Budget approval needed', time: '3 days ago', type: 'approval' },
]

const notificationIcons = {
  report: (
    <svg className="w-6 h-6 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ),
  meeting: (
    <svg className="w-6 h-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  ),
  approval: (
    <svg className="w-6 h-6 text-yellow-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
}

export default function NotificationPanel() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="absolute right-0 z-10 mt-2 w-80">
        <div className="p-4">
          <h3 className="text-lg font-medium text-gray-900">Notifications</h3>
          <div className="mt-4 space-y-4">
            {notifications.map((notification) => (
              <motion.div
                key={notification.id}
                className="flex items-start p-2 transition-colors duration-200 rounded-lg hover:bg-gray-50"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex-shrink-0">
                  {notificationIcons[notification.type]}
                </div>
                <div className="flex-1 w-0 ml-3">
                  <p className="text-sm font-medium text-gray-900">{notification.title}</p>
                  <p className="mt-1 text-xs text-gray-500">{notification.time}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="px-4 py-3 border-t border-gray-200">
          <div className="flex justify-between text-sm">
            <span className="font-medium text-indigo-600 cursor-pointer hover:text-indigo-500">View all</span>
            <span className="font-medium text-gray-500 cursor-pointer hover:text-gray-700">Mark all as read</span>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}