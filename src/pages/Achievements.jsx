import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import StatCard from '../components/dashboard/StatCard'
import ChartCard from '../components/dashboard/ChartCard'

const achievementData = [
  { category: 'Research', count: 45 },
  { category: 'Academic', count: 30 },
  { category: 'Sports', count: 20 },
  { category: 'Cultural', count: 25 },
  { category: 'Innovation', count: 15 },
]

const recentAchievements = [
  { id: 1, title: "Best Research Paper Award at International Conference", date: "2023-05-15" },
  { id: 2, title: "National Science Olympiad - 1st Place", date: "2023-04-22" },
  { id: 3, title: "University Ranked in Top 100 Globally", date: "2023-03-10" },
  { id: 4, title: "Student Startup Receives $1M Funding", date: "2023-02-28" },
]

export default function Achievements() {
  return (
    <div>
      <h2 className="mb-6 text-3xl font-bold text-gray-900">Achievements</h2>
      
      {/* Summary Cards */}
      <div className="grid grid-cols-1 gap-5 mb-8 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard title="Total Achievements" value="135" change={8.5} />
        <StatCard title="Research Papers" value="45" change={12.3} />
        <StatCard title="Awards Won" value="28" change={5.7} />
        <StatCard title="Patents Filed" value="12" change={20.0} />
      </div>

      {/* Recent Achievements */}
      <div className="mb-8">
        <h3 className="mb-4 text-xl font-semibold">Recent Notable Achievements</h3>
        <ul className="space-y-2">
          {recentAchievements.map((achievement) => (
            <li key={achievement.id} className="p-4 bg-white rounded-lg shadow">
              <p className="font-medium">{achievement.title}</p>
              <p className="text-sm text-gray-500">{achievement.date}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Achievement Distribution Chart */}
      <ChartCard title="Achievement Distribution">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={achievementData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="count" fill="#8884d8" name="Number of Achievements" />
          </BarChart>
        </ResponsiveContainer>
      </ChartCard>

      {/* Timeline of Key Milestones */}
      <div className="mt-8">
        <h3 className="mb-4 text-xl font-semibold">Timeline of Key Milestones</h3>
        <div className="relative ml-3 border-l-2 border-gray-200">
          <div className="flex items-center mb-8">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">February 2023</time>
            <h3 className="ml-4 text-lg font-semibold text-gray-900">Launched Innovation Hub</h3>
          </div>
          <div className="flex items-center mb-8">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">April 2023</time>
            <h3 className="ml-4 text-lg font-semibold text-gray-900">Achieved 100% Placement</h3>
          </div>
          <div className="flex items-center mb-8">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">June 2023</time>
            <h3 className="ml-4 text-lg font-semibold text-gray-900">Hosted International Research Symposium</h3>
          </div>
        </div>
      </div>
    </div>
  )
}