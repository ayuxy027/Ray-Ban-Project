import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'
import StatCard from '../components/dashboard/StatCard'
import ChartCard from '../components/dashboard/ChartCard'

const userRoleData = [
  { name: 'Students', value: 2000 },
  { name: 'Faculty', value: 100 },
  { name: 'Staff', value: 50 },
  { name: 'Administrators', value: 20 },
]

const userActivityData = [
  { month: 'Jan', logins: 5000 },
  { month: 'Feb', logins: 5500 },
  { month: 'Mar', logins: 6000 },
  { month: 'Apr', logins: 5800 },
  { month: 'May', logins: 6200 },
  { month: 'Jun', logins: 6500 },
]

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']

const recentUsers = [
  { id: 1, name: "John Doe", role: "Student", department: "Computer Science", lastLogin: "2023-06-10" },
  { id: 2, name: "Jane Smith", role: "Faculty", department: "Electrical Engineering", lastLogin: "2023-06-09" },
  { id: 3, name: "Bob Johnson", role: "Staff", department: "Administration", lastLogin: "2023-06-08" },
  { id: 4, name: "Alice Brown", role: "Administrator", department: "Management", lastLogin: "2023-06-07" },
]

export default function Users() {
  return (
    <div>
      <h2 className="mb-6 text-3xl font-bold text-gray-900">Users</h2>
      
      {/* Summary Cards */}
      <div className="grid grid-cols-1 gap-5 mb-8 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard title="Total Users" value="2,170" change={3.5} />
        <StatCard title="Active Users" value="1,985" change={2.1} />
        <StatCard title="New Users (This Month)" value="87" change={15.3} />
        <StatCard title="Avg. Daily Logins" value="1,250" change={5.7} />
      </div>

      {/* Recent Users */}
      <div className="mb-8">
        <h3 className="mb-4 text-xl font-semibold">Recent Users</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">Name</th>
                <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">Role</th>
                <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">Department</th>
                <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">Last Login</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {recentUsers.map((user) => (
                <tr key={user.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{user.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{user.role}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{user.department}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{user.lastLogin}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 gap-5 mt-8 lg:grid-cols-2">
        <ChartCard title="User Roles Distribution">
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={userRoleData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {userRoleData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </ChartCard>
        <ChartCard title="User Activity (Logins per Month)">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={userActivityData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="logins" fill="#8884d8" name="Logins" />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>
    </div>
  )
}