import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'
import StatCard from '../components/dashboard/StatCard'
import ChartCard from '../components/dashboard/ChartCard'

const departmentData = [
  { name: 'Computer Science', students: 500, faculty: 25, budget: 1000000 },
  { name: 'Electrical Engineering', students: 450, faculty: 22, budget: 900000 },
  { name: 'Mechanical Engineering', students: 400, faculty: 20, budget: 850000 },
  { name: 'Civil Engineering', students: 350, faculty: 18, budget: 800000 },
  { name: 'Chemical Engineering', students: 300, faculty: 15, budget: 750000 },
]

const researchFundingData = [
  { name: 'Computer Science', value: 500000 },
  { name: 'Electrical Engineering', value: 450000 },
  { name: 'Mechanical Engineering', value: 400000 },
  { name: 'Civil Engineering', value: 350000 },
  { name: 'Chemical Engineering', value: 300000 },
]

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8']

export default function Departments() {
  return (
    <div>
      <h2 className="mb-6 text-3xl font-bold text-gray-900">Departments</h2>
      
      {/* Summary Cards */}
      <div className="grid grid-cols-1 gap-5 mb-8 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard title="Total Departments" value="5" change={0} />
        <StatCard title="Total Students" value="2,000" change={5.2} />
        <StatCard title="Total Faculty" value="100" change={2.8} />
        <StatCard title="Total Budget" value="$4.3M" change={3.7} />
      </div>

      {/* Department Details */}
      <div className="mb-8">
        <h3 className="mb-4 text-xl font-semibold">Department Details</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">Name</th>
                <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">Students</th>
                <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">Faculty</th>
                <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">Budget</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {departmentData.map((dept, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap">{dept.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{dept.students}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{dept.faculty}</td>
                  <td className="px-6 py-4 whitespace-nowrap">${dept.budget.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 gap-5 mt-8 lg:grid-cols-2">
        <ChartCard title="Students and Faculty by Department">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={departmentData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
              <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
              <Tooltip />
              <Legend />
              <Bar yAxisId="left" dataKey="students" fill="#8884d8" name="Students" />
              <Bar yAxisId="right" dataKey="faculty" fill="#82ca9d" name="Faculty" />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
        <ChartCard title="Research Funding Distribution">
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={researchFundingData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {researchFundingData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>
    </div>
  )
}