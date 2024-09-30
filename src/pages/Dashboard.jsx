import StatCard from '../components/dashboard/StatCard'
import ChartCard from '../components/dashboard/ChartCard'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'

const barChartData = [
  { name: 'Engineering', publications: 120, funding: 1500000 },
  { name: 'Science', publications: 90, funding: 1200000 },
  { name: 'Humanities', publications: 60, funding: 800000 },
  { name: 'Business', publications: 75, funding: 1000000 },
]

const pieChartData = [
  { name: 'Undergraduate', value: 6000 },
  { name: 'Graduate', value: 3000 },
  { name: 'PhD', value: 1000 },
]

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']

export default function Dashboard() {
  return (
    <div>
      <h2 className="mb-6 text-3xl font-bold text-gray-900">Dashboard</h2>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard title="Publications" value="345" change={5.2} />
        <StatCard title="Total Students" value="10,056" change={2.8} />
        <StatCard title="Achievements" value="178" change={12.3} />
        <StatCard title="Research Projects" value="52" change={3.7} />
      </div>
      <div className="grid grid-cols-1 gap-5 mt-8 lg:grid-cols-2">
        <ChartCard title="Publications & Funding by Department">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={barChartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
              <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
              <Tooltip />
              <Legend />
              <Bar yAxisId="left" dataKey="publications" fill="#8884d8" name="Publications" />
              <Bar yAxisId="right" dataKey="funding" fill="#82ca9d" name="Funding ($)" />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
        <ChartCard title="Student Distribution">
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieChartData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {pieChartData.map((entry, index) => (
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