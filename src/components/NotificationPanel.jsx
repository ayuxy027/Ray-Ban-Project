import Card from './common/Card'

const notifications = [
  { id: 1, title: 'New report submitted', time: '2 hours ago' },
  { id: 2, title: 'Meeting reminder', time: 'Tomorrow at 10 AM' },
  { id: 3, title: 'Budget approval needed', time: '3 days ago' },
]

export default function NotificationPanel() {
  return (
    <Card className="absolute right-0 z-10 mt-2 w-80">
      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-900">Notifications</h3>
        <div className="mt-4 space-y-4">
          {notifications.map((notification) => (
            <div key={notification.id} className="flex items-start">
              <div className="flex-shrink-0">
                <svg className="w-6 h-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </div>
              <div className="ml-3 w-0 flex-1 pt-0.5">
                <p className="text-sm font-medium text-gray-900">{notification.title}</p>
                <p className="mt-1 text-sm text-gray-500">{notification.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  )
}