import Card from '../common/Card'

export default function StatCard({ title, value, change }) {
  return (
    <Card>
      <div className="px-4 py-5 sm:p-6">
        <dt className="text-sm font-medium text-gray-500 truncate">{title}</dt>
        <dd className="mt-1 text-3xl font-semibold text-gray-900">{value}</dd>
        {change && (
          <dd className={`mt-2 text-sm ${change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
            {change >= 0 ? '↑' : '↓'} {Math.abs(change)}%
          </dd>
        )}
      </div>
    </Card>
  )
}