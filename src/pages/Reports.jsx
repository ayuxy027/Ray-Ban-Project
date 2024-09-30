import ChartCard from '../components/dashboard/ChartCard'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const reportData = [
  { year: 2019, publications: 280, funding: 3200000, students: 9500 },
  { year: 2020, publications: 310, funding: 3500000, students: 9800 },
  { year: 2021, publications: 340, funding: 3800000, students: 10100 },
  { year: 2022, publications: 360, funding: 4000000, students: 10300 },
  { year: 2023, publications: 345, funding: 4200000, students: 10056 },
]

export default function Reports() {
  return (
    <div>
      <h2 className="mb-6 text-3xl font-bold text-gray-900">Annual Reports</h2>
      <ChartCard title="Key Metrics Over Time">
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={reportData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis yAxisId="left" />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip />
            <Legend />
            <Line yAxisId="left" type="monotone" dataKey="publications" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line yAxisId="right" type="monotone" dataKey="funding" stroke="#82ca9d" />
            <Line yAxisId="left" type="monotone" dataKey="students" stroke="#ffc658" />
          </LineChart>
        </ResponsiveContainer>
      </ChartCard>
    </div>
  )
}